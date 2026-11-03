import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import test from "node:test";
import ts from "typescript";
const source = await readFile(new URL("../lib/study-lessons.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { STUDY_LESSONS, pairFrames, searchFrames, fixedFrames } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`);

test("each Batch 1 lesson has runnable Python, guidance, variations, and complete visual states", () => {
  const expected = [9,12,13,14,18,19,20,21,22,23,25,32,33,34,35,36];
  assert.deepEqual(Object.keys(STUDY_LESSONS).map(Number), expected);
  for (const [id, lesson] of Object.entries(STUDY_LESSONS)) {
    assert.ok(lesson.idea && lesson.warning && lesson.complexity && lesson.source, id);
    assert.ok(lesson.cues.length >= 3 && lesson.variations.length >= 3, id);
    assert.ok(lesson.frames.length >= 2, id);
    for (const frame of lesson.frames) {
      assert.ok(frame.explanation && frame.state, id);
      assert.ok(Object.keys(frame.marks).every((index) => Number(index) >= 0 && Number(index) < frame.values.length), id);
    }
    execFileSync("python", ["-c", lesson.code + "\n" + lesson.checks], { encoding: "utf8" });
  }
});

test("generated searches handle success, failure, duplicates, and an end boundary", () => {
  assert.match(pairFrames([2,3,4],6).at(-1).explanation, /Found/);
  assert.equal(pairFrames([1,2],8).at(-1).state, "No pair");
  assert.match(searchFrames([1,2,2,2,4],2,"lower").at(-1).state, /1/);
  assert.match(searchFrames([1,2,2,2,4],2,"upper").at(-1).state, /4/);
  assert.match(searchFrames([1,2],9,"lower").at(-1).state, /2/);
  assert.match(searchFrames([],2,"exact").at(-1).explanation, /No target/);
  assert.match(fixedFrames([-5,-2,-3],2).at(-1).state, /best = -5/);
});

test("Python templates match brute force over deterministic small cases", () => {
  const code = Object.values(STUDY_LESSONS).map((lesson) => lesson.code).join("\n\n");
  execFileSync("python", ["-c", code + `
import random
from bisect import bisect_left, bisect_right
assert two_sum_unsorted([3,3],6) == [0,1]
assert two_sum_unsorted([2,7,11,15],9) == [0,1]
assert two_sum_unsorted([],0) == []
random.seed(42)
for _ in range(100):
    a = [random.randint(-3, 3) for _ in range(random.randint(1, 9))]
    ordered = sorted(a)
    target = random.randint(-5, 5)
    assert lower_bound(ordered, target) == bisect_left(ordered, target)
    assert upper_bound(ordered, target) == bisect_right(ordered, target)
    found = binary_search(ordered, target)
    assert (found == -1) == (target not in ordered)
    if found != -1: assert ordered[found] == target
    pairs = two_sum_sorted(ordered, target)
    exists = any(ordered[i]+ordered[j] == target for i in range(len(a)) for j in range(i+1,len(a)))
    assert bool(pairs) == exists
    if pairs: assert ordered[pairs[0]-1]+ordered[pairs[1]-1] == target
    k = random.randint(1, len(a))
    assert max_window_sum(a,k) == max(sum(a[i:i+k]) for i in range(len(a)-k+1))
    assert window_max(a,k) == [max(a[i:i+k]) for i in range(len(a)-k+1)]
    assert count_sum(a,target) == sum(sum(a[i:j]) == target for i in range(len(a)) for j in range(i+1,len(a)+1))
    text = ''.join(random.choice('abc') for _ in a)
    result = longest_palindrome(text)
    best = max(len(text[i:j]) for i in range(len(text)) for j in range(i+1,len(text)+1) if text[i:j] == text[i:j][::-1])
    assert result == result[::-1] and len(result) == best
`], { encoding: "utf8" });
});
