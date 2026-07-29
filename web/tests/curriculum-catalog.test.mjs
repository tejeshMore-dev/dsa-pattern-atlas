import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { fileURLToPath } from "node:url";

import {
  EXPECTED_TOTALS,
  assertExpectedTotals,
  parseCurriculumMarkdown,
  parseLeetCodeCatalog,
  serializeCurriculum,
  verifyCurriculumFile,
} from "../scripts/generate-curriculum.mjs";

const sourceUrl = new URL("../../DSA_PATTERN_BIBLE.md", import.meta.url);
const curriculumUrl = new URL(
  "../public/data/curriculum.json",
  import.meta.url,
);
const [sourceText, curriculumText] = await Promise.all([
  readFile(sourceUrl, "utf8"),
  readFile(curriculumUrl, "utf8"),
]);
const sourcePatterns = parseCurriculumMarkdown(sourceText, {
  sourceName: sourceUrl.pathname,
});
const curriculum = JSON.parse(curriculumText);

test("parses every Bible pattern and placement without losing source order", () => {
  const representativePlacements = sourcePatterns.reduce(
    (total, pattern) => total + pattern.representatives.length,
    0,
  );
  const reductionPlacements = sourcePatterns.reduce(
    (total, pattern) => total + pattern.reductions.length,
    0,
  );
  const uniqueProblems = new Set(
    sourcePatterns.flatMap((pattern) => [
      ...pattern.representatives.map(({ id }) => id),
      ...pattern.reductions.map(({ id }) => id),
    ]),
  );

  assert.equal(sourcePatterns.length, EXPECTED_TOTALS.patterns);
  assert.equal(
    representativePlacements,
    EXPECTED_TOTALS.representativePlacements,
  );
  assert.equal(reductionPlacements, EXPECTED_TOTALS.reductionPlacements);
  assert.equal(
    representativePlacements + reductionPlacements,
    EXPECTED_TOTALS.placements,
  );
  assert.equal(uniqueProblems.size, EXPECTED_TOTALS.uniqueProblems);
  assert.deepEqual(
    sourcePatterns.map(({ number }) => number),
    Array.from({ length: EXPECTED_TOTALS.patterns }, (_, index) => index + 1),
  );

  assert.equal(sourcePatterns[0].name, "Problem Classification");
  assert.deepEqual(
    sourcePatterns[0].representatives.slice(0, 3).map(({ id }) => id),
    [1, 20, 121],
  );
});

test("committed curriculum has deterministic client-facing relationships", () => {
  assertExpectedTotals(curriculum);
  assert.equal(curriculumText, serializeCurriculum(curriculum));
  assert.deepEqual(Object.keys(curriculum), [
    "generatedAt",
    "stats",
    "patterns",
    "problems",
  ]);

  const patternByNumber = new Map(
    curriculum.patterns.map((pattern) => [pattern.number, pattern]),
  );
  for (const problem of curriculum.problems) {
    assert.match(
      problem.url,
      /^https:\/\/leetcode\.com\/problems\/[a-z0-9-]+\/$/,
    );
    assert.ok(["Easy", "Medium", "Hard", "Unrated"].includes(problem.difficulty));

    const membershipKeys = new Set();
    for (const membership of problem.memberships) {
      const key = `${membership.patternNumber}:${membership.role}`;
      assert.ok(!membershipKeys.has(key), `duplicate membership ${problem.id}:${key}`);
      membershipKeys.add(key);

      const pattern = patternByNumber.get(membership.patternNumber);
      assert.ok(pattern, `missing Pattern ${membership.patternNumber}`);
      const roleIds =
        membership.role === "representative"
          ? pattern.representativeIds
          : pattern.reductionIds;
      assert.ok(
        roleIds.includes(problem.id),
        `Problem ${problem.id} is not reciprocal in Pattern ${pattern.number}`,
      );
    }
  }
});

test("offline verification reconstructs committed output without LeetCode", async () => {
  const verified = await verifyCurriculumFile({
    sourcePath: fileURLToPath(sourceUrl),
    outputPath: fileURLToPath(curriculumUrl),
  });
  assert.deepEqual(verified.stats, EXPECTED_TOTALS);
});

test("LeetCode API parser ignores non-numeric catalog families", () => {
  const catalog = parseLeetCodeCatalog({
    stat_status_pairs: [
      {
        stat: {
          frontend_question_id: "1",
          question__title: "Two Sum",
          question__title_slug: "two-sum",
        },
        difficulty: { level: 1 },
      },
      {
        stat: {
          frontend_question_id: "LCP 01",
          question__title: "Guess Numbers",
          question__title_slug: "guess-numbers",
        },
        difficulty: { level: 1 },
      },
    ],
  });

  assert.deepEqual([...catalog.values()], [
    {
      id: 1,
      title: "Two Sum",
      url: "https://leetcode.com/problems/two-sum/",
      difficulty: "Easy",
    },
  ]);
});

test("parser rejects duplicate roles inside a pattern", () => {
  const duplicate = sourceText.replace(
    "- [LeetCode 128 — Longest Consecutive Sequence]",
    "- [LeetCode 1 — Longest Consecutive Sequence]",
  );
  assert.throws(
    () => parseCurriculumMarkdown(duplicate),
    /Pattern 1: duplicate problem memberships: 1/,
  );
});
