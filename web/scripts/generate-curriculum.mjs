#!/usr/bin/env node

import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export const EXPECTED_TOTALS = Object.freeze({
  patterns: 140,
  placements: 2_036,
  uniqueProblems: 1_197,
  representativePlacements: 1_315,
  reductionPlacements: 721,
});

const SCRIPT_DIRECTORY = dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = resolve(SCRIPT_DIRECTORY, "..");
const DEFAULT_SOURCE = resolve(WEB_ROOT, "../DSA_PATTERN_BIBLE.md");
const DEFAULT_OUTPUT = resolve(WEB_ROOT, "public/data/curriculum.json");
const DEFAULT_CATALOG_URL = "https://leetcode.com/api/problems/algorithms/";
const PATTERN_DIFFICULTIES = new Set([
  "Beginner",
  "Intermediate",
  "Advanced",
]);
const PROBLEM_DIFFICULTIES = new Set([
  "Easy",
  "Medium",
  "Hard",
  "Unrated",
]);
const API_DIFFICULTIES = new Map([
  [1, "Easy"],
  [2, "Medium"],
  [3, "Hard"],
]);
const ROLE_ORDER = new Map([
  ["representative", 0],
  ["reduction", 1],
]);

function sourceError(sourceName, patternNumber, message) {
  const context = patternNumber ? `, Pattern ${patternNumber}` : "";
  return new Error(`${sourceName}${context}: ${message}`);
}

function parseProblemLine(line, sourceName, patternNumber) {
  const match = line.match(
    /^- \[LeetCode\s+(\d+)\s+(?:—|–|-)\s+(.+)\]\((https:\/\/leetcode\.com\/problems\/([a-z0-9-]+)\/?)\)$/u,
  );

  if (!match) {
    if (line.startsWith("- [LeetCode")) {
      throw sourceError(
        sourceName,
        patternNumber,
        `malformed LeetCode entry: ${line}`,
      );
    }
    return null;
  }

  return {
    id: Number(match[1]),
    sourceTitle: match[2],
    sourceUrl: match[3].endsWith("/") ? match[3] : `${match[3]}/`,
    sourceSlug: match[4],
  };
}

function requiredString(value, field, sourceName, patternNumber) {
  if (typeof value !== "string" || value.trim() === "") {
    throw sourceError(sourceName, patternNumber, `missing ${field}`);
  }
  return value.trim();
}

