import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";
const source = await readFile(new URL("../lib/sliding-window-study.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { uniqueWindowSteps, LONGEST_TEMPLATE, MINIMUM_TEMPLATE } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`);

test("walkthrough states match actual window contents, preserve snapshots, and find the answer", () => {
  for (const [input, expected] of [["abba", 2], ["abcabcbb", 3], ["pwwkew", 3], ["aaaa", 1], ["", 0]]) {
    const steps = uniqueWindowSteps(input);
    assert.equal(steps.at(-1).best, expected);
    assert.deepEqual(steps[0].counts, {});
    let previousLeft = 0, previousBest = 0;
    for (const step of steps) {
      const counts = {};
      for (const char of input.slice(step.left, step.right + 1)) counts[char] = (counts[char] ?? 0) + 1;
      assert.deepEqual(Object.fromEntries(Object.entries(step.counts).filter(([, value]) => value > 0)), counts);
      assert.equal(step.valid, Object.values(counts).every((count) => count <= 1));
      assert.ok(step.left >= previousLeft);
      assert.ok(step.best >= previousBest);
      previousLeft = step.left; previousBest = step.best;
    }
  }
});

test("Python templates return correct answers for repeats, empty inputs, and missing coverage", async () => {
  const { execFileSync } = await import("node:child_process");
  const checks = `\nassert longest_unique('abba') == 2\nassert longest_unique('abcabcbb') == 3\nassert longest_unique('') == 0\nassert minimum_window('ADOBECODEBANC', 'ABC') == 'BANC'\nassert minimum_window('a', 'aa') == ''\nassert minimum_window('aa', 'aa') == 'aa'\nassert minimum_window('abc', '') == ''\n`;
  execFileSync("python", ["-c", LONGEST_TEMPLATE + "\n" + MINIMUM_TEMPLATE + checks], { encoding: "utf8" });
});
