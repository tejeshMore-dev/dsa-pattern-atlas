export interface StudyFrame {
  values: (number | string)[];
  marks: Record<number, string>;
  state: string;
  explanation: string;
}
export interface StudyLesson {
  title: string; idea: string; cues: string[]; warning: string;
  code: string; complexity: string; variations: string[];
  example: string; frames: StudyFrame[]; checks: string;
  source: string;
}
const frame = (values: (number | string)[], marks: Record<number, string>, state: string, explanation: string): StudyFrame => ({ values: [...values], marks: { ...marks }, state, explanation });

export function pairFrames(a: number[], target: number) {
  const frames: StudyFrame[] = [];
  let l = 0, r = a.length - 1;
  while (l < r) {
    const sum = a[l] + a[r];
    frames.push(frame(a, { [l]: "L", [r]: "R" }, `sum = ${sum}; target = ${target}`, sum === target ? "Found the pair. Return its 1-based indices." : sum < target ? "Too small. Increasing the left value is the only useful move in this sorted array." : "Too large. Decrease the right value."));
    if (sum === target) return frames;
    if (sum < target) l++; else r--;
  }
  frames.push(frame(a, {}, "No pair", "The pointers have met. No two distinct positions remain."));
  return frames;
}

export function searchFrames(a: number[], target: number, mode: "exact" | "lower" | "upper") {
  const frames: StudyFrame[] = [frame(a, {}, `low = 0; high = ${a.length}; target = ${target}`, "Start with the entire half-open interval [low, high). high is excluded.")];
  let lo = 0, hi = a.length;
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    const moveRight = mode === "upper" ? a[mid] <= target : a[mid] < target;
    const marks: Record<number, string> = { [lo]: "lo" };
    if (hi < a.length) marks[hi] = "hi (excluded)";
    marks[mid] = marks[mid] ? `${marks[mid]} / mid` : "mid";
    frames.push(frame(a, marks, `[lo, hi) = [${lo}, ${hi}); target = ${target}`, mode === "exact" && a[mid] === target ? "Found the target at mid." : moveRight ? "This value is too small for the requested boundary. Discard mid and everything before it." : "Keep mid as a possible boundary and discard everything after it."));
    if (mode === "exact" && a[mid] === target) return frames;
    if (moveRight) lo = mid + 1; else hi = mid;
  }
  frames.push(frame(a, lo < a.length ? { [lo]: "boundary" } : {}, `lo = hi = ${lo}`, mode === "exact" ? "No target found. Return -1." : `The boundary is index ${lo}${lo === a.length ? ", just after the last element" : ""}.`));
  return frames;
}

export function fixedFrames(a: number[], k: number) {
  const frames: StudyFrame[] = [];
  let sum = 0, best = -Infinity;
  for (let r = 0; r < a.length; r++) {
    sum += a[r];
    if (r >= k) sum -= a[r - k];
    if (r >= k - 1) best = Math.max(best, sum);
    frames.push(frame(a, { [Math.max(0, r - k + 1)]: "L", [r]: "R" }, `sum = ${sum}; best = ${best === -Infinity ? "not ready" : best}`, r < k - 1 ? "Build the first full window before recording an answer." : `Window size is ${k}. Add the arriving value and, after the first window, remove the departing value.`));
  }
  return frames;
}

const source = "https://docs.python.org/3/library/collections.html";
const binarySource = "https://docs.python.org/3/library/bisect.html";
const prefixValues = [2, -1, 3];
const prefixFrames = [frame(prefixValues, {}, "prefix = [0]", "Start with a zero: the sum of no values."), ...prefixValues.map((_, i) => frame(prefixValues, { [i]: "read" }, `prefix = [${[0, ...prefixValues.slice(0, i + 1).map((_, j) => prefixValues.slice(0, j + 1).reduce((x, y) => x + y, 0))].join(", ")}]`, "Append the previous total plus this value.")), frame(prefixValues, { 1: "L", 2: "R" }, "sum [1, 2] = prefix[3] − prefix[1] = 4 − 2 = 2", "Subtract the part before the requested range.")];

