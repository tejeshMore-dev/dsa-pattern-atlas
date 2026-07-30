import {
  createProgress,
  DEFAULT_SETTINGS,
  LOCAL_PROGRESS_KEY,
  LOCAL_SETTINGS_KEY,
  mergeProgress,
} from "./progress";
import type { ProgressMap, ProgressRecord, TrackerSettings } from "./types";

export const LOCAL_DATABASE_NAME = "dsa-pattern-atlas";

const DATABASE_VERSION = 1;
const PROGRESS_STORE = "progress";
const SETTINGS_STORE = "settings";
const META_STORE = "meta";
const SETTINGS_KEY = "current";
const LEGACY_MIGRATION_KEY = "local-storage-v1-migrated";

let databasePromise: Promise<IDBDatabase> | null = null;
let initializationPromise: Promise<IDBDatabase> | null = null;

function requestResult<T>(request: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () =>
      reject(request.error ?? new Error("The local database request failed."));
  });
}

function transactionComplete(transaction: IDBTransaction): Promise<void> {
  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onerror = () =>
      reject(transaction.error ?? new Error("The local database transaction failed."));
    transaction.onabort = () =>
      reject(transaction.error ?? new Error("The local database transaction was cancelled."));
  });
}

function openDatabase(): Promise<IDBDatabase> {
  if (typeof indexedDB === "undefined") {
    return Promise.reject(new Error("This browser does not support IndexedDB."));
  }

  if (!databasePromise) {
    databasePromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(LOCAL_DATABASE_NAME, DATABASE_VERSION);
      let blocked = false;

      request.onupgradeneeded = () => {
        const database = request.result;
        if (!database.objectStoreNames.contains(PROGRESS_STORE)) {
          database.createObjectStore(PROGRESS_STORE, { keyPath: "problemId" });
        }
        if (!database.objectStoreNames.contains(SETTINGS_STORE)) {
          database.createObjectStore(SETTINGS_STORE);
        }
        if (!database.objectStoreNames.contains(META_STORE)) {
          database.createObjectStore(META_STORE);
        }
      };

      request.onsuccess = () => {
        const database = request.result;
        if (blocked) {
          database.close();
          return;
        }
        database.onversionchange = () => {
          databasePromise = null;
          initializationPromise = null;
          database.close();
        };
        resolve(database);
      };
      request.onerror = () => {
        databasePromise = null;
        reject(request.error ?? new Error("Pattern Atlas could not open its local database."));
      };
      request.onblocked = () => {
        blocked = true;
        databasePromise = null;
        reject(
          new Error(
            "The local database is blocked by another open tab. Close other Pattern Atlas tabs and reload.",
          ),
        );
      };
    });
  }

  return databasePromise;
}

function normalizeRecords(records: unknown[]): ProgressMap {
  const progress: ProgressMap = {};
  for (const raw of records) {
    if (!raw || typeof raw !== "object") continue;
    const record = raw as Partial<ProgressRecord>;
    if (!Number.isInteger(record.problemId) || Number(record.problemId) <= 0) continue;
    const problemId = Number(record.problemId);
    progress[problemId] = createProgress(problemId, record);
  }
  return progress;
}

function readLegacyProgress(): ProgressMap {
  try {
    const raw = JSON.parse(window.localStorage.getItem(LOCAL_PROGRESS_KEY) ?? "{}");
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
    return normalizeRecords(
      Object.entries(raw).map(([problemId, record]) => ({
        ...(record as object),
        problemId: Number(problemId),
      })),
    );
  } catch {
    return {};
  }
}

function readLegacySettings(): TrackerSettings | null {
  try {
    const value = window.localStorage.getItem(LOCAL_SETTINGS_KEY);
    if (!value) return null;
    return { ...DEFAULT_SETTINGS, ...(JSON.parse(value) as Partial<TrackerSettings>) };
  } catch {
    return null;
  }
}