function parsePattern(block, sourceName) {
  const lines = block.split("\n");
  const heading = lines[0].trim().match(/^# Pattern (\d+)$/);
  if (!heading) {
    throw sourceError(sourceName, null, `invalid pattern heading: ${lines[0]}`);
  }

  const number = Number(heading[1]);
  const pattern = {
    number,
    name: "",
    category: "",
    difficulty: "",
    keywords: [],
    coreIdeaParts: [],
    prerequisites: [],
    commonAlgorithms: [],
    relatedPatterns: [],
    representatives: [],
    reductions: [],
  };
  let section = null;
  let representativeDifficulty = null;

  for (const rawLine of lines.slice(1)) {
    const line = rawLine.trim();
    if (line === "") continue;

    const inlineField = line.match(/^(Pattern Name|Category|Difficulty):\s*(.+)$/);
    if (inlineField) {
      const fieldNames = {
        "Pattern Name": "name",
        Category: "category",
        Difficulty: "difficulty",
      };
      pattern[fieldNames[inlineField[1]]] = inlineField[2].trim();
      section = null;
      continue;
    }

    if (line === "Recognition Keywords:") {
      section = "keywords";
      continue;
    }
    if (line === "Core Idea:") {
      section = "coreIdea";
      continue;
    }
    if (line === "Prerequisites:") {
      section = "prerequisites";
      continue;
    }
    if (line === "Common Algorithms:") {
      section = "commonAlgorithms";
      continue;
    }
    if (/^Representative Problems \(Easy .+ Hard\)$/.test(line)) {
      section = "representatives";
      representativeDifficulty = null;
      continue;
    }
    if (line === "Reduction Problems" || line === "Reduction Problems:") {
      section = "reductions";
      representativeDifficulty = null;
      continue;
    }
    if (line === "Related Patterns" || line === "Related Patterns:") {
      section = "relatedPatterns";
      representativeDifficulty = null;
      continue;
    }
    if (
      section === "representatives" &&
      /^(Easy|Medium|Hard):$/.test(line)
    ) {
      representativeDifficulty = line.slice(0, -1);
      continue;
    }

    const problem = parseProblemLine(line, sourceName, number);
    if (problem) {
      if (section === "representatives") {
        if (!representativeDifficulty) {
          throw sourceError(
            sourceName,
            number,
            `representative problem ${problem.id} has no difficulty heading`,
          );
        }
        pattern.representatives.push({
          ...problem,
          sourceDifficulty: representativeDifficulty,
        });
        continue;
      }
      if (section === "reductions") {
        pattern.reductions.push(problem);
        continue;
      }
      throw sourceError(
        sourceName,
        number,
        `problem ${problem.id} appears outside a problem section`,
      );
    }

    if (line.startsWith("- ")) {
      const value = line.slice(2).trim();
      if (
        section === "keywords" ||
        section === "prerequisites" ||
        section === "commonAlgorithms" ||
        section === "relatedPatterns"
      ) {
        pattern[section].push(value);
        continue;
      }
      throw sourceError(
        sourceName,
        number,
        `list item appears in unsupported section: ${line}`,
      );
    }

    if (section === "coreIdea") {
      pattern.coreIdeaParts.push(line);
      continue;
    }

    throw sourceError(sourceName, number, `unexpected content: ${line}`);
  }

  pattern.name = requiredString(pattern.name, "Pattern Name", sourceName, number);
  pattern.category = requiredString(
    pattern.category,
    "Category",
    sourceName,
    number,
  );
  pattern.difficulty = requiredString(
    pattern.difficulty,
    "Difficulty",
    sourceName,
    number,
  );
  if (!PATTERN_DIFFICULTIES.has(pattern.difficulty)) {
    throw sourceError(
      sourceName,
      number,
      `invalid pattern difficulty ${JSON.stringify(pattern.difficulty)}`,
    );
  }
  if (pattern.keywords.length === 0) {
    throw sourceError(sourceName, number, "Recognition Keywords is empty");
  }
  if (pattern.coreIdeaParts.length === 0) {
    throw sourceError(sourceName, number, "Core Idea is empty");
  }
  if (pattern.prerequisites.length === 0) {
    throw sourceError(sourceName, number, "Prerequisites is empty");
  }
  if (pattern.commonAlgorithms.length === 0) {
    throw sourceError(sourceName, number, "Common Algorithms is empty");
  }
  if (pattern.representatives.length === 0) {
    throw sourceError(sourceName, number, "Representative Problems is empty");
  }
  if (pattern.relatedPatterns.length === 0) {
    throw sourceError(sourceName, number, "Related Patterns is empty");
  }

  const allProblemIds = [
    ...pattern.representatives.map(({ id }) => id),
    ...pattern.reductions.map(({ id }) => id),
  ];
  const duplicateIds = allProblemIds.filter(
    (id, index) => allProblemIds.indexOf(id) !== index,
  );
  if (duplicateIds.length > 0) {
    throw sourceError(
      sourceName,
      number,
      `duplicate problem memberships: ${[...new Set(duplicateIds)].join(", ")}`,
    );
  }

  return {
    number: pattern.number,
    name: pattern.name,
    category: pattern.category,
    difficulty: pattern.difficulty,
    keywords: pattern.keywords,
    coreIdea: pattern.coreIdeaParts.join(" "),
    prerequisites: pattern.prerequisites,
    commonAlgorithms: pattern.commonAlgorithms,
    relatedPatterns: pattern.relatedPatterns,
    representatives: pattern.representatives,
    reductions: pattern.reductions,
  };
}

export function parseCurriculumMarkdown(markdown, options = {}) {
  const sourceName = options.sourceName ?? "DSA_PATTERN_BIBLE.md";
  const normalized = markdown.replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n");
  const starts = [...normalized.matchAll(/^# Pattern \d+$/gm)].map(
    (match) => match.index,
  );

  if (starts.length === 0) {
    throw sourceError(sourceName, null, "no pattern headings found");
  }

  const patterns = starts.map((start, index) => {
    const end = starts[index + 1] ?? normalized.length;
    return parsePattern(normalized.slice(start, end).trimEnd(), sourceName);
  });

  for (const [index, pattern] of patterns.entries()) {
    const expectedNumber = index + 1;
    if (pattern.number !== expectedNumber) {
      throw sourceError(
        sourceName,
        pattern.number,
        `pattern numbering is not contiguous; expected Pattern ${expectedNumber}`,
      );
    }
  }

  return patterns;
}

export function parseLeetCodeCatalog(payload) {
  if (!payload || !Array.isArray(payload.stat_status_pairs)) {
    throw new Error("LeetCode catalog response has no stat_status_pairs array");
  }

  const catalog = new Map();
  for (const entry of payload.stat_status_pairs) {
    const stat = entry?.stat;
    const rawId = stat?.frontend_question_id;
    if (!/^\d+$/.test(String(rawId ?? ""))) continue;

    const id = Number(rawId);
    const title = stat?.question__title?.trim();
    const slug = stat?.question__title_slug?.trim();
    const difficulty = API_DIFFICULTIES.get(entry?.difficulty?.level);
    if (!title || !slug || !difficulty) {
      throw new Error(`LeetCode catalog entry ${id} is incomplete`);
    }

    const metadata = {
      id,
      title,
      url: `https://leetcode.com/problems/${slug}/`,
      difficulty,
    };
    const existing = catalog.get(id);
    if (existing) {
      assert.deepEqual(
        existing,
        metadata,
        `LeetCode catalog has conflicting entries for problem ${id}`,
      );
    } else {
      catalog.set(id, metadata);
    }
  }

  if (catalog.size === 0) {
    throw new Error("LeetCode catalog contains no numeric algorithm problems");
  }
  return catalog;
}

function isoTimestamp(value, label) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    throw new Error(`${label} is not a valid timestamp: ${value}`);
  }
  return date.toISOString();
}