export const STUDY_LESSONS: Record<number, StudyLesson> = {
  9: {
    title: "Frequency counting", idea: "Count each value once, then answer questions using those counts instead of searching the input again.", cues: ["How often does each value appear?", "Duplicates or anagrams", "Need to compare two collections"], warning: "A dictionary uses extra memory. Fixed-alphabet arrays are useful only when the allowed values are known.",
    code: `def frequencies(items):
    counts = {}
    for item in items:
        counts[item] = counts.get(item, 0) + 1
    return counts

def two_sum_unsorted(nums, target):
    seen = {}
    for index, value in enumerate(nums):
        complement = target - value
        if complement in seen:
            return [seen[complement], index]
        seen[value] = index
    return []`, complexity: "Counting: O(n) expected time, O(d) extra space; d is the number of distinct values. Pair lookup: O(n) expected time and O(n) space, returning 0-based indices. Dictionary operations are expected O(1).",
    variations: ["Duplicates: a set is enough when you only need presence.", "Anagrams: compare counts; for grouping, use a fixed-alphabet count tuple or a sorted-string key.", "Pair lookup: check target − value in a dictionary of earlier values before inserting the current value."],
    example: "Count the letters in abac", frames: [frame(["a", "b", "a", "c"], {}, "counts = {}", "Start with an empty dictionary."), ...["a: 1", "a: 1, b: 1", "a: 2, b: 1", "a: 2, b: 1, c: 1"].map((state, i) => frame(["a", "b", "a", "c"], { [i]: "read" }, state, "Increase this letter's count by one."))], checks: "assert frequencies('abac') == {'a': 2, 'b': 1, 'c': 1}\nassert frequencies([]) == {}", source,
  },
  12: {
    title: "Prefix sums", idea: "Save the total before each position. A range sum is the total up to its end minus the total before its start.", cues: ["Many sum queries on unchanged input", "Count subarrays with a given sum", "Negative numbers rule out a simple sum window"], warning: "Use prefix[r + 1] − prefix[l] for inclusive [l, r]. Prefix storage alone does not make updates fast.",
    code: `def prefix_sums(nums):
    prefix = [0]
    for value in nums:
        prefix.append(prefix[-1] + value)
    return prefix

def count_sum(nums, target):
    seen = {0: 1}
    total = answer = 0
    for value in nums:
        total += value
        answer += seen.get(total - target, 0)
        seen[total] = seen.get(total, 0) + 1
    return answer`, complexity: "Build: O(n) time and space; range query: O(1). Prefix-map counting: O(n) expected time, O(n) space.",
    variations: ["Target subarray count: count earlier prefix values equal to current − target.", "Divisibility: store prefix remainders instead of full sums.", "2D rectangle sums: subtract top and left regions, then add their overlap back."], example: "Build prefix sums, then query indices 1 through 2", frames: prefixFrames, checks: "assert prefix_sums([2,-1,3]) == [0,2,1,4]\nassert count_sum([1,1,1],2) == 2\nassert count_sum([0,0],0) == 3\nassert count_sum([-1,1],0) == 1", source,
  },
  13: {
    title: "Prefix XOR", idea: "XOR cancels a value when it appears twice. XOR two saved prefixes to remove everything before the range you want.", cues: ["XOR of many subarrays", "Odd/even occurrence counts", "Toggle a bit as each value arrives"], warning: "XOR is not addition. Use ^ in Python; do not subtract the prefixes.", code: `def xor_prefix(nums):
    prefix = [0]
    for value in nums:
        prefix.append(prefix[-1] ^ value)
    return prefix`, complexity: "O(n) preprocessing time and space; O(1) range XOR under a fixed-width integer model.", variations: ["Inclusive [l, r]: prefix[r + 1] ^ prefix[l].", "Count subarrays with XOR k: count earlier prefixes equal to current ^ k.", "Parity masks: toggle one bit per letter, then compare equal masks or masks differing in one bit."], example: "XOR query for indices 1 through 2", frames: [frame([3,1,2], {}, "prefix = [0]", "Start from XOR identity zero."), frame([3,1,2], {0:"read"}, "prefix = [0,3]", "0 XOR 3 = 3."), frame([3,1,2], {1:"read"}, "prefix = [0,3,2]", "3 XOR 1 = 2."), frame([3,1,2], {2:"read"}, "prefix = [0,3,2,0]", "2 XOR 2 = 0."), frame([3,1,2], {1:"L",2:"R"}, "prefix[3] ^ prefix[1] = 0 ^ 3 = 3", "The two copies of the prefix cancel; only 1 XOR 2 remains.")], checks: "assert xor_prefix([3,1,2]) == [0,3,2,0]\nassert xor_prefix([]) == [0]", source,
  },
  14: {
    title: "Prefix and suffix summaries", idea: "Combine what you know about the left side with what you know about the right side. Two passes avoid rebuilding both sides at every position.", cues: ["Answer excluding the current item", "Choose where to split", "Need information from both directions"], warning: "Check whether the current position belongs in each summary. Product-except-self must exclude it from both sides.", code: `def product_except_self(nums):
    answer = [1] * len(nums)
    product = 1
    for i in range(len(nums)):
        answer[i] = product
        product *= nums[i]
    product = 1
    for i in range(len(nums) - 1, -1, -1):
        answer[i] *= product
        product *= nums[i]
    return answer`, complexity: "O(n) time, O(1) auxiliary space excluding the O(n) returned array; assumes constant-time arithmetic.", variations: ["Product: multiply left and right summaries without division, so zeroes are supported.", "Trapped water: combine the maximum height to the left and right.", "Split decisions: compute a left summary at i and a right summary at i + 1."], example: "Product except self for [2,3,4]", frames: [frame([2,3,4],{},"answer = [1,1,1]", "Start with multiplicative identity 1."), frame([2,3,4],{0:"left pass"},"answer = [1,1,1]; product = 2","Store the product before this index."), frame([2,3,4],{1:"left pass"},"answer = [1,2,1]; product = 6","The product before index 1 is 2."), frame([2,3,4],{2:"left pass"},"answer = [1,2,6]; product = 24","Left summaries are ready."), frame([2,3,4],{2:"right pass"},"answer = [1,2,6]; right product = 4","Multiply by 1: nothing is to the right yet."), frame([2,3,4],{1:"right pass"},"answer = [1,8,6]; right product = 12","Multiply left product 2 by right product 4."), frame([2,3,4],{0:"right pass"},"answer = [12,8,6]","Multiply 1 by the product to the right, 12.")], checks: "assert product_except_self([2,3,4]) == [12,8,6]\nassert product_except_self([0,2,3]) == [6,0,0]\nassert product_except_self([0,0]) == [0,0]", source,
  },
  18: {
    title: "Opposite-direction two pointers", idea: "Start at both ends of a sorted array. Compare the two values and move the end that can bring you closer to the target.", cues: ["Sorted pair search", "Compare opposite ends", "A move can rule out one endpoint"], warning: "Pair-sum movement requires sorted input. Sorting costs extra time and can lose original indices.", code: `def two_sum_sorted(nums, target):
    left, right = 0, len(nums) - 1
    while left < right:
        total = nums[left] + nums[right]
        if total == target:
            return [left + 1, right + 1]
        if total < target:
            left += 1
        else:
            right -= 1
    return []`, complexity: "O(n) time, O(1) auxiliary space for an already sorted array.", variations: ["Palindrome: compare endpoint characters; move both pointers inward when they match.", "3Sum: sort, fix one element, then solve a two-pointer pair problem; skip duplicate values.", "Container With Most Water: move the shorter boundary; the pair-sum rule does not apply."], example: "Find a pair summing to 10", frames: pairFrames([1,2,4,7,11],10), checks: "assert two_sum_sorted([1,2,4,7,11],10) == []\nassert two_sum_sorted([2,3,4],6) == [1,3]\nassert two_sum_sorted([],5) == []", source: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
  },
  19: {
    title: "Read and write pointers", idea: "One pointer reads the input. A second marks where the next kept value should be written. The kept part stays at the front.", cues: ["Remove items in place", "Preserve the order of kept items", "Return the length of the kept prefix"], warning: "Only the returned prefix is meaningful. The rest of the array may still contain old values.", code: `def remove_value(nums, unwanted):
    write = 0
    for read in range(len(nums)):
        if nums[read] != unwanted:
            nums[write] = nums[read]
            write += 1
    return write`, complexity: "O(n) time, O(1) auxiliary space; mutates the input.", variations: ["Sorted duplicates: keep a value only when it differs from the previous kept value.", "Move zeroes: compact nonzero values, then fill the remaining positions with zero.", "Subsequence matching: advance the match pointer only when the scanned character matches."], example: "Remove 3 from [3,2,2,3]", frames: [frame([3,2,2,3],{0:"read/write"},"write = 0","Skip 3; write stays at zero."), frame([2,2,2,3],{0:"written",1:"read"},"write = 1","Keep 2 at index 0, then advance write."), frame([2,2,2,3],{1:"written",2:"read"},"write = 2","Keep the next 2 at index 1."), frame([2,2,2,3],{3:"read"},"return 2; kept prefix = [2,2]","Skip the final 3. The tail is unspecified.")], checks: "a=[3,2,2,3]\nk=remove_value(a,3)\nassert k == 2 and a[:k] == [2,2]\nassert remove_value([],3) == 0", source,
  },
  20: {
    title: "Fast and slow pointers", idea: "Follow the same links with two runners: one takes one step and the other takes two. Inside a cycle, the faster runner eventually catches the slower one.", cues: ["Linked-list cycle", "Repeated next-state operation", "Need constant extra memory"], warning: "Check fast and fast.next before taking two steps. For cycle detection, compare nodes by identity, not by their values.", code: `def has_cycle(head):
    slow = fast = head
    while fast is not None and fast.next is not None:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            return True
    return False`, complexity: "O(n) time and O(1) space; n is the number of reachable nodes.", variations: ["Midpoint: stop when fast reaches the end; slow is at the middle.", "Cycle entry: after a meeting, move one runner to the head and move both one step until they meet again.", "Nth from end uses a fixed gap, not two different speeds."], example: "Links: A → B → C → D → B (cycle)", frames: [frame(["A","B","C","D"],{0:"slow/fast"},"next: A→B, B→C, C→D, D→B","Both start at A."),frame(["A","B","C","D"],{1:"slow",2:"fast"},"slow = B; fast = C","Slow takes one link; fast takes two."),frame(["A","B","C","D"],{2:"slow",1:"fast"},"slow = C; fast = B","Fast follows C→D→B, wrapping around the cycle."),frame(["A","B","C","D"],{3:"slow/fast"},"return True","Both meet at D. A cycle exists; D is not necessarily its entry.")], checks: "class Node:\n    def __init__(self): self.next=None\na,b,c=Node(),Node(),Node()\na.next=b; b.next=c\nassert not has_cycle(a)\nc.next=b\nassert has_cycle(a)\nassert not has_cycle(None)", source,
  },
  21: {
    title: "Expand around a center", idea: "A palindrome reads the same from both ends. Start in the middle and extend left and right while the characters match.", cues: ["Palindromic substring", "Odd and even lengths", "Compare symmetric characters"], warning: "Try both character centers and gaps. This O(n²) teaching approach is not the optimal linear-time Manacher algorithm.", code: `def longest_palindrome(s):
    best = (0, 0)
    for center in range(len(s)):
        for left, right in ((center, center), (center, center + 1)):
            while left >= 0 and right < len(s) and s[left] == s[right]:
                if right - left + 1 > best[1] - best[0]:
                    best = (left, right + 1)
                left -= 1
                right += 1
    return s[best[0]:best[1]]`, complexity: "O(n²) worst-case time, O(1) auxiliary space excluding the returned substring. Manacher can achieve O(n) time using O(n) space.", variations: ["Count palindromes: increment on every successful expansion.", "Longest palindrome: save the best endpoints, then slice once.", "Palindrome partitioning requires a separate backtracking or DP step."], example: "One even center in abba (the algorithm checks all centers)", frames: [frame(["a","b","b","a"],{1:"L",2:"R"},"center = gap 1|2; palindrome = bb","The two middle b characters match."),frame(["a","b","b","a"],{0:"L",3:"R"},"palindrome = abba; length = 4","Extend outward: a matches a."),frame(["a","b","b","a"],{},"left = -1; right = 4; stop this center","Reached the bounds. Other centers are checked separately.")], checks: "assert longest_palindrome('abba') == 'abba'\nassert longest_palindrome('') == ''\nassert longest_palindrome('a') == 'a'\nassert longest_palindrome('babad') in ('bab','aba')", source,
  },
  22: {
    title: "Three-way partitioning", idea: "Keep four regions: small values, pivot values, unknown values, and large values. Classify one unknown value at a time.", cues: ["Three kinds of values", "Sort 0, 1, 2 in place", "Partition around a pivot"], warning: "After swapping with the right boundary, inspect the arriving value again. Do not advance the scan pointer in that branch.", code: `def sort_colors(nums):
    low = scan = 0
    high = len(nums) - 1
    while scan <= high:
        if nums[scan] == 0:
            nums[low], nums[scan] = nums[scan], nums[low]
            low += 1
            scan += 1
        elif nums[scan] == 2:
            nums[scan], nums[high] = nums[high], nums[scan]
            high -= 1
        else:
            scan += 1`, complexity: "O(n) time and O(1) extra space; mutates input containing only 0, 1, and 2.", variations: ["Pivot partition: replace 0/1/2 with less/equal/greater comparisons.", "Quickselect: reuse partition boundaries to choose which region to search.", "Stable ordering needs a different algorithm; these swaps do not preserve order."], example: "Sort [2,0,1]", frames: [frame([2,0,1],{0:"low/scan",2:"high"},"unknown = [0,2]","2 belongs at the right end."),frame([1,0,2],{0:"low/scan",1:"high"},"unknown = [0,1]","Swap with high, decrement high. Reinspect the arriving 1."),frame([1,0,2],{0:"low",1:"scan/high"},"scan = 1","1 is in the middle class. Advance scan."),frame([0,1,2],{1:"low",2:"scan"},"scan = 2 > high = 1; done","Swap 0 with low, then advance low and scan.")], checks: "a=[2,0,2,1,1,0]\nsort_colors(a)\nassert a == [0,0,1,1,2,2]\na=[]\nsort_colors(a)\nassert a == []", source,
  },
  23: {
    title: "Fixed sliding window", idea: "Keep exactly k consecutive items. When a new item enters on the right, remove the item that leaves on the left.", cues: ["Every block of size k", "Rolling sum or count", "A fixed-length substring"], warning: "Do not record a result before the first k items arrive. Validate k; a window sum is not enough to track a window maximum.", code: `def max_window_sum(nums, k):
    if not 1 <= k <= len(nums):
        raise ValueError('k must be between 1 and len(nums)')
    total = 0
    best = float('-inf')
    for right, value in enumerate(nums):
        total += value
        if right >= k:
            total -= nums[right - k]
        if right >= k - 1:
            best = max(best, total)
    return best`, complexity: "O(n) time, O(1) auxiliary space for a rolling sum.", variations: ["Maximum average: divide the best fixed-size sum by k.", "Anagram windows: keep character counts and compare them with the target counts.", "Maximum element: use a monotonic deque instead of a sum."], example: "Maximum sum of 3 consecutive items", frames: fixedFrames([2,1,5,1,3],3), checks: "assert max_window_sum([2,1,5,1,3],3) == 9\nassert max_window_sum([-5,-2,-3],2) == -5\nassert max_window_sum([7],1) == 7", source,
  },
  25: {
    title: "Monotonic queue", idea: "Keep only values that could still become the maximum. A newer, larger value makes older, smaller values useless because it lasts longer too.", cues: ["Maximum in every moving window", "Candidates expire with time", "Need to discard weaker candidates"], warning: "Store indices so you can remove expired values. Use deque.popleft(), not list.pop(0). The output is separate from the O(k) candidate storage.", code: `from collections import deque

def window_max(nums, k):
    if not 1 <= k <= len(nums):
        raise ValueError('invalid window size')
    candidates = deque()
    answer = []
    for right, value in enumerate(nums):
        while candidates and candidates[0] <= right - k:
            candidates.popleft()
        while candidates and nums[candidates[-1]] <= value:
            candidates.pop()
        candidates.append(right)
        if right >= k - 1:
            answer.append(nums[candidates[0]])
    return answer`, complexity: "O(n) total time, O(k) auxiliary space excluding output. Each index is added once and removed at most once.", variations: ["Window minimum: reverse the comparison.", "Bounded max-minus-min: maintain both a max deque and a min deque.", "Shortest subarray sum with negative values: use a deque of prefix sums with a different front-removal condition."], example: "Window maximum with k = 3", frames: [frame([1,3,-1,2],{0:"read"},"deque indices = [0]; values = [1]","Keep 1 as the first candidate."),frame([1,3,-1,2],{1:"read/max"},"deque indices = [1]; values = [3]","3 removes 1: larger and newer."),frame([1,3,-1,2],{1:"max",2:"read"},"deque = [1,2]; output = [3]","Keep −1 behind 3; the first full window has maximum 3."),frame([1,3,-1,2],{1:"max",3:"read"},"deque = [1,3]; output = [3,3]","2 removes −1, but 3 still wins. Expire candidates by index, not value.")], checks: "assert window_max([1,3,-1,2],3) == [3,3]\nassert window_max([3,2,1],1) == [3,2,1]\nassert window_max([2,2,2],2) == [2,2]", source: "https://docs.python.org/3/library/collections.html#collections.deque",
  },
};

