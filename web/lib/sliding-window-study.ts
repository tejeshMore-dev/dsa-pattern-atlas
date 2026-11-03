export const WINDOW_IDEA = "Keep a consecutive section of the input. Extend its right end, then move its left end until the rule is satisfied again.";
export const WINDOW_CUES = ["Longest or shortest consecutive section", "A rule based on counts, sum, or distinct values", "Removing items from the left can restore the rule"];

export const LONGEST_TEMPLATE = `def longest_unique(s: str) -> int:
    counts = {}
    left = best = 0
    for right, char in enumerate(s):
        counts[char] = counts.get(char, 0) + 1
        while counts[char] > 1:
            counts[s[left]] -= 1
            left += 1
        best = max(best, right - left + 1)
    return best`;

export const MINIMUM_TEMPLATE = `from collections import Counter

def minimum_window(s: str, t: str) -> str:
    if not t:
        return ""
    need = Counter(t)
    missing = len(t)
    left = start = 0
    best = len(s) + 1
    for right, char in enumerate(s):
        if need[char] > 0:
            missing -= 1
        need[char] -= 1
        while missing == 0:
            if right - left + 1 < best:
                start, best = left, right - left + 1
            need[s[left]] += 1
            if need[s[left]] > 0:
                missing += 1
            left += 1
    return "" if best > len(s) else s[start:start + best]`;

export type WindowStep = {
  left: number; right: number; best: number; counts: Record<string, number>;
  action: string; line: number; valid: boolean;
};

export function uniqueWindowSteps(input: string): WindowStep[] {
  const steps: WindowStep[] = [];
  const counts: Record<string, number> = {};
  let left = 0, best = 0;
  const save = (right: number, action: string, line: number) => steps.push({
    left, right, best, counts: { ...counts }, action, line,
    valid: Object.values(counts).every((count) => count <= 1),
  });
  save(-1, "Start with an empty window. Both boundaries move only to the right.", 3);
  for (let right = 0; right < input.length; right++) {
    const char = input[right];
    counts[char] = (counts[char] ?? 0) + 1;
    save(right, `Include '${char}' at index ${right}. ${counts[char] > 1 ? "It is now repeated: shrink before recording an answer." : "No duplicates in the window."}`, 5);
    while (counts[char] > 1) {
      const removed = input[left];
      counts[removed] -= 1;
      left++;
      save(right, `Remove '${removed}' from the left. Left moves to ${left}. ${counts[char] > 1 ? "The duplicate remains; shrink again." : "The window is valid again."}`, 8);
    }
    best = Math.max(best, right - left + 1);
    save(right, `Record this valid window of length ${right - left + 1}. Best length so far: ${best}.`, 9);
  }
  save(input.length - 1, `Finished. The longest substring without repeated characters has length ${best}.`, 10);
  return steps;
}

// Targets apply to the stated approach. Space excludes returned output.
export const WINDOW_TARGETS: Record<number, { time: string; space: string; note: string }> = {
  3: { time: "O(n)", space: "O(min(n, Σ))", note: "Character counts; Σ is the alphabet size. Expected constant-time dictionary operations." },
  209: { time: "O(n)", space: "O(1)", note: "Running sum with positive numbers. Negative values break the shrink rule." },
  424: { time: "O(n)", space: "O(1)", note: "26 uppercase letters; track the largest frequency seen and allowed replacements." },
  76: { time: "O(n + m)", space: "O(Σ)", note: "n = source length, m = target length. Count required characters, including duplicates; Σ = distinct characters stored." },
  713: { time: "O(n)", space: "O(1)", note: "Positive integers, rolling product, and constant-time arithmetic. Return 0 when k ≤ 1." },
  904: { time: "O(n)", space: "O(1)", note: "At most two fruit types in the valid window; the count map has at most three while shrinking." },
  1004: { time: "O(n)", space: "O(1)", note: "Count zeroes; shrink while the zero count exceeds k." },
  1208: { time: "O(n)", space: "O(1)", note: "Nonnegative character-conversion costs and a running budget." },
  1358: { time: "O(n)", space: "O(1)", note: "Fixed three-character alphabet. Count valid starting positions or track last occurrences." },
  1493: { time: "O(n)", space: "O(1)", note: "Allow one zero and subtract one from window length because deletion is mandatory." },
  992: { time: "O(n)", space: "O(d)", note: "exactly(k) = atMost(k) − atMost(k−1); d = distinct input values. Expected dictionary operations." },
  2302: { time: "O(n)", space: "O(1)", note: "Positive values make sum × length monotonic as the window expands. Constant-time arithmetic model." },
  3090: { time: "O(n)", space: "O(1)", note: "Fixed lowercase alphabet; shrink while the newly added character occurs more than twice." },
};