export async function fetchLeetCodeCatalog(options = {}) {
  const url = options.url ?? DEFAULT_CATALOG_URL;
  const fetchImpl = options.fetchImpl ?? globalThis.fetch;
  const attempts = options.attempts ?? 3;
  let lastError;

  if (typeof fetchImpl !== "function") {
    throw new Error("This Node.js runtime does not provide fetch()");
  }

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetchImpl(url, {
        headers: {
          Accept: "application/json",
          "User-Agent": "DSA-Pattern-Bible-Catalog/1.0",
        },
        signal: AbortSignal.timeout(30_000),
      });
      if (!response.ok) {
        throw new Error(
          `LeetCode catalog request returned ${response.status} ${response.statusText}`,
        );
      }

      const payload = JSON.parse(await response.text());
      const responseDate = response.headers.get("date") ?? new Date().toISOString();
      return {
        catalog: parseLeetCodeCatalog(payload),
        generatedAt: isoTimestamp(responseDate, "LeetCode response date"),
      };
    } catch (error) {
      lastError = error;
      if (attempt < attempts) {
        await new Promise((resolveDelay) => setTimeout(resolveDelay, attempt * 500));
      }
    }
  }

  throw new Error(
    `Unable to refresh the LeetCode catalog after ${attempts} attempts: ${lastError?.message ?? lastError}`,
    { cause: lastError },
  );
}

function validateCatalogMetadata(metadata, problemId) {
  if (!metadata || metadata.id !== problemId) {
    throw new Error(`LeetCode catalog is missing problem ${problemId}`);
  }
  if (typeof metadata.title !== "string" || metadata.title.trim() === "") {
    throw new Error(`LeetCode catalog problem ${problemId} has no title`);
  }
  if (
    typeof metadata.url !== "string" ||
    !/^https:\/\/leetcode\.com\/problems\/[a-z0-9-]+\/$/.test(metadata.url)
  ) {
    throw new Error(`LeetCode catalog problem ${problemId} has an invalid URL`);
  }
  if (!PROBLEM_DIFFICULTIES.has(metadata.difficulty)) {
    throw new Error(
      `LeetCode catalog problem ${problemId} has invalid difficulty ${metadata.difficulty}`,
    );
  }
}