async function migrateLegacyLocalStorage(database: IDBDatabase): Promise<void> {
  const migration = database.transaction(
    [PROGRESS_STORE, SETTINGS_STORE, META_STORE],
    "readwrite",
  );
  const migrationDone = transactionComplete(migration);
  const [migrationComplete, existingRecords, existingSettings] = await Promise.all([
    requestResult(
      migration.objectStore(META_STORE).get(LEGACY_MIGRATION_KEY) as IDBRequest<
        boolean | undefined
      >,
    ),
    requestResult(
      migration.objectStore(PROGRESS_STORE).getAll() as IDBRequest<unknown[]>,
    ),
    requestResult(
      migration.objectStore(SETTINGS_STORE).get(SETTINGS_KEY) as IDBRequest<
        TrackerSettings | undefined
      >,
    ),
  ]);

  if (!migrationComplete) {
    const legacyProgress = readLegacyProgress();
    const existingProgress = normalizeRecords(existingRecords);
    const mergedProgress = mergeProgress(legacyProgress, existingProgress);
    const settings = existingSettings ?? readLegacySettings() ?? DEFAULT_SETTINGS;

    const progressStore = migration.objectStore(PROGRESS_STORE);
    progressStore.clear();
    for (const record of Object.values(mergedProgress)) progressStore.put(record);
    migration.objectStore(SETTINGS_STORE).put(settings, SETTINGS_KEY);
    migration.objectStore(META_STORE).put(true, LEGACY_MIGRATION_KEY);
  }
  await migrationDone;

  if (!migrationComplete) {
    try {
      window.localStorage.removeItem(LOCAL_PROGRESS_KEY);
      window.localStorage.removeItem(LOCAL_SETTINGS_KEY);
    } catch {
      // IndexedDB is authoritative after the migration marker is committed.
    }
  }
}

function initializedDatabase(): Promise<IDBDatabase> {
  if (!initializationPromise) {
    initializationPromise = openDatabase()
      .then(async (database) => {
        await migrateLegacyLocalStorage(database);
        return database;
      })
      .catch((error: unknown) => {
        initializationPromise = null;
        throw error;
      });
  }
  return initializationPromise;
}

export async function loadLocalData(): Promise<{
  progress: ProgressMap;
  settings: TrackerSettings;
}> {
  const database = await initializedDatabase();

  const transaction = database.transaction([PROGRESS_STORE, SETTINGS_STORE], "readonly");
  const transactionDone = transactionComplete(transaction);
  const [records, storedSettings] = await Promise.all([
    requestResult(
      transaction.objectStore(PROGRESS_STORE).getAll() as IDBRequest<unknown[]>,
    ),
    requestResult(
      transaction.objectStore(SETTINGS_STORE).get(SETTINGS_KEY) as IDBRequest<
        TrackerSettings | undefined
      >,
    ),
  ]);
  await transactionDone;

  return {
    progress: normalizeRecords(records),
    settings: { ...DEFAULT_SETTINGS, ...(storedSettings ?? {}) },
  };
}

export async function saveLocalProgressSnapshot(progress: ProgressMap): Promise<void> {
  const database = await initializedDatabase();
  const transaction = database.transaction(PROGRESS_STORE, "readwrite");
  const transactionDone = transactionComplete(transaction);
  const store = transaction.objectStore(PROGRESS_STORE);
  store.clear();
  for (const record of Object.values(progress)) store.put(record);
  await transactionDone;
}

export async function saveLocalProgressRecord(record: ProgressRecord): Promise<void> {
  const database = await initializedDatabase();
  const transaction = database.transaction(PROGRESS_STORE, "readwrite");
  const transactionDone = transactionComplete(transaction);
  transaction.objectStore(PROGRESS_STORE).put(record);
  await transactionDone;
}

export async function saveLocalSettings(settings: TrackerSettings): Promise<void> {
  const database = await initializedDatabase();
  const transaction = database.transaction(SETTINGS_STORE, "readwrite");
  const transactionDone = transactionComplete(transaction);
  transaction.objectStore(SETTINGS_STORE).put(settings, SETTINGS_KEY);
  await transactionDone;
}
