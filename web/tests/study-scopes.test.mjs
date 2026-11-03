import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

const source = await readFile(new URL("../lib/study-scopes.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { buildStudyPatterns, ESSENTIAL_IDS, INTERVIEW_EXTRA_IDS } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`);
const catalog = JSON.parse(await readFile(new URL("../public/data/curriculum.json", import.meta.url), "utf8"));

test("curated questions exist and each scope displays every selected question exactly once", () => {
  for (const id of [...ESSENTIAL_IDS, ...INTERVIEW_EXTRA_IDS]) {
    assert.ok(catalog.problems.some((problem) => problem.id === id), `Missing LC ${id}`);
  }
  for (const scope of ["essentials", "interview", "full"]) {
    const rows = buildStudyPatterns(catalog, scope);
    assert.ok(rows.every(({ ids }) => ids.length > 0), "Never show empty pattern sections");
    const ids = rows.flatMap(({ ids }) => ids);
    assert.equal(ids.length, new Set(ids).size);
    const expected = scope === "full" ? catalog.problems.map(({ id }) => id)
      : scope === "essentials" ? ESSENTIAL_IDS : [...ESSENTIAL_IDS, ...INTERVIEW_EXTRA_IDS];
    assert.deepEqual(new Set(ids), new Set(expected));
    assert.deepEqual(rows.map(({ pattern }) => pattern.number), rows.map(({ pattern }) => pattern.number).sort((a, b) => a - b));
    for (const { pattern, ids } of rows) {
      assert.ok(ids.every((id) => pattern.problemIds.includes(id)));
    }
  }
});

test("a question belongs to the same pattern as the scope expands", () => {
  const fullOwners = new Map(buildStudyPatterns(catalog, "full").flatMap(({ pattern, ids }) => ids.map((id) => [id, pattern.number])));
  for (const scope of ["essentials", "interview"]) {
    for (const { pattern, ids } of buildStudyPatterns(catalog, scope)) {
      for (const id of ids) assert.equal(fullOwners.get(id), pattern.number);
    }
  }
});