export function buildCurriculum(patternSources, catalog, options = {}) {
  const generatedAt = isoTimestamp(
    options.generatedAt ?? "1970-01-01T00:00:00.000Z",
    "generatedAt",
  );
  const membershipsByProblem = new Map();
  let representativePlacements = 0;
  let reductionPlacements = 0;

  const patterns = patternSources.map((source) => {
    const representativeIds = source.representatives.map(({ id }) => id);
    const reductionIds = source.reductions.map(({ id }) => id);
    representativePlacements += representativeIds.length;
    reductionPlacements += reductionIds.length;

    for (const [role, ids] of [
      ["representative", representativeIds],
      ["reduction", reductionIds],
    ]) {
      for (const id of ids) {
        validateCatalogMetadata(catalog.get(id), id);
        const memberships = membershipsByProblem.get(id) ?? [];
        memberships.push({ patternNumber: source.number, role });
        membershipsByProblem.set(id, memberships);
      }
    }

    return {
      number: source.number,
      name: source.name,
      category: source.category,
      difficulty: source.difficulty,
      keywords: source.keywords,
      coreIdea: source.coreIdea,
      prerequisites: source.prerequisites,
      commonAlgorithms: source.commonAlgorithms,
      relatedPatterns: source.relatedPatterns,
      problemIds: [...representativeIds, ...reductionIds],
      representativeIds,
      reductionIds,
    };
  });

  const problems = [...membershipsByProblem.entries()]
    .sort(([leftId], [rightId]) => leftId - rightId)
    .map(([id, memberships]) => {
      const metadata = catalog.get(id);
      memberships.sort(
        (left, right) =>
          left.patternNumber - right.patternNumber ||
          ROLE_ORDER.get(left.role) - ROLE_ORDER.get(right.role),
      );
      return {
        id,
        title: metadata.title,
        url: metadata.url,
        difficulty: metadata.difficulty,
        memberships,
      };
    });

  const curriculum = {
    generatedAt,
    stats: {
      patterns: patterns.length,
      placements: representativePlacements + reductionPlacements,
      uniqueProblems: problems.length,
      representativePlacements,
      reductionPlacements,
    },
    patterns,
    problems,
  };
  assertExpectedTotals(curriculum);
  return curriculum;
}

export function assertExpectedTotals(curriculum) {
  assert.deepEqual(
    curriculum.stats,
    EXPECTED_TOTALS,
    "curriculum totals do not match the DSA Pattern Bible contract",
  );

  assert.equal(curriculum.patterns.length, EXPECTED_TOTALS.patterns);
  assert.equal(curriculum.problems.length, EXPECTED_TOTALS.uniqueProblems);
  assert.deepEqual(
    curriculum.patterns.map(({ number }) => number),
    Array.from({ length: EXPECTED_TOTALS.patterns }, (_, index) => index + 1),
    "pattern numbers must be contiguous and deterministic",
  );

  const problemIds = curriculum.problems.map(({ id }) => id);
  assert.deepEqual(
    problemIds,
    [...problemIds].sort((left, right) => left - right),
    "problems must be sorted by numeric LeetCode ID",
  );
  assert.equal(new Set(problemIds).size, problemIds.length);

  const problemById = new Map(
    curriculum.problems.map((problem) => [problem.id, problem]),
  );
  let memberships = 0;
  for (const problem of curriculum.problems) {
    validateCatalogMetadata(problem, problem.id);
    memberships += problem.memberships.length;
  }
  assert.equal(memberships, EXPECTED_TOTALS.placements);

  for (const pattern of curriculum.patterns) {
    assert.deepEqual(pattern.problemIds, [
      ...pattern.representativeIds,
      ...pattern.reductionIds,
    ]);
    assert.equal(new Set(pattern.problemIds).size, pattern.problemIds.length);
    for (const id of pattern.problemIds) {
      assert.ok(problemById.has(id), `Pattern ${pattern.number} references ${id}`);
    }
  }
}

export function serializeCurriculum(curriculum) {
  return `${JSON.stringify(curriculum, null, 2)}\n`;
}