const bounds = (upper: boolean) => `def ${upper ? "upper" : "lower"}_bound(nums, target):
    low, high = 0, len(nums)
    while low < high:
        mid = (low + high) // 2
        if nums[mid] ${upper ? "<=" : "<"} target:
            low = mid + 1
        else:
            high = mid
    return low`;

STUDY_LESSONS[32] = {
  title: "Classic binary search", idea: "In sorted input, compare the middle value with the target. The comparison lets you discard half the remaining positions.", cues: ["Sorted array", "Exact target lookup", "Need logarithmic search"], warning: "This template searches a sorted array, not a rotated one. Use [low, high), so high is excluded and may equal len(nums).",
  code: `def binary_search(nums, target):
    low, high = 0, len(nums)
    while low < high:
        mid = (low + high) // 2
        if nums[mid] == target:
            return mid
        if nums[mid] < target:
            low = mid + 1
        else:
            high = mid
    return -1`, complexity: "O(log n) time, O(1) auxiliary space; input is already sorted and supports O(1) indexing.", variations: ["Rotated sorted array: determine which half is sorted before discarding it; duplicates may force linear worst-case work.", "Peak finding: compare mid with its neighbor, rather than a target.", "Matrix search: flatten only when row ordering permits it; otherwise use row/column properties."], example: "Find 7 in a sorted array", frames: searchFrames([1,3,5,7,9,11],7,"exact"), checks: "assert binary_search([1,3,5,7,9,11],7) == 3\nassert binary_search([],7) == -1\nassert binary_search([1,3],2) == -1", source: binarySource,
};
for (const [number, upper] of [[33,false],[34,true]] as const) {
  STUDY_LESSONS[number] = {
    title: upper ? "Upper bound" : "Lower bound", idea: upper ? "Find the first value strictly greater than the target. This puts the boundary after all equal values." : "Find the first value at least as large as the target. This puts the boundary before all equal values.", cues: [upper ? "First value > target" : "First value ≥ target", "Repeated values", "Insertion point or count"], warning: "The returned index may equal len(nums). Check bounds before indexing. A boundary is not proof that the target exists.", code: bounds(upper), complexity: "O(log n) search time and O(1) space. Inserting into a Python list afterward is O(n).", variations: ["Count occurrences: upper_bound − lower_bound.", "First occurrence: check that lower_bound is in bounds and equals the target.", "Last occurrence: upper_bound − 1, with an equality check.", "Count values in [a,b]: upper_bound(b) − lower_bound(a)."], example: `Find ${upper ? "the first value >" : "the first value ≥"} 2`, frames: searchFrames([1,2,2,2,4],2,upper?"upper":"lower"), checks: `assert ${upper?"upper":"lower"}_bound([1,2,2,2,4],2) == ${upper?4:1}\nassert ${upper?"upper":"lower"}_bound([],2) == 0\nassert ${upper?"upper":"lower"}_bound([1,2],9) == 2`, source: binarySource,
  };
}

