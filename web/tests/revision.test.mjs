import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";
const source = await readFile(new URL("../lib/progress.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { createProgress, needsRevision, toggleRevision, applyStatus, isSolved, buildBackup, parseBackup, DEFAULT_SETTINGS } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`);

test("revision marker is independent of completion and survives status changes", () => {
  const initial = createProgress(3);
  assert.equal(needsRevision(initial), false);
  const marked = toggleRevision(initial);
  assert.ok(needsRevision(marked));
  assert.equal(isSolved(marked), false);
  const completed = applyStatus(marked, "solved");
  assert.ok(needsRevision(completed));
  const cleared = toggleRevision(completed);
  assert.equal(needsRevision(cleared), false);
  assert.ok(isSolved(cleared));
  assert.equal(cleared.solvedAt, completed.solvedAt);
});

test("backups preserve revision markers and support old records", () => {
  const record = toggleRevision(createProgress(76));
  const restored = parseBackup(JSON.parse(JSON.stringify(buildBackup({76:record}, DEFAULT_SETTINGS))));
  assert.ok(needsRevision(restored.progress[76]));
  const legacy = createProgress(3, { status: "review", notes: "keep me" });
  const cleared = toggleRevision(legacy);
  assert.equal(needsRevision(cleared), false);
  assert.ok(isSolved(cleared));
  assert.equal(cleared.notes, "keep me");
  assert.equal(needsRevision(undefined), false);
});