function catalogFromCommitted(curriculum) {
  return new Map(
    curriculum.problems.map(({ id, title, url, difficulty }) => [
      id,
      { id, title, url, difficulty },
    ]),
  );
}

export async function verifyCurriculumFile(options = {}) {
  const sourcePath = resolve(options.sourcePath ?? DEFAULT_SOURCE);
  const outputPath = resolve(options.outputPath ?? DEFAULT_OUTPUT);
  const [markdown, committedText] = await Promise.all([
    readFile(sourcePath, "utf8"),
    readFile(outputPath, "utf8"),
  ]);
  const committed = JSON.parse(committedText);
  assertExpectedTotals(committed);

  const sources = parseCurriculumMarkdown(markdown, { sourceName: sourcePath });
  const rebuilt = buildCurriculum(sources, catalogFromCommitted(committed), {
    generatedAt: committed.generatedAt,
  });
  const expectedText = serializeCurriculum(rebuilt);
  assert.equal(
    committedText,
    expectedText,
    `${outputPath} is stale or non-deterministic; run the generator with --refresh`,
  );
  return committed;
}

function parseArguments(argv) {
  const options = {
    mode: "verify",
    sourcePath: DEFAULT_SOURCE,
    outputPath: DEFAULT_OUTPUT,
    catalogUrl: DEFAULT_CATALOG_URL,
    generatedAt: null,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--refresh") {
      options.mode = "refresh";
    } else if (argument === "--verify") {
      options.mode = "verify";
    } else if (argument === "--source") {
      options.sourcePath = resolve(argv[++index] ?? "");
    } else if (argument === "--output") {
      options.outputPath = resolve(argv[++index] ?? "");
    } else if (argument === "--catalog-url") {
      options.catalogUrl = argv[++index] ?? "";
    } else if (argument === "--generated-at") {
      options.generatedAt = argv[++index] ?? "";
    } else if (argument === "--help" || argument === "-h") {
      options.mode = "help";
    } else {
      throw new Error(`Unknown argument: ${argument}`);
    }
  }
  return options;
}

function printHelp() {
  process.stdout.write(`Usage: node scripts/generate-curriculum.mjs [mode] [options]\n\nModes:\n  --verify             Verify committed JSON offline (default)\n  --refresh            Fetch the current LeetCode catalog and write JSON\n\nOptions:\n  --source <path>      Markdown source (default: ../DSA_PATTERN_BIBLE.md)\n  --output <path>      JSON output (default: public/data/curriculum.json)\n  --catalog-url <url>  Override the LeetCode algorithms catalog endpoint\n  --generated-at <iso> Override generatedAt for reproducible refreshes\n`);
}

async function main() {
  const options = parseArguments(process.argv.slice(2));
  if (options.mode === "help") {
    printHelp();
    return;
  }

  if (options.mode === "verify") {
    const curriculum = await verifyCurriculumFile(options);
    process.stdout.write(
      `Verified ${curriculum.stats.patterns} patterns, ${curriculum.stats.placements} placements, and ${curriculum.stats.uniqueProblems} unique problems.\n`,
    );
    return;
  }

  const markdown = await readFile(options.sourcePath, "utf8");
  const sources = parseCurriculumMarkdown(markdown, {
    sourceName: options.sourcePath,
  });
  const live = await fetchLeetCodeCatalog({ url: options.catalogUrl });
  const curriculum = buildCurriculum(sources, live.catalog, {
    generatedAt: options.generatedAt ?? live.generatedAt,
  });
  await mkdir(dirname(options.outputPath), { recursive: true });
  await writeFile(options.outputPath, serializeCurriculum(curriculum), "utf8");
  process.stdout.write(
    `Wrote ${curriculum.stats.patterns} patterns, ${curriculum.stats.placements} placements, and ${curriculum.stats.uniqueProblems} unique problems to ${options.outputPath}.\n`,
  );
}

const invokedPath = process.argv[1] ? pathToFileURL(resolve(process.argv[1])).href : "";
if (invokedPath === import.meta.url) {
  main().catch((error) => {
    process.stderr.write(`${error.stack ?? error}\n`);
    process.exitCode = 1;
  });
}