STUDY_LESSONS[35] = {
  title: "Binary search on the answer", idea: "Guess an answer, then check whether it works. If making the guess larger can never turn success into failure, search for the first successful guess.", cues: ["Smallest feasible speed or capacity", "Can test a candidate answer", "Feasibility changes from false to true once"], warning: "First prove the yes/no test is monotonic. Choose a feasible upper bound and include the cost of each test in the complexity.", code: `def minimum_speed(piles, hours):
    if not piles:
        return 0
    if hours < len(piles):
        return -1
    low, high = 1, max(piles)
    while low < high:
        mid = (low + high) // 2
        needed = sum((p + mid - 1) // mid for p in piles)
        if needed <= hours:
            high = mid
        else:
            low = mid + 1
    return low`, complexity: "O(n log M) time and O(1) auxiliary space; n piles, M = maximum pile size. Positive integer piles.", variations: ["Shipping capacity: test whether all items fit within the allowed days.", "Maximize minimum distance: the predicate goes true→false; use a last-true search with the matching updates.", "Minimum time: count jobs completed by a candidate time, then find first feasible time."], example: "Piles [3,6,7,11], allowed hours = 8", frames: [frame([3,6,7,11],{},"low=1, high=11; try speed=6","Hours = 1+1+2+2 = 6. Feasible: set high=6."),frame([3,6,7,11],{},"low=1, high=6; try speed=3","Hours = 1+2+3+4 = 10. Too slow: set low=4."),frame([3,6,7,11],{},"low=4, high=6; try speed=5","Hours = 1+2+2+3 = 8. Feasible: set high=5."),frame([3,6,7,11],{},"low=4, high=5; try speed=4","Hours = 1+2+2+3 = 8. Set high=4."),frame([3,6,7,11],{},"low=high=4; answer=4","The smallest feasible speed is 4.")], checks: "assert minimum_speed([3,6,7,11],8) == 4\nassert minimum_speed([10],10) == 1\nassert minimum_speed([1,1],1) == -1", source: "https://leetcode.com/problems/koko-eating-bananas/",
};
STUDY_LESSONS[36] = {
  title: "Parametric search", idea: "Turn a numeric answer into a yes/no question. Search the parameter where the answer switches. For real-valued answers, repeatedly narrow an interval instead of adding or subtracting one.", cues: ["Approximate real-valued answer", "A monotonic feasibility test", "Required precision"], warning: "This overlaps with binary search on the answer. Real-valued search needs a justified iteration count or tolerance. Floating-point results are approximate.", code: `def square_root(x):
    if x < 0:
        raise ValueError('x must be nonnegative')
    low, high = 0.0, max(1.0, x)
    for _ in range(80):
        mid = (low + high) / 2
        if mid * mid >= x:
            high = mid
        else:
            low = mid
    return (low + high) / 2`, complexity: "O(I) time and O(1) space for this O(1) predicate and I iterations. Generally O(I × test cost). Interval width falls by 2 each iteration until floating-point precision limits progress.", variations: ["Integer answers: use exact first-true/last-true boundaries instead of floating point.", "Threshold optimization: implement can_achieve(candidate), then prove its direction.", "Choose precision based on input range and the problem's allowed error, not an arbitrary universal iteration count."], example: "Approximate √2; shown as sampled iterations", frames: [frame([0,2],{0:"low",1:"high"},"mid=1; 1² < 2","Keep [1,2]."),frame([1,2],{0:"low",1:"high"},"mid=1.5; 1.5² > 2","Keep [1,1.5]."),frame([1,1.5],{0:"low",1:"high"},"mid=1.25; 1.25² < 2","Keep [1.25,1.5]."),frame([1.25,1.5],{0:"low",1:"high"},"mid=1.375; 1.375² < 2","Keep [1.375,1.5]. Continue narrowing; the template runs 80 iterations."),frame([1.414213562373095,1.4142135623730951],{},"approximate result = 1.414213562373095","After the remaining iterations, the interval reaches floating-point precision.")], checks: "assert abs(square_root(2)**2-2) < 1e-12\nassert abs(square_root(0)) < 1e-12\nassert abs(square_root(0.25)-0.5) < 1e-12", source: binarySource,
};
