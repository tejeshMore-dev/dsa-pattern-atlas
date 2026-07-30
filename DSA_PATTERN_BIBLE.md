# DSA Pattern Bible

# Pattern 1

Pattern Name: Problem Classification

Category: Problem-Solving Mindset

Difficulty: Beginner

Recognition Keywords:

- Input constraints
- Data shape
- Contiguous vs. non-contiguous
- Sorted or monotonic
- Optimization vs. feasibility
- Static vs. streaming
- Repeated queries
- Hidden graph or state space

Core Idea:

Classify a problem by its constraints, structure, required output, and operation model before selecting an algorithm. A correct classification sharply narrows the viable patterns and target complexity.

Prerequisites:

- Basic programming constructs
- Fundamental data structures
- Basic mathematical reasoning

Common Algorithms:

- Brute-force baseline
- Constraint-to-complexity mapping
- Input-structure classification
- Query-model classification
- Small-case simulation
- Counterexample testing

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 1 — Two Sum](https://leetcode.com/problems/two-sum/)
- [LeetCode 20 — Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
- [LeetCode 121 — Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

Medium:

- [LeetCode 3 — Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
- [LeetCode 56 — Merge Intervals](https://leetcode.com/problems/merge-intervals/)
- [LeetCode 200 — Number of Islands](https://leetcode.com/problems/number-of-islands/)
- [LeetCode 207 — Course Schedule](https://leetcode.com/problems/course-schedule/)
- [LeetCode 215 — Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)

Hard:

- [LeetCode 42 — Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)
- [LeetCode 295 — Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)

Reduction Problems

- [LeetCode 128 — Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)
- [LeetCode 239 — Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
- [LeetCode 287 — Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)
- [LeetCode 312 — Burst Balloons](https://leetcode.com/problems/burst-balloons/)
- [LeetCode 621 — Task Scheduler](https://leetcode.com/problems/task-scheduler/)
- [LeetCode 847 — Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/)
- [LeetCode 875 — Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)
- [LeetCode 994 — Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)

Related Patterns

- Complexity Analysis
- Invariant Design
- State Design
- Reduction
- Greedy Thinking

# Pattern 2

Pattern Name: Complexity Analysis

Category: Problem-Solving Mindset

Difficulty: Beginner

Recognition Keywords:

- Input-size constraints
- Time-limit exceeded
- Nested loops
- Repeated operations
- Memory limit
- Amortized cost
- Time–space tradeoff

Core Idea:

Translate constraints into an allowable time and space budget, then reject algorithms that exceed it. Analyze total work, including preprocessing, queries, recursion, and amortized operations.

Prerequisites:

- Problem Classification
- Basic algebra
- Loops and recursion

Common Algorithms:

- Asymptotic analysis
- Amortized analysis
- Recurrence analysis
- Brute-force baselining
- Time–space tradeoff
- Constraint-to-complexity mapping

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 217 — Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)
- [LeetCode 242 — Valid Anagram](https://leetcode.com/problems/valid-anagram/)
- [LeetCode 704 — Binary Search](https://leetcode.com/problems/binary-search/)

Medium:

- [LeetCode 49 — Group Anagrams](https://leetcode.com/problems/group-anagrams/)
- [LeetCode 128 — Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)
- [LeetCode 164 — Maximum Gap](https://leetcode.com/problems/maximum-gap/)
- [LeetCode 380 — Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/)
- [LeetCode 981 — Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/)

Hard:

- [LeetCode 23 — Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
- [LeetCode 432 — All O`one Data Structure](https://leetcode.com/problems/all-oone-data-structure/)

Reduction Problems

- [LeetCode 347 — Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)
- [LeetCode 381 — Insert Delete GetRandom O(1) - Duplicates allowed](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/)
- [LeetCode 460 — LFU Cache](https://leetcode.com/problems/lfu-cache/)
- [LeetCode 895 — Maximum Frequency Stack](https://leetcode.com/problems/maximum-frequency-stack/)
- [LeetCode 1206 — Design Skiplist](https://leetcode.com/problems/design-skiplist/)
- [LeetCode 2034 — Stock Price Fluctuation](https://leetcode.com/problems/stock-price-fluctuation/)

Related Patterns

- Problem Classification
- Frequency Counting
- Sorting
- Heap
- Hashing
- Divide and Conquer

# Pattern 3

Pattern Name: Invariant Design

Category: Problem-Solving Mindset

Difficulty: Intermediate

Recognition Keywords:

- Must remain true
- Processed prefix
- Partition boundary
- Loop correctness
- Valid partial solution
- Swap or overwrite safely

Core Idea:

Define a property that is true before and after every operation; that invariant becomes both the algorithm and its correctness argument. Track exactly which region or state is already valid.

Prerequisites:

- Problem Classification
- Complexity Analysis
- Boolean logic
- Loop reasoning

Common Algorithms:

- Loop invariants
- Partition invariants
- Read/write boundaries
- Exchange invariants
- Inductive correctness proofs
- Sentinel techniques

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 88 — Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)
- [LeetCode 283 — Move Zeroes](https://leetcode.com/problems/move-zeroes/)

Medium:

- [LeetCode 31 — Next Permutation](https://leetcode.com/problems/next-permutation/)
- [LeetCode 75 — Sort Colors](https://leetcode.com/problems/sort-colors/)
- [LeetCode 189 — Rotate Array](https://leetcode.com/problems/rotate-array/)
- [LeetCode 665 — Non-decreasing Array](https://leetcode.com/problems/non-decreasing-array/)

Hard:

- [LeetCode 41 — First Missing Positive](https://leetcode.com/problems/first-missing-positive/)
- [LeetCode 135 — Candy](https://leetcode.com/problems/candy/)

Reduction Problems

- [LeetCode 26 — Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
- [LeetCode 80 — Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)
- [LeetCode 287 — Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)
- [LeetCode 324 — Wiggle Sort II](https://leetcode.com/problems/wiggle-sort-ii/)
- [LeetCode 443 — String Compression](https://leetcode.com/problems/string-compression/)
- [LeetCode 1574 — Shortest Subarray to be Removed to Make Array Sorted](https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/)

Related Patterns

- State Design
- Linear Scan
- In-Place Index Marking
- Cyclic Placement
- Two Pointers
- Dutch National Flag

# Pattern 4

Pattern Name: State Design

Category: Problem-Solving Mindset

Difficulty: Intermediate

Recognition Keywords:

- Decision sequence
- History-dependent choices
- Minimal sufficient information
- Transition between cases
- Overlapping subproblems
- Position plus mode

Core Idea:

Represent each partial solution with the smallest state that contains everything needed for the next decision. Good state design removes irrelevant history while preserving valid transitions.

Prerequisites:

- Problem Classification
- Invariant Design
- Recursion
- Cartesian-product reasoning

Common Algorithms:

- State-transition modeling
- Memoization
- Bottom-up dynamic programming
- Finite-state machines
- State compression
- Transition diagrams

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 70 — Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
- [LeetCode 746 — Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/)

Medium:

- [LeetCode 198 — House Robber](https://leetcode.com/problems/house-robber/)
- [LeetCode 213 — House Robber II](https://leetcode.com/problems/house-robber-ii/)
- [LeetCode 309 — Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)
- [LeetCode 714 — Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)
- [LeetCode 790 — Domino and Tromino Tiling](https://leetcode.com/problems/domino-and-tromino-tiling/)

Hard:

- [LeetCode 123 — Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/)
- [LeetCode 188 — Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/)
- [LeetCode 1220 — Count Vowels Permutation](https://leetcode.com/problems/count-vowels-permutation/)

Reduction Problems

- [LeetCode 91 — Decode Ways](https://leetcode.com/problems/decode-ways/)
- [LeetCode 256 — Paint House](https://leetcode.com/problems/paint-house/)
- [LeetCode 337 — House Robber III](https://leetcode.com/problems/house-robber-iii/)
- [LeetCode 552 — Student Attendance Record II](https://leetcode.com/problems/student-attendance-record-ii/)
- [LeetCode 801 — Minimum Swaps To Make Sequences Increasing](https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/)
- [LeetCode 935 — Knight Dialer](https://leetcode.com/problems/knight-dialer/)

Related Patterns

- Invariant Design
- Reduction
- Linear DP
- State Machine DP
- Tree DP
- Bitmask DP

# Pattern 5

Pattern Name: Reduction

Category: Problem-Solving Mindset

Difficulty: Intermediate

Recognition Keywords:

- Equivalent formulation
- Hidden standard problem
- Transform the input
- Model as graph
- Convert optimization to feasibility
- Map values to states

Core Idea:

Transform an unfamiliar problem into a known pattern while preserving feasibility or optimality. The key is to prove that solutions correspond in both directions or that the transformed objective is equivalent.

Prerequisites:

- Problem Classification
- Complexity Analysis
- Invariant Design
- State Design
- Common data structures

Common Algorithms:

- Constraint reformulation
- Graph modeling
- State-space modeling
- Sorting transformations
- Optimization-to-decision conversion
- Algebraic normalization

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 169 — Majority Element](https://leetcode.com/problems/majority-element/)
- [LeetCode 202 — Happy Number](https://leetcode.com/problems/happy-number/)
- [LeetCode 733 — Flood Fill](https://leetcode.com/problems/flood-fill/)

Medium:

- [LeetCode 287 — Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)
- [LeetCode 399 — Evaluate Division](https://leetcode.com/problems/evaluate-division/)
- [LeetCode 406 — Queue Reconstruction by Height](https://leetcode.com/problems/queue-reconstruction-by-height/)
- [LeetCode 621 — Task Scheduler](https://leetcode.com/problems/task-scheduler/)

Hard:

- [LeetCode 4 — Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)
- [LeetCode 315 — Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)
- [LeetCode 952 — Largest Component Size by Common Factor](https://leetcode.com/problems/largest-component-size-by-common-factor/)

Reduction Problems

- [LeetCode 126 — Word Ladder II](https://leetcode.com/problems/word-ladder-ii/)
- [LeetCode 312 — Burst Balloons](https://leetcode.com/problems/burst-balloons/)
- [LeetCode 354 — Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/)
- [LeetCode 847 — Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/)
- [LeetCode 887 — Super Egg Drop](https://leetcode.com/problems/super-egg-drop/)
- [LeetCode 1345 — Jump Game IV](https://leetcode.com/problems/jump-game-iv/)

Related Patterns

- Problem Classification
- State Design
- Greedy Thinking
- Binary Search on Answer
- Graph Modeling
- Dynamic Programming

# Pattern 6

Pattern Name: Greedy Thinking

Category: Problem-Solving Mindset

Difficulty: Intermediate

Recognition Keywords:

- Best local choice
- Earliest finish
- Cheapest available action
- Irrevocable decision
- Exchange argument
- Stay maximally flexible

Core Idea:

Choose the locally best action only when an exchange, dominance, or stay-ahead argument proves it cannot harm a global optimum. Greedy state usually retains the most flexible feasible partial solution.

Prerequisites:

- Complexity Analysis
- Invariant Design
- Sorting basics
- Proof by contradiction

Common Algorithms:

- Exchange argument
- Stay-ahead proof
- Dominance pruning
- Earliest-finish selection
- Marginal-gain selection
- Greedy sorting

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 455 — Assign Cookies](https://leetcode.com/problems/assign-cookies/)
- [LeetCode 860 — Lemonade Change](https://leetcode.com/problems/lemonade-change/)
- [LeetCode 1005 — Maximize Sum Of Array After K Negations](https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/)

Medium:

- [LeetCode 55 — Jump Game](https://leetcode.com/problems/jump-game/)
- [LeetCode 45 — Jump Game II](https://leetcode.com/problems/jump-game-ii/)
- [LeetCode 134 — Gas Station](https://leetcode.com/problems/gas-station/)
- [LeetCode 763 — Partition Labels](https://leetcode.com/problems/partition-labels/)
- [LeetCode 881 — Boats to Save People](https://leetcode.com/problems/boats-to-save-people/)
- [LeetCode 1029 — Two City Scheduling](https://leetcode.com/problems/two-city-scheduling/)

Hard:

- [LeetCode 330 — Patching Array](https://leetcode.com/problems/patching-array/)

Reduction Problems

- [LeetCode 376 — Wiggle Subsequence](https://leetcode.com/problems/wiggle-subsequence/)
- [LeetCode 678 — Valid Parenthesis String](https://leetcode.com/problems/valid-parenthesis-string/)
- [LeetCode 1647 — Minimum Deletions to Make Character Frequencies Unique](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/)
- [LeetCode 1675 — Minimize Deviation in Array](https://leetcode.com/problems/minimize-deviation-in-array/)
- [LeetCode 1710 — Maximum Units on a Truck](https://leetcode.com/problems/maximum-units-on-a-truck/)
- [LeetCode 2136 — Earliest Possible Day of Full Bloom](https://leetcode.com/problems/earliest-possible-day-of-full-bloom/)

Related Patterns

- Reduction
- Sort + Greedy
- Interval Scheduling
- Greedy + Heap
- Running Extremum and Kadane’s Algorithm
- Dynamic Programming

# Pattern 7

Pattern Name: Linear Scan

Category: Array and Sequence Patterns

Difficulty: Beginner

Recognition Keywords:

- One-pass processing
- Adjacent comparison
- Running counter
- First or last occurrence
- Local transition
- Streamed input

Core Idea:

Traverse the sequence once while maintaining only the state needed for the processed prefix. Update the answer at each element without revisiting earlier positions.

Prerequisites:

- Complexity Analysis
- Invariant Design
- Arrays and strings
- Basic iteration

Common Algorithms:

- Accumulator scan
- Run-length scan
- Transition counting
- Sentinel scan
- Boyer–Moore voting
- Finite-state scan

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 485 — Max Consecutive Ones](https://leetcode.com/problems/max-consecutive-ones/)
- [LeetCode 941 — Valid Mountain Array](https://leetcode.com/problems/valid-mountain-array/)
- [LeetCode 1732 — Find the Highest Altitude](https://leetcode.com/problems/find-the-highest-altitude/)
- [LeetCode 1752 — Check if Array Is Sorted and Rotated](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/)

Medium:

- [LeetCode 229 — Majority Element II](https://leetcode.com/problems/majority-element-ii/)
- [LeetCode 665 — Non-decreasing Array](https://leetcode.com/problems/non-decreasing-array/)
- [LeetCode 769 — Max Chunks To Make Sorted](https://leetcode.com/problems/max-chunks-to-make-sorted/)
- [LeetCode 1574 — Shortest Subarray to be Removed to Make Array Sorted](https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/)

Hard:

- [LeetCode 927 — Three Equal Parts](https://leetcode.com/problems/three-equal-parts/)

Reduction Problems

- [LeetCode 122 — Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
- [LeetCode 376 — Wiggle Subsequence](https://leetcode.com/problems/wiggle-subsequence/)
- [LeetCode 978 — Longest Turbulent Subarray](https://leetcode.com/problems/longest-turbulent-subarray/)
- [LeetCode 1578 — Minimum Time to Make Rope Colorful](https://leetcode.com/problems/minimum-time-to-make-rope-colorful/)
- [LeetCode 1653 — Minimum Deletions to Make String Balanced](https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/)
- [LeetCode 2439 — Minimize Maximum of Array](https://leetcode.com/problems/minimize-maximum-of-array/)

Related Patterns

- Running Extremum and Kadane’s Algorithm
- Frequency Counting
- Prefix Sum
- Prefix/Suffix Decomposition
- Same-Direction Two Pointers

# Pattern 8

Pattern Name: Running Extremum and Kadane’s Algorithm

Category: Array and Sequence Patterns

Difficulty: Intermediate

Recognition Keywords:

- Maximum contiguous segment
- Best ending here
- Restart when harmful
- Running minimum or maximum
- Circular subarray
- Maximum gain or difference

Core Idea:

Maintain the best value ending at the current position and the best value seen globally. Discard a harmful prefix whenever restarting produces a better future candidate.

Prerequisites:

- Linear Scan
- Invariant Design
- Prefix sums
- Recurrence basics

Common Algorithms:

- Kadane’s algorithm
- Minimum Kadane
- Circular Kadane
- Running prefix minimum
- Running prefix maximum
- Maximum-product scan

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 121 — Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
- [LeetCode 2016 — Maximum Difference Between Increasing Elements](https://leetcode.com/problems/maximum-difference-between-increasing-elements/)

Medium:

- [LeetCode 53 — Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)
- [LeetCode 152 — Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/)
- [LeetCode 918 — Maximum Sum Circular Subarray](https://leetcode.com/problems/maximum-sum-circular-subarray/)
- [LeetCode 1014 — Best Sightseeing Pair](https://leetcode.com/problems/best-sightseeing-pair/)
- [LeetCode 1749 — Maximum Absolute Sum of Any Subarray](https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/)

Hard:

- [LeetCode 2272 — Substring With Largest Variance](https://leetcode.com/problems/substring-with-largest-variance/)

Reduction Problems

- [LeetCode 1186 — Maximum Subarray Sum with One Deletion](https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/)
- [LeetCode 1191 — K-Concatenation Maximum Sum](https://leetcode.com/problems/k-concatenation-maximum-sum/)
- [LeetCode 1567 — Maximum Length of Subarray With Positive Product](https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/)
- [LeetCode 1800 — Maximum Ascending Subarray Sum](https://leetcode.com/problems/maximum-ascending-subarray-sum/)
- [LeetCode 2321 — Maximum Score Of Spliced Array](https://leetcode.com/problems/maximum-score-of-spliced-array/)
- [LeetCode 2606 — Find the Substring With Maximum Cost](https://leetcode.com/problems/find-the-substring-with-maximum-cost/)

Related Patterns

- Linear Scan
- Prefix Sum
- State Design
- Linear DP
- State Machine DP
- Divide and Conquer

# Pattern 9

Pattern Name: Frequency Counting

Category: Array and Sequence Patterns

Difficulty: Beginner

Recognition Keywords:

- Counts or multiplicities
- Duplicate detection
- Anagram
- Pair by complement
- Most or least frequent
- Small bounded alphabet

Core Idea:

Replace repeated searching with a table from value to occurrence count. Frequency vectors also provide compact signatures for grouping, pairing, and equality tests.

Prerequisites:

- Linear Scan
- Hash maps
- Arrays
- Basic counting

Common Algorithms:

- Hash-map counting
- Fixed-alphabet arrays
- Counting sort
- Frequency signatures
- Complement counting
- Bucket grouping

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 217 — Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)
- [LeetCode 242 — Valid Anagram](https://leetcode.com/problems/valid-anagram/)
- [LeetCode 383 — Ransom Note](https://leetcode.com/problems/ransom-note/)
- [LeetCode 387 — First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/)
- [LeetCode 409 — Longest Palindrome](https://leetcode.com/problems/longest-palindrome/)
- [LeetCode 1207 — Unique Number of Occurrences](https://leetcode.com/problems/unique-number-of-occurrences/)

Medium:

- [LeetCode 36 — Valid Sudoku](https://leetcode.com/problems/valid-sudoku/)
- [LeetCode 49 — Group Anagrams](https://leetcode.com/problems/group-anagrams/)
- [LeetCode 451 — Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/)
- [LeetCode 781 — Rabbits in Forest](https://leetcode.com/problems/rabbits-in-forest/)
- [LeetCode 1647 — Minimum Deletions to Make Character Frequencies Unique](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/)

Hard:

- [LeetCode 30 — Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/)

Reduction Problems

- [LeetCode 1 — Two Sum](https://leetcode.com/problems/two-sum/)
- [LeetCode 347 — Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)
- [LeetCode 554 — Brick Wall](https://leetcode.com/problems/brick-wall/)
- [LeetCode 1010 — Pairs of Songs With Total Durations Divisible by 60](https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/)
- [LeetCode 1814 — Count Nice Pairs in an Array](https://leetcode.com/problems/count-nice-pairs-in-an-array/)
- [LeetCode 2364 — Count Number of Bad Pairs](https://leetcode.com/problems/count-number-of-bad-pairs/)

Related Patterns

- Linear Scan
- Prefix Sum
- Fixed Sliding Window
- Top K
- Hashing
- Counting Sort

# Pattern 10

Pattern Name: In-Place Index Marking

Category: Array and Sequence Patterns

Difficulty: Intermediate

Recognition Keywords:

- Values lie in an index range
- Constant extra space
- Missing or duplicate values
- Input may be modified
- Encode visited state
- Reuse first row or column

Core Idea:

Use array positions as implicit storage, marking presence or state through signs, offsets, sentinels, or encoded values. Preserve enough of the original value to continue indexing correctly.

Prerequisites:

- Invariant Design
- Linear Scan
- Array indexing
- Modular arithmetic basics

Common Algorithms:

- Sign marking
- Additive marking
- Modular state encoding
- Sentinel marking
- First-row/first-column markers
- In-place state packing

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 448 — Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)
- [LeetCode 645 — Set Mismatch](https://leetcode.com/problems/set-mismatch/)

Medium:

- [LeetCode 73 — Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/)
- [LeetCode 289 — Game of Life](https://leetcode.com/problems/game-of-life/)
- [LeetCode 442 — Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/)

Hard:

- [LeetCode 41 — First Missing Positive](https://leetcode.com/problems/first-missing-positive/)

Reduction Problems

- [LeetCode 130 — Surrounded Regions](https://leetcode.com/problems/surrounded-regions/)
- [LeetCode 200 — Number of Islands](https://leetcode.com/problems/number-of-islands/)
- [LeetCode 565 — Array Nesting](https://leetcode.com/problems/array-nesting/)
- [LeetCode 695 — Max Area of Island](https://leetcode.com/problems/max-area-of-island/)
- [LeetCode 1020 — Number of Enclaves](https://leetcode.com/problems/number-of-enclaves/)

Related Patterns

- Invariant Design
- Cyclic Placement
- Linear Scan
- Matrix Traversal and Direction Simulation
- Bit Manipulation

# Pattern 11

Pattern Name: Cyclic Placement

Category: Array and Sequence Patterns

Difficulty: Intermediate

Recognition Keywords:

- Values map to target indices
- Permutation or near-permutation
- Range 0 to n or 1 to n
- Missing and duplicate values
- Constant-space rearrangement
- Follow permutation cycles

Core Idea:

Repeatedly swap each value into its designated index until every possible position is correct. Duplicates, missing values, and cycle structure then become visible from the remaining mismatches.

Prerequisites:

- Invariant Design
- In-Place Index Marking
- Array indexing
- Swap operations

Common Algorithms:

- Cyclic sort
- Index-to-value placement
- Cycle walking
- In-place permutation
- Cyclic replacement

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 268 — Missing Number](https://leetcode.com/problems/missing-number/)
- [LeetCode 645 — Set Mismatch](https://leetcode.com/problems/set-mismatch/)

Medium:

- [LeetCode 442 — Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/)
- [LeetCode 565 — Array Nesting](https://leetcode.com/problems/array-nesting/)

Hard:

- [LeetCode 41 — First Missing Positive](https://leetcode.com/problems/first-missing-positive/)
- [LeetCode 765 — Couples Holding Hands](https://leetcode.com/problems/couples-holding-hands/)

Reduction Problems

- [LeetCode 189 — Rotate Array](https://leetcode.com/problems/rotate-array/)
- [LeetCode 448 — Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)
- [LeetCode 1920 — Build Array from Permutation](https://leetcode.com/problems/build-array-from-permutation/)

Related Patterns

- In-Place Index Marking
- Invariant Design
- Cycle Detection
- Union Find
- Dutch National Flag

# Pattern 12

Pattern Name: Prefix Sum

Category: Array and Sequence Patterns

Difficulty: Beginner

Recognition Keywords:

- Contiguous range sum
- Many range queries
- Subarray count with target
- Balance or net change
- Prefix-state frequency
- Two-dimensional region sum

Core Idea:

Store cumulative totals so any range aggregate becomes the difference of two prefixes. Pair prefix values with a hash map when the task asks how many earlier prefixes satisfy a target relation.

Prerequisites:

- Linear Scan
- Frequency Counting
- Basic algebra
- Hash maps

Common Algorithms:

- One-dimensional prefix sum
- Two-dimensional prefix sum
- Prefix sum plus hash map
- Prefix remainder counting
- Prefix balance encoding
- Prefix product decomposition

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 303 — Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/)
- [LeetCode 724 — Find Pivot Index](https://leetcode.com/problems/find-pivot-index/)
- [LeetCode 1480 — Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/)

Medium:

- [LeetCode 304 — Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/)
- [LeetCode 525 — Contiguous Array](https://leetcode.com/problems/contiguous-array/)
- [LeetCode 560 — Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)
- [LeetCode 974 — Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/)
- [LeetCode 1248 — Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/)

Hard:

- [LeetCode 1074 — Number of Submatrices That Sum to Target](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/)

Reduction Problems

- [LeetCode 437 — Path Sum III](https://leetcode.com/problems/path-sum-iii/)
- [LeetCode 523 — Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/)
- [LeetCode 1371 — Find the Longest Substring Containing Vowels in Even Counts](https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/)
- [LeetCode 1590 — Make Sum Divisible by P](https://leetcode.com/problems/make-sum-divisible-by-p/)
- [LeetCode 2488 — Count Subarrays With Median K](https://leetcode.com/problems/count-subarrays-with-median-k/)
- [LeetCode 3026 — Maximum Good Subarray Sum](https://leetcode.com/problems/maximum-good-subarray-sum/)

Related Patterns

- Linear Scan
- Prefix XOR
- Prefix/Suffix Decomposition
- Difference Array
- Frequency Counting
- Fenwick Tree

# Pattern 13

Pattern Name: Prefix XOR

Category: Array and Sequence Patterns

Difficulty: Intermediate

Recognition Keywords:

- Subarray XOR
- Parity of occurrences
- Toggle state
- Even or odd counts
- XOR range queries
- Bitmask prefix state

Core Idea:

Store cumulative XOR so a range XOR is the XOR of two prefixes. For parity constraints, encode odd/even frequencies as a bitmask and match equal or nearby prefix states.

Prerequisites:

- Prefix Sum
- Bit Manipulation
- Frequency Counting
- XOR identities

Common Algorithms:

- One-dimensional prefix XOR
- Two-dimensional prefix XOR
- Prefix parity masks
- Hash-map prefix counting
- Earliest-mask indexing
- XOR cancellation

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 1720 — Decode XORed Array](https://leetcode.com/problems/decode-xored-array/)

Medium:

- [LeetCode 1310 — XOR Queries of a Subarray](https://leetcode.com/problems/xor-queries-of-a-subarray/)
- [LeetCode 1442 — Count Triplets That Can Form Two Arrays of Equal XOR](https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/)
- [LeetCode 1734 — Decode XORed Permutation](https://leetcode.com/problems/decode-xored-permutation/)
- [LeetCode 1829 — Maximum XOR for Each Query](https://leetcode.com/problems/maximum-xor-for-each-query/)
- [LeetCode 2588 — Count the Number of Beautiful Subarrays](https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/)

Hard:

- [LeetCode 1542 — Find Longest Awesome Substring](https://leetcode.com/problems/find-longest-awesome-substring/)

Reduction Problems

- [LeetCode 1371 — Find the Longest Substring Containing Vowels in Even Counts](https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/)
- [LeetCode 1738 — Find Kth Largest XOR Coordinate Value](https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/)
- [LeetCode 1915 — Number of Wonderful Substrings](https://leetcode.com/problems/number-of-wonderful-substrings/)

Related Patterns

- Prefix Sum
- Frequency Counting
- Bitmask Enumeration
- XOR
- Trie
- Rolling Hash

# Pattern 14

Pattern Name: Prefix/Suffix Decomposition

Category: Array and Sequence Patterns

Difficulty: Intermediate

Recognition Keywords:

- Answer excluding current index
- Choose a split point
- Left and right constraints
- Influence from both directions
- Directional aggregates
- Two-pass preprocessing

Core Idea:

Precompute summaries from the left and right so every index or split can be evaluated in constant time. The summaries may store sums, products, counts, extrema, or feasibility.

Prerequisites:

- Linear Scan
- Prefix Sum
- Invariant Design
- Array indexing

Common Algorithms:

- Prefix/suffix sums
- Prefix/suffix products
- Prefix/suffix minima and maxima
- Prefix/suffix counts
- Two-pass dynamic programming
- Split-point evaluation

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 1991 — Find the Middle Index in Array](https://leetcode.com/problems/find-the-middle-index-in-array/)
- [LeetCode 2574 — Left and Right Sum Differences](https://leetcode.com/problems/left-and-right-sum-differences/)

Medium:

- [LeetCode 238 — Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)
- [LeetCode 1525 — Number of Good Ways to Split a String](https://leetcode.com/problems/number-of-good-ways-to-split-a-string/)
- [LeetCode 1769 — Minimum Number of Operations to Move All Balls to Each Box](https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/)
- [LeetCode 2012 — Sum of Beauty in the Array](https://leetcode.com/problems/sum-of-beauty-in-the-array/)
- [LeetCode 2100 — Find Good Days to Rob the Bank](https://leetcode.com/problems/find-good-days-to-rob-the-bank/)
- [LeetCode 2256 — Minimum Average Difference](https://leetcode.com/problems/minimum-average-difference/)

Hard:

- [LeetCode 42 — Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)
- [LeetCode 135 — Candy](https://leetcode.com/problems/candy/)

Reduction Problems

- [LeetCode 334 — Increasing Triplet Subsequence](https://leetcode.com/problems/increasing-triplet-subsequence/)
- [LeetCode 926 — Flip String to Monotone Increasing](https://leetcode.com/problems/flip-string-to-monotone-increasing/)
- [LeetCode 1014 — Best Sightseeing Pair](https://leetcode.com/problems/best-sightseeing-pair/)
- [LeetCode 1653 — Minimum Deletions to Make String Balanced](https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/)
- [LeetCode 2483 — Minimum Penalty for a Shop](https://leetcode.com/problems/minimum-penalty-for-a-shop/)
- [LeetCode 2906 — Construct Product Matrix](https://leetcode.com/problems/construct-product-matrix/)

Related Patterns

- Prefix Sum
- Linear Scan
- Running Extremum and Kadane’s Algorithm
- Two Pointers
- Linear DP

# Pattern 15

Pattern Name: Difference Array

Category: Array and Sequence Patterns

Difficulty: Intermediate

Recognition Keywords:

- Many range updates
- Add over an interval
- Start and end events
- Coverage count
- Overlapping bookings
- Recover values afterward

Core Idea:

Record only how an update changes the boundary immediately before and after a range. One final prefix sum reconstructs every point’s accumulated value in linear time.

Prerequisites:

- Prefix Sum
- Linear Scan
- Interval endpoints
- Coordinate arithmetic

Common Algorithms:

- One-dimensional difference array
- Two-dimensional difference array
- Sweep difference map
- Range-add reconstruction
- Event delta accumulation
- Imos method

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 1854 — Maximum Population Year](https://leetcode.com/problems/maximum-population-year/)
- [LeetCode 1893 — Check if All the Integers in a Range Are Covered](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/)

Medium:

- [LeetCode 370 — Range Addition](https://leetcode.com/problems/range-addition/)
- [LeetCode 1094 — Car Pooling](https://leetcode.com/problems/car-pooling/)
- [LeetCode 1109 — Corporate Flight Bookings](https://leetcode.com/problems/corporate-flight-bookings/)
- [LeetCode 1589 — Maximum Sum Obtained of Any Permutation](https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/)
- [LeetCode 1943 — Describe the Painting](https://leetcode.com/problems/describe-the-painting/)
- [LeetCode 2381 — Shifting Letters II](https://leetcode.com/problems/shifting-letters-ii/)

Hard:

- [LeetCode 732 — My Calendar III](https://leetcode.com/problems/my-calendar-iii/)
- [LeetCode 2251 — Number of Flowers in Full Bloom](https://leetcode.com/problems/number-of-flowers-in-full-bloom/)

Reduction Problems

- [LeetCode 253 — Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/)
- [LeetCode 798 — Smallest Rotation with Highest Score](https://leetcode.com/problems/smallest-rotation-with-highest-score/)
- [LeetCode 995 — Minimum Number of K Consecutive Bit Flips](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/)
- [LeetCode 1674 — Minimum Moves to Make Array Complementary](https://leetcode.com/problems/minimum-moves-to-make-array-complementary/)
- [LeetCode 2772 — Apply Operations to Make All Array Elements Equal to Zero](https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero/)
- [LeetCode 2848 — Points That Intersect With Cars](https://leetcode.com/problems/points-that-intersect-with-cars/)

Related Patterns

- Prefix Sum
- Coordinate Compression
- Sweep Line
- Event Processing
- Lazy Segment Tree

# Pattern 16

Pattern Name: Coordinate Compression

Category: Array and Sequence Patterns

Difficulty: Advanced

Recognition Keywords:

- Huge sparse coordinates
- Only relative order matters
- Rank queries
- Offline endpoints
- Fenwick or segment-tree indices
- Preserve equality and ordering

Core Idea:

Replace sparse values with dense ranks while preserving equality and order. This makes array-indexed data structures practical without changing comparison-based relationships.

Prerequisites:

- Sorting
- Binary Search
- Hash maps
- Prefix Sum

Common Algorithms:

- Sort and deduplicate
- Rank mapping
- Lower-bound indexing
- Offline query ordering
- Compressed Fenwick tree
- Compressed segment tree
- Endpoint compression

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 1331 — Rank Transform of an Array](https://leetcode.com/problems/rank-transform-of-an-array/)

Medium:

- [LeetCode 436 — Find Right Interval](https://leetcode.com/problems/find-right-interval/)
- [LeetCode 1395 — Count Number of Teams](https://leetcode.com/problems/count-number-of-teams/)

Hard:

- [LeetCode 315 — Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)
- [LeetCode 327 — Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)
- [LeetCode 493 — Reverse Pairs](https://leetcode.com/problems/reverse-pairs/)
- [LeetCode 699 — Falling Squares](https://leetcode.com/problems/falling-squares/)
- [LeetCode 1649 — Create Sorted Array through Instructions](https://leetcode.com/problems/create-sorted-array-through-instructions/)
- [LeetCode 2251 — Number of Flowers in Full Bloom](https://leetcode.com/problems/number-of-flowers-in-full-bloom/)

Reduction Problems

- [LeetCode 218 — The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/)
- [LeetCode 673 — Number of Longest Increasing Subsequence](https://leetcode.com/problems/number-of-longest-increasing-subsequence/)
- [LeetCode 850 — Rectangle Area II](https://leetcode.com/problems/rectangle-area-ii/)
- [LeetCode 1847 — Closest Room](https://leetcode.com/problems/closest-room/)
- [LeetCode 2426 — Number of Pairs Satisfying Inequality](https://leetcode.com/problems/number-of-pairs-satisfying-inequality/)

Related Patterns

- Prefix Sum
- Difference Array
- Binary Search
- Fenwick Tree
- Segment Tree
- Sweep Line

# Pattern 17

Pattern Name: Matrix Traversal and Direction Simulation

Category: Array and Sequence Patterns

Difficulty: Intermediate

Recognition Keywords:

- Grid movement
- Spiral or diagonal order
- Rotate or reshape matrix
- Direction changes
- Layer boundaries
- Simulate movement rules

Core Idea:

Model positions explicitly as row-column coordinates and centralize movement in direction vectors or shrinking boundaries. For transformations, reason by layers or coordinate mappings while preserving unprocessed cells.

Prerequisites:

- Linear Scan
- Two-dimensional arrays
- Coordinate arithmetic
- Invariant Design

Common Algorithms:

- Direction-vector simulation
- Spiral boundary contraction
- Diagonal traversal
- Transpose and reverse
- Layer-by-layer rotation
- In-place state encoding

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 566 — Reshape the Matrix](https://leetcode.com/problems/reshape-the-matrix/)
- [LeetCode 766 — Toeplitz Matrix](https://leetcode.com/problems/toeplitz-matrix/)
- [LeetCode 1572 — Matrix Diagonal Sum](https://leetcode.com/problems/matrix-diagonal-sum/)

Medium:

- [LeetCode 48 — Rotate Image](https://leetcode.com/problems/rotate-image/)
- [LeetCode 54 — Spiral Matrix](https://leetcode.com/problems/spiral-matrix/)
- [LeetCode 59 — Spiral Matrix II](https://leetcode.com/problems/spiral-matrix-ii/)
- [LeetCode 289 — Game of Life](https://leetcode.com/problems/game-of-life/)
- [LeetCode 498 — Diagonal Traverse](https://leetcode.com/problems/diagonal-traverse/)
- [LeetCode 885 — Spiral Matrix III](https://leetcode.com/problems/spiral-matrix-iii/)
- [LeetCode 1861 — Rotating the Box](https://leetcode.com/problems/rotating-the-box/)

Hard:

- [LeetCode 1263 — Minimum Moves to Move a Box to Their Target Location](https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/)

Reduction Problems

- [LeetCode 874 — Walking Robot Simulation](https://leetcode.com/problems/walking-robot-simulation/)
- [LeetCode 1041 — Robot Bounded In Circle](https://leetcode.com/problems/robot-bounded-in-circle/)
- [LeetCode 1706 — Where Will the Ball Fall](https://leetcode.com/problems/where-will-the-ball-fall/)
- [LeetCode 1914 — Cyclically Rotating a Grid](https://leetcode.com/problems/cyclically-rotating-a-grid/)
- [LeetCode 2069 — Walking Robot Simulation II](https://leetcode.com/problems/walking-robot-simulation-ii/)
- [LeetCode 2326 — Spiral Matrix IV](https://leetcode.com/problems/spiral-matrix-iv/)

Related Patterns

- Linear Scan
- Invariant Design
- In-Place Index Marking
- Grid DFS
- Grid BFS
- Backtracking

# Pattern 18

Pattern Name: Opposite-Direction Two Pointers

Category: Two Pointers

Difficulty: Beginner

Recognition Keywords:

- Sorted sequence
- Pair sum
- Compare both ends
- Palindrome check
- Shrink search space
- Symmetric positions

Core Idea:

Place pointers at opposite ends and use order or symmetry to discard at least one endpoint after every comparison. The invariant guarantees that discarded candidates cannot improve the answer.

Prerequisites:

- Linear Scan
- Invariant Design
- Sorting
- Array and string indexing

Common Algorithms:

- Inward pair-sum scan
- Palindrome scan
- Container elimination
- Sorted-square merge
- Two-pointer k-sum
- Symmetric comparison

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 125 — Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)
- [LeetCode 344 — Reverse String](https://leetcode.com/problems/reverse-string/)
- [LeetCode 977 — Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)

Medium:

- [LeetCode 11 — Container With Most Water](https://leetcode.com/problems/container-with-most-water/)
- [LeetCode 15 — 3Sum](https://leetcode.com/problems/3sum/)
- [LeetCode 16 — 3Sum Closest](https://leetcode.com/problems/3sum-closest/)
- [LeetCode 18 — 4Sum](https://leetcode.com/problems/4sum/)
- [LeetCode 167 — Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
- [LeetCode 633 — Sum of Square Numbers](https://leetcode.com/problems/sum-of-square-numbers/)
- [LeetCode 611 — Valid Triangle Number](https://leetcode.com/problems/valid-triangle-number/)

Hard:

- [LeetCode 42 — Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)

Reduction Problems

- [LeetCode 259 — 3Sum Smaller](https://leetcode.com/problems/3sum-smaller/)
- [LeetCode 360 — Sort Transformed Array](https://leetcode.com/problems/sort-transformed-array/)
- [LeetCode 881 — Boats to Save People](https://leetcode.com/problems/boats-to-save-people/)
- [LeetCode 923 — 3Sum With Multiplicity](https://leetcode.com/problems/3sum-with-multiplicity/)
- [LeetCode 1498 — Number of Subsequences That Satisfy the Given Sum Condition](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/)
- [LeetCode 1577 — Number of Ways Where Square of Number Is Equal to Product of Two Numbers](https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/)

Related Patterns

- Same-Direction Two Pointers
- Expand Around Center
- Sort + Scan
- Dutch National Flag
- Binary Search

# Pattern 19

Pattern Name: Same-Direction Two Pointers

Category: Two Pointers

Difficulty: Beginner

Recognition Keywords:

- Stable compaction
- Read and write indices
- Subsequence matching
- Merge two ordered streams
- Remove elements in place
- Trailing boundary

Core Idea:

Move both pointers forward, letting one scan new input while the other tracks a write position, match position, or valid boundary. Each element is processed only a constant number of times.

Prerequisites:

- Linear Scan
- Invariant Design
- Arrays and strings
- Basic pointer manipulation

Common Algorithms:

- Read/write compaction
- Tandem sequence scan
- Stable filtering
- Ordered merge scan
- Subsequence matching
- Lead-and-trail boundaries

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 26 — Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
- [LeetCode 27 — Remove Element](https://leetcode.com/problems/remove-element/)
- [LeetCode 283 — Move Zeroes](https://leetcode.com/problems/move-zeroes/)
- [LeetCode 392 — Is Subsequence](https://leetcode.com/problems/is-subsequence/)

Medium:

- [LeetCode 80 — Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)
- [LeetCode 165 — Compare Version Numbers](https://leetcode.com/problems/compare-version-numbers/)
- [LeetCode 443 — String Compression](https://leetcode.com/problems/string-compression/)
- [LeetCode 524 — Longest Word in Dictionary through Deleting](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/)
- [LeetCode 2337 — Move Pieces to Obtain a String](https://leetcode.com/problems/move-pieces-to-obtain-a-string/)

Reduction Problems

- [LeetCode 88 — Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)
- [LeetCode 986 — Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/)
- [LeetCode 1229 — Meeting Scheduler](https://leetcode.com/problems/meeting-scheduler/)
- [LeetCode 1768 — Merge Strings Alternately](https://leetcode.com/problems/merge-strings-alternately/)
- [LeetCode 2486 — Append Characters to String to Make Subsequence](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/)
- [LeetCode 2540 — Minimum Common Value](https://leetcode.com/problems/minimum-common-value/)

Related Patterns

- Opposite-Direction Two Pointers
- Fast-Slow Pointer
- Fixed Sliding Window
- Variable Sliding Window
- Linear Scan

# Pattern 20

Pattern Name: Fast-Slow Pointer

Category: Two Pointers

Difficulty: Intermediate

Recognition Keywords:

- Cycle detection
- Linked-list midpoint
- Constant extra space
- Repeated state transition
- Nth node from the end
- Runner technique

Core Idea:

Advance two pointers at different speeds or with a fixed gap. Their meeting point, separation, or relative position reveals cycles, midpoints, and delayed targets without extra storage.

Prerequisites:

- Same-Direction Two Pointers
- Linked-list traversal
- Modular reasoning
- Invariant Design

Common Algorithms:

- Floyd's tortoise-and-hare algorithm
- Cycle-entry recovery
- Midpoint splitting
- Fixed-gap lead and lag
- Runner-based list traversal
- Brent's cycle detection

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 141 — Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
- [LeetCode 202 — Happy Number](https://leetcode.com/problems/happy-number/)
- [LeetCode 234 — Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)
- [LeetCode 876 — Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)

Medium:

- [LeetCode 142 — Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)
- [LeetCode 143 — Reorder List](https://leetcode.com/problems/reorder-list/)
- [LeetCode 148 — Sort List](https://leetcode.com/problems/sort-list/)
- [LeetCode 287 — Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)
- [LeetCode 457 — Circular Array Loop](https://leetcode.com/problems/circular-array-loop/)

Reduction Problems

- [LeetCode 19 — Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
- [LeetCode 61 — Rotate List](https://leetcode.com/problems/rotate-list/)
- [LeetCode 109 — Convert Sorted List to Binary Search Tree](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/)
- [LeetCode 1721 — Swapping Nodes in a Linked List](https://leetcode.com/problems/swapping-nodes-in-a-linked-list/)
- [LeetCode 2095 — Delete the Middle Node of a Linked List](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/)
- [LeetCode 2130 — Maximum Twin Sum of a Linked List](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/)

Related Patterns

- Same-Direction Two Pointers
- Cycle Detection
- Linked-List Reverse
- Linked-List Merge
- Binary Lifting

# Pattern 21

Pattern Name: Expand Around Center

Category: Two Pointers

Difficulty: Intermediate

Recognition Keywords:

- Palindromic substring
- Symmetry around a center
- Odd and even centers
- Mismatch near the middle
- Enumerate maximal palindromes

Core Idea:

Treat every character and every gap as a possible center, then expand symmetrically while the endpoints match. This enumerates all palindromic substrings in quadratic time and constant auxiliary space.

Prerequisites:

- Opposite-Direction Two Pointers
- String indexing
- Palindrome definition
- Boundary handling

Common Algorithms:

- Odd-center expansion
- Even-center expansion
- Center enumeration
- Palindrome interval generation
- Expansion plus dynamic programming
- Expansion plus interval selection

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 5 — Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)
- [LeetCode 131 — Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)
- [LeetCode 647 — Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/)

Hard:

- [LeetCode 132 — Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/)
- [LeetCode 1745 — Palindrome Partitioning IV](https://leetcode.com/problems/palindrome-partitioning-iv/)
- [LeetCode 2472 — Maximum Number of Non-overlapping Palindrome Substrings](https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/)

Reduction Problems

- [LeetCode 336 — Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/)
- [LeetCode 1278 — Palindrome Partitioning III](https://leetcode.com/problems/palindrome-partitioning-iii/)
- [LeetCode 1960 — Maximum Product of the Length of Two Palindromic Substrings](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings/)

Related Patterns

- Opposite-Direction Two Pointers
- Interval DP
- Backtracking
- Manacher's Algorithm
- Rolling Hash

# Pattern 22

Pattern Name: Dutch National Flag / Three-Way Partitioning

Category: Two Pointers

Difficulty: Intermediate

Recognition Keywords:

- Three value classes
- Less than, equal to, greater than
- In-place partition
- Unsorted middle region
- Duplicate-heavy pivot
- Constant extra space

Core Idea:

Maintain disjoint regions for values below, equal to, and above a pivot while shrinking the unclassified region. Every swap preserves the region invariant and classifies at least one element.

Prerequisites:

- Invariant Design
- Same-Direction Two Pointers
- In-place swapping
- Partition boundaries

Common Algorithms:

- Dutch national flag algorithm
- Three-way quicksort partition
- Binary partition
- Stable and unstable partitioning
- Pivot-based region maintenance

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 905 — Sort Array By Parity](https://leetcode.com/problems/sort-array-by-parity/)
- [LeetCode 922 — Sort Array By Parity II](https://leetcode.com/problems/sort-array-by-parity-ii/)

Medium:

- [LeetCode 75 — Sort Colors](https://leetcode.com/problems/sort-colors/)
- [LeetCode 2161 — Partition Array According to Given Pivot](https://leetcode.com/problems/partition-array-according-to-given-pivot/)
- [LeetCode 324 — Wiggle Sort II](https://leetcode.com/problems/wiggle-sort-ii/)

Reduction Problems

- [LeetCode 27 — Remove Element](https://leetcode.com/problems/remove-element/)
- [LeetCode 86 — Partition List](https://leetcode.com/problems/partition-list/)
- [LeetCode 215 — Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)
- [LeetCode 283 — Move Zeroes](https://leetcode.com/problems/move-zeroes/)
- [LeetCode 912 — Sort an Array](https://leetcode.com/problems/sort-an-array/)

Related Patterns

- Same-Direction Two Pointers
- In-Place Index Marking
- Quickselect / Partition Selection
- Sort + Scan
- Invariant Design

# Pattern 23

Pattern Name: Fixed Sliding Window

Category: Sliding Window

Difficulty: Beginner

Recognition Keywords:

- Contiguous block of size k
- Every substring of fixed length
- Rolling sum or count
- Add right, remove left
- Fixed-size frequency comparison

Core Idea:

Build the first window, then slide it one position at a time by adding the entering element and removing the leaving element. This converts repeated range work into a linear scan.

Prerequisites:

- Linear Scan
- Frequency Counting
- Prefix Sum
- Same-Direction Two Pointers

Common Algorithms:

- Rolling sum
- Rolling frequency table
- Fixed-length substring scan
- Complement window
- Circular fixed window
- Rolling hash window

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 643 — Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)
- [LeetCode 1876 — Substrings of Size Three with Distinct Characters](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/)
- [LeetCode 2269 — Find the K-Beauty of a Number](https://leetcode.com/problems/find-the-k-beauty-of-a-number/)
- [LeetCode 2379 — Minimum Recolors to Get K Consecutive Black Blocks](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/)

Medium:

- [LeetCode 438 — Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
- [LeetCode 567 — Permutation in String](https://leetcode.com/problems/permutation-in-string/)
- [LeetCode 1052 — Grumpy Bookstore Owner](https://leetcode.com/problems/grumpy-bookstore-owner/)
- [LeetCode 1343 — Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/)
- [LeetCode 1423 — Maximum Points You Can Obtain from Cards](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/)
- [LeetCode 1456 — Maximum Number of Vowels in a Substring of Given Length](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/)

Hard:

- [LeetCode 30 — Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/)

Reduction Problems

- [LeetCode 1297 — Maximum Number of Occurrences of a Substring](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/)
- [LeetCode 2134 — Minimum Swaps to Group All 1's Together II](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/)
- [LeetCode 2156 — Find Substring With Given Hash Value](https://leetcode.com/problems/find-substring-with-given-hash-value/)
- [LeetCode 2461 — Maximum Sum of Distinct Subarrays With Length K](https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/)
- [LeetCode 2653 — Sliding Subarray Beauty](https://leetcode.com/problems/sliding-subarray-beauty/)
- [LeetCode 2841 — Maximum Sum of Almost Unique Subarray](https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/)

Related Patterns

- Variable Sliding Window
- Monotonic Queue
- Frequency Counting
- Rolling Hash
- Prefix Sum

# Pattern 24

Pattern Name: Variable Sliding Window

Category: Sliding Window

Difficulty: Intermediate

Recognition Keywords:

- Longest or shortest valid subarray
- At most or at least k
- Contiguous range constraint
- Positive values
- Expand right, shrink left
- Monotone window validity

Core Idea:

Expand the right boundary to gain elements and advance the left boundary whenever validity can be restored monotonically. Each boundary moves forward at most once per index, yielding linear time.

Prerequisites:

- Fixed Sliding Window
- Same-Direction Two Pointers
- Frequency Counting
- Invariant Design

Common Algorithms:

- Longest valid window
- Shortest satisfying window
- At-most counting
- Exactly-k by subtraction
- Frequency-deficit window
- Complement window

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 3090 — Maximum Length Substring With Two Occurrences](https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/)

Medium:

- [LeetCode 3 — Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
- [LeetCode 209 — Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)
- [LeetCode 424 — Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)
- [LeetCode 713 — Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/)
- [LeetCode 904 — Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/)
- [LeetCode 1004 — Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/)
- [LeetCode 1208 — Get Equal Substrings Within Budget](https://leetcode.com/problems/get-equal-substrings-within-budget/)
- [LeetCode 1358 — Number of Substrings Containing All Three Characters](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/)
- [LeetCode 1493 — Longest Subarray of 1's After Deleting One Element](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/)

Hard:

- [LeetCode 76 — Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)
- [LeetCode 992 — Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/)
- [LeetCode 2302 — Count Subarrays With Score Less Than K](https://leetcode.com/problems/count-subarrays-with-score-less-than-k/)

Reduction Problems

- [LeetCode 395 — Longest Substring with At Least K Repeating Characters](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/)
- [LeetCode 930 — Binary Subarrays With Sum](https://leetcode.com/problems/binary-subarrays-with-sum/)
- [LeetCode 1248 — Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/)
- [LeetCode 1658 — Minimum Operations to Reduce X to Zero](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/)
- [LeetCode 2024 — Maximize the Confusion of an Exam](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/)
- [LeetCode 2516 — Take K of Each Character From Left and Right](https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/)
- [LeetCode 2537 — Count the Number of Good Subarrays](https://leetcode.com/problems/count-the-number-of-good-subarrays/)

Related Patterns

- Fixed Sliding Window
- Monotonic Queue
- Same-Direction Two Pointers
- Prefix Sum
- Frequency Counting

# Pattern 25

Pattern Name: Monotonic Queue

Category: Sliding Window

Difficulty: Advanced

Recognition Keywords:

- Window minimum or maximum
- Expire old candidates
- Dominated values
- Shortest prefix-difference range
- DP over a bounded previous range
- Deque optimization

Core Idea:

Keep candidate indices in a deque ordered by value and discard candidates that expire or can never be optimal. Each index enters and leaves the deque at most once.

Prerequisites:

- Variable Sliding Window
- Deque operations
- Monotonicity
- Prefix Sum
- Linear DP

Common Algorithms:

- Sliding-window maximum deque
- Sliding-window minimum deque
- Dual monotonic deques
- Monotone prefix deque
- Monotonic-queue DP optimization
- Dominance pruning

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 1438 — Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/)
- [LeetCode 1696 — Jump Game VI](https://leetcode.com/problems/jump-game-vi/)
- [LeetCode 2762 — Continuous Subarrays](https://leetcode.com/problems/continuous-subarrays/)

Hard:

- [LeetCode 239 — Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
- [LeetCode 862 — Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/)
- [LeetCode 1425 — Constrained Subsequence Sum](https://leetcode.com/problems/constrained-subsequence-sum/)
- [LeetCode 1499 — Max Value of Equation](https://leetcode.com/problems/max-value-of-equation/)
- [LeetCode 2398 — Maximum Number of Robots Within Budget](https://leetcode.com/problems/maximum-number-of-robots-within-budget/)

Reduction Problems

- [LeetCode 918 — Maximum Sum Circular Subarray](https://leetcode.com/problems/maximum-sum-circular-subarray/)
- [LeetCode 1687 — Delivering Boxes from Storage to Ports](https://leetcode.com/problems/delivering-boxes-from-storage-to-ports/)
- [LeetCode 2944 — Minimum Number of Coins for Fruits](https://leetcode.com/problems/minimum-number-of-coins-for-fruits/)
- [LeetCode 2945 — Find Maximum Non-decreasing Array Length](https://leetcode.com/problems/find-maximum-non-decreasing-array-length/)

Related Patterns

- Variable Sliding Window
- Monotonic Stack
- Heap
- Prefix Sum
- Linear DP

# Pattern 26

Pattern Name: Sort + Scan

Category: Sorting and Ordering

Difficulty: Beginner

Recognition Keywords:

- Order can simplify relationships
- Adjacent values after sorting
- Group equal keys
- Deduplicate or rank
- Global order, local comparison
- Offline processing allowed

Core Idea:

Sort once so related values become adjacent or appear in a useful global order, then solve the transformed problem with a linear scan. The added ordering often replaces hashing or nested comparisons.

Prerequisites:

- Linear Scan
- Comparison sorting
- Complexity Analysis
- Custom comparators

Common Algorithms:

- Sort then deduplicate
- Sorted grouping
- Adjacent-difference scan
- Custom-key sorting
- Lexicographic ordering
- Counting or radix sort

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 349 — Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/)
- [LeetCode 350 — Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/)
- [LeetCode 414 — Third Maximum Number](https://leetcode.com/problems/third-maximum-number/)
- [LeetCode 561 — Array Partition](https://leetcode.com/problems/array-partition/)
- [LeetCode 1122 — Relative Sort Array](https://leetcode.com/problems/relative-sort-array/)

Medium:

- [LeetCode 49 — Group Anagrams](https://leetcode.com/problems/group-anagrams/)
- [LeetCode 179 — Largest Number](https://leetcode.com/problems/largest-number/)
- [LeetCode 274 — H-Index](https://leetcode.com/problems/h-index/)
- [LeetCode 1288 — Remove Covered Intervals](https://leetcode.com/problems/remove-covered-intervals/)
- [LeetCode 1630 — Arithmetic Subarrays](https://leetcode.com/problems/arithmetic-subarrays/)
- [LeetCode 2294 — Partition Array Such That Maximum Difference Is K](https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/)

Reduction Problems

- [LeetCode 128 — Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)
- [LeetCode 945 — Minimum Increment to Make Array Unique](https://leetcode.com/problems/minimum-increment-to-make-array-unique/)
- [LeetCode 1846 — Maximum Element After Decreasing and Rearranging](https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/)
- [LeetCode 2126 — Destroying Asteroids](https://leetcode.com/problems/destroying-asteroids/)
- [LeetCode 2410 — Maximum Matching of Players With Trainers](https://leetcode.com/problems/maximum-matching-of-players-with-trainers/)
- [LeetCode 2501 — Longest Square Streak in an Array](https://leetcode.com/problems/longest-square-streak-in-an-array/)

Related Patterns

- Sort + Greedy
- Merge-Sort Counting
- Opposite-Direction Two Pointers
- Coordinate Compression
- Sweep Line

# Pattern 27

Pattern Name: Sort + Greedy

Category: Sorting and Ordering

Difficulty: Intermediate

Recognition Keywords:

- Choose in a strategic order
- Earliest finish
- Largest capacity or benefit first
- Exchange argument
- Rearrangement is allowed
- Keep maximum future flexibility

Core Idea:

Sort by the attribute that exposes a safe local choice, then commit greedily in that order. Correctness usually follows from exchanging the first differing choice with the greedy one.

Prerequisites:

- Greedy Thinking
- Sort + Scan
- Invariant Design
- Exchange arguments

Common Algorithms:

- Earliest-finish sorting
- Benefit or cost sorting
- Ratio sorting
- Delta sorting
- Greedy matching
- Sort plus heap

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 455 — Assign Cookies](https://leetcode.com/problems/assign-cookies/)
- [LeetCode 1710 — Maximum Units on a Truck](https://leetcode.com/problems/maximum-units-on-a-truck/)
- [LeetCode 3074 — Apple Redistribution into Boxes](https://leetcode.com/problems/apple-redistribution-into-boxes/)

Medium:

- [LeetCode 435 — Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)
- [LeetCode 452 — Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)
- [LeetCode 646 — Maximum Length of Pair Chain](https://leetcode.com/problems/maximum-length-of-pair-chain/)
- [LeetCode 881 — Boats to Save People](https://leetcode.com/problems/boats-to-save-people/)
- [LeetCode 1029 — Two City Scheduling](https://leetcode.com/problems/two-city-scheduling/)
- [LeetCode 1833 — Maximum Ice Cream Bars](https://leetcode.com/problems/maximum-ice-cream-bars/)
- [LeetCode 2279 — Maximum Bags With Full Capacity of Rocks](https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/)

Hard:

- [LeetCode 630 — Course Schedule III](https://leetcode.com/problems/course-schedule-iii/)
- [LeetCode 857 — Minimum Cost to Hire K Workers](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/)

Reduction Problems

- [LeetCode 406 — Queue Reconstruction by Height](https://leetcode.com/problems/queue-reconstruction-by-height/)
- [LeetCode 1353 — Maximum Number of Events That Can Be Attended](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/)
- [LeetCode 1665 — Minimum Initial Energy to Finish Tasks](https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/)
- [LeetCode 2136 — Earliest Possible Day of Full Bloom](https://leetcode.com/problems/earliest-possible-day-of-full-bloom/)
- [LeetCode 2542 — Maximum Subsequence Score](https://leetcode.com/problems/maximum-subsequence-score/)

Related Patterns

- Greedy Thinking
- Sort + Scan
- Interval Scheduling
- Greedy + Heap
- Event Processing

# Pattern 28

Pattern Name: Merge-Sort Counting

Category: Sorting and Ordering

Difficulty: Advanced

Recognition Keywords:

- Count inversions
- Count smaller elements across positions
- Pair inequality across halves
- Original order matters
- Offline range counting
- Divide, count, and merge

Core Idea:

Divide by original index, count valid cross-half pairs while both halves are sorted, and merge them. Sorting inside the recursion reduces quadratic pair counting to logarithmic levels.

Prerequisites:

- Merge sort
- Divide and conquer
- Two Pointers
- Inequality manipulation

Common Algorithms:

- Inversion counting
- Cross-half pair counting
- Indexed merge sort
- Range-sum merge counting
- CDQ divide and conquer
- Stable merge

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 88 — Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)

Medium:

- [LeetCode 148 — Sort List](https://leetcode.com/problems/sort-list/)
- [LeetCode 912 — Sort an Array](https://leetcode.com/problems/sort-an-array/)

Hard:

- [LeetCode 315 — Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)
- [LeetCode 327 — Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)
- [LeetCode 493 — Reverse Pairs](https://leetcode.com/problems/reverse-pairs/)
- [LeetCode 2426 — Number of Pairs Satisfying Inequality](https://leetcode.com/problems/number-of-pairs-satisfying-inequality/)

Reduction Problems

- [LeetCode 775 — Global and Local Inversions](https://leetcode.com/problems/global-and-local-inversions/)
- [LeetCode 1395 — Count Number of Teams](https://leetcode.com/problems/count-number-of-teams/)
- [LeetCode 1649 — Create Sorted Array through Instructions](https://leetcode.com/problems/create-sorted-array-through-instructions/)
- [LeetCode 2179 — Count Good Triplets in an Array](https://leetcode.com/problems/count-good-triplets-in-an-array/)

Related Patterns

- Sort + Scan
- Coordinate Compression
- Fenwick Tree
- Segment Tree
- Divide and Conquer

# Pattern 29

Pattern Name: Quickselect / Partition Selection

Category: Sorting and Ordering

Difficulty: Intermediate

Recognition Keywords:

- Kth smallest or largest
- Unsorted order statistic
- Top k without full sorting
- Median or quantile
- Partition around a pivot
- Expected linear time

Core Idea:

Partition elements around a pivot and recurse only into the region containing the desired rank. Randomization gives expected linear time without fully sorting the input.

Prerequisites:

- Dutch National Flag
- Sorting
- Randomization basics
- Rank arithmetic

Common Algorithms:

- Randomized quickselect
- Lomuto partition
- Hoare partition
- Three-way quickselect
- Median of medians
- Partial selection

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 414 — Third Maximum Number](https://leetcode.com/problems/third-maximum-number/)
- [LeetCode 2099 — Find Subsequence of Length K With the Largest Sum](https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/)

Medium:

- [LeetCode 215 — Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)
- [LeetCode 347 — Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)
- [LeetCode 462 — Minimum Moves to Equal Array Elements II](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/)
- [LeetCode 973 — K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/)
- [LeetCode 1738 — Find Kth Largest XOR Coordinate Value](https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/)
- [LeetCode 1985 — Find the Kth Largest Integer in the Array](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/)

Hard:

- [LeetCode 4 — Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)

Reduction Problems

- [LeetCode 658 — Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/)
- [LeetCode 692 — Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/)
- [LeetCode 324 — Wiggle Sort II](https://leetcode.com/problems/wiggle-sort-ii/)

Related Patterns

- Dutch National Flag / Three-Way Partitioning
- Heap Top K
- K-way Merge
- Binary Search on Answer
- Sort + Scan

# Pattern 30

Pattern Name: Sweep Line

Category: Sorting and Ordering

Difficulty: Advanced

Recognition Keywords:

- Geometric or interval events
- Active intervals
- Starts and ends
- Coverage over a line
- Overlap count
- Area or skyline

Core Idea:

Convert objects into ordered boundary events and sweep across one coordinate while maintaining the active set. Process equal-coordinate events with deliberate tie rules to preserve inclusivity and geometry.

Prerequisites:

- Sort + Scan
- Difference Array
- Intervals
- Balanced search structures
- Coordinate Compression

Common Algorithms:

- Endpoint event sweep
- Active multiset
- Coverage-count sweep
- Vertical and horizontal line sweep
- Area accumulation
- Coordinate-compressed sweep

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 1854 — Maximum Population Year](https://leetcode.com/problems/maximum-population-year/)
- [LeetCode 2848 — Points That Intersect With Cars](https://leetcode.com/problems/points-that-intersect-with-cars/)

Medium:

- [LeetCode 729 — My Calendar I](https://leetcode.com/problems/my-calendar-i/)
- [LeetCode 1943 — Describe the Painting](https://leetcode.com/problems/describe-the-painting/)
- [LeetCode 2406 — Divide Intervals Into Minimum Number of Groups](https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/)

Hard:

- [LeetCode 218 — The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/)
- [LeetCode 391 — Perfect Rectangle](https://leetcode.com/problems/perfect-rectangle/)
- [LeetCode 850 — Rectangle Area II](https://leetcode.com/problems/rectangle-area-ii/)
- [LeetCode 2251 — Number of Flowers in Full Bloom](https://leetcode.com/problems/number-of-flowers-in-full-bloom/)

Reduction Problems

- [LeetCode 253 — Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/)
- [LeetCode 986 — Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/)
- [LeetCode 1094 — Car Pooling](https://leetcode.com/problems/car-pooling/)
- [LeetCode 1893 — Check if All the Integers in a Range Are Covered](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/)
- [LeetCode 2054 — Two Best Non-Overlapping Events](https://leetcode.com/problems/two-best-non-overlapping-events/)

Related Patterns

- Event Processing
- Difference Array
- Coordinate Compression
- Interval Partitioning
- Segment Tree

# Pattern 31

Pattern Name: Event Processing

Category: Sorting and Ordering

Difficulty: Intermediate

Recognition Keywords:

- Chronological simulation
- Arrival and completion times
- Resource availability
- Tie-breaking at equal timestamps
- Process next event
- Online state updates

Core Idea:

Represent state changes as timestamped events and process them in a deterministic order, often with heaps for pending work and available resources. Jump directly to the next relevant time instead of simulating every time unit.

Prerequisites:

- Sort + Scan
- Heap basics
- Queue simulation
- Invariant Design

Common Algorithms:

- Timestamp sorting
- Batched equal-time events
- Priority-event simulation
- Available/busy heap pairs
- Calendar maps
- Explicit tie-breaking

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 1348 — Tweet Counts Per Frequency](https://leetcode.com/problems/tweet-counts-per-frequency/)
- [LeetCode 1834 — Single-Threaded CPU](https://leetcode.com/problems/single-threaded-cpu/)
- [LeetCode 1882 — Process Tasks Using Servers](https://leetcode.com/problems/process-tasks-using-servers/)
- [LeetCode 1942 — The Number of the Smallest Unoccupied Chair](https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/)

Hard:

- [LeetCode 732 — My Calendar III](https://leetcode.com/problems/my-calendar-iii/)
- [LeetCode 1606 — Find Servers That Handled Most Number of Requests](https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/)
- [LeetCode 2402 — Meeting Rooms III](https://leetcode.com/problems/meeting-rooms-iii/)
- [LeetCode 2534 — Time Taken to Cross the Door](https://leetcode.com/problems/time-taken-to-cross-the-door/)

Reduction Problems

- [LeetCode 621 — Task Scheduler](https://leetcode.com/problems/task-scheduler/)
- [LeetCode 636 — Exclusive Time of Functions](https://leetcode.com/problems/exclusive-time-of-functions/)
- [LeetCode 1353 — Maximum Number of Events That Can Be Attended](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/)
- [LeetCode 1851 — Minimum Interval to Include Each Query](https://leetcode.com/problems/minimum-interval-to-include-each-query/)
- [LeetCode 2034 — Stock Price Fluctuation](https://leetcode.com/problems/stock-price-fluctuation/)

Related Patterns

- Sweep Line
- Heap Scheduling
- Interval Partitioning
- Sort + Greedy
- Queue Simulation

# Pattern 32

Pattern Name: Classic Binary Search

Category: Binary Search

Difficulty: Beginner

Recognition Keywords:

- Sorted search space
- Target lookup
- Halve the interval
- Monotonic ordering
- Rotated sorted array
- Peak or matrix search

Core Idea:

Maintain a search interval known to contain any possible answer and discard half after each comparison. Choose one interval convention and update rules that guarantee progress and preserve the invariant.

Prerequisites:

- Complexity Analysis
- Invariant Design
- Sorted arrays
- Integer arithmetic

Common Algorithms:

- Exact-match binary search
- Half-open interval search
- Closed interval search
- Rotated-array search
- Peak search
- Matrix binary search

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 69 — Sqrt(x)](https://leetcode.com/problems/sqrtx/)
- [LeetCode 367 — Valid Perfect Square](https://leetcode.com/problems/valid-perfect-square/)
- [LeetCode 374 — Guess Number Higher or Lower](https://leetcode.com/problems/guess-number-higher-or-lower/)
- [LeetCode 704 — Binary Search](https://leetcode.com/problems/binary-search/)

Medium:

- [LeetCode 33 — Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
- [LeetCode 74 — Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)
- [LeetCode 81 — Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/)
- [LeetCode 153 — Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
- [LeetCode 162 — Find Peak Element](https://leetcode.com/problems/find-peak-element/)
- [LeetCode 240 — Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/)

Hard:

- [LeetCode 4 — Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)
- [LeetCode 154 — Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/)

Reduction Problems

- [LeetCode 278 — First Bad Version](https://leetcode.com/problems/first-bad-version/)
- [LeetCode 540 — Single Element in a Sorted Array](https://leetcode.com/problems/single-element-in-a-sorted-array/)
- [LeetCode 852 — Peak Index in a Mountain Array](https://leetcode.com/problems/peak-index-in-a-mountain-array/)
- [LeetCode 1095 — Find in Mountain Array](https://leetcode.com/problems/find-in-mountain-array/)
- [LeetCode 1901 — Find a Peak Element II](https://leetcode.com/problems/find-a-peak-element-ii/)

Related Patterns

- Lower Bound
- Upper Bound
- Binary Search on Answer
- Parametric Search
- Divide and Conquer

# Pattern 33

Pattern Name: Lower Bound

Category: Binary Search

Difficulty: Intermediate

Recognition Keywords:

- First value at least target
- First true position
- Leftmost occurrence
- Sorted insertion point
- Count values below target
- Patience sorting position

Core Idea:

Find the first index whose value or predicate is at least the target or true. Maintain a half-open interval so the final boundary is also a valid insertion position when no equal value exists.

Prerequisites:

- Classic Binary Search
- Invariant Design
- Sorted arrays
- Monotone predicates

Common Algorithms:

- Lower-bound search
- First-true binary search
- Leftmost-occurrence search
- Sorted position lists
- Patience-sorting replacement
- Rank counting

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 35 — Search Insert Position](https://leetcode.com/problems/search-insert-position/)
- [LeetCode 278 — First Bad Version](https://leetcode.com/problems/first-bad-version/)
- [LeetCode 1150 — Check If a Number Is Majority Element in a Sorted Array](https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/)
- [LeetCode 1539 — Kth Missing Positive Number](https://leetcode.com/problems/kth-missing-positive-number/)

Medium:

- [LeetCode 34 — Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
- [LeetCode 2080 — Range Frequency Queries](https://leetcode.com/problems/range-frequency-queries/)
- [LeetCode 2300 — Successful Pairs of Spells and Potions](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/)
- [LeetCode 2563 — Count the Number of Fair Pairs](https://leetcode.com/problems/count-the-number-of-fair-pairs/)

Hard:

- [LeetCode 354 — Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/)

Reduction Problems

- [LeetCode 300 — Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
- [LeetCode 436 — Find Right Interval](https://leetcode.com/problems/find-right-interval/)
- [LeetCode 1146 — Snapshot Array](https://leetcode.com/problems/snapshot-array/)
- [LeetCode 1574 — Shortest Subarray to be Removed to Make Array Sorted](https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/)
- [LeetCode 2250 — Count Number of Rectangles Containing Each Point](https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/)

Related Patterns

- Classic Binary Search
- Upper Bound
- Longest Increasing Subsequence
- Coordinate Compression
- Ordered Set

# Pattern 34

Pattern Name: Upper Bound

Category: Binary Search

Difficulty: Intermediate

Recognition Keywords:

- First value greater than target
- Last value at most target
- Rightmost occurrence
- Count values at most target
- Floor or predecessor
- Jump after a matched occurrence

Core Idea:

Find the first position strictly greater than a target; the preceding position is the last value at most that target. Combining lower and upper bounds gives exact frequency and closed-range counts.

Prerequisites:

- Lower Bound
- Classic Binary Search
- Sorted position lists
- Boundary arithmetic

Common Algorithms:

- Upper-bound search
- Last-true binary search
- Rightmost-occurrence search
- Predecessor lookup
- Closed-range frequency counting
- Occurrence-list jumps

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 744 — Find Smallest Letter Greater Than Target](https://leetcode.com/problems/find-smallest-letter-greater-than-target/)

Medium:

- [LeetCode 34 — Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
- [LeetCode 911 — Online Election](https://leetcode.com/problems/online-election/)
- [LeetCode 981 — Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/)
- [LeetCode 2055 — Plates Between Candles](https://leetcode.com/problems/plates-between-candles/)
- [LeetCode 2080 — Range Frequency Queries](https://leetcode.com/problems/range-frequency-queries/)

Hard:

- [LeetCode 1847 — Closest Room](https://leetcode.com/problems/closest-room/)
- [LeetCode 2251 — Number of Flowers in Full Bloom](https://leetcode.com/problems/number-of-flowers-in-full-bloom/)

Reduction Problems

- [LeetCode 658 — Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/)
- [LeetCode 729 — My Calendar I](https://leetcode.com/problems/my-calendar-i/)
- [LeetCode 792 — Number of Matching Subsequences](https://leetcode.com/problems/number-of-matching-subsequences/)
- [LeetCode 1712 — Ways to Split Array Into Three Subarrays](https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/)
- [LeetCode 1964 — Find the Longest Valid Obstacle Course at Each Position](https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/)
- [LeetCode 2389 — Longest Subsequence With Limited Sum](https://leetcode.com/problems/longest-subsequence-with-limited-sum/)

Related Patterns

- Lower Bound
- Classic Binary Search
- Ordered Set
- Coordinate Compression
- Prefix Sum

# Pattern 35

Pattern Name: Binary Search on Answer

Category: Binary Search

Difficulty: Intermediate

Recognition Keywords:

- Minimize the maximum
- Maximize the minimum
- Smallest feasible capacity
- Largest feasible threshold
- Monotone feasibility
- Numeric answer range

Core Idea:

Turn optimization into a yes/no feasibility test whose truth changes once across the answer range. Binary-search that transition and return the first or last feasible value.

Prerequisites:

- Classic Binary Search
- Greedy Thinking
- Reduction
- Monotone predicates
- Overflow-safe arithmetic

Common Algorithms:

- First-feasible search
- Last-feasible search
- Greedy feasibility check
- Capacity checking
- Partition-count checking
- Integer answer search

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 441 — Arranging Coins](https://leetcode.com/problems/arranging-coins/)

Medium:

- [LeetCode 875 — Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)
- [LeetCode 1011 — Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)
- [LeetCode 1482 — Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/)
- [LeetCode 1552 — Magnetic Force Between Two Balls](https://leetcode.com/problems/magnetic-force-between-two-balls/)
- [LeetCode 1760 — Minimum Limit of Balls in a Bag](https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/)
- [LeetCode 1870 — Minimum Speed to Arrive on Time](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/)
- [LeetCode 2187 — Minimum Time to Complete Trips](https://leetcode.com/problems/minimum-time-to-complete-trips/)

Hard:

- [LeetCode 410 — Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)
- [LeetCode 1231 — Divide Chocolate](https://leetcode.com/problems/divide-chocolate/)

Reduction Problems

- [LeetCode 668 — Kth Smallest Number in Multiplication Table](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/)
- [LeetCode 719 — Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance/)
- [LeetCode 1201 — Ugly Number III](https://leetcode.com/problems/ugly-number-iii/)
- [LeetCode 1898 — Maximum Number of Removable Characters](https://leetcode.com/problems/maximum-number-of-removable-characters/)
- [LeetCode 2071 — Maximum Number of Tasks You Can Assign](https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/)
- [LeetCode 2141 — Maximum Running Time of N Computers](https://leetcode.com/problems/maximum-running-time-of-n-computers/)
- [LeetCode 2226 — Maximum Candies Allocated to K Children](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/)

Related Patterns

- Parametric Search
- Lower Bound
- Greedy Thinking
- Prefix Sum
- Divide and Conquer

# Pattern 36

Pattern Name: Parametric Search

Category: Binary Search

Difficulty: Advanced

Recognition Keywords:

- Optimization-to-decision reduction
- Monotone decision oracle
- Continuous answer
- Precision tolerance
- Bottleneck threshold
- Count values below a parameter

Core Idea:

Parameterize the objective by a candidate value and ask whether a problem-specific oracle can achieve it. Search the monotone parameter space, using exact boundaries for discrete values or controlled iterations for real values.

Prerequisites:

- Binary Search on Answer
- Reduction
- Greedy feasibility
- Graph or DP feasibility
- Numerical precision

Common Algorithms:

- Discrete parametric search
- Floating-point binary search
- Bottleneck feasibility
- Rank-by-value search
- Lagrangian relaxation
- Parallel binary search

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 69 — Sqrt(x)](https://leetcode.com/problems/sqrtx/)

Medium:

- [LeetCode 378 — Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)
- [LeetCode 1283 — Find the Smallest Divisor Given a Threshold](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/)
- [LeetCode 1201 — Ugly Number III](https://leetcode.com/problems/ugly-number-iii/)
- [LeetCode 1891 — Cutting Ribbons](https://leetcode.com/problems/cutting-ribbons/)
- [LeetCode 2064 — Minimized Maximum of Products Distributed to Any Store](https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/)
- [LeetCode 2226 — Maximum Candies Allocated to K Children](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/)
- [LeetCode 2861 — Maximum Number of Alloys](https://leetcode.com/problems/maximum-number-of-alloys/)

Hard:

- [LeetCode 644 — Maximum Average Subarray II](https://leetcode.com/problems/maximum-average-subarray-ii/)
- [LeetCode 668 — Kth Smallest Number in Multiplication Table](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/)
- [LeetCode 719 — Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance/)
- [LeetCode 774 — Minimize Max Distance to Gas Station](https://leetcode.com/problems/minimize-max-distance-to-gas-station/)
- [LeetCode 878 — Nth Magical Number](https://leetcode.com/problems/nth-magical-number/)

Reduction Problems

- [LeetCode 410 — Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)
- [LeetCode 778 — Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/)
- [LeetCode 1631 — Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/)
- [LeetCode 1870 — Minimum Speed to Arrive on Time](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/)
- [LeetCode 2141 — Maximum Running Time of N Computers](https://leetcode.com/problems/maximum-running-time-of-n-computers/)
- [LeetCode 2258 — Escape the Spreading Fire](https://leetcode.com/problems/escape-the-spreading-fire/)
- [LeetCode 2616 — Minimize the Maximum Difference of Pairs](https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/)

Related Patterns

- Binary Search on Answer
- Lower Bound
- Greedy Thinking
- Shortest Path
- Dynamic Programming

# Pattern 37

Pattern Name: Stack Simulation and Cancellation

Category: Stack

Difficulty: Beginner

Recognition Keywords:

- Most recent unresolved item
- Undo or backspace
- Adjacent cancellation
- Nested operations
- Collision simulation

Core Idea:

Store unresolved items on a stack; each new item either combines with, cancels, or is pushed after the current top.

Prerequisites:

- Arrays
- Strings
- Stack operations
- Linear scan

Common Algorithms:

- Push-pop simulation
- Adjacent-pair cancellation
- Collision resolution
- Undo-log simulation

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 682 — Baseball Game](https://leetcode.com/problems/baseball-game/)
- [LeetCode 844 — Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/)
- [LeetCode 1047 — Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)
- [LeetCode 1544 — Make The String Great](https://leetcode.com/problems/make-the-string-great/)

Medium:

- [LeetCode 1441 — Build an Array With Stack Operations](https://leetcode.com/problems/build-an-array-with-stack-operations/)
- [LeetCode 71 — Simplify Path](https://leetcode.com/problems/simplify-path/)
- [LeetCode 735 — Asteroid Collision](https://leetcode.com/problems/asteroid-collision/)
- [LeetCode 946 — Validate Stack Sequences](https://leetcode.com/problems/validate-stack-sequences/)
- [LeetCode 1209 — Remove All Adjacent Duplicates in String II](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/)
- [LeetCode 2390 — Removing Stars From a String](https://leetcode.com/problems/removing-stars-from-a-string/)

Hard:

- [LeetCode 2751 — Robot Collisions](https://leetcode.com/problems/robot-collisions/)

Reduction Problems

- [LeetCode 1003 — Check If Word Is Valid After Substitutions](https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/)
- [LeetCode 1717 — Maximum Score From Removing Substrings](https://leetcode.com/problems/maximum-score-from-removing-substrings/)
- [LeetCode 2211 — Count Collisions on a Road](https://leetcode.com/problems/count-collisions-on-a-road/)
- [LeetCode 2696 — Minimum String Length After Removing Substrings](https://leetcode.com/problems/minimum-string-length-after-removing-substrings/)

Related Patterns

- Parentheses Matching
- Expression Evaluation
- Monotonic Increasing Stack
- Monotonic Decreasing Stack

# Pattern 38

Pattern Name: Parentheses Matching

Category: Stack

Difficulty: Beginner

Recognition Keywords:

- Balanced delimiters
- Nested scopes
- Minimum insertions or removals
- Matching open and close tokens
- Nesting depth

Core Idea:

Track unmatched opening delimiters and validate each closing delimiter against the latest compatible opener. For one delimiter type, a balance counter may replace the stack.

Prerequisites:

- Stack operations
- Strings
- Counters
- Greedy reasoning

Common Algorithms:

- Delimiter stack
- Balance counter
- Prefix-balance validation
- Bidirectional greedy scan

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 20 — Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
- [LeetCode 1021 — Remove Outermost Parentheses](https://leetcode.com/problems/remove-outermost-parentheses/)
- [LeetCode 1614 — Maximum Nesting Depth of the Parentheses](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/)

Medium:

- [LeetCode 22 — Generate Parentheses](https://leetcode.com/problems/generate-parentheses/)
- [LeetCode 678 — Valid Parenthesis String](https://leetcode.com/problems/valid-parenthesis-string/)
- [LeetCode 856 — Score of Parentheses](https://leetcode.com/problems/score-of-parentheses/)
- [LeetCode 921 — Minimum Add to Make Parentheses Valid](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/)
- [LeetCode 1249 — Minimum Remove to Make Valid Parentheses](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/)
- [LeetCode 1541 — Minimum Insertions to Balance a Parentheses String](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/)
- [LeetCode 1963 — Minimum Number of Swaps to Make the String Balanced](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/)

Hard:

- [LeetCode 32 — Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/)
- [LeetCode 301 — Remove Invalid Parentheses](https://leetcode.com/problems/remove-invalid-parentheses/)

Reduction Problems

- [LeetCode 761 — Special Binary String](https://leetcode.com/problems/special-binary-string/)
- [LeetCode 1111 — Maximum Nesting Depth of Two Valid Parentheses Strings](https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/)
- [LeetCode 1190 — Reverse Substrings Between Each Pair of Parentheses](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/)
- [LeetCode 2116 — Check if a Parentheses String Can Be Valid](https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/)

Related Patterns

- Stack Simulation and Cancellation
- Expression Evaluation
- Greedy Reachability and Coverage
- Backtracking Constraint Search

# Pattern 39

Pattern Name: Expression Evaluation

Category: Stack

Difficulty: Intermediate

Recognition Keywords:

- Operators and operands
- Precedence
- Nested expressions
- Postfix or infix notation
- Parser state

Core Idea:

Separate values from operators and reduce operations when precedence or closing delimiters permit. Recursive descent is the equivalent choice when the grammar has nested structure.

Prerequisites:

- Stack operations
- Strings
- Recursion
- Operator precedence

Common Algorithms:

- Operand and operator stacks
- Shunting-yard algorithm
- Postfix evaluation
- Recursive descent parsing
- Syntax-tree evaluation

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 2011 — Final Value of Variable After Performing Operations](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/)

Medium:

- [LeetCode 150 — Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/)
- [LeetCode 227 — Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii/)
- [LeetCode 241 — Different Ways to Add Parentheses](https://leetcode.com/problems/different-ways-to-add-parentheses/)
- [LeetCode 439 — Ternary Expression Parser](https://leetcode.com/problems/ternary-expression-parser/)
- [LeetCode 1006 — Clumsy Factorial](https://leetcode.com/problems/clumsy-factorial/)

Hard:

- [LeetCode 224 — Basic Calculator](https://leetcode.com/problems/basic-calculator/)
- [LeetCode 282 — Expression Add Operators](https://leetcode.com/problems/expression-add-operators/)
- [LeetCode 736 — Parse Lisp Expression](https://leetcode.com/problems/parse-lisp-expression/)
- [LeetCode 770 — Basic Calculator IV](https://leetcode.com/problems/basic-calculator-iv/)
- [LeetCode 1106 — Parsing A Boolean Expression](https://leetcode.com/problems/parsing-a-boolean-expression/)

Reduction Problems

- [LeetCode 385 — Mini Parser](https://leetcode.com/problems/mini-parser/)
- [LeetCode 726 — Number of Atoms](https://leetcode.com/problems/number-of-atoms/)
- [LeetCode 1628 — Design an Expression Tree With Evaluate Function](https://leetcode.com/problems/design-an-expression-tree-with-evaluate-function/)
- [LeetCode 1896 — Minimum Cost to Change the Final Value of Expression](https://leetcode.com/problems/minimum-cost-to-change-the-final-value-of-expression/)

Related Patterns

- Parentheses Matching
- Stack Simulation and Cancellation
- Divide-and-Conquer Tree Construction
- Backtracking Constraint Search

# Pattern 40

Pattern Name: Monotonic Increasing Stack

Category: Stack

Difficulty: Intermediate

Recognition Keywords:

- Previous smaller element
- Next smaller element
- Remove digits greedily
- Minimum contribution
- Increasing subsequence of candidates

Core Idea:

Maintain candidates in nondecreasing order, popping larger elements when a smaller value proves they can no longer be optimal or determines their boundary.

Prerequisites:

- Stack operations
- Linear scan
- Greedy invariants
- Contribution counting

Common Algorithms:

- Previous-smaller boundaries
- Next-smaller boundaries
- Monotonic candidate pruning
- Contribution-by-boundary counting

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 1475 — Final Prices With a Special Discount in a Shop](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/)

Medium:

- [LeetCode 316 — Remove Duplicate Letters](https://leetcode.com/problems/remove-duplicate-letters/)
- [LeetCode 402 — Remove K Digits](https://leetcode.com/problems/remove-k-digits/)
- [LeetCode 907 — Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums/)
- [LeetCode 1081 — Smallest Subsequence of Distinct Characters](https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/)
- [LeetCode 1673 — Find the Most Competitive Subsequence](https://leetcode.com/problems/find-the-most-competitive-subsequence/)
- [LeetCode 2104 — Sum of Subarray Ranges](https://leetcode.com/problems/sum-of-subarray-ranges/)

Hard:

- [LeetCode 2281 — Sum of Total Strength of Wizards](https://leetcode.com/problems/sum-of-total-strength-of-wizards/)

Reduction Problems

- [LeetCode 85 — Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/)
- [LeetCode 2865 — Beautiful Towers I](https://leetcode.com/problems/beautiful-towers-i/)
- [LeetCode 2818 — Apply Operations to Maximize Score](https://leetcode.com/problems/apply-operations-to-maximize-score/)
- [LeetCode 3113 — Find the Number of Subarrays Where Boundary Elements Are Maximum](https://leetcode.com/problems/find-the-number-of-subarrays-where-boundary-elements-are-maximum/)

Related Patterns

- Monotonic Decreasing Stack
- Histogram and Maximal Rectangle
- Greedy Thinking
- Prefix Sum

# Pattern 41

Pattern Name: Monotonic Decreasing Stack

Category: Stack

Difficulty: Intermediate

Recognition Keywords:

- Previous greater element
- Next greater element
- Waiting until a larger value
- Visibility to the right
- Span or unresolved indices

Core Idea:

Keep unresolved candidates in nonincreasing order; a larger incoming value resolves every smaller top and exposes its next-greater boundary.

Prerequisites:

- Stack operations
- Linear scan
- Index-distance calculation
- Invariant design

Common Algorithms:

- Next-greater element
- Previous-greater element
- Circular monotonic scan
- Span aggregation
- Collision-time resolution

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 496 — Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/)

Medium:

- [LeetCode 503 — Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/)
- [LeetCode 739 — Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)
- [LeetCode 853 — Car Fleet](https://leetcode.com/problems/car-fleet/)
- [LeetCode 901 — Online Stock Span](https://leetcode.com/problems/online-stock-span/)
- [LeetCode 1019 — Next Greater Node In Linked List](https://leetcode.com/problems/next-greater-node-in-linked-list/)
- [LeetCode 2289 — Steps to Make Array Non-decreasing](https://leetcode.com/problems/steps-to-make-array-non-decreasing/)

Hard:

- [LeetCode 1944 — Number of Visible People in a Queue](https://leetcode.com/problems/number-of-visible-people-in-a-queue/)
- [LeetCode 1776 — Car Fleet II](https://leetcode.com/problems/car-fleet-ii/)
- [LeetCode 2454 — Next Greater Element IV](https://leetcode.com/problems/next-greater-element-iv/)

Reduction Problems

- [LeetCode 42 — Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)
- [LeetCode 456 — 132 Pattern](https://leetcode.com/problems/132-pattern/)
- [LeetCode 581 — Shortest Unsorted Continuous Subarray](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/)
- [LeetCode 962 — Maximum Width Ramp](https://leetcode.com/problems/maximum-width-ramp/)
- [LeetCode 2940 — Find Building Where Alice and Bob Can Meet](https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/)

Related Patterns

- Monotonic Increasing Stack
- Histogram and Maximal Rectangle
- Monotonic Queue
- Binary Search on Answer

# Pattern 42

Pattern Name: Histogram and Maximal Rectangle

Category: Stack

Difficulty: Advanced

Recognition Keywords:

- Largest rectangle
- Nearest smaller boundaries
- Width times limiting height
- Binary matrix rows
- Subarray minimum as bottleneck

Core Idea:

Treat each value as the limiting height of its maximal span, found with nearest-smaller boundaries. Convert each matrix row into a histogram when solving rectangular binary-grid variants.

Prerequisites:

- Monotonic increasing stack
- Boundary indexing
- Contribution counting
- Matrix traversal

Common Algorithms:

- Largest-rectangle stack
- Sentinel flushing
- Previous-smaller and next-smaller bounds
- Row-to-histogram reduction

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 1504 — Count Submatrices With All Ones](https://leetcode.com/problems/count-submatrices-with-all-ones/)
- [LeetCode 1856 — Maximum Subarray Min-Product](https://leetcode.com/problems/maximum-subarray-min-product/)
- [LeetCode 1950 — Maximum of Minimum Values in All Subarrays](https://leetcode.com/problems/maximum-of-minimum-values-in-all-subarrays/)
- [LeetCode 2866 — Beautiful Towers II](https://leetcode.com/problems/beautiful-towers-ii/)

Hard:

- [LeetCode 84 — Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)
- [LeetCode 85 — Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/)
- [LeetCode 1793 — Maximum Score of a Good Subarray](https://leetcode.com/problems/maximum-score-of-a-good-subarray/)
- [LeetCode 2334 — Subarray With Elements Greater Than Varying Threshold](https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/)

Reduction Problems

- [LeetCode 42 — Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)
- [LeetCode 221 — Maximal Square](https://leetcode.com/problems/maximal-square/)
- [LeetCode 907 — Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums/)
- [LeetCode 2281 — Sum of Total Strength of Wizards](https://leetcode.com/problems/sum-of-total-strength-of-wizards/)

Related Patterns

- Monotonic Increasing Stack
- Monotonic Decreasing Stack
- Grid Dynamic Programming
- Prefix Sum

# Pattern 43

Pattern Name: Top K with a Heap

Category: Heap

Difficulty: Intermediate

Recognition Keywords:

- K largest or smallest
- Top K frequent
- Streaming rank
- Best K candidates
- Bounded priority queue

Core Idea:

Maintain only the best k candidates in a heap whose root is the easiest retained item to evict. This reduces full sorting to roughly O(n log k).

Prerequisites:

- Heap operations
- Sorting
- Hash maps
- Comparator design

Common Algorithms:

- Size-k min-heap
- Size-k max-heap
- Frequency heap
- Quickselect alternative
- Streaming selection

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 703 — Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/)
- [LeetCode 1046 — Last Stone Weight](https://leetcode.com/problems/last-stone-weight/)
- [LeetCode 1337 — The K Weakest Rows in a Matrix](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/)
- [LeetCode 2558 — Take Gifts From the Richest Pile](https://leetcode.com/problems/take-gifts-from-the-richest-pile/)

Medium:

- [LeetCode 215 — Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)
- [LeetCode 347 — Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)
- [LeetCode 451 — Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/)
- [LeetCode 692 — Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/)
- [LeetCode 973 — K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/)
- [LeetCode 1985 — Find the Kth Largest Integer in the Array](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/)

Hard:

- [LeetCode 1439 — Find the Kth Smallest Sum of a Matrix With Sorted Rows](https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/)

Reduction Problems

- [LeetCode 264 — Ugly Number II](https://leetcode.com/problems/ugly-number-ii/)
- [LeetCode 373 — Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)
- [LeetCode 378 — Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)
- [LeetCode 786 — K-th Smallest Prime Fraction](https://leetcode.com/problems/k-th-smallest-prime-fraction/)
- [LeetCode 2542 — Maximum Subsequence Score](https://leetcode.com/problems/maximum-subsequence-score/)

Related Patterns

- K-Way Merge
- Two Heaps
- Heap Scheduling
- Binary Search on Answer

# Pattern 44

Pattern Name: Two Heaps

Category: Heap

Difficulty: Advanced

Recognition Keywords:

- Online median
- Lower and upper halves
- Dynamic rank boundary
- Rebalancing partitions
- Sliding order statistic

Core Idea:

Split values across a max-heap for the lower partition and a min-heap for the upper partition, then rebalance sizes and boundary order after every update.

Prerequisites:

- Min-heaps and max-heaps
- Invariant design
- Streaming algorithms
- Lazy deletion

Common Algorithms:

- Median maintenance
- Balanced heap partitions
- Delayed removal
- Rank-boundary rebalancing

Representative Problems (Easy → Hard)

Hard:

- [LeetCode 295 — Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)
- [LeetCode 480 — Sliding Window Median](https://leetcode.com/problems/sliding-window-median/)
- [LeetCode 1825 — Finding MK Average](https://leetcode.com/problems/finding-mk-average/)
- [LeetCode 2102 — Sequentially Ordinal Rank Tracker](https://leetcode.com/problems/sequentially-ordinal-rank-tracker/)
- [LeetCode 3013 — Divide an Array Into Subarrays With Minimum Cost II](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-ii/)

Reduction Problems

- [LeetCode 502 — IPO](https://leetcode.com/problems/ipo/)
- [LeetCode 857 — Minimum Cost to Hire K Workers](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/)
- [LeetCode 1438 — Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/)
- [LeetCode 2034 — Stock Price Fluctuation](https://leetcode.com/problems/stock-price-fluctuation/)
- [LeetCode 2349 — Design a Number Container System](https://leetcode.com/problems/design-a-number-container-system/)

Related Patterns

- Top K with a Heap
- Heap with Lazy Deletion
- Ordered Set
- Sliding Window

# Pattern 45

Pattern Name: K-Way Merge

Category: Heap

Difficulty: Intermediate

Recognition Keywords:

- Multiple sorted sequences
- Globally next smallest
- Sorted rows or lists
- Kth value across streams
- Frontier expansion

Core Idea:

Place the current frontier of each sorted source in a heap, repeatedly extract the global next item, and advance only its source.

Prerequisites:

- Heap operations
- Sorted sequences
- Linked lists
- Comparator design

Common Algorithms:

- Heap-based multiway merge
- Frontier expansion
- Best-first enumeration
- Pair-sum generation

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 21 — Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
- [LeetCode 88 — Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)

Medium:

- [LeetCode 264 — Ugly Number II](https://leetcode.com/problems/ugly-number-ii/)
- [LeetCode 313 — Super Ugly Number](https://leetcode.com/problems/super-ugly-number/)
- [LeetCode 373 — Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)
- [LeetCode 378 — Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)
- [LeetCode 786 — K-th Smallest Prime Fraction](https://leetcode.com/problems/k-th-smallest-prime-fraction/)

Hard:

- [LeetCode 23 — Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
- [LeetCode 632 — Smallest Range Covering Elements from K Lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/)
- [LeetCode 1439 — Find the Kth Smallest Sum of a Matrix With Sorted Rows](https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/)

Reduction Problems

- [LeetCode 355 — Design Twitter](https://leetcode.com/problems/design-twitter/)
- [LeetCode 659 — Split Array into Consecutive Subsequences](https://leetcode.com/problems/split-array-into-consecutive-subsequences/)
- [LeetCode 1167 — Minimum Cost to Connect Sticks](https://leetcode.com/problems/minimum-cost-to-connect-sticks/)
- [LeetCode 1508 — Range Sum of Sorted Subarray Sums](https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/)
- [LeetCode 2386 — Find the K-Sum of an Array](https://leetcode.com/problems/find-the-k-sum-of-an-array/)

Related Patterns

- Top K with a Heap
- Linked-List Merge
- Heap Scheduling
- Binary Search on Answer

# Pattern 46

Pattern Name: Heap Scheduling

Category: Heap

Difficulty: Intermediate

Recognition Keywords:

- Next available task
- Deadlines or cooldowns
- Limited resources
- Earliest finishing job
- Dynamic priorities

Core Idea:

Sort tasks by release time or deadline and use a heap to select the best currently feasible task, server, or resource at each decision point.

Prerequisites:

- Heap operations
- Sorting
- Greedy invariants
- Interval endpoints

Common Algorithms:

- Available-task priority queue
- Busy-resource heap
- Deadline scheduling
- Cooldown simulation
- Event-driven scheduling

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 2335 — Minimum Amount of Time to Fill Cups](https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/)

Medium:

- [LeetCode 621 — Task Scheduler](https://leetcode.com/problems/task-scheduler/)
- [LeetCode 767 — Reorganize String](https://leetcode.com/problems/reorganize-string/)
- [LeetCode 1054 — Distant Barcodes](https://leetcode.com/problems/distant-barcodes/)
- [LeetCode 1353 — Maximum Number of Events That Can Be Attended](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/)
- [LeetCode 1642 — Furthest Building You Can Reach](https://leetcode.com/problems/furthest-building-you-can-reach/)
- [LeetCode 1834 — Single-Threaded CPU](https://leetcode.com/problems/single-threaded-cpu/)
- [LeetCode 1882 — Process Tasks Using Servers](https://leetcode.com/problems/process-tasks-using-servers/)
- [LeetCode 1942 — The Number of the Smallest Unoccupied Chair](https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/)

Hard:

- [LeetCode 630 — Course Schedule III](https://leetcode.com/problems/course-schedule-iii/)
- [LeetCode 2402 — Meeting Rooms III](https://leetcode.com/problems/meeting-rooms-iii/)

Reduction Problems

- [LeetCode 358 — Rearrange String k Distance Apart](https://leetcode.com/problems/rearrange-string-k-distance-apart/)
- [LeetCode 502 — IPO](https://leetcode.com/problems/ipo/)
- [LeetCode 1705 — Maximum Number of Eaten Apples](https://leetcode.com/problems/maximum-number-of-eaten-apples/)
- [LeetCode 2054 — Two Best Non-Overlapping Events](https://leetcode.com/problems/two-best-non-overlapping-events/)
- [LeetCode 2542 — Maximum Subsequence Score](https://leetcode.com/problems/maximum-subsequence-score/)

Related Patterns

- Top K with a Heap
- Greedy + Heap
- Interval Scheduling
- Interval Partitioning
- Event Processing

# Pattern 47

Pattern Name: Heap with Lazy Deletion

Category: Heap

Difficulty: Advanced

Recognition Keywords:

- Heap lacks arbitrary deletion
- Stale entries
- Sliding-window extrema
- Mutable priorities
- Versioned records

Core Idea:

Leave obsolete entries in the heap and record their invalidation separately. Discard stale roots only when they reach the top, preserving logarithmic updates.

Prerequisites:

- Heap operations
- Hash maps
- Sliding window
- Invariant design

Common Algorithms:

- Delayed-deletion map
- Version-stamped heap entries
- Dual heaps with pruning
- Stale-root cleanup

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 2034 — Stock Price Fluctuation](https://leetcode.com/problems/stock-price-fluctuation/)
- [LeetCode 2349 — Design a Number Container System](https://leetcode.com/problems/design-a-number-container-system/)
- [LeetCode 2353 — Design a Food Rating System](https://leetcode.com/problems/design-a-food-rating-system/)
- [LeetCode 3092 — Most Frequent IDs](https://leetcode.com/problems/most-frequent-ids/)

Hard:

- [LeetCode 480 — Sliding Window Median](https://leetcode.com/problems/sliding-window-median/)
- [LeetCode 716 — Max Stack](https://leetcode.com/problems/max-stack/)
- [LeetCode 1172 — Dinner Plate Stacks](https://leetcode.com/problems/dinner-plate-stacks/)

Reduction Problems

- [LeetCode 218 — The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/)
- [LeetCode 239 — Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
- [LeetCode 1438 — Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/)

Related Patterns

- Two Heaps
- Heap Scheduling
- Monotonic Queue
- Ordered Set

# Pattern 48

Pattern Name: Dummy Node

Category: Linked List

Difficulty: Beginner

Recognition Keywords:

- Head may change
- Delete first node
- Uniform splice logic
- Build an output list
- Predecessor required

Core Idea:

Attach a sentinel before the real head so insertions, deletions, and splices at the front use the same predecessor logic as internal nodes.

Prerequisites:

- Linked-list nodes
- Pointer reassignment
- Linear traversal

Common Algorithms:

- Sentinel-head traversal
- Tail-builder pattern
- Predecessor deletion
- Segment splicing

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 83 — Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)
- [LeetCode 203 — Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/)

Medium:

- [LeetCode 2 — Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)
- [LeetCode 19 — Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
- [LeetCode 24 — Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/)
- [LeetCode 82 — Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/)
- [LeetCode 86 — Partition List](https://leetcode.com/problems/partition-list/)
- [LeetCode 1171 — Remove Zero Sum Consecutive Nodes from Linked List](https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/)
- [LeetCode 1669 — Merge In Between Linked Lists](https://leetcode.com/problems/merge-in-between-linked-lists/)
- [LeetCode 2181 — Merge Nodes in Between Zeros](https://leetcode.com/problems/merge-nodes-in-between-zeros/)

Reduction Problems

- [LeetCode 146 — LRU Cache](https://leetcode.com/problems/lru-cache/)
- [LeetCode 21 — Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
- [LeetCode 25 — Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)
- [LeetCode 61 — Rotate List](https://leetcode.com/problems/rotate-list/)
- [LeetCode 147 — Insertion Sort List](https://leetcode.com/problems/insertion-sort-list/)

Related Patterns

- Linked-List Reversal
- Linked-List Merge
- Linked-List Fast-Slow Pointer
- Reverse in K-Groups

# Pattern 49

Pattern Name: Linked-List Reversal

Category: Linked List

Difficulty: Beginner

Recognition Keywords:

- Reverse pointer direction
- Process from the end
- Reorder halves
- In-place list transformation
- Previous-current-next pointers

Core Idea:

Walk the list while redirecting each next pointer toward the processed prefix, preserving the unprocessed suffix before every mutation.

Prerequisites:

- Linked-list nodes
- Pointer reassignment
- Dummy node
- Iteration and recursion

Common Algorithms:

- Iterative three-pointer reversal
- Recursive reversal
- Partial-list reversal
- Reverse-and-restore

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 206 — Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
- [LeetCode 234 — Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)

Medium:

- [LeetCode 92 — Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/)
- [LeetCode 143 — Reorder List](https://leetcode.com/problems/reorder-list/)
- [LeetCode 445 — Add Two Numbers II](https://leetcode.com/problems/add-two-numbers-ii/)
- [LeetCode 2074 — Reverse Nodes in Even Length Groups](https://leetcode.com/problems/reverse-nodes-in-even-length-groups/)
- [LeetCode 2130 — Maximum Twin Sum of a Linked List](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/)
- [LeetCode 2487 — Remove Nodes From Linked List](https://leetcode.com/problems/remove-nodes-from-linked-list/)
- [LeetCode 2816 — Double a Number Represented as a Linked List](https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/)

Reduction Problems

- [LeetCode 24 — Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/)
- [LeetCode 25 — Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)
- [LeetCode 61 — Rotate List](https://leetcode.com/problems/rotate-list/)
- [LeetCode 369 — Plus One Linked List](https://leetcode.com/problems/plus-one-linked-list/)
- [LeetCode 1265 — Print Immutable Linked List in Reverse](https://leetcode.com/problems/print-immutable-linked-list-in-reverse/)

Related Patterns

- Dummy Node
- Reverse in K-Groups
- Linked-List Fast-Slow Pointer
- Linked-List Merge

# Pattern 50

Pattern Name: Reverse in K-Groups

Category: Linked List

Difficulty: Advanced

Recognition Keywords:

- Fixed-size node blocks
- Reverse each segment
- Preserve group boundaries
- Reconnect sublists
- Partial final group

Core Idea:

Locate a complete group, reverse exactly that node range, and reconnect its old head and new head to the neighboring segments without losing the suffix.

Prerequisites:

- Linked-list reversal
- Dummy node
- Pointer boundary management
- Fast-slow pointer gaps

Common Algorithms:

- Iterative block reversal
- Recursive group reversal
- Half-open segment reversal
- Group-boundary scanning

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 1474 — Delete N Nodes After M Nodes of a Linked List](https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/)

Medium:

- [LeetCode 24 — Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/)
- [LeetCode 92 — Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/)
- [LeetCode 1721 — Swapping Nodes in a Linked List](https://leetcode.com/problems/swapping-nodes-in-a-linked-list/)
- [LeetCode 2074 — Reverse Nodes in Even Length Groups](https://leetcode.com/problems/reverse-nodes-in-even-length-groups/)

Hard:

- [LeetCode 25 — Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)

Reduction Problems

- [LeetCode 61 — Rotate List](https://leetcode.com/problems/rotate-list/)
- [LeetCode 143 — Reorder List](https://leetcode.com/problems/reorder-list/)
- [LeetCode 186 — Reverse Words in a String II](https://leetcode.com/problems/reverse-words-in-a-string-ii/)
- [LeetCode 189 — Rotate Array](https://leetcode.com/problems/rotate-array/)
- [LeetCode 2130 — Maximum Twin Sum of a Linked List](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/)

Related Patterns

- Linked-List Reversal
- Dummy Node
- Linked-List Fast-Slow Pointer
- Invariant Design

# Pattern 51

Pattern Name: Linked-List Fast-Slow Pointer

Category: Linked List

Difficulty: Beginner

Recognition Keywords:

- Middle node
- Nth node from end
- Split into halves
- Fixed pointer gap
- Repeated-state trajectory

Core Idea:

Advance pointers at different speeds or with a fixed gap so their relative positions reveal a midpoint, suffix position, or repeated state in one pass.

Prerequisites:

- Linked-list traversal
- Two pointers
- Pointer invariants

Common Algorithms:

- Tortoise and hare
- Fixed-gap pointers
- Midpoint splitting
- Runner technique

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 876 — Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)

Medium:

- [LeetCode 19 — Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
- [LeetCode 61 — Rotate List](https://leetcode.com/problems/rotate-list/)
- [LeetCode 148 — Sort List](https://leetcode.com/problems/sort-list/)
- [LeetCode 457 — Circular Array Loop](https://leetcode.com/problems/circular-array-loop/)
- [LeetCode 2095 — Delete the Middle Node of a Linked List](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/)

Reduction Problems

- [LeetCode 142 — Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)
- [LeetCode 202 — Happy Number](https://leetcode.com/problems/happy-number/)
- [LeetCode 234 — Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)
- [LeetCode 287 — Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)
- [LeetCode 143 — Reorder List](https://leetcode.com/problems/reorder-list/)

Related Patterns

- Linked-List Cycle Detection
- Linked-List Reversal
- Divide-and-Conquer List Sorting
- Same-Direction Two Pointers

# Pattern 52

Pattern Name: Linked-List Merge

Category: Linked List

Difficulty: Intermediate

Recognition Keywords:

- Sorted linked lists
- Choose smaller head
- Build merged output
- Parallel traversal
- Merge-sort combine step

Core Idea:

Compare the current nodes of sorted inputs, append the smaller candidate to a shared tail, and advance only its source.

Prerequisites:

- Linked-list traversal
- Dummy node
- Sorting
- Comparator design

Common Algorithms:

- Two-list merge
- Recursive merge
- Pairwise k-list merge
- Tail-builder pattern

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 21 — Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

Medium:

- [LeetCode 147 — Insertion Sort List](https://leetcode.com/problems/insertion-sort-list/)
- [LeetCode 148 — Sort List](https://leetcode.com/problems/sort-list/)
- [LeetCode 708 — Insert into a Sorted Circular Linked List](https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/)
- [LeetCode 1634 — Add Two Polynomials Represented as Linked Lists](https://leetcode.com/problems/add-two-polynomials-represented-as-linked-lists/)
- [LeetCode 1669 — Merge In Between Linked Lists](https://leetcode.com/problems/merge-in-between-linked-lists/)

Hard:

- [LeetCode 23 — Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)

Reduction Problems

- [LeetCode 2 — Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)
- [LeetCode 88 — Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)
- [LeetCode 445 — Add Two Numbers II](https://leetcode.com/problems/add-two-numbers-ii/)
- [LeetCode 986 — Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/)

Related Patterns

- Dummy Node
- K-Way Merge
- Divide-and-Conquer List Sorting
- Merge Intervals

# Pattern 53

Pattern Name: Linked-List Cycle Detection

Category: Linked List

Difficulty: Intermediate

Recognition Keywords:

- Repeated state
- Functional graph
- Cycle entry
- Constant extra space
- Pointer trajectories meet

Core Idea:

Move one pointer one step and another two steps; they meet exactly when a reachable cycle exists. Resetting one pointer to the start then reveals the cycle entry.

Prerequisites:

- Linked-list fast-slow pointer
- Modular reasoning
- Pointer invariants
- Functional graphs

Common Algorithms:

- Floyd cycle detection
- Cycle-entry recovery
- Cycle-length measurement
- Pointer switching

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 141 — Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
- [LeetCode 160 — Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/)
- [LeetCode 202 — Happy Number](https://leetcode.com/problems/happy-number/)

Medium:

- [LeetCode 142 — Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)
- [LeetCode 287 — Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)
- [LeetCode 457 — Circular Array Loop](https://leetcode.com/problems/circular-array-loop/)

Reduction Problems

- [LeetCode 565 — Array Nesting](https://leetcode.com/problems/array-nesting/)
- [LeetCode 2127 — Maximum Employees to Be Invited to a Meeting](https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/)
- [LeetCode 2359 — Find Closest Node to Given Two Nodes](https://leetcode.com/problems/find-closest-node-to-given-two-nodes/)
- [LeetCode 2360 — Longest Cycle in a Graph](https://leetcode.com/problems/longest-cycle-in-a-graph/)

Related Patterns

- Linked-List Fast-Slow Pointer
- Graph Cycle Detection
- Strongly Connected Components
- Invariant Design

# Pattern 54

Pattern Name: Divide-and-Conquer List Sorting

Category: Linked List

Difficulty: Intermediate

Recognition Keywords:

- Sort linked list
- Split at midpoint
- Merge sorted halves
- O(1) auxiliary node storage
- Stable ordering

Core Idea:

Split the list at its midpoint, recursively sort both halves, and merge them by relinking nodes. Bottom-up merging removes recursion-stack overhead.

Prerequisites:

- Linked-list fast-slow pointer
- Linked-list merge
- Divide and conquer
- Recurrence analysis

Common Algorithms:

- Top-down merge sort
- Bottom-up merge sort
- Midpoint splitting
- Stable linked-list merge

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 21 — Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
- [LeetCode 876 — Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)

Medium:

- [LeetCode 109 — Convert Sorted List to Binary Search Tree](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/)
- [LeetCode 147 — Insertion Sort List](https://leetcode.com/problems/insertion-sort-list/)
- [LeetCode 148 — Sort List](https://leetcode.com/problems/sort-list/)

Hard:

- [LeetCode 23 — Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)

Reduction Problems

- [LeetCode 912 — Sort an Array](https://leetcode.com/problems/sort-an-array/)
- [LeetCode 315 — Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)
- [LeetCode 327 — Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)
- [LeetCode 493 — Reverse Pairs](https://leetcode.com/problems/reverse-pairs/)
- [LeetCode 1649 — Create Sorted Array through Instructions](https://leetcode.com/problems/create-sorted-array-through-instructions/)

Related Patterns

- Linked-List Merge
- Linked-List Fast-Slow Pointer
- Divide and Conquer
- K-Way Merge

# Pattern 55

Pattern Name: Merge Intervals

Category: Intervals

Difficulty: Beginner

Recognition Keywords:

- Overlapping ranges
- Union of intervals
- Insert a range
- Covered segments
- Disjoint interval output

Core Idea:

Sort intervals by start, then extend the current merged interval while overlap continues and emit it when a gap begins.

Prerequisites:

- Sorting
- Linear scan
- Interval endpoints
- Comparator design

Common Algorithms:

- Sort-and-merge
- Two-list interval intersection
- Incremental interval insertion
- Ordered interval map

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 228 — Summary Ranges](https://leetcode.com/problems/summary-ranges/)
- [LeetCode 495 — Teemo Attacking](https://leetcode.com/problems/teemo-attacking/)
- [LeetCode 1893 — Check if All the Integers in a Range Are Covered](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/)

Medium:

- [LeetCode 56 — Merge Intervals](https://leetcode.com/problems/merge-intervals/)
- [LeetCode 57 — Insert Interval](https://leetcode.com/problems/insert-interval/)
- [LeetCode 986 — Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/)
- [LeetCode 1288 — Remove Covered Intervals](https://leetcode.com/problems/remove-covered-intervals/)

Hard:

- [LeetCode 352 — Data Stream as Disjoint Intervals](https://leetcode.com/problems/data-stream-as-disjoint-intervals/)
- [LeetCode 715 — Range Module](https://leetcode.com/problems/range-module/)
- [LeetCode 2276 — Count Integers in Intervals](https://leetcode.com/problems/count-integers-in-intervals/)

Reduction Problems

- [LeetCode 616 — Add Bold Tag in String](https://leetcode.com/problems/add-bold-tag-in-string/)
- [LeetCode 758 — Bold Words in String](https://leetcode.com/problems/bold-words-in-string/)
- [LeetCode 759 — Employee Free Time](https://leetcode.com/problems/employee-free-time/)
- [LeetCode 763 — Partition Labels](https://leetcode.com/problems/partition-labels/)
- [LeetCode 1229 — Meeting Scheduler](https://leetcode.com/problems/meeting-scheduler/)

Related Patterns

- Sort + Scan
- Sweep Line
- Interval Scheduling
- Ordered Set

# Pattern 56

Pattern Name: Interval Scheduling

Category: Intervals

Difficulty: Intermediate

Recognition Keywords:

- Maximum non-overlapping intervals
- Minimum removals
- Earliest finishing time
- Weighted jobs
- Cover a target range

Core Idea:

For unweighted selection, choosing the feasible interval with the earliest finish preserves the most future options. Weighted or capacity-limited variants add dynamic programming or a heap.

Prerequisites:

- Sorting
- Greedy proofs
- Binary search
- Dynamic programming basics

Common Algorithms:

- Earliest-finish greedy
- Weighted interval scheduling
- Endpoint binary search
- Greedy interval covering

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 252 — Meeting Rooms](https://leetcode.com/problems/meeting-rooms/)

Medium:

- [LeetCode 435 — Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)
- [LeetCode 452 — Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)
- [LeetCode 646 — Maximum Length of Pair Chain](https://leetcode.com/problems/maximum-length-of-pair-chain/)
- [LeetCode 1024 — Video Stitching](https://leetcode.com/problems/video-stitching/)
- [LeetCode 2054 — Two Best Non-Overlapping Events](https://leetcode.com/problems/two-best-non-overlapping-events/)

Hard:

- [LeetCode 1235 — Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/)
- [LeetCode 1326 — Minimum Number of Taps to Open to Water a Garden](https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/)
- [LeetCode 1751 — Maximum Number of Events That Can Be Attended II](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/)

Reduction Problems

- [LeetCode 630 — Course Schedule III](https://leetcode.com/problems/course-schedule-iii/)
- [LeetCode 763 — Partition Labels](https://leetcode.com/problems/partition-labels/)
- [LeetCode 1353 — Maximum Number of Events That Can Be Attended](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/)
- [LeetCode 2008 — Maximum Earnings From Taxi](https://leetcode.com/problems/maximum-earnings-from-taxi/)
- [LeetCode 2830 — Maximize the Profit as the Salesman](https://leetcode.com/problems/maximize-the-profit-as-the-salesman/)

Related Patterns

- Merge Intervals
- Interval Partitioning
- Exchange Argument
- Greedy + Heap
- Binary Search

# Pattern 57

Pattern Name: Interval Partitioning

Category: Intervals

Difficulty: Intermediate

Recognition Keywords:

- Minimum rooms or groups
- Maximum simultaneous intervals
- Allocate reusable resources
- Calendar overlap count
- Start and end events

Core Idea:

Process intervals by start time and reuse the resource with the earliest finish whenever possible. Equivalently, the required resource count is the maximum number of concurrent intervals.

Prerequisites:

- Sorting
- Heaps
- Sweep line
- Interval endpoints

Common Algorithms:

- Earliest-finish min-heap
- Start-end two-pointer sweep
- Difference-map sweep
- Resource reuse simulation

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 252 — Meeting Rooms](https://leetcode.com/problems/meeting-rooms/)
- [LeetCode 1854 — Maximum Population Year](https://leetcode.com/problems/maximum-population-year/)

Medium:

- [LeetCode 253 — Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/)
- [LeetCode 729 — My Calendar I](https://leetcode.com/problems/my-calendar-i/)
- [LeetCode 731 — My Calendar II](https://leetcode.com/problems/my-calendar-ii/)
- [LeetCode 1094 — Car Pooling](https://leetcode.com/problems/car-pooling/)
- [LeetCode 2406 — Divide Intervals Into Minimum Number of Groups](https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/)

Hard:

- [LeetCode 732 — My Calendar III](https://leetcode.com/problems/my-calendar-iii/)
- [LeetCode 2251 — Number of Flowers in Full Bloom](https://leetcode.com/problems/number-of-flowers-in-full-bloom/)

Reduction Problems

- [LeetCode 1882 — Process Tasks Using Servers](https://leetcode.com/problems/process-tasks-using-servers/)
- [LeetCode 1942 — The Number of the Smallest Unoccupied Chair](https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/)
- [LeetCode 2402 — Meeting Rooms III](https://leetcode.com/problems/meeting-rooms-iii/)

Related Patterns

- Interval Scheduling
- Sweep Line
- Event Processing
- Heap Scheduling

# Pattern 58

Pattern Name: Exchange Argument

Category: Greedy

Difficulty: Intermediate

Recognition Keywords:

- Locally optimal ordering
- Swap adjacent decisions
- Canonical sorted order
- Irrevocable choices
- Greedy proof required

Core Idea:

Show that replacing the first deviation from a greedy choice with the greedy choice cannot worsen an optimal solution. Repeating the exchange transforms some optimum into the greedy construction.

Prerequisites:

- Sorting
- Proof by contradiction
- Invariant design
- Optimization objectives

Common Algorithms:

- Pairwise exchange proof
- Stay-ahead proof
- Sorted greedy scan
- Canonical-order transformation

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 455 — Assign Cookies](https://leetcode.com/problems/assign-cookies/)
- [LeetCode 561 — Array Partition](https://leetcode.com/problems/array-partition/)
- [LeetCode 860 — Lemonade Change](https://leetcode.com/problems/lemonade-change/)
- [LeetCode 1005 — Maximize Sum Of Array After K Negations](https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/)
- [LeetCode 1710 — Maximum Units on a Truck](https://leetcode.com/problems/maximum-units-on-a-truck/)

Medium:

- [LeetCode 134 — Gas Station](https://leetcode.com/problems/gas-station/)
- [LeetCode 406 — Queue Reconstruction by Height](https://leetcode.com/problems/queue-reconstruction-by-height/)
- [LeetCode 881 — Boats to Save People](https://leetcode.com/problems/boats-to-save-people/)
- [LeetCode 1029 — Two City Scheduling](https://leetcode.com/problems/two-city-scheduling/)
- [LeetCode 1647 — Minimum Deletions to Make Character Frequencies Unique](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/)

Hard:

- [LeetCode 330 — Patching Array](https://leetcode.com/problems/patching-array/)

Reduction Problems

- [LeetCode 135 — Candy](https://leetcode.com/problems/candy/)
- [LeetCode 452 — Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)
- [LeetCode 517 — Super Washing Machines](https://leetcode.com/problems/super-washing-machines/)
- [LeetCode 630 — Course Schedule III](https://leetcode.com/problems/course-schedule-iii/)
- [LeetCode 738 — Monotone Increasing Digits](https://leetcode.com/problems/monotone-increasing-digits/)

Related Patterns

- Greedy Thinking
- Sort + Greedy
- Interval Scheduling
- Greedy + Heap

# Pattern 59

Pattern Name: Greedy + Heap

Category: Greedy

Difficulty: Advanced

Recognition Keywords:

- Revise an earlier choice
- Keep best feasible subset
- Sorted arrivals with dynamic selection
- Drop worst selected item
- Resource allocation by priority

Core Idea:

Process candidates in a greedy order while a heap records chosen items, enabling the worst current choice to be replaced when feasibility or value improves.

Prerequisites:

- Greedy invariants
- Heap operations
- Sorting
- Exchange argument

Common Algorithms:

- Select-then-evict
- Sort-one-dimension and heap-the-other
- Deadline heap
- Capital-profit dual heap
- Greedy priority simulation

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 1046 — Last Stone Weight](https://leetcode.com/problems/last-stone-weight/)
- [LeetCode 2335 — Minimum Amount of Time to Fill Cups](https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/)

Medium:

- [LeetCode 659 — Split Array into Consecutive Subsequences](https://leetcode.com/problems/split-array-into-consecutive-subsequences/)
- [LeetCode 1642 — Furthest Building You Can Reach](https://leetcode.com/problems/furthest-building-you-can-reach/)
- [LeetCode 1705 — Maximum Number of Eaten Apples](https://leetcode.com/problems/maximum-number-of-eaten-apples/)
- [LeetCode 2542 — Maximum Subsequence Score](https://leetcode.com/problems/maximum-subsequence-score/)

Hard:

- [LeetCode 502 — IPO](https://leetcode.com/problems/ipo/)
- [LeetCode 630 — Course Schedule III](https://leetcode.com/problems/course-schedule-iii/)
- [LeetCode 857 — Minimum Cost to Hire K Workers](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/)
- [LeetCode 871 — Minimum Number of Refueling Stops](https://leetcode.com/problems/minimum-number-of-refueling-stops/)
- [LeetCode 1383 — Maximum Performance of a Team](https://leetcode.com/problems/maximum-performance-of-a-team/)
- [LeetCode 2813 — Maximum Elegance of a K-Length Subsequence](https://leetcode.com/problems/maximum-elegance-of-a-k-length-subsequence/)

Reduction Problems

- [LeetCode 767 — Reorganize String](https://leetcode.com/problems/reorganize-string/)
- [LeetCode 1054 — Distant Barcodes](https://leetcode.com/problems/distant-barcodes/)
- [LeetCode 1405 — Longest Happy String](https://leetcode.com/problems/longest-happy-string/)
- [LeetCode 1675 — Minimize Deviation in Array](https://leetcode.com/problems/minimize-deviation-in-array/)
- [LeetCode 1834 — Single-Threaded CPU](https://leetcode.com/problems/single-threaded-cpu/)

Related Patterns

- Exchange Argument
- Heap Scheduling
- Top K with a Heap
- Interval Scheduling

# Pattern 60

Pattern Name: Greedy Reachability and Coverage

Category: Greedy

Difficulty: Intermediate

Recognition Keywords:

- Farthest reachable boundary
- Cover a continuous target
- Minimum jumps or segments
- Extend current frontier
- Detect an unreachable gap

Core Idea:

Maintain the farthest boundary reachable with the decisions already committed, scanning all candidates available before that boundary to choose the next maximal extension.

Prerequisites:

- Linear scan
- Interval endpoints
- Greedy invariants
- Exchange argument

Common Algorithms:

- Farthest-frontier scan
- Layered greedy jumps
- Greedy interval cover
- Smallest-missing-coverage invariant

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 605 — Can Place Flowers](https://leetcode.com/problems/can-place-flowers/)

Medium:

- [LeetCode 45 — Jump Game II](https://leetcode.com/problems/jump-game-ii/)
- [LeetCode 55 — Jump Game](https://leetcode.com/problems/jump-game/)
- [LeetCode 763 — Partition Labels](https://leetcode.com/problems/partition-labels/)
- [LeetCode 1024 — Video Stitching](https://leetcode.com/problems/video-stitching/)
- [LeetCode 1899 — Merge Triplets to Form Target Triplet](https://leetcode.com/problems/merge-triplets-to-form-target-triplet/)

Hard:

- [LeetCode 330 — Patching Array](https://leetcode.com/problems/patching-array/)
- [LeetCode 757 — Set Intersection Size At Least Two](https://leetcode.com/problems/set-intersection-size-at-least-two/)
- [LeetCode 1326 — Minimum Number of Taps to Open to Water a Garden](https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/)

Reduction Problems

- [LeetCode 134 — Gas Station](https://leetcode.com/problems/gas-station/)
- [LeetCode 665 — Non-decreasing Array](https://leetcode.com/problems/non-decreasing-array/)
- [LeetCode 1529 — Minimum Suffix Flips](https://leetcode.com/problems/minimum-suffix-flips/)
- [LeetCode 2366 — Minimum Replacements to Sort the Array](https://leetcode.com/problems/minimum-replacements-to-sort-the-array/)
- [LeetCode 2498 — Frog Jump II](https://leetcode.com/problems/frog-jump-ii/)

Related Patterns

- Interval Scheduling
- Exchange Argument
- Sliding Window
- Binary Search on Answer

# Pattern 61

Pattern Name: Tree DFS

Category: Trees

Difficulty: Beginner

Recognition Keywords:

- Subtree recursion
- Preorder, inorder, or postorder
- Parent-child aggregation
- Visit every node
- Recursive tree structure

Core Idea:

Define what a recursive call receives and returns for one subtree, then combine child results at the correct preorder, inorder, or postorder moment.

Prerequisites:

- Recursion
- Stack operations
- Binary-tree nodes
- Complexity analysis

Common Algorithms:

- Recursive preorder
- Recursive inorder
- Recursive postorder
- Iterative DFS stack
- Euler entry-exit traversal

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 94 — Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)
- [LeetCode 100 — Same Tree](https://leetcode.com/problems/same-tree/)
- [LeetCode 101 — Symmetric Tree](https://leetcode.com/problems/symmetric-tree/)
- [LeetCode 104 — Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
- [LeetCode 144 — Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)
- [LeetCode 145 — Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)
- [LeetCode 226 — Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)
- [LeetCode 559 — Maximum Depth of N-ary Tree](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/)
- [LeetCode 572 — Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/)
- [LeetCode 589 — N-ary Tree Preorder Traversal](https://leetcode.com/problems/n-ary-tree-preorder-traversal/)
- [LeetCode 590 — N-ary Tree Postorder Traversal](https://leetcode.com/problems/n-ary-tree-postorder-traversal/)
- [LeetCode 617 — Merge Two Binary Trees](https://leetcode.com/problems/merge-two-binary-trees/)

Medium:

- [LeetCode 114 — Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/)
- [LeetCode 652 — Find Duplicate Subtrees](https://leetcode.com/problems/find-duplicate-subtrees/)

Reduction Problems

- [LeetCode 133 — Clone Graph](https://leetcode.com/problems/clone-graph/)
- [LeetCode 200 — Number of Islands](https://leetcode.com/problems/number-of-islands/)
- [LeetCode 332 — Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/)
- [LeetCode 690 — Employee Importance](https://leetcode.com/problems/employee-importance/)
- [LeetCode 1376 — Time Needed to Inform All Employees](https://leetcode.com/problems/time-needed-to-inform-all-employees/)
- [LeetCode 1519 — Number of Nodes in the Sub-Tree With the Same Label](https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/)

Related Patterns

- Tree BFS
- Root-to-Leaf Path State
- Tree DP
- Graph DFS
- Backtracking

# Pattern 62

Pattern Name: Tree BFS

Category: Trees

Difficulty: Beginner

Recognition Keywords:

- Level order
- Nearest depth
- Per-level aggregation
- Right or left view
- Sibling processing

Core Idea:

Use a queue to process nodes in nondecreasing depth, usually freezing the current queue size to isolate one level at a time.

Prerequisites:

- Queues
- Binary-tree nodes
- Breadth-first search
- Level counters

Common Algorithms:

- Level-order traversal
- Multi-field queue state
- Per-level aggregation
- Zigzag level traversal

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 111 — Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/)
- [LeetCode 637 — Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/)
- [LeetCode 993 — Cousins in Binary Tree](https://leetcode.com/problems/cousins-in-binary-tree/)

Medium:

- [LeetCode 102 — Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
- [LeetCode 107 — Binary Tree Level Order Traversal II](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/)
- [LeetCode 199 — Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/)
- [LeetCode 429 — N-ary Tree Level Order Traversal](https://leetcode.com/problems/n-ary-tree-level-order-traversal/)
- [LeetCode 513 — Find Bottom Left Tree Value](https://leetcode.com/problems/find-bottom-left-tree-value/)
- [LeetCode 515 — Find Largest Value in Each Tree Row](https://leetcode.com/problems/find-largest-value-in-each-tree-row/)
- [LeetCode 662 — Maximum Width of Binary Tree](https://leetcode.com/problems/maximum-width-of-binary-tree/)
- [LeetCode 1161 — Maximum Level Sum of a Binary Tree](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/)
- [LeetCode 1609 — Even Odd Tree](https://leetcode.com/problems/even-odd-tree/)
- [LeetCode 2415 — Reverse Odd Levels of Binary Tree](https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/)

Reduction Problems

- [LeetCode 116 — Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/)
- [LeetCode 117 — Populating Next Right Pointers in Each Node II](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/)
- [LeetCode 863 — All Nodes Distance K in Binary Tree](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/)
- [LeetCode 2471 — Minimum Number of Operations to Sort a Binary Tree by Level](https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/)
- [LeetCode 2583 — Kth Largest Sum in a Binary Tree](https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/)

Related Patterns

- Tree DFS
- Graph BFS
- Multi-Source BFS
- Tree Serialization

# Pattern 63

Pattern Name: Binary Search Tree

Category: Trees

Difficulty: Intermediate

Recognition Keywords:

- Ordered binary tree
- Inorder is sorted
- Rank or successor query
- Search, insert, or delete
- Range pruning

Core Idea:

Exploit the invariant that every left-subtree key is smaller and every right-subtree key is larger, enabling ordered search and sorted inorder traversal.

Prerequisites:

- Tree DFS
- Binary search
- Recursion
- Pointer reassignment

Common Algorithms:

- BST search and insertion
- BST deletion
- Inorder rank selection
- Bound-based validation
- Successor and predecessor search

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 108 — Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)
- [LeetCode 501 — Find Mode in Binary Search Tree](https://leetcode.com/problems/find-mode-in-binary-search-tree/)
- [LeetCode 530 — Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/)
- [LeetCode 700 — Search in a Binary Search Tree](https://leetcode.com/problems/search-in-a-binary-search-tree/)
- [LeetCode 783 — Minimum Distance Between BST Nodes](https://leetcode.com/problems/minimum-distance-between-bst-nodes/)
- [LeetCode 938 — Range Sum of BST](https://leetcode.com/problems/range-sum-of-bst/)

Medium:

- [LeetCode 98 — Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)
- [LeetCode 173 — Binary Search Tree Iterator](https://leetcode.com/problems/binary-search-tree-iterator/)
- [LeetCode 230 — Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)
- [LeetCode 450 — Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/)
- [LeetCode 701 — Insert into a Binary Search Tree](https://leetcode.com/problems/insert-into-a-binary-search-tree/)
- [LeetCode 1008 — Construct Binary Search Tree from Preorder Traversal](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/)
- [LeetCode 1382 — Balance a Binary Search Tree](https://leetcode.com/problems/balance-a-binary-search-tree/)

Hard:

- [LeetCode 1932 — Merge BSTs to Create Single BST](https://leetcode.com/problems/merge-bsts-to-create-single-bst/)

Reduction Problems

- [LeetCode 99 — Recover Binary Search Tree](https://leetcode.com/problems/recover-binary-search-tree/)
- [LeetCode 235 — Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)
- [LeetCode 285 — Inorder Successor in BST](https://leetcode.com/problems/inorder-successor-in-bst/)
- [LeetCode 653 — Two Sum IV - Input is a BST](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/)
- [LeetCode 669 — Trim a Binary Search Tree](https://leetcode.com/problems/trim-a-binary-search-tree/)
- [LeetCode 1214 — Two Sum BSTs](https://leetcode.com/problems/two-sum-bsts/)

Related Patterns

- Binary Search
- Tree DFS
- Divide-and-Conquer Tree Construction
- Morris Traversal
- Ordered Set

# Pattern 64

Pattern Name: Divide-and-Conquer Tree Construction

Category: Trees

Difficulty: Intermediate

Recognition Keywords:

- Traversal arrays
- Reconstruct a tree
- Root partitions input
- Build balanced tree
- Recursive range boundaries

Core Idea:

Choose the root from the representation, partition the remaining data into left and right subproblems, and recursively construct both children.

Prerequisites:

- Tree DFS
- Divide and conquer
- Hash maps
- Array indexing

Common Algorithms:

- Preorder-inorder reconstruction
- Inorder-postorder reconstruction
- Sorted-array midpoint construction
- Cartesian-tree construction
- Recursive index ranges

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 108 — Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)

Medium:

- [LeetCode 105 — Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
- [LeetCode 106 — Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)
- [LeetCode 109 — Convert Sorted List to Binary Search Tree](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/)
- [LeetCode 654 — Maximum Binary Tree](https://leetcode.com/problems/maximum-binary-tree/)
- [LeetCode 889 — Construct Binary Tree from Preorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/)
- [LeetCode 998 — Maximum Binary Tree II](https://leetcode.com/problems/maximum-binary-tree-ii/)
- [LeetCode 1008 — Construct Binary Search Tree from Preorder Traversal](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/)
- [LeetCode 1382 — Balance a Binary Search Tree](https://leetcode.com/problems/balance-a-binary-search-tree/)
- [LeetCode 2196 — Create Binary Tree From Descriptions](https://leetcode.com/problems/create-binary-tree-from-descriptions/)

Hard:

- [LeetCode 1028 — Recover a Tree From Preorder Traversal](https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/)
- [LeetCode 1597 — Build Binary Expression Tree From Infix Expression](https://leetcode.com/problems/build-binary-expression-tree-from-infix-expression/)

Reduction Problems

- [LeetCode 95 — Unique Binary Search Trees II](https://leetcode.com/problems/unique-binary-search-trees-ii/)
- [LeetCode 241 — Different Ways to Add Parentheses](https://leetcode.com/problems/different-ways-to-add-parentheses/)
- [LeetCode 427 — Construct Quad Tree](https://leetcode.com/problems/construct-quad-tree/)
- [LeetCode 894 — All Possible Full Binary Trees](https://leetcode.com/problems/all-possible-full-binary-trees/)
- [LeetCode 971 — Flip Binary Tree To Match Preorder Traversal](https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/)

Related Patterns

- Tree DFS
- Binary Search Tree
- Expression Evaluation
- Interval DP
- Divide and Conquer

# Pattern 65

Pattern Name: Root-to-Leaf Path State

Category: Trees

Difficulty: Intermediate

Recognition Keywords:

- Root-to-leaf constraint
- Running sum or number
- Ancestor-dependent state
- Collect paths
- Backtrack on return

Core Idea:

Carry the state accumulated from the root into each child and evaluate it at the relevant leaf or node. Restore mutable path state when recursion returns.

Prerequisites:

- Tree DFS
- Backtracking
- Prefix state
- Recursion

Common Algorithms:

- Running path sum
- Path-buffer backtracking
- Root-to-leaf number accumulation
- Ancestor-state propagation
- Path-frequency map

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 112 — Path Sum](https://leetcode.com/problems/path-sum/)
- [LeetCode 257 — Binary Tree Paths](https://leetcode.com/problems/binary-tree-paths/)
- [LeetCode 404 — Sum of Left Leaves](https://leetcode.com/problems/sum-of-left-leaves/)
- [LeetCode 1022 — Sum of Root To Leaf Binary Numbers](https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/)

Medium:

- [LeetCode 113 — Path Sum II](https://leetcode.com/problems/path-sum-ii/)
- [LeetCode 129 — Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/)
- [LeetCode 1315 — Sum of Nodes with Even-Valued Grandparent](https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/)
- [LeetCode 1372 — Longest ZigZag Path in a Binary Tree](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/)
- [LeetCode 1448 — Count Good Nodes in Binary Tree](https://leetcode.com/problems/count-good-nodes-in-binary-tree/)
- [LeetCode 1457 — Pseudo-Palindromic Paths in a Binary Tree](https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/)
- [LeetCode 1530 — Number of Good Leaf Nodes Pairs](https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/)
- [LeetCode 2096 — Step-By-Step Directions From a Binary Tree Node to Another](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/)

Reduction Problems

- [LeetCode 437 — Path Sum III](https://leetcode.com/problems/path-sum-iii/)
- [LeetCode 666 — Path Sum IV](https://leetcode.com/problems/path-sum-iv/)
- [LeetCode 988 — Smallest String Starting From Leaf](https://leetcode.com/problems/smallest-string-starting-from-leaf/)
- [LeetCode 1026 — Maximum Difference Between Node and Ancestor](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/)
- [LeetCode 1302 — Deepest Leaves Sum](https://leetcode.com/problems/deepest-leaves-sum/)

Related Patterns

- Tree DFS
- Backtracking
- Prefix Sum
- Tree DP
- Lowest Common Ancestor

# Pattern 66

Pattern Name: Tree DP

Category: Trees

Difficulty: Advanced

Recognition Keywords:

- Optimize over subtrees
- Include or exclude node
- Combine child states
- Rerooting
- Return multiple values

Core Idea:

Define a compact state for each subtree and combine child states in postorder. When every node must become the root of an answer, propagate complementary information with rerooting.

Prerequisites:

- Tree DFS
- Dynamic programming
- State design
- Recurrence analysis

Common Algorithms:

- Postorder subtree DP
- Include-exclude DP
- Rerooting DP
- Multi-state DFS return
- Tree matching DP

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 110 — Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)
- [LeetCode 563 — Binary Tree Tilt](https://leetcode.com/problems/binary-tree-tilt/)

Medium:

- [LeetCode 337 — House Robber III](https://leetcode.com/problems/house-robber-iii/)
- [LeetCode 687 — Longest Univalue Path](https://leetcode.com/problems/longest-univalue-path/)
- [LeetCode 979 — Distribute Coins in Binary Tree](https://leetcode.com/problems/distribute-coins-in-binary-tree/)
- [LeetCode 1145 — Binary Tree Coloring Game](https://leetcode.com/problems/binary-tree-coloring-game/)
- [LeetCode 1339 — Maximum Product of Splitted Binary Tree](https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/)
- [LeetCode 2925 — Maximum Score After Applying Operations on a Tree](https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/)

Hard:

- [LeetCode 124 — Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
- [LeetCode 834 — Sum of Distances in Tree](https://leetcode.com/problems/sum-of-distances-in-tree/)
- [LeetCode 968 — Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/)
- [LeetCode 2246 — Longest Path With Different Adjacent Characters](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/)
- [LeetCode 3068 — Find the Maximum Sum of Node Values](https://leetcode.com/problems/find-the-maximum-sum-of-node-values/)

Reduction Problems

- [LeetCode 1372 — Longest ZigZag Path in a Binary Tree](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/)
- [LeetCode 1519 — Number of Nodes in the Sub-Tree With the Same Label](https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/)
- [LeetCode 2378 — Choose Edges to Maximize Score in a Tree](https://leetcode.com/problems/choose-edges-to-maximize-score-in-a-tree/)
- [LeetCode 2538 — Difference Between Maximum and Minimum Price Sum](https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/)
- [LeetCode 2646 — Minimize the Total Price of the Trips](https://leetcode.com/problems/minimize-the-total-price-of-the-trips/)

Related Patterns

- Tree DFS
- Tree Diameter
- State Machine DP
- Lowest Common Ancestor
- Rerooting

# Pattern 67

Pattern Name: Tree Diameter

Category: Trees

Difficulty: Intermediate

Recognition Keywords:

- Longest path in a tree
- Path through a node
- Two deepest branches
- Farthest pair
- Tree center

Core Idea:

At each node, combine its two best downward paths to form a path through that node while returning only the best single downward path to its parent.

Prerequisites:

- Tree DFS
- Tree DP
- Path-state design
- Graph distances

Common Algorithms:

- Two-best-child DP
- Double BFS or DFS
- Diameter endpoints
- Tree-center extraction

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 543 — Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)

Medium:

- [LeetCode 687 — Longest Univalue Path](https://leetcode.com/problems/longest-univalue-path/)
- [LeetCode 1245 — Tree Diameter](https://leetcode.com/problems/tree-diameter/)
- [LeetCode 1372 — Longest ZigZag Path in a Binary Tree](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/)
- [LeetCode 1522 — Diameter of N-Ary Tree](https://leetcode.com/problems/diameter-of-n-ary-tree/)

Hard:

- [LeetCode 124 — Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
- [LeetCode 2246 — Longest Path With Different Adjacent Characters](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/)
- [LeetCode 2538 — Difference Between Maximum and Minimum Price Sum](https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/)
- [LeetCode 3203 — Find Minimum Diameter After Merging Two Trees](https://leetcode.com/problems/find-minimum-diameter-after-merging-two-trees/)

Reduction Problems

- [LeetCode 310 — Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/)
- [LeetCode 834 — Sum of Distances in Tree](https://leetcode.com/problems/sum-of-distances-in-tree/)
- [LeetCode 863 — All Nodes Distance K in Binary Tree](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/)
- [LeetCode 1617 — Count Subtrees With Max Distance Between Cities](https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/)
- [LeetCode 2385 — Amount of Time for Binary Tree to Be Infected](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/)

Related Patterns

- Tree DP
- Tree DFS
- Tree BFS
- Lowest Common Ancestor

# Pattern 68

Pattern Name: Lowest Common Ancestor

Category: Trees

Difficulty: Advanced

Recognition Keywords:

- Shared ancestor
- Path between two nodes
- Repeated ancestor queries
- Kth ancestor
- Distance queries on a tree

Core Idea:

For one query, return the first node whose subtrees collectively contain both targets. For many queries, preprocess jump pointers or an Euler representation to answer ancestors efficiently.

Prerequisites:

- Tree DFS
- Parent and depth arrays
- Binary lifting
- Tree path reasoning

Common Algorithms:

- Recursive LCA
- Parent-pointer convergence
- Binary lifting
- Euler tour with RMQ
- Offline Tarjan LCA

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 235 — Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)
- [LeetCode 236 — Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)
- [LeetCode 865 — Smallest Subtree with all the Deepest Nodes](https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/)
- [LeetCode 1123 — Lowest Common Ancestor of Deepest Leaves](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/)
- [LeetCode 1644 — Lowest Common Ancestor of a Binary Tree II](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/)
- [LeetCode 1650 — Lowest Common Ancestor of a Binary Tree III](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/)
- [LeetCode 1676 — Lowest Common Ancestor of a Binary Tree IV](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/)
- [LeetCode 1740 — Find Distance in a Binary Tree](https://leetcode.com/problems/find-distance-in-a-binary-tree/)
- [LeetCode 2096 — Step-By-Step Directions From a Binary Tree Node to Another](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/)

Hard:

- [LeetCode 1483 — Kth Ancestor of a Tree Node](https://leetcode.com/problems/kth-ancestor-of-a-tree-node/)
- [LeetCode 2846 — Minimum Edge Weight Equilibrium Queries in a Tree](https://leetcode.com/problems/minimum-edge-weight-equilibrium-queries-in-a-tree/)

Reduction Problems

- [LeetCode 742 — Closest Leaf in a Binary Tree](https://leetcode.com/problems/closest-leaf-in-a-binary-tree/)
- [LeetCode 1257 — Smallest Common Region](https://leetcode.com/problems/smallest-common-region/)
- [LeetCode 1766 — Tree of Coprimes](https://leetcode.com/problems/tree-of-coprimes/)
- [LeetCode 2277 — Closest Node to Path in Tree](https://leetcode.com/problems/closest-node-to-path-in-tree/)
- [LeetCode 2646 — Minimize the Total Price of the Trips](https://leetcode.com/problems/minimize-the-total-price-of-the-trips/)

Related Patterns

- Tree DFS
- Binary Lifting
- Euler Tour
- Sparse Table
- Tree DP

# Pattern 69

Pattern Name: Tree Serialization

Category: Trees

Difficulty: Advanced

Recognition Keywords:

- Encode and rebuild a tree
- Preserve null structure
- Canonical subtree signature
- Stream of traversal tokens
- Duplicate subtrees

Core Idea:

Encode both values and structural boundaries in a deterministic traversal so decoding can reconstruct the same tree. Canonical encodings also turn structural equality into signature equality.

Prerequisites:

- Tree DFS
- Tree BFS
- String parsing
- Hash maps

Common Algorithms:

- Preorder with null markers
- Level-order serialization
- BST bound decoding
- Subtree interning
- Canonical structural hashing

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 331 — Verify Preorder Serialization of a Binary Tree](https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/)
- [LeetCode 449 — Serialize and Deserialize BST](https://leetcode.com/problems/serialize-and-deserialize-bst/)
- [LeetCode 536 — Construct Binary Tree from String](https://leetcode.com/problems/construct-binary-tree-from-string/)
- [LeetCode 606 — Construct String from Binary Tree](https://leetcode.com/problems/construct-string-from-binary-tree/)
- [LeetCode 652 — Find Duplicate Subtrees](https://leetcode.com/problems/find-duplicate-subtrees/)

Hard:

- [LeetCode 297 — Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)
- [LeetCode 428 — Serialize and Deserialize N-ary Tree](https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/)
- [LeetCode 1948 — Delete Duplicate Folders in System](https://leetcode.com/problems/delete-duplicate-folders-in-system/)

Reduction Problems

- [LeetCode 100 — Same Tree](https://leetcode.com/problems/same-tree/)
- [LeetCode 572 — Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/)
- [LeetCode 894 — All Possible Full Binary Trees](https://leetcode.com/problems/all-possible-full-binary-trees/)
- [LeetCode 951 — Flip Equivalent Binary Trees](https://leetcode.com/problems/flip-equivalent-binary-trees/)
- [LeetCode 1367 — Linked List in Binary Tree](https://leetcode.com/problems/linked-list-in-binary-tree/)

Related Patterns

- Tree DFS
- Tree BFS
- Trie
- Rolling Hash
- Divide-and-Conquer Tree Construction

# Pattern 70

Pattern Name: Morris Traversal

Category: Trees

Difficulty: Advanced

Recognition Keywords:

- O(1) traversal space
- Temporary tree threads
- Inorder predecessor
- Restore tree structure
- No stack or recursion

Core Idea:

Temporarily thread each node's inorder predecessor back to the node, using the second encounter to distinguish completed left subtrees. Remove every thread to restore the original tree.

Prerequisites:

- Tree DFS orders
- Binary Search Tree
- Pointer reassignment
- Inorder predecessor

Common Algorithms:

- Morris inorder traversal
- Morris preorder traversal
- Reverse-edge Morris postorder
- Thread creation and restoration

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 94 — Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)
- [LeetCode 144 — Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)
- [LeetCode 145 — Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)
- [LeetCode 501 — Find Mode in Binary Search Tree](https://leetcode.com/problems/find-mode-in-binary-search-tree/)
- [LeetCode 530 — Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/)
- [LeetCode 783 — Minimum Distance Between BST Nodes](https://leetcode.com/problems/minimum-distance-between-bst-nodes/)
- [LeetCode 897 — Increasing Order Search Tree](https://leetcode.com/problems/increasing-order-search-tree/)

Medium:

- [LeetCode 98 — Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)
- [LeetCode 99 — Recover Binary Search Tree](https://leetcode.com/problems/recover-binary-search-tree/)
- [LeetCode 230 — Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)
- [LeetCode 538 — Convert BST to Greater Tree](https://leetcode.com/problems/convert-bst-to-greater-tree/)

Reduction Problems

- [LeetCode 114 — Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/)
- [LeetCode 173 — Binary Search Tree Iterator](https://leetcode.com/problems/binary-search-tree-iterator/)
- [LeetCode 426 — Convert Binary Search Tree to Sorted Doubly Linked List](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/)
- [LeetCode 1038 — Binary Search Tree to Greater Sum Tree](https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/)
- [LeetCode 1305 — All Elements in Two Binary Search Trees](https://leetcode.com/problems/all-elements-in-two-binary-search-trees/)

Related Patterns

- Tree DFS
- Binary Search Tree
- Invariant Design
- Pointer Rewiring

# Pattern 71

Pattern Name: Graph Modeling and Adjacency Representation

Category: Graphs

Difficulty: Beginner

Recognition Keywords:

- Entities and relationships
- Directed or undirected connections
- Weighted edges
- Implicit neighbors
- Sparse versus dense graph
- Reachability between objects

Core Idea:

Translate entities into vertices and relationships into edges, preserving direction, weight, and multiplicity. Choose an adjacency list, matrix, edge list, or implicit neighbor generator to match the graph’s density and operations.

Prerequisites:

- Problem Classification
- Arrays
- Hash maps
- Basic set theory

Common Algorithms:

- Adjacency-list construction
- Adjacency-matrix construction
- Edge-list construction
- Implicit graph generation
- Directed-edge reversal
- Vertex relabeling

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 997 — Find the Town Judge](https://leetcode.com/problems/find-the-town-judge/)
- [LeetCode 1791 — Find Center of Star Graph](https://leetcode.com/problems/find-center-of-star-graph/)
- [LeetCode 1971 — Find if Path Exists in Graph](https://leetcode.com/problems/find-if-path-exists-in-graph/)

Medium:

- [LeetCode 133 — Clone Graph](https://leetcode.com/problems/clone-graph/)
- [LeetCode 399 — Evaluate Division](https://leetcode.com/problems/evaluate-division/)
- [LeetCode 1466 — Reorder Routes to Make All Paths Lead to the City Zero](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/)
- [LeetCode 1557 — Minimum Number of Vertices to Reach All Nodes](https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/)
- [LeetCode 1615 — Maximal Network Rank](https://leetcode.com/problems/maximal-network-rank/)

Hard:

- [LeetCode 1857 — Largest Color Value in a Directed Graph](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/)
- [LeetCode 2092 — Find All People With Secret](https://leetcode.com/problems/find-all-people-with-secret/)

Reduction Problems

- [LeetCode 127 — Word Ladder](https://leetcode.com/problems/word-ladder/)
- [LeetCode 200 — Number of Islands](https://leetcode.com/problems/number-of-islands/)
- [LeetCode 752 — Open the Lock](https://leetcode.com/problems/open-the-lock/)
- [LeetCode 815 — Bus Routes](https://leetcode.com/problems/bus-routes/)
- [LeetCode 1345 — Jump Game IV](https://leetcode.com/problems/jump-game-iv/)
- [LeetCode 2097 — Valid Arrangement of Pairs](https://leetcode.com/problems/valid-arrangement-of-pairs/)

Related Patterns

- Graph DFS
- Graph BFS
- State-Space BFS
- Topological Sort
- Union Find / Disjoint Set Union

# Pattern 72

Pattern Name: Graph DFS

Category: Graphs

Difficulty: Beginner

Recognition Keywords:

- Reachability
- Connected components
- Explore entire region
- Recursive traversal
- Entry and exit states
- Cycle detection

Core Idea:

Explore one path completely before backtracking, marking each vertex when first entered. DFS naturally exposes components, ancestry, cycles, and postorder dependencies.

Prerequisites:

- Graph Modeling and Adjacency Representation
- Recursion
- Stack
- Visited-state tracking

Common Algorithms:

- Recursive DFS
- Iterative DFS
- Three-color DFS
- Component labeling
- DFS timestamps
- Postorder traversal

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 733 — Flood Fill](https://leetcode.com/problems/flood-fill/)

Medium:

- [LeetCode 133 — Clone Graph](https://leetcode.com/problems/clone-graph/)
- [LeetCode 200 — Number of Islands](https://leetcode.com/problems/number-of-islands/)
- [LeetCode 417 — Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/)
- [LeetCode 547 — Number of Provinces](https://leetcode.com/problems/number-of-provinces/)
- [LeetCode 695 — Max Area of Island](https://leetcode.com/problems/max-area-of-island/)
- [LeetCode 841 — Keys and Rooms](https://leetcode.com/problems/keys-and-rooms/)
- [LeetCode 802 — Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/)

Hard:

- [LeetCode 329 — Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/)
- [LeetCode 332 — Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/)

Reduction Problems

- [LeetCode 130 — Surrounded Regions](https://leetcode.com/problems/surrounded-regions/)
- [LeetCode 399 — Evaluate Division](https://leetcode.com/problems/evaluate-division/)
- [LeetCode 785 — Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/)
- [LeetCode 1059 — All Paths from Source Lead to Destination](https://leetcode.com/problems/all-paths-from-source-lead-to-destination/)
- [LeetCode 1376 — Time Needed to Inform All Employees](https://leetcode.com/problems/time-needed-to-inform-all-employees/)
- [LeetCode 1466 — Reorder Routes to Make All Paths Lead to the City Zero](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/)

Related Patterns

- Graph Modeling and Adjacency Representation
- Graph BFS
- Topological Sort
- Bipartite Coloring
- Strongly Connected Components
- Bridges and Articulation Points

# Pattern 73

Pattern Name: Graph BFS

Category: Graphs

Difficulty: Beginner

Recognition Keywords:

- Minimum number of edges
- Unweighted shortest path
- Level-by-level exploration
- Nearest target
- Fewest moves
- Uniform transition cost

Core Idea:

Explore vertices in nondecreasing distance from the source using a queue. The first visit to a state gives its shortest path when every transition has equal cost.

Prerequisites:

- Graph Modeling and Adjacency Representation
- Queue
- Visited-state tracking
- Distance arrays

Common Algorithms:

- Single-source BFS
- Layered BFS
- Parent reconstruction
- Bidirectional BFS
- Implicit-graph BFS
- Level counting

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 1971 — Find if Path Exists in Graph](https://leetcode.com/problems/find-if-path-exists-in-graph/)

Medium:

- [LeetCode 690 — Employee Importance](https://leetcode.com/problems/employee-importance/)
- [LeetCode 433 — Minimum Genetic Mutation](https://leetcode.com/problems/minimum-genetic-mutation/)
- [LeetCode 752 — Open the Lock](https://leetcode.com/problems/open-the-lock/)
- [LeetCode 1091 — Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/)
- [LeetCode 1926 — Nearest Exit from Entrance in Maze](https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/)

Hard:

- [LeetCode 127 — Word Ladder](https://leetcode.com/problems/word-ladder/)
- [LeetCode 815 — Bus Routes](https://leetcode.com/problems/bus-routes/)
- [LeetCode 1293 — Shortest Path in a Grid with Obstacles Elimination](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/)
- [LeetCode 1345 — Jump Game IV](https://leetcode.com/problems/jump-game-iv/)

Reduction Problems

- [LeetCode 909 — Snakes and Ladders](https://leetcode.com/problems/snakes-and-ladders/)
- [LeetCode 994 — Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)
- [LeetCode 1129 — Shortest Path with Alternating Colors](https://leetcode.com/problems/shortest-path-with-alternating-colors/)
- [LeetCode 1654 — Minimum Jumps to Reach Home](https://leetcode.com/problems/minimum-jumps-to-reach-home/)
- [LeetCode 2059 — Minimum Operations to Convert Number](https://leetcode.com/problems/minimum-operations-to-convert-number/)
- [LeetCode 2612 — Minimum Reverse Operations](https://leetcode.com/problems/minimum-reverse-operations/)

Related Patterns

- Graph DFS
- Multi-Source BFS
- State-Space BFS
- 0–1 BFS
- Dijkstra’s Algorithm

# Pattern 74

Pattern Name: Multi-Source BFS

Category: Graphs

Difficulty: Intermediate

Recognition Keywords:

- Distance to nearest source
- Simultaneous spread
- Infection or fire
- Multiple starting cells
- Voronoi-like assignment
- Reverse search from all targets

Core Idea:

Insert every source into the queue at distance zero, then run one BFS wave. This computes each state’s distance to its nearest source and correctly simulates simultaneous propagation.

Prerequisites:

- Graph BFS
- Queue
- Grid traversal
- Distance arrays

Common Algorithms:

- Multi-source queue initialization
- Layered wave expansion
- Reverse BFS
- Distance transform
- Simultaneous-event simulation

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 286 — Walls and Gates](https://leetcode.com/problems/walls-and-gates/)
- [LeetCode 542 — 01 Matrix](https://leetcode.com/problems/01-matrix/)
- [LeetCode 994 — Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)
- [LeetCode 1162 — As Far from Land as Possible](https://leetcode.com/problems/as-far-from-land-as-possible/)
- [LeetCode 1765 — Map of Highest Peak](https://leetcode.com/problems/map-of-highest-peak/)
- [LeetCode 2812 — Find the Safest Path in a Grid](https://leetcode.com/problems/find-the-safest-path-in-a-grid/)

Hard:

- [LeetCode 317 — Shortest Distance from All Buildings](https://leetcode.com/problems/shortest-distance-from-all-buildings/)
- [LeetCode 2258 — Escape the Spreading Fire](https://leetcode.com/problems/escape-the-spreading-fire/)

Reduction Problems

- [LeetCode 130 — Surrounded Regions](https://leetcode.com/problems/surrounded-regions/)
- [LeetCode 417 — Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/)
- [LeetCode 934 — Shortest Bridge](https://leetcode.com/problems/shortest-bridge/)
- [LeetCode 1368 — Minimum Cost to Make at Least One Valid Path in a Grid](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/)
- [LeetCode 1926 — Nearest Exit from Entrance in Maze](https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/)

Related Patterns

- Graph BFS
- State-Space BFS
- 0–1 BFS
- Grid DP
- Dijkstra’s Algorithm

# Pattern 75

Pattern Name: State-Space BFS

Category: Graphs

Difficulty: Intermediate

Recognition Keywords:

- Fewest operations
- Position plus extra state
- Keys or resources
- Bitmask of visited targets
- Puzzle configuration
- Implicit transition graph

Core Idea:

Treat each complete configuration—not merely its position—as a vertex, then BFS across legal transitions. Include every history-dependent feature needed to determine future moves in the visited key.

Prerequisites:

- Graph BFS
- State Design
- Hashing
- Bitmask basics

Common Algorithms:

- BFS over tuples
- BFS over bitmasks
- Layered-state graphs
- Configuration encoding
- Dominance pruning
- Bidirectional state BFS

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 752 — Open the Lock](https://leetcode.com/problems/open-the-lock/)
- [LeetCode 909 — Snakes and Ladders](https://leetcode.com/problems/snakes-and-ladders/)
- [LeetCode 1654 — Minimum Jumps to Reach Home](https://leetcode.com/problems/minimum-jumps-to-reach-home/)
- [LeetCode 2059 — Minimum Operations to Convert Number](https://leetcode.com/problems/minimum-operations-to-convert-number/)

Hard:

- [LeetCode 773 — Sliding Puzzle](https://leetcode.com/problems/sliding-puzzle/)
- [LeetCode 847 — Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/)
- [LeetCode 864 — Shortest Path to Get All Keys](https://leetcode.com/problems/shortest-path-to-get-all-keys/)
- [LeetCode 1210 — Minimum Moves to Reach Target with Rotations](https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations/)
- [LeetCode 1263 — Minimum Moves to Move a Box to Their Target Location](https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/)
- [LeetCode 1293 — Shortest Path in a Grid with Obstacles Elimination](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/)

Reduction Problems

- [LeetCode 127 — Word Ladder](https://leetcode.com/problems/word-ladder/)
- [LeetCode 301 — Remove Invalid Parentheses](https://leetcode.com/problems/remove-invalid-parentheses/)
- [LeetCode 433 — Minimum Genetic Mutation](https://leetcode.com/problems/minimum-genetic-mutation/)
- [LeetCode 815 — Bus Routes](https://leetcode.com/problems/bus-routes/)
- [LeetCode 1129 — Shortest Path with Alternating Colors](https://leetcode.com/problems/shortest-path-with-alternating-colors/)
- [LeetCode 2612 — Minimum Reverse Operations](https://leetcode.com/problems/minimum-reverse-operations/)

Related Patterns

- Graph BFS
- Multi-Source BFS
- Bitmask DP
- 0–1 BFS
- Dijkstra’s Algorithm

# Pattern 76

Pattern Name: Topological Sort

Category: Graphs

Difficulty: Intermediate

Recognition Keywords:

- Prerequisites
- Dependency order
- Directed acyclic graph
- Course scheduling
- Indegree zero
- Cycle in dependencies

Core Idea:

Order a directed graph so every prerequisite appears before its dependents. Failure to process all vertices proves that a directed cycle prevents a valid ordering.

Prerequisites:

- Graph Modeling and Adjacency Representation
- Graph DFS
- Graph BFS
- Directed graphs

Common Algorithms:

- Kahn’s algorithm
- DFS postorder
- Indegree counting
- Reverse topological processing
- Lexicographic topological sort
- Layered leaf removal

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 207 — Course Schedule](https://leetcode.com/problems/course-schedule/)
- [LeetCode 210 — Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)
- [LeetCode 310 — Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/)
- [LeetCode 444 — Sequence Reconstruction](https://leetcode.com/problems/sequence-reconstruction/)
- [LeetCode 802 — Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/)
- [LeetCode 1136 — Parallel Courses](https://leetcode.com/problems/parallel-courses/)

Hard:

- [LeetCode 1203 — Sort Items by Groups Respecting Dependencies](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/)
- [LeetCode 1857 — Largest Color Value in a Directed Graph](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/)
- [LeetCode 2050 — Parallel Courses III](https://leetcode.com/problems/parallel-courses-iii/)
- [LeetCode 2392 — Build a Matrix With Conditions](https://leetcode.com/problems/build-a-matrix-with-conditions/)

Reduction Problems

- [LeetCode 269 — Alien Dictionary](https://leetcode.com/problems/alien-dictionary/)
- [LeetCode 329 — Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/)
- [LeetCode 851 — Loud and Rich](https://leetcode.com/problems/loud-and-rich/)
- [LeetCode 2115 — Find All Possible Recipes from Given Supplies](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/)
- [LeetCode 2192 — All Ancestors of a Node in a Directed Acyclic Graph](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/)
- [LeetCode 2360 — Longest Cycle in a Graph](https://leetcode.com/problems/longest-cycle-in-a-graph/)
- [LeetCode 2603 — Collect Coins in a Tree](https://leetcode.com/problems/collect-coins-in-a-tree/)

Related Patterns

- Graph DFS
- Graph BFS
- DAG DP
- Strongly Connected Components
- Cycle Detection

# Pattern 77

Pattern Name: Union Find / Disjoint Set Union

Category: Graphs

Difficulty: Intermediate

Recognition Keywords:

- Dynamic connectivity
- Merge groups
- Same component
- Redundant edge
- Equivalence relation
- Offline connectivity queries

Core Idea:

Maintain a partition of elements under repeated unions and connectivity queries. Path compression and union by size or rank make the amortized operation cost effectively constant.

Prerequisites:

- Graph Modeling and Adjacency Representation
- Trees
- Arrays
- Amortized analysis

Common Algorithms:

- Path compression
- Union by size
- Union by rank
- Weighted Union Find
- Offline edge sweep
- Rollback Union Find

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 1971 — Find if Path Exists in Graph](https://leetcode.com/problems/find-if-path-exists-in-graph/)

Medium:

- [LeetCode 547 — Number of Provinces](https://leetcode.com/problems/number-of-provinces/)
- [LeetCode 684 — Redundant Connection](https://leetcode.com/problems/redundant-connection/)
- [LeetCode 721 — Accounts Merge](https://leetcode.com/problems/accounts-merge/)
- [LeetCode 947 — Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/)
- [LeetCode 990 — Satisfiability of Equality Equations](https://leetcode.com/problems/satisfiability-of-equality-equations/)
- [LeetCode 1319 — Number of Operations to Make Network Connected](https://leetcode.com/problems/number-of-operations-to-make-network-connected/)

Hard:

- [LeetCode 685 — Redundant Connection II](https://leetcode.com/problems/redundant-connection-ii/)
- [LeetCode 839 — Similar String Groups](https://leetcode.com/problems/similar-string-groups/)
- [LeetCode 952 — Largest Component Size by Common Factor](https://leetcode.com/problems/largest-component-size-by-common-factor/)
- [LeetCode 1579 — Remove Max Number of Edges to Keep Graph Fully Traversable](https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/)
- [LeetCode 1697 — Checking Existence of Edge Length Limited Paths](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/)

Reduction Problems

- [LeetCode 305 — Number of Islands II](https://leetcode.com/problems/number-of-islands-ii/)
- [LeetCode 399 — Evaluate Division](https://leetcode.com/problems/evaluate-division/)
- [LeetCode 737 — Sentence Similarity II](https://leetcode.com/problems/sentence-similarity-ii/)
- [LeetCode 959 — Regions Cut By Slashes](https://leetcode.com/problems/regions-cut-by-slashes/)
- [LeetCode 1101 — The Earliest Moment When Everyone Become Friends](https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/)
- [LeetCode 1202 — Smallest String With Swaps](https://leetcode.com/problems/smallest-string-with-swaps/)
- [LeetCode 2421 — Number of Good Paths](https://leetcode.com/problems/number-of-good-paths/)

Related Patterns

- Graph DFS
- Minimum Spanning Tree
- Coordinate Compression
- Offline Queries
- Cycle Detection

# Pattern 78

Pattern Name: Bipartite Coloring

Category: Graphs

Difficulty: Intermediate

Recognition Keywords:

- Divide into two groups
- Opposite-side constraints
- Odd cycle
- Two-color graph
- Alternating edge types
- Conflict graph

Core Idea:

Assign opposite colors across every edge using DFS or BFS; a same-color edge proves an odd cycle and makes the partition impossible. A valid bipartition also unlocks matching and minimum-vertex-cover reductions.

Prerequisites:

- Graph DFS
- Graph BFS
- Graph Modeling and Adjacency Representation
- Cycle detection

Common Algorithms:

- BFS two-coloring
- DFS two-coloring
- Odd-cycle detection
- Component-wise coloring
- Bipartite matching
- König’s theorem

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 785 — Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/)
- [LeetCode 886 — Possible Bipartition](https://leetcode.com/problems/possible-bipartition/)
- [LeetCode 1042 — Flower Planting With No Adjacent](https://leetcode.com/problems/flower-planting-with-no-adjacent/)
- [LeetCode 1129 — Shortest Path with Alternating Colors](https://leetcode.com/problems/shortest-path-with-alternating-colors/)

Hard:

- [LeetCode 2493 — Divide Nodes Into the Maximum Number of Groups](https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/)

Reduction Problems

- [LeetCode 1066 — Campus Bikes II](https://leetcode.com/problems/campus-bikes-ii/)
- [LeetCode 1349 — Maximum Students Taking Exam](https://leetcode.com/problems/maximum-students-taking-exam/)
- [LeetCode 1595 — Minimum Cost to Connect Two Groups of Points](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/)
- [LeetCode 1820 — Maximum Number of Accepted Invitations](https://leetcode.com/problems/maximum-number-of-accepted-invitations/)
- [LeetCode 1947 — Maximum Compatibility Score Sum](https://leetcode.com/problems/maximum-compatibility-score-sum/)
- [LeetCode 2123 — Minimum Operations to Remove Adjacent Ones in Matrix](https://leetcode.com/problems/minimum-operations-to-remove-adjacent-ones-in-matrix/)
- [LeetCode 2172 — Maximum AND Sum of Array](https://leetcode.com/problems/maximum-and-sum-of-array/)

Related Patterns

- Graph DFS
- Graph BFS
- Union Find / Disjoint Set Union
- Bitmask DP
- Max Flow

# Pattern 79

Pattern Name: Dijkstra’s Algorithm

Category: Graphs

Difficulty: Intermediate

Recognition Keywords:

- Nonnegative edge weights
- Minimum total cost
- Earliest arrival
- Weighted shortest path
- Best-first expansion
- Path bottleneck or probability

Core Idea:

Repeatedly finalize the unsettled state with the smallest known distance and relax its outgoing edges. Nonnegative transition costs guarantee that a finalized distance cannot later improve.

Prerequisites:

- Graph Modeling and Adjacency Representation
- Graph BFS
- Heap
- Greedy Thinking

Common Algorithms:

- Binary-heap Dijkstra
- Stale-entry skipping
- Multi-source Dijkstra
- Layered-state Dijkstra
- Minimax Dijkstra
- Maximum-probability Dijkstra

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 743 — Network Delay Time](https://leetcode.com/problems/network-delay-time/)
- [LeetCode 1514 — Path with Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability/)
- [LeetCode 1631 — Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/)
- [LeetCode 1786 — Number of Restricted Paths From First to Last Node](https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/)
- [LeetCode 1976 — Number of Ways to Arrive at Destination](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/)
- [LeetCode 2662 — Minimum Cost of a Path With Special Roads](https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads/)

Hard:

- [LeetCode 778 — Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/)
- [LeetCode 882 — Reachable Nodes In Subdivided Graph](https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/)
- [LeetCode 2045 — Second Minimum Time to Reach Destination](https://leetcode.com/problems/second-minimum-time-to-reach-destination/)
- [LeetCode 2203 — Minimum Weighted Subgraph With the Required Paths](https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/)
- [LeetCode 2577 — Minimum Time to Visit a Cell In a Grid](https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/)

Reduction Problems

- [LeetCode 787 — Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)
- [LeetCode 1368 — Minimum Cost to Make at Least One Valid Path in a Grid](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/)
- [LeetCode 1928 — Minimum Cost to Reach Destination in Time](https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/)
- [LeetCode 2290 — Minimum Obstacle Removal to Reach Corner](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/)
- [LeetCode 2812 — Find the Safest Path in a Grid](https://leetcode.com/problems/find-the-safest-path-in-a-grid/)
- [LeetCode 3112 — Minimum Time to Visit Disappearing Nodes](https://leetcode.com/problems/minimum-time-to-visit-disappearing-nodes/)

Related Patterns

- Graph BFS
- 0–1 BFS
- Bellman–Ford
- Floyd–Warshall
- Minimum Spanning Tree

# Pattern 80

Pattern Name: 0–1 BFS

Category: Graphs

Difficulty: Advanced

Recognition Keywords:

- Edge weights are zero or one
- Free transition
- Minimum modifications
- Edge reversal cost
- Deque shortest path
- Binary transition cost

Core Idea:

Run Dijkstra’s greedy relaxation with a deque: push zero-cost transitions to the front and one-cost transitions to the back. This preserves nondecreasing distances in linear time.

Prerequisites:

- Graph BFS
- Dijkstra’s Algorithm
- Deque
- Weighted graph modeling

Common Algorithms:

- Deque relaxation
- Zero-cost front insertion
- One-cost back insertion
- Direction-change modeling
- Edge-reversal modeling

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 1824 — Minimum Sideway Jumps](https://leetcode.com/problems/minimum-sideway-jumps/)
- [LeetCode 3286 — Find a Safe Walk Through a Grid](https://leetcode.com/problems/find-a-safe-walk-through-a-grid/)

Hard:

- [LeetCode 1263 — Minimum Moves to Move a Box to Their Target Location](https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/)
- [LeetCode 1368 — Minimum Cost to Make at Least One Valid Path in a Grid](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/)
- [LeetCode 2290 — Minimum Obstacle Removal to Reach Corner](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/)

Reduction Problems

- [LeetCode 934 — Shortest Bridge](https://leetcode.com/problems/shortest-bridge/)
- [LeetCode 1466 — Reorder Routes to Make All Paths Lead to the City Zero](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/)
- [LeetCode 3552 — Grid Teleportation Traversal](https://leetcode.com/problems/grid-teleportation-traversal/)

Related Patterns

- Graph BFS
- Multi-Source BFS
- Dijkstra’s Algorithm
- State-Space BFS
- Deque

# Pattern 81

Pattern Name: Bellman–Ford

Category: Graphs

Difficulty: Advanced

Recognition Keywords:

- Negative edge weights
- Bounded number of edges
- Repeated relaxation
- Negative-cycle detection
- Cheapest path with stop limit
- Layered shortest path

Core Idea:

Relax every edge repeatedly so shortest paths using progressively more edges become available. A further improvement after the required rounds reveals a reachable negative cycle.

Prerequisites:

- Graph Modeling and Adjacency Representation
- State Design
- Dynamic Programming
- Weighted paths

Common Algorithms:

- Edge-list relaxation
- Bounded-edge Bellman–Ford
- Negative-cycle detection
- Distance-array copying
- Queue-based relaxation
- Layered shortest-path DP

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 743 — Network Delay Time](https://leetcode.com/problems/network-delay-time/)
- [LeetCode 787 — Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)
- [LeetCode 1334 — Find the City With the Smallest Number of Neighbors at a Threshold Distance](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/)
- [LeetCode 1514 — Path with Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability/)

Hard:

- [LeetCode 1928 — Minimum Cost to Reach Destination in Time](https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/)

Reduction Problems

- [LeetCode 322 — Coin Change](https://leetcode.com/problems/coin-change/)
- [LeetCode 1548 — The Most Similar Path in a Graph](https://leetcode.com/problems/the-most-similar-path-in-a-graph/)
- [LeetCode 2662 — Minimum Cost of a Path With Special Roads](https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads/)
- [LeetCode 2976 — Minimum Cost to Convert String I](https://leetcode.com/problems/minimum-cost-to-convert-string-i/)

Related Patterns

- Dijkstra’s Algorithm
- Floyd–Warshall
- DAG DP
- State-Space BFS
- Dynamic Programming

# Pattern 82

Pattern Name: Floyd–Warshall

Category: Graphs

Difficulty: Advanced

Recognition Keywords:

- All-pairs shortest paths
- Small dense graph
- Transitive closure
- Every source-to-target query
- Intermediate vertices
- Repeated path conversion

Core Idea:

Allow vertices as intermediates one by one, updating every pair through the newly permitted vertex. The same recurrence computes shortest paths, reachability closure, or other path-composable relations.

Prerequisites:

- Graph Modeling and Adjacency Representation
- Matrix traversal
- Dynamic Programming
- Weighted paths

Common Algorithms:

- Floyd–Warshall shortest paths
- Boolean transitive closure
- Min-plus matrix update
- Path reconstruction
- Incremental all-pairs update

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 399 — Evaluate Division](https://leetcode.com/problems/evaluate-division/)
- [LeetCode 1334 — Find the City With the Smallest Number of Neighbors at a Threshold Distance](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/)
- [LeetCode 1462 — Course Schedule IV](https://leetcode.com/problems/course-schedule-iv/)
- [LeetCode 2101 — Detonate the Maximum Bombs](https://leetcode.com/problems/detonate-the-maximum-bombs/)
- [LeetCode 2976 — Minimum Cost to Convert String I](https://leetcode.com/problems/minimum-cost-to-convert-string-i/)

Hard:

- [LeetCode 2642 — Design Graph With Shortest Path Calculator](https://leetcode.com/problems/design-graph-with-shortest-path-calculator/)
- [LeetCode 2959 — Number of Possible Sets of Closing Branches](https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/)
- [LeetCode 2977 — Minimum Cost to Convert String II](https://leetcode.com/problems/minimum-cost-to-convert-string-ii/)

Reduction Problems

- [LeetCode 1617 — Count Subtrees With Max Distance Between Cities](https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/)
- [LeetCode 2192 — All Ancestors of a Node in a Directed Acyclic Graph](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/)
- [LeetCode 3015 — Count the Number of Houses at a Certain Distance I](https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/)
- [LeetCode 3243 — Shortest Distance After Road Addition Queries I](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/)

Related Patterns

- Bellman–Ford
- Dijkstra’s Algorithm
- Matrix Exponentiation
- Transitive Closure
- Bitmask DP

# Pattern 83

Pattern Name: Minimum Spanning Tree

Category: Graphs

Difficulty: Advanced

Recognition Keywords:

- Connect all vertices
- Minimum total edge cost
- No cycles required
- Critical connection cost
- Kruskal or Prim
- Minimax path in an undirected graph

Core Idea:

Select the cheapest edges that connect every vertex without creating unnecessary cycles. Cut and cycle properties justify both Kruskal’s global edge ordering and Prim’s expanding frontier.

Prerequisites:

- Greedy Thinking
- Union Find / Disjoint Set Union
- Heap
- Undirected weighted graphs

Common Algorithms:

- Kruskal’s algorithm
- Prim’s algorithm
- Cut property
- Cycle property
- MST edge classification
- Virtual-node construction

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 1135 — Connecting Cities With Minimum Cost](https://leetcode.com/problems/connecting-cities-with-minimum-cost/)
- [LeetCode 1584 — Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/)
- [LeetCode 1631 — Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/)

Hard:

- [LeetCode 778 — Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/)
- [LeetCode 1168 — Optimize Water Distribution in a Village](https://leetcode.com/problems/optimize-water-distribution-in-a-village/)
- [LeetCode 1489 — Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/)
- [LeetCode 1579 — Remove Max Number of Edges to Keep Graph Fully Traversable](https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/)
- [LeetCode 1724 — Checking Existence of Edge Length Limited Paths II](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths-ii/)

Reduction Problems

- [LeetCode 684 — Redundant Connection](https://leetcode.com/problems/redundant-connection/)
- [LeetCode 1101 — The Earliest Moment When Everyone Become Friends](https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/)
- [LeetCode 1319 — Number of Operations to Make Network Connected](https://leetcode.com/problems/number-of-operations-to-make-network-connected/)
- [LeetCode 1697 — Checking Existence of Edge Length Limited Paths](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/)
- [LeetCode 2421 — Number of Good Paths](https://leetcode.com/problems/number-of-good-paths/)

Related Patterns

- Union Find / Disjoint Set Union
- Dijkstra’s Algorithm
- Greedy Thinking
- Sorting
- Heap

# Pattern 84

Pattern Name: Subsets Backtracking

Category: Backtracking

Difficulty: Beginner

Recognition Keywords:

- Choose or skip
- Power set
- Every subsequence
- Include or exclude
- Duplicate subsets
- Enumerate selections

Core Idea:

At each candidate, branch on whether to include it and backtrack after exploring that choice. Sorting and same-depth duplicate skipping produce unique subsets without global deduplication.

Prerequisites:

- Recursion
- State Design
- Arrays
- Complexity Analysis

Common Algorithms:

- Include/exclude recursion
- Start-index recursion
- Duplicate skipping
- Bitmask enumeration
- Meet-in-the-middle subsets
- Branch-and-bound

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 401 — Binary Watch](https://leetcode.com/problems/binary-watch/)
- [LeetCode 1863 — Sum of All Subset XOR Totals](https://leetcode.com/problems/sum-of-all-subset-xor-totals/)

Medium:

- [LeetCode 78 — Subsets](https://leetcode.com/problems/subsets/)
- [LeetCode 90 — Subsets II](https://leetcode.com/problems/subsets-ii/)
- [LeetCode 491 — Non-decreasing Subsequences](https://leetcode.com/problems/non-decreasing-subsequences/)
- [LeetCode 784 — Letter Case Permutation](https://leetcode.com/problems/letter-case-permutation/)
- [LeetCode 1239 — Maximum Length of a Concatenated String with Unique Characters](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/)
- [LeetCode 2597 — The Number of Beautiful Subsets](https://leetcode.com/problems/the-number-of-beautiful-subsets/)

Hard:

- [LeetCode 1255 — Maximum Score Words Formed by Letters](https://leetcode.com/problems/maximum-score-words-formed-by-letters/)

Reduction Problems

- [LeetCode 698 — Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)
- [LeetCode 805 — Split Array With Same Average](https://leetcode.com/problems/split-array-with-same-average/)
- [LeetCode 1601 — Maximum Number of Achievable Transfer Requests](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/)
- [LeetCode 1755 — Closest Subsequence Sum](https://leetcode.com/problems/closest-subsequence-sum/)
- [LeetCode 1986 — Minimum Number of Work Sessions to Finish the Tasks](https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/)
- [LeetCode 2035 — Partition Array Into Two Arrays to Minimize Sum Difference](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/)

Related Patterns

- Combinations Backtracking
- Bitmask Enumeration
- 0/1 Knapsack
- Bitmask DP
- Meet in the Middle

# Pattern 85

Pattern Name: Permutations Backtracking

Category: Backtracking

Difficulty: Intermediate

Recognition Keywords:

- Arrange every item
- Ordering matters
- Use each item once
- Unique permutations
- Choose unused candidate
- Lexicographic arrangement

Core Idea:

Build an ordering one position at a time, choosing among unused candidates and undoing each choice on return. Frequency maps or same-depth duplicate skipping avoid repeated permutations.

Prerequisites:

- Recursion
- Subsets Backtracking
- Invariant Design
- Frequency Counting

Common Algorithms:

- Used-array permutation
- In-place swap permutation
- Frequency-map permutation
- Duplicate skipping
- Lexicographic generation
- Branch-and-bound

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 46 — Permutations](https://leetcode.com/problems/permutations/)
- [LeetCode 47 — Permutations II](https://leetcode.com/problems/permutations-ii/)
- [LeetCode 267 — Palindrome Permutation II](https://leetcode.com/problems/palindrome-permutation-ii/)
- [LeetCode 526 — Beautiful Arrangement](https://leetcode.com/problems/beautiful-arrangement/)
- [LeetCode 1079 — Letter Tile Possibilities](https://leetcode.com/problems/letter-tile-possibilities/)
- [LeetCode 1718 — Construct the Lexicographically Largest Valid Sequence](https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/)

Hard:

- [LeetCode 60 — Permutation Sequence](https://leetcode.com/problems/permutation-sequence/)
- [LeetCode 996 — Number of Squareful Arrays](https://leetcode.com/problems/number-of-squareful-arrays/)

Reduction Problems

- [LeetCode 31 — Next Permutation](https://leetcode.com/problems/next-permutation/)
- [LeetCode 37 — Sudoku Solver](https://leetcode.com/problems/sudoku-solver/)
- [LeetCode 51 — N-Queens](https://leetcode.com/problems/n-queens/)
- [LeetCode 282 — Expression Add Operators](https://leetcode.com/problems/expression-add-operators/)
- [LeetCode 1723 — Find Minimum Time to Finish All Jobs](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/)
- [LeetCode 2305 — Fair Distribution of Cookies](https://leetcode.com/problems/fair-distribution-of-cookies/)

Related Patterns

- Subsets Backtracking
- Combinations Backtracking
- Constraint Search
- Bitmask DP
- Next Permutation

# Pattern 86

Pattern Name: Combinations Backtracking

Category: Backtracking

Difficulty: Intermediate

Recognition Keywords:

- Choose k items
- Order does not matter
- Target sum combinations
- Generate valid constructions
- Start index
- Reusable candidates

Core Idea:

Extend a partial combination only with candidates at or after a controlled start index. Moving or retaining that index distinguishes single-use choices from reusable choices and prevents reordered duplicates.

Prerequisites:

- Subsets Backtracking
- Recursion
- Sorting
- Pruning

Common Algorithms:

- Start-index DFS
- Fixed-size combination generation
- Reusable-candidate recursion
- Duplicate skipping
- Remaining-target pruning
- Constructive backtracking

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 17 — Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)
- [LeetCode 22 — Generate Parentheses](https://leetcode.com/problems/generate-parentheses/)
- [LeetCode 39 — Combination Sum](https://leetcode.com/problems/combination-sum/)
- [LeetCode 40 — Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)
- [LeetCode 77 — Combinations](https://leetcode.com/problems/combinations/)
- [LeetCode 93 — Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/)
- [LeetCode 216 — Combination Sum III](https://leetcode.com/problems/combination-sum-iii/)

Hard:

- [LeetCode 140 — Word Break II](https://leetcode.com/problems/word-break-ii/)
- [LeetCode 282 — Expression Add Operators](https://leetcode.com/problems/expression-add-operators/)

Reduction Problems

- [LeetCode 131 — Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)
- [LeetCode 377 — Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/)
- [LeetCode 494 — Target Sum](https://leetcode.com/problems/target-sum/)
- [LeetCode 638 — Shopping Offers](https://leetcode.com/problems/shopping-offers/)
- [LeetCode 698 — Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)
- [LeetCode 1255 — Maximum Score Words Formed by Letters](https://leetcode.com/problems/maximum-score-words-formed-by-letters/)

Related Patterns

- Subsets Backtracking
- Permutations Backtracking
- Constraint Search
- Unbounded Knapsack
- Coin Change

# Pattern 87

Pattern Name: Constraint Search

Category: Backtracking

Difficulty: Advanced

Recognition Keywords:

- Satisfy all constraints
- Assign variables
- Small exponential search
- Prune invalid prefix
- Undo decisions
- Exact arrangement

Core Idea:

Assign one decision at a time and immediately reject partial states that violate a constraint or cannot beat the current best. Strong variable ordering, candidate ordering, and bounds determine practical performance.

Prerequisites:

- Permutations Backtracking
- Combinations Backtracking
- Invariant Design
- Complexity Analysis

Common Algorithms:

- Depth-first backtracking
- Constraint propagation
- Minimum-remaining-values ordering
- Branch-and-bound
- Symmetry breaking
- Memoized search

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 79 — Word Search](https://leetcode.com/problems/word-search/)
- [LeetCode 473 — Matchsticks to Square](https://leetcode.com/problems/matchsticks-to-square/)
- [LeetCode 698 — Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)
- [LeetCode 1219 — Path with Maximum Gold](https://leetcode.com/problems/path-with-maximum-gold/)
- [LeetCode 1718 — Construct the Lexicographically Largest Valid Sequence](https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/)
- [LeetCode 2305 — Fair Distribution of Cookies](https://leetcode.com/problems/fair-distribution-of-cookies/)

Hard:

- [LeetCode 37 — Sudoku Solver](https://leetcode.com/problems/sudoku-solver/)
- [LeetCode 51 — N-Queens](https://leetcode.com/problems/n-queens/)
- [LeetCode 52 — N-Queens II](https://leetcode.com/problems/n-queens-ii/)
- [LeetCode 1240 — Tiling a Rectangle with the Fewest Squares](https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares/)
- [LeetCode 1723 — Find Minimum Time to Finish All Jobs](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/)

Reduction Problems

- [LeetCode 212 — Word Search II](https://leetcode.com/problems/word-search-ii/)
- [LeetCode 282 — Expression Add Operators](https://leetcode.com/problems/expression-add-operators/)
- [LeetCode 996 — Number of Squareful Arrays](https://leetcode.com/problems/number-of-squareful-arrays/)
- [LeetCode 1255 — Maximum Score Words Formed by Letters](https://leetcode.com/problems/maximum-score-words-formed-by-letters/)
- [LeetCode 1601 — Maximum Number of Achievable Transfer Requests](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/)
- [LeetCode 1986 — Minimum Number of Work Sessions to Finish the Tasks](https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/)

Related Patterns

- Permutations Backtracking
- Combinations Backtracking
- Grid Path Backtracking
- Bitmask DP
- Game DP

# Pattern 88

Pattern Name: Grid Path Backtracking

Category: Backtracking

Difficulty: Intermediate

Recognition Keywords:

- Explore grid paths
- Cannot reuse a cell
- Path-dependent visited state
- Spell or collect along route
- Undo cell marking
- Four-direction choices

Core Idea:

Explore each legal neighboring cell, mark it for the current path, and unmark it when backtracking. Prune as soon as the path cannot satisfy the remaining target or improve the best result.

Prerequisites:

- Graph DFS
- Constraint Search
- Matrix traversal
- Recursion

Common Algorithms:

- In-place visited marking
- Direction-vector DFS
- Path restoration
- Trie-guided grid search
- Connected-component pruning
- Memoized path search

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 79 — Word Search](https://leetcode.com/problems/word-search/)
- [LeetCode 490 — The Maze](https://leetcode.com/problems/the-maze/)
- [LeetCode 694 — Number of Distinct Islands](https://leetcode.com/problems/number-of-distinct-islands/)
- [LeetCode 1219 — Path with Maximum Gold](https://leetcode.com/problems/path-with-maximum-gold/)
- [LeetCode 1254 — Number of Closed Islands](https://leetcode.com/problems/number-of-closed-islands/)

Hard:

- [LeetCode 212 — Word Search II](https://leetcode.com/problems/word-search-ii/)
- [LeetCode 980 — Unique Paths III](https://leetcode.com/problems/unique-paths-iii/)
- [LeetCode 1036 — Escape a Large Maze](https://leetcode.com/problems/escape-a-large-maze/)
- [LeetCode 2065 — Maximum Path Quality of a Graph](https://leetcode.com/problems/maximum-path-quality-of-a-graph/)

Reduction Problems

- [LeetCode 37 — Sudoku Solver](https://leetcode.com/problems/sudoku-solver/)
- [LeetCode 51 — N-Queens](https://leetcode.com/problems/n-queens/)
- [LeetCode 130 — Surrounded Regions](https://leetcode.com/problems/surrounded-regions/)
- [LeetCode 489 — Robot Room Cleaner](https://leetcode.com/problems/robot-room-cleaner/)
- [LeetCode 1905 — Count Sub Islands](https://leetcode.com/problems/count-sub-islands/)
- [LeetCode 2328 — Number of Increasing Paths in a Grid](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/)

Related Patterns

- Constraint Search
- Graph DFS
- State-Space BFS
- Grid DP
- Trie

# Pattern 89

Pattern Name: Fibonacci DP

Category: Dynamic Programming

Difficulty: Beginner

Recognition Keywords:

- Ways to reach position
- Previous one or two states
- Local recurrence
- Constant-memory optimization
- Tiling a strip
- Short fixed-order recurrence

Core Idea:

Express the current answer from a constant number of immediately preceding states. Once the base cases are correct, a left-to-right recurrence can usually be compressed to constant space.

Prerequisites:

- State Design
- Recursion
- Linear Scan
- Basic algebra

Common Algorithms:

- Top-down memoization
- Bottom-up tabulation
- Rolling-state optimization
- Linear recurrence
- Matrix-exponentiation acceleration

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 70 — Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
- [LeetCode 509 — Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)
- [LeetCode 746 — Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/)
- [LeetCode 1137 — N-th Tribonacci Number](https://leetcode.com/problems/n-th-tribonacci-number/)
- [LeetCode 1646 — Get Maximum in Generated Array](https://leetcode.com/problems/get-maximum-in-generated-array/)

Medium:

- [LeetCode 91 — Decode Ways](https://leetcode.com/problems/decode-ways/)
- [LeetCode 198 — House Robber](https://leetcode.com/problems/house-robber/)
- [LeetCode 213 — House Robber II](https://leetcode.com/problems/house-robber-ii/)
- [LeetCode 790 — Domino and Tromino Tiling](https://leetcode.com/problems/domino-and-tromino-tiling/)
- [LeetCode 2320 — Count Number of Ways to Place Houses](https://leetcode.com/problems/count-number-of-ways-to-place-houses/)

Hard:

- [LeetCode 552 — Student Attendance Record II](https://leetcode.com/problems/student-attendance-record-ii/)
- [LeetCode 1411 — Number of Ways to Paint N × 3 Grid](https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/)

Reduction Problems

- [LeetCode 276 — Paint Fence](https://leetcode.com/problems/paint-fence/)
- [LeetCode 377 — Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/)
- [LeetCode 935 — Knight Dialer](https://leetcode.com/problems/knight-dialer/)
- [LeetCode 1220 — Count Vowels Permutation](https://leetcode.com/problems/count-vowels-permutation/)
- [LeetCode 1269 — Number of Ways to Stay in the Same Place After Some Steps](https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/)
- [LeetCode 2400 — Number of Ways to Reach a Position After Exactly k Steps](https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/)

Related Patterns

- Linear DP
- State Machine DP
- Matrix Exponentiation
- Fast Power
- DAG DP

# Pattern 90

Pattern Name: Linear DP

Category: Dynamic Programming

Difficulty: Beginner

Recognition Keywords:

- Sequence positions
- Best answer up to index
- Decisions along a line
- Previous few states
- Skip or take
- Prefix optimum

Core Idea:

Define a state for the optimal result on a prefix or ending at an index, then transition from earlier valid states. Iterate in dependency order and compress memory when only a bounded history is needed.

Prerequisites:

- Fibonacci DP
- State Design
- Linear Scan
- Memoization

Common Algorithms:

- Prefix DP
- Ending-at-index DP
- Take-or-skip recurrence
- Rolling-array optimization
- Memoized recursion
- Path reconstruction

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 746 — Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/)

Medium:

- [LeetCode 139 — Word Break](https://leetcode.com/problems/word-break/)
- [LeetCode 198 — House Robber](https://leetcode.com/problems/house-robber/)
- [LeetCode 279 — Perfect Squares](https://leetcode.com/problems/perfect-squares/)
- [LeetCode 740 — Delete and Earn](https://leetcode.com/problems/delete-and-earn/)
- [LeetCode 983 — Minimum Cost For Tickets](https://leetcode.com/problems/minimum-cost-for-tickets/)
- [LeetCode 1048 — Longest String Chain](https://leetcode.com/problems/longest-string-chain/)
- [LeetCode 1105 — Filling Bookcase Shelves](https://leetcode.com/problems/filling-bookcase-shelves/)
- [LeetCode 2140 — Solving Questions With Brainpower](https://leetcode.com/problems/solving-questions-with-brainpower/)
- [LeetCode 2369 — Check if There is a Valid Partition For The Array](https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/)

Hard:

- [LeetCode 140 — Word Break II](https://leetcode.com/problems/word-break-ii/)
- [LeetCode 552 — Student Attendance Record II](https://leetcode.com/problems/student-attendance-record-ii/)

Reduction Problems

- [LeetCode 32 — Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/)
- [LeetCode 91 — Decode Ways](https://leetcode.com/problems/decode-ways/)
- [LeetCode 152 — Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/)
- [LeetCode 368 — Largest Divisible Subset](https://leetcode.com/problems/largest-divisible-subset/)
- [LeetCode 1027 — Longest Arithmetic Subsequence](https://leetcode.com/problems/longest-arithmetic-subsequence/)
- [LeetCode 1626 — Best Team With No Conflicts](https://leetcode.com/problems/best-team-with-no-conflicts/)

Related Patterns

- Fibonacci DP
- Longest Increasing Subsequence
- State Machine DP
- DAG DP
- Running Extremum and Kadane’s Algorithm

# Pattern 91

Pattern Name: Grid DP

Category: Dynamic Programming

Difficulty: Intermediate

Recognition Keywords:

- Paths through a matrix
- Move right or down
- Cell depends on neighbors
- Falling path
- Two travelers
- Obstacles and path counts

Core Idea:

Treat each cell as a state whose dependencies are neighboring cells reached earlier in a valid traversal order. Expand the state when direction, resource, or multiple-agent information affects future moves.

Prerequisites:

- Linear DP
- Matrix traversal
- State Design
- Two-dimensional arrays

Common Algorithms:

- Path-count grid DP
- Minimum-cost grid DP
- Rolling-row optimization
- Falling-path DP
- Two-agent grid DP
- Grid DP with remainders

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 62 — Unique Paths](https://leetcode.com/problems/unique-paths/)
- [LeetCode 63 — Unique Paths II](https://leetcode.com/problems/unique-paths-ii/)
- [LeetCode 64 — Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/)
- [LeetCode 120 — Triangle](https://leetcode.com/problems/triangle/)
- [LeetCode 221 — Maximal Square](https://leetcode.com/problems/maximal-square/)
- [LeetCode 931 — Minimum Falling Path Sum](https://leetcode.com/problems/minimum-falling-path-sum/)
- [LeetCode 1277 — Count Square Submatrices with All Ones](https://leetcode.com/problems/count-square-submatrices-with-all-ones/)
- [LeetCode 1937 — Maximum Number of Points with Cost](https://leetcode.com/problems/maximum-number-of-points-with-cost/)

Hard:

- [LeetCode 174 — Dungeon Game](https://leetcode.com/problems/dungeon-game/)
- [LeetCode 741 — Cherry Pickup](https://leetcode.com/problems/cherry-pickup/)
- [LeetCode 1289 — Minimum Falling Path Sum II](https://leetcode.com/problems/minimum-falling-path-sum-ii/)
- [LeetCode 1463 — Cherry Pickup II](https://leetcode.com/problems/cherry-pickup-ii/)

Reduction Problems

- [LeetCode 85 — Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/)
- [LeetCode 329 — Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/)
- [LeetCode 576 — Out of Boundary Paths](https://leetcode.com/problems/out-of-boundary-paths/)
- [LeetCode 1301 — Number of Paths with Max Score](https://leetcode.com/problems/number-of-paths-with-max-score/)
- [LeetCode 2328 — Number of Increasing Paths in a Grid](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/)
- [LeetCode 2435 — Paths in Matrix Whose Sum Is Divisible by K](https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/)

Related Patterns

- Linear DP
- Grid Path Backtracking
- DAG DP
- State-Space BFS
- Probability DP

# Pattern 92

Pattern Name: 0/1 Knapsack

Category: Dynamic Programming

Difficulty: Intermediate

Recognition Keywords:

- Use each item at most once
- Capacity constraint
- Choose a subset
- Exact target sum
- Maximize value
- Boolean subset feasibility

Core Idea:

For every item, choose between excluding it and consuming capacity once to include it. Iterate capacities backward in one-dimensional implementations so the same item cannot be reused.

Prerequisites:

- Linear DP
- Subsets Backtracking
- State Design
- Space optimization

Common Algorithms:

- Boolean knapsack
- Maximum-value knapsack
- Backward capacity iteration
- Multi-dimensional knapsack
- Bitset knapsack
- Meet-in-the-middle subset sum

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 416 — Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)
- [LeetCode 474 — Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes/)
- [LeetCode 494 — Target Sum](https://leetcode.com/problems/target-sum/)
- [LeetCode 1049 — Last Stone Weight II](https://leetcode.com/problems/last-stone-weight-ii/)
- [LeetCode 2915 — Length of the Longest Subsequence That Sums to Target](https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target/)

Hard:

- [LeetCode 879 — Profitable Schemes](https://leetcode.com/problems/profitable-schemes/)
- [LeetCode 956 — Tallest Billboard](https://leetcode.com/problems/tallest-billboard/)
- [LeetCode 1755 — Closest Subsequence Sum](https://leetcode.com/problems/closest-subsequence-sum/)
- [LeetCode 2035 — Partition Array Into Two Arrays to Minimize Sum Difference](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/)
- [LeetCode 2518 — Number of Great Partitions](https://leetcode.com/problems/number-of-great-partitions/)

Reduction Problems

- [LeetCode 698 — Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)
- [LeetCode 805 — Split Array With Same Average](https://leetcode.com/problems/split-array-with-same-average/)
- [LeetCode 1235 — Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/)
- [LeetCode 1449 — Form Largest Integer With Digits That Add up to Target](https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/)
- [LeetCode 1774 — Closest Dessert Cost](https://leetcode.com/problems/closest-dessert-cost/)
- [LeetCode 1981 — Minimize the Difference Between Target and Chosen Elements](https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements/)

Related Patterns

- Subsets Backtracking
- Unbounded Knapsack
- Coin Change
- Bitmask DP
- Meet in the Middle

# Pattern 93

Pattern Name: Unbounded Knapsack

Category: Dynamic Programming

Difficulty: Intermediate

Recognition Keywords:

- Reuse an item unlimited times
- Repeated denomination
- Build an exact total
- Minimum pieces
- Ordered constructions
- Forward capacity iteration

Core Idea:

Allow a choice to transition from a state updated during the same item’s iteration, enabling repeated use. Loop order determines whether the DP counts combinations, permutations, or merely optimizes value.

Prerequisites:

- 0/1 Knapsack
- Linear DP
- Combinations Backtracking
- State Design

Common Algorithms:

- Forward capacity iteration
- Minimum-item unbounded knapsack
- Combination-count knapsack
- Permutation-count knapsack
- Complete knapsack
- Bounded-to-binary decomposition

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 279 — Perfect Squares](https://leetcode.com/problems/perfect-squares/)
- [LeetCode 322 — Coin Change](https://leetcode.com/problems/coin-change/)
- [LeetCode 377 — Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/)
- [LeetCode 518 — Coin Change II](https://leetcode.com/problems/coin-change-ii/)
- [LeetCode 2466 — Count Ways To Build Good Strings](https://leetcode.com/problems/count-ways-to-build-good-strings/)

Hard:

- [LeetCode 1449 — Form Largest Integer With Digits That Add up to Target](https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/)
- [LeetCode 2585 — Number of Ways to Earn Points](https://leetcode.com/problems/number-of-ways-to-earn-points/)
- [LeetCode 2902 — Count of Sub-Multisets With Bounded Sum](https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum/)

Reduction Problems

- [LeetCode 39 — Combination Sum](https://leetcode.com/problems/combination-sum/)
- [LeetCode 70 — Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
- [LeetCode 343 — Integer Break](https://leetcode.com/problems/integer-break/)
- [LeetCode 1155 — Number of Dice Rolls With Target Sum](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/)
- [LeetCode 2218 — Maximum Value of K Coins From Piles](https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/)
- [LeetCode 3180 — Maximum Total Reward Using Operations I](https://leetcode.com/problems/maximum-total-reward-using-operations-i/)

Related Patterns

- 0/1 Knapsack
- Coin Change
- Combinations Backtracking
- Linear DP
- Generating Functions

# Pattern 94

Pattern Name: Coin Change

Category: Dynamic Programming

Difficulty: Intermediate

Recognition Keywords:

- Denominations
- Make a target amount
- Minimum number of choices
- Count combinations
- Count ordered sequences
- Bounded multiplicities

Core Idea:

Define the amount as capacity and choose a recurrence matching the question: minimum coins, unordered combinations, ordered sequences, or bounded counts. The item/amount loop order is part of the state semantics.

Prerequisites:

- Unbounded Knapsack
- 0/1 Knapsack
- Linear DP
- Modular arithmetic

Common Algorithms:

- Minimum-coin DP
- Combination-count DP
- Permutation-count DP
- Bounded coin change
- Generating-sum DP
- Modular counting

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 322 — Coin Change](https://leetcode.com/problems/coin-change/)
- [LeetCode 377 — Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/)
- [LeetCode 518 — Coin Change II](https://leetcode.com/problems/coin-change-ii/)
- [LeetCode 1155 — Number of Dice Rolls With Target Sum](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/)
- [LeetCode 2466 — Count Ways To Build Good Strings](https://leetcode.com/problems/count-ways-to-build-good-strings/)

Hard:

- [LeetCode 879 — Profitable Schemes](https://leetcode.com/problems/profitable-schemes/)
- [LeetCode 1449 — Form Largest Integer With Digits That Add up to Target](https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/)
- [LeetCode 2585 — Number of Ways to Earn Points](https://leetcode.com/problems/number-of-ways-to-earn-points/)
- [LeetCode 2902 — Count of Sub-Multisets With Bounded Sum](https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum/)

Reduction Problems

- [LeetCode 39 — Combination Sum](https://leetcode.com/problems/combination-sum/)
- [LeetCode 70 — Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
- [LeetCode 279 — Perfect Squares](https://leetcode.com/problems/perfect-squares/)
- [LeetCode 494 — Target Sum](https://leetcode.com/problems/target-sum/)
- [LeetCode 2915 — Length of the Longest Subsequence That Sums to Target](https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target/)
- [LeetCode 3181 — Maximum Total Reward Using Operations II](https://leetcode.com/problems/maximum-total-reward-using-operations-ii/)

Related Patterns

- Unbounded Knapsack
- 0/1 Knapsack
- Combinations Backtracking
- Linear DP
- Probability DP

# Pattern 95

Pattern Name: Longest Increasing Subsequence

Category: Dynamic Programming

Difficulty: Intermediate

Recognition Keywords:

- Longest ordered subsequence
- Preserve original order
- Strictly increasing chain
- Nesting after sorting
- Minimum removals for order
- Patience sorting

Core Idea:

Track the smallest possible tail for an increasing subsequence of each length, replacing tails by lower bound. Use quadratic DP when counts, reconstruction, or richer compatibility transitions are required.

Prerequisites:

- Linear DP
- Binary Search
- Sorting
- Subsequence reasoning

Common Algorithms:

- Quadratic LIS DP
- Patience sorting
- Lower-bound tail replacement
- Predecessor reconstruction
- Fenwick-tree LIS
- Bidirectional LIS

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 392 — Is Subsequence](https://leetcode.com/problems/is-subsequence/)

Medium:

- [LeetCode 300 — Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
- [LeetCode 334 — Increasing Triplet Subsequence](https://leetcode.com/problems/increasing-triplet-subsequence/)
- [LeetCode 368 — Largest Divisible Subset](https://leetcode.com/problems/largest-divisible-subset/)
- [LeetCode 646 — Maximum Length of Pair Chain](https://leetcode.com/problems/maximum-length-of-pair-chain/)
- [LeetCode 673 — Number of Longest Increasing Subsequence](https://leetcode.com/problems/number-of-longest-increasing-subsequence/)
- [LeetCode 1027 — Longest Arithmetic Subsequence](https://leetcode.com/problems/longest-arithmetic-subsequence/)
- [LeetCode 1218 — Longest Arithmetic Subsequence of Given Difference](https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/)
- [LeetCode 2771 — Longest Non-decreasing Subarray From Two Arrays](https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/)

Hard:

- [LeetCode 354 — Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/)
- [LeetCode 1671 — Minimum Number of Removals to Make Mountain Array](https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/)
- [LeetCode 1964 — Find the Longest Valid Obstacle Course at Each Position](https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/)
- [LeetCode 2407 — Longest Increasing Subsequence II](https://leetcode.com/problems/longest-increasing-subsequence-ii/)

Reduction Problems

- [LeetCode 1048 — Longest String Chain](https://leetcode.com/problems/longest-string-chain/)
- [LeetCode 1626 — Best Team With No Conflicts](https://leetcode.com/problems/best-team-with-no-conflicts/)
- [LeetCode 1691 — Maximum Height by Stacking Cuboids](https://leetcode.com/problems/maximum-height-by-stacking-cuboids/)
- [LeetCode 1713 — Minimum Operations to Make a Subsequence](https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/)
- [LeetCode 2111 — Minimum Operations to Make the Array K-Increasing](https://leetcode.com/problems/minimum-operations-to-make-the-array-k-increasing/)
- [LeetCode 2826 — Sorting Three Groups](https://leetcode.com/problems/sorting-three-groups/)

Related Patterns

- Linear DP
- Coordinate Compression
- Fenwick Tree
- Segment Tree
- Longest Common Subsequence

# Pattern 96

Pattern Name: Longest Common Subsequence

Category: Dynamic Programming

Difficulty: Intermediate

Recognition Keywords:

- Two sequences
- Preserve relative order
- Match or skip
- Uncrossed connections
- Longest shared pattern
- Minimum deletions between strings

Core Idea:

For each pair of prefixes, either match equal final elements or skip one final element and keep the better result. The same alignment table supports reconstruction and many insertion/deletion reductions.

Prerequisites:

- Linear DP
- Two-dimensional DP
- String indexing
- Subsequence reasoning

Common Algorithms:

- Two-dimensional LCS DP
- Rolling-row optimization
- Sequence reconstruction
- Longest palindromic subsequence
- Weighted LCS
- Hirschberg’s algorithm

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 516 — Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)
- [LeetCode 583 — Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings/)
- [LeetCode 712 — Minimum ASCII Delete Sum for Two Strings](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/)
- [LeetCode 1035 — Uncrossed Lines](https://leetcode.com/problems/uncrossed-lines/)
- [LeetCode 1143 — Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)

Hard:

- [LeetCode 115 — Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/)
- [LeetCode 1092 — Shortest Common Supersequence](https://leetcode.com/problems/shortest-common-supersequence/)
- [LeetCode 1312 — Minimum Insertion Steps to Make a String Palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/)
- [LeetCode 1458 — Max Dot Product of Two Subsequences](https://leetcode.com/problems/max-dot-product-of-two-subsequences/)
- [LeetCode 1771 — Maximize Palindrome Length From Subsequences](https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/)

Reduction Problems

- [LeetCode 10 — Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)
- [LeetCode 44 — Wildcard Matching](https://leetcode.com/problems/wildcard-matching/)
- [LeetCode 72 — Edit Distance](https://leetcode.com/problems/edit-distance/)
- [LeetCode 97 — Interleaving String](https://leetcode.com/problems/interleaving-string/)
- [LeetCode 392 — Is Subsequence](https://leetcode.com/problems/is-subsequence/)
- [LeetCode 1923 — Longest Common Subpath](https://leetcode.com/problems/longest-common-subpath/)

Related Patterns

- Edit Distance
- Longest Increasing Subsequence
- Interval DP
- String DP
- Rolling Hash

# Pattern 97

Pattern Name: Edit Distance

Category: Dynamic Programming

Difficulty: Intermediate

Recognition Keywords:

- Convert one sequence to another
- Insert delete replace
- String alignment
- Minimum modifications
- Match prefixes
- Wildcards or pattern tokens

Core Idea:

Define a state for transforming one prefix into another and transition by matching, inserting, deleting, or replacing the final symbol. Add dimensions when edits have budgets, modes, or compressed effects.

Prerequisites:

- Longest Common Subsequence
- Two-dimensional DP
- State Design
- String indexing

Common Algorithms:

- Levenshtein distance
- Rolling-row edit DP
- Alignment reconstruction
- Pattern-matching DP
- Bounded-edit DP
- Weighted edit distance

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 392 — Is Subsequence](https://leetcode.com/problems/is-subsequence/)
- [LeetCode 844 — Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/)

Medium:

- [LeetCode 72 — Edit Distance](https://leetcode.com/problems/edit-distance/)
- [LeetCode 97 — Interleaving String](https://leetcode.com/problems/interleaving-string/)
- [LeetCode 161 — One Edit Distance](https://leetcode.com/problems/one-edit-distance/)
- [LeetCode 583 — Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings/)
- [LeetCode 712 — Minimum ASCII Delete Sum for Two Strings](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/)

Hard:

- [LeetCode 10 — Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)
- [LeetCode 44 — Wildcard Matching](https://leetcode.com/problems/wildcard-matching/)
- [LeetCode 115 — Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/)
- [LeetCode 1092 — Shortest Common Supersequence](https://leetcode.com/problems/shortest-common-supersequence/)
- [LeetCode 1531 — String Compression II](https://leetcode.com/problems/string-compression-ii/)

Reduction Problems

- [LeetCode 514 — Freedom Trail](https://leetcode.com/problems/freedom-trail/)
- [LeetCode 727 — Minimum Window Subsequence](https://leetcode.com/problems/minimum-window-subsequence/)
- [LeetCode 960 — Delete Columns to Make Sorted III](https://leetcode.com/problems/delete-columns-to-make-sorted-iii/)
- [LeetCode 1187 — Make Array Strictly Increasing](https://leetcode.com/problems/make-array-strictly-increasing/)
- [LeetCode 2060 — Check if an Original String Exists Given Two Encoded Strings](https://leetcode.com/problems/check-if-an-original-string-exists-given-two-encoded-strings/)
- [LeetCode 2746 — Decremental String Concatenation](https://leetcode.com/problems/decremental-string-concatenation/)

Related Patterns

- Longest Common Subsequence
- Interval DP
- State Machine DP
- String Algorithms
- Automaton DP

# Pattern 98

Pattern Name: Interval DP

Category: Dynamic Programming

Difficulty: Advanced

Recognition Keywords:

- Solve a contiguous interval
- Choose the first or last operation
- Split at an internal point
- Merge adjacent groups
- Palindromic range
- Matrix-chain structure

Core Idea:

Define the answer for every interval and transition by choosing a boundary action or split point. Process intervals from shorter to longer so all subinterval dependencies are already solved.

Prerequisites:

- Two-dimensional DP
- Recursion
- State Design
- Prefix Sum

Common Algorithms:

- Length-ordered interval DP
- Split-point enumeration
- Open-interval DP
- Merge-cost DP
- Palindrome interval DP
- Memoized interval recursion

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 516 — Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)
- [LeetCode 1039 — Minimum Score Triangulation of Polygon](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/)
- [LeetCode 1130 — Minimum Cost Tree From Leaf Values](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/)

Hard:

- [LeetCode 312 — Burst Balloons](https://leetcode.com/problems/burst-balloons/)
- [LeetCode 664 — Strange Printer](https://leetcode.com/problems/strange-printer/)
- [LeetCode 730 — Count Different Palindromic Subsequences](https://leetcode.com/problems/count-different-palindromic-subsequences/)
- [LeetCode 1000 — Minimum Cost to Merge Stones](https://leetcode.com/problems/minimum-cost-to-merge-stones/)
- [LeetCode 1246 — Palindrome Removal](https://leetcode.com/problems/palindrome-removal/)
- [LeetCode 1547 — Minimum Cost to Cut a Stick](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/)
- [LeetCode 1771 — Maximize Palindrome Length From Subsequences](https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/)
- [LeetCode 2312 — Selling Pieces of Wood](https://leetcode.com/problems/selling-pieces-of-wood/)

Reduction Problems

- [LeetCode 87 — Scramble String](https://leetcode.com/problems/scramble-string/)
- [LeetCode 375 — Guess Number Higher or Lower II](https://leetcode.com/problems/guess-number-higher-or-lower-ii/)
- [LeetCode 486 — Predict the Winner](https://leetcode.com/problems/predict-the-winner/)
- [LeetCode 546 — Remove Boxes](https://leetcode.com/problems/remove-boxes/)
- [LeetCode 943 — Find the Shortest Superstring](https://leetcode.com/problems/find-the-shortest-superstring/)
- [LeetCode 1478 — Allocate Mailboxes](https://leetcode.com/problems/allocate-mailboxes/)

Related Patterns

- Partition DP
- Longest Common Subsequence
- Game DP
- Matrix Chain Multiplication
- Tree DP

# Pattern 99

Pattern Name: Partition DP

Category: Dynamic Programming

Difficulty: Advanced

Recognition Keywords:

- Split sequence into segments
- Exactly k groups
- Cost per partition
- Last cut position
- Minimize maximum segment
- Palindromic partitions

Core Idea:

Let a state cover a prefix with a fixed number of completed groups, and enumerate the previous cut. Precompute segment costs and optimize the cut transition when monotonicity or convexity permits.

Prerequisites:

- Linear DP
- Interval DP
- Prefix Sum
- State Design

Common Algorithms:

- Last-cut DP
- K-partition DP
- Segment-cost preprocessing
- Divide-and-conquer optimization
- Knuth optimization
- Monotone-queue optimization

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 813 — Largest Sum of Averages](https://leetcode.com/problems/largest-sum-of-averages/)
- [LeetCode 1043 — Partition Array for Maximum Sum](https://leetcode.com/problems/partition-array-for-maximum-sum/)
- [LeetCode 1959 — Minimum Total Space Wasted With K Resizing Operations](https://leetcode.com/problems/minimum-total-space-wasted-with-k-resizing-operations/)

Hard:

- [LeetCode 132 — Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/)
- [LeetCode 410 — Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)
- [LeetCode 1278 — Palindrome Partitioning III](https://leetcode.com/problems/palindrome-partitioning-iii/)
- [LeetCode 1335 — Minimum Difficulty of a Job Schedule](https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/)
- [LeetCode 1478 — Allocate Mailboxes](https://leetcode.com/problems/allocate-mailboxes/)
- [LeetCode 2478 — Number of Beautiful Partitions](https://leetcode.com/problems/number-of-beautiful-partitions/)
- [LeetCode 2547 — Minimum Cost to Split an Array](https://leetcode.com/problems/minimum-cost-to-split-an-array/)

Reduction Problems

- [LeetCode 139 — Word Break](https://leetcode.com/problems/word-break/)
- [LeetCode 140 — Word Break II](https://leetcode.com/problems/word-break-ii/)
- [LeetCode 629 — K Inverse Pairs Array](https://leetcode.com/problems/k-inverse-pairs-array/)
- [LeetCode 1000 — Minimum Cost to Merge Stones](https://leetcode.com/problems/minimum-cost-to-merge-stones/)
- [LeetCode 2218 — Maximum Value of K Coins From Piles](https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/)
- [LeetCode 2463 — Minimum Total Distance Traveled](https://leetcode.com/problems/minimum-total-distance-traveled/)

Related Patterns

- Interval DP
- 0/1 Knapsack
- Binary Search on Answer
- Divide and Conquer DP Optimization
- Prefix Sum

# Pattern 100

Pattern Name: State Machine DP

Category: Dynamic Programming

Difficulty: Intermediate

Recognition Keywords:

- Small set of modes
- Buy sell hold cooldown
- Valid transition sequence
- Alternating choices
- Consecutive-state restrictions
- Position plus status

Core Idea:

Represent each prefix by a small finite set of modes and update every mode through legal transitions. The state machine makes mutually exclusive histories explicit while keeping the state space constant per position.

Prerequisites:

- State Design
- Linear DP
- Finite-state machines
- Invariant Design

Common Algorithms:

- Hold/cash stock DP
- Finite-state transitions
- Rolling-state optimization
- Transition-matrix DP
- Automaton counting
- Mode-compressed DP

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 121 — Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

Medium:

- [LeetCode 122 — Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
- [LeetCode 309 — Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)
- [LeetCode 376 — Wiggle Subsequence](https://leetcode.com/problems/wiggle-subsequence/)
- [LeetCode 714 — Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)
- [LeetCode 926 — Flip String to Monotone Increasing](https://leetcode.com/problems/flip-string-to-monotone-increasing/)
- [LeetCode 1262 — Greatest Sum Divisible by Three](https://leetcode.com/problems/greatest-sum-divisible-by-three/)
- [LeetCode 1911 — Maximum Alternating Subsequence Sum](https://leetcode.com/problems/maximum-alternating-subsequence-sum/)

Hard:

- [LeetCode 123 — Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/)
- [LeetCode 188 — Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/)
- [LeetCode 552 — Student Attendance Record II](https://leetcode.com/problems/student-attendance-record-ii/)
- [LeetCode 801 — Minimum Swaps To Make Sequences Increasing](https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/)

Reduction Problems

- [LeetCode 91 — Decode Ways](https://leetcode.com/problems/decode-ways/)
- [LeetCode 198 — House Robber](https://leetcode.com/problems/house-robber/)
- [LeetCode 213 — House Robber II](https://leetcode.com/problems/house-robber-ii/)
- [LeetCode 790 — Domino and Tromino Tiling](https://leetcode.com/problems/domino-and-tromino-tiling/)
- [LeetCode 935 — Knight Dialer](https://leetcode.com/problems/knight-dialer/)
- [LeetCode 1220 — Count Vowels Permutation](https://leetcode.com/problems/count-vowels-permutation/)

Related Patterns

- Linear DP
- Fibonacci DP
- Matrix Exponentiation
- Automaton DP
- Game DP

# Pattern 101

Pattern Name: Digit DP

Category: Dynamic Programming

Difficulty: Advanced

Recognition Keywords:

- Count integers in a range
- Digit constraints
- Upper-bound tightness
- Leading zeros
- Digit sum or frequency
- Number contains forbidden pattern

Core Idea:

Build numbers digit by digit while tracking whether the current prefix is tight to the bound, has started, and satisfies the required aggregate state. Compute a range answer as the difference between two prefix counts.

Prerequisites:

- State Design
- Memoization
- Modular arithmetic
- Number representation

Common Algorithms:

- Tight-bound digit DP
- Leading-zero handling
- Prefix range subtraction
- Digit-sum DP
- Bitwise digit DP
- Automaton digit DP

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 357 — Count Numbers with Unique Digits](https://leetcode.com/problems/count-numbers-with-unique-digits/)
- [LeetCode 788 — Rotated Digits](https://leetcode.com/problems/rotated-digits/)

Hard:

- [LeetCode 233 — Number of Digit One](https://leetcode.com/problems/number-of-digit-one/)
- [LeetCode 600 — Non-negative Integers without Consecutive Ones](https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/)
- [LeetCode 902 — Numbers At Most N Given Digit Set](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/)
- [LeetCode 1012 — Numbers With Repeated Digits](https://leetcode.com/problems/numbers-with-repeated-digits/)
- [LeetCode 2376 — Count Special Integers](https://leetcode.com/problems/count-special-integers/)
- [LeetCode 2719 — Count of Integers](https://leetcode.com/problems/count-of-integers/)
- [LeetCode 2801 — Count Stepping Numbers in Range](https://leetcode.com/problems/count-stepping-numbers-in-range/)
- [LeetCode 2827 — Number of Beautiful Integers in the Range](https://leetcode.com/problems/number-of-beautiful-integers-in-the-range/)
- [LeetCode 2999 — Count the Number of Powerful Integers](https://leetcode.com/problems/count-the-number-of-powerful-integers/)

Reduction Problems

- [LeetCode 248 — Strobogrammatic Number III](https://leetcode.com/problems/strobogrammatic-number-iii/)
- [LeetCode 1088 — Confusing Number II](https://leetcode.com/problems/confusing-number-ii/)
- [LeetCode 1215 — Stepping Numbers](https://leetcode.com/problems/stepping-numbers/)
- [LeetCode 1397 — Find All Good Strings](https://leetcode.com/problems/find-all-good-strings/)
- [LeetCode 3007 — Maximum Number That Sum of the Prices Is Less Than or Equal to K](https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/)
- [LeetCode 3352 — Count K-Reducible Numbers Less Than N](https://leetcode.com/problems/count-k-reducible-numbers-less-than-n/)

Related Patterns

- State Machine DP
- Bitmask DP
- Automaton DP
- Combinatorics
- Binary Search on Answer

# Pattern 102

Pattern Name: Bitmask DP

Category: Dynamic Programming

Difficulty: Advanced

Recognition Keywords:

- Small set of items
- Subset as state
- Assign each item once
- Visit all targets
- Completed-task mask
- Exponential but structured

Core Idea:

Encode the chosen or completed subset as an integer mask, then transition by adding, removing, or partitioning bits. This turns history-dependent subset choices into a finite state graph of size roughly 2ⁿ.

Prerequisites:

- Bitmask Enumeration
- State Design
- Subsets Backtracking
- Complexity Analysis

Common Algorithms:

- Subset-state DP
- Assignment DP
- Submask enumeration
- Held–Karp DP
- Bitmask memoization
- Sum-over-subsets DP

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 464 — Can I Win](https://leetcode.com/problems/can-i-win/)
- [LeetCode 473 — Matchsticks to Square](https://leetcode.com/problems/matchsticks-to-square/)
- [LeetCode 698 — Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)
- [LeetCode 1066 — Campus Bikes II](https://leetcode.com/problems/campus-bikes-ii/)
- [LeetCode 1947 — Maximum Compatibility Score Sum](https://leetcode.com/problems/maximum-compatibility-score-sum/)
- [LeetCode 1986 — Minimum Number of Work Sessions to Finish the Tasks](https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/)
- [LeetCode 2305 — Fair Distribution of Cookies](https://leetcode.com/problems/fair-distribution-of-cookies/)

Hard:

- [LeetCode 847 — Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/)
- [LeetCode 943 — Find the Shortest Superstring](https://leetcode.com/problems/find-the-shortest-superstring/)
- [LeetCode 1125 — Smallest Sufficient Team](https://leetcode.com/problems/smallest-sufficient-team/)
- [LeetCode 1434 — Number of Ways to Wear Different Hats to Each Other](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/)
- [LeetCode 1494 — Parallel Courses II](https://leetcode.com/problems/parallel-courses-ii/)
- [LeetCode 1595 — Minimum Cost to Connect Two Groups of Points](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/)
- [LeetCode 1879 — Minimum XOR Sum of Two Arrays](https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/)

Reduction Problems

- [LeetCode 526 — Beautiful Arrangement](https://leetcode.com/problems/beautiful-arrangement/)
- [LeetCode 996 — Number of Squareful Arrays](https://leetcode.com/problems/number-of-squareful-arrays/)
- [LeetCode 1255 — Maximum Score Words Formed by Letters](https://leetcode.com/problems/maximum-score-words-formed-by-letters/)
- [LeetCode 1601 — Maximum Number of Achievable Transfer Requests](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/)
- [LeetCode 1681 — Minimum Incompatibility](https://leetcode.com/problems/minimum-incompatibility/)
- [LeetCode 1723 — Find Minimum Time to Finish All Jobs](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/)
- [LeetCode 2172 — Maximum AND Sum of Array](https://leetcode.com/problems/maximum-and-sum-of-array/)

Related Patterns

- Subsets Backtracking
- State-Space BFS
- 0/1 Knapsack
- Traveling Salesman DP
- Game DP

# Pattern 103

Pattern Name: Probability DP

Category: Dynamic Programming

Difficulty: Advanced

Recognition Keywords:

- Random transitions
- Event probability
- Expected outcome
- Repeated trials
- Absorbing state
- Distribution after steps

Core Idea:

Store the probability or count distribution for each state and push mass through every random transition. Carefully define terminal states, normalization, and whether the recurrence computes probability, expectation, or favorable counts.

Prerequisites:

- State Design
- Linear DP
- Combinatorics
- Basic probability

Common Algorithms:

- Probability-mass DP
- Expected-value DP
- Markov-state recurrence
- Absorbing-state DP
- Combinatorial probability
- Rolling distribution DP

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 688 — Knight Probability in Chessboard](https://leetcode.com/problems/knight-probability-in-chessboard/)
- [LeetCode 799 — Champagne Tower](https://leetcode.com/problems/champagne-tower/)
- [LeetCode 808 — Soup Servings](https://leetcode.com/problems/soup-servings/)
- [LeetCode 837 — New 21 Game](https://leetcode.com/problems/new-21-game/)
- [LeetCode 1227 — Airplane Seat Assignment Probability](https://leetcode.com/problems/airplane-seat-assignment-probability/)
- [LeetCode 1230 — Toss Strange Coins](https://leetcode.com/problems/toss-strange-coins/)

Hard:

- [LeetCode 1467 — Probability of a Two Boxes Having The Same Number of Distinct Balls](https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/)

Reduction Problems

- [LeetCode 1223 — Dice Roll Simulation](https://leetcode.com/problems/dice-roll-simulation/)
- [LeetCode 1155 — Number of Dice Rolls With Target Sum](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/)
- [LeetCode 1269 — Number of Ways to Stay in the Same Place After Some Steps](https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/)

Related Patterns

- State Machine DP
- Grid DP
- Combinatorics
- Game DP
- Matrix Exponentiation

# Pattern 104

Pattern Name: Game DP

Category: Dynamic Programming

Difficulty: Advanced

Recognition Keywords:

- Two optimal players
- Alternating turns
- Winning or losing state
- Score difference
- Minimax
- Take from interval

Core Idea:

Define each state from the current player’s perspective and assume the opponent responds optimally. Boolean games use winning/losing transitions, while score games often maximize the current score difference.

Prerequisites:

- State Design
- Memoization
- Interval DP
- Minimax reasoning

Common Algorithms:

- Winning-state DP
- Score-difference DP
- Minimax memoization
- Sprague–Grundy theory
- Interval game DP
- Retrograde analysis

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 292 — Nim Game](https://leetcode.com/problems/nim-game/)
- [LeetCode 1025 — Divisor Game](https://leetcode.com/problems/divisor-game/)

Medium:

- [LeetCode 486 — Predict the Winner](https://leetcode.com/problems/predict-the-winner/)
- [LeetCode 877 — Stone Game](https://leetcode.com/problems/stone-game/)
- [LeetCode 1140 — Stone Game II](https://leetcode.com/problems/stone-game-ii/)
- [LeetCode 1690 — Stone Game VII](https://leetcode.com/problems/stone-game-vii/)
- [LeetCode 2029 — Stone Game IX](https://leetcode.com/problems/stone-game-ix/)

Hard:

- [LeetCode 1406 — Stone Game III](https://leetcode.com/problems/stone-game-iii/)
- [LeetCode 1510 — Stone Game IV](https://leetcode.com/problems/stone-game-iv/)
- [LeetCode 1563 — Stone Game V](https://leetcode.com/problems/stone-game-v/)
- [LeetCode 1872 — Stone Game VIII](https://leetcode.com/problems/stone-game-viii/)

Reduction Problems

- [LeetCode 375 — Guess Number Higher or Lower II](https://leetcode.com/problems/guess-number-higher-or-lower-ii/)
- [LeetCode 464 — Can I Win](https://leetcode.com/problems/can-i-win/)
- [LeetCode 913 — Cat and Mouse](https://leetcode.com/problems/cat-and-mouse/)
- [LeetCode 1728 — Cat and Mouse II](https://leetcode.com/problems/cat-and-mouse-ii/)

Related Patterns

- Interval DP
- Bitmask DP
- State-Space BFS
- Probability DP
- Minimax

# Pattern 105

Pattern Name: DAG DP

Category: Dynamic Programming

Difficulty: Advanced

Recognition Keywords:

- Directed acyclic graph
- Dependencies between states
- Longest path in DAG
- Count paths
- Topological transition order
- Memoized acyclic recursion

Core Idea:

Process states in topological order, or memoize DFS on an acyclic dependency graph, so every transition reads finalized predecessors. DAG DP generalizes sequence and grid DP to arbitrary partial orders.

Prerequisites:

- Topological Sort
- Graph DFS
- State Design
- Linear DP

Common Algorithms:

- Topological-order DP
- Memoized DAG DFS
- Longest-path DAG DP
- Path-count DAG DP
- Reverse-topological DP
- Layered-graph DP

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 851 — Loud and Rich](https://leetcode.com/problems/loud-and-rich/)
- [LeetCode 1136 — Parallel Courses](https://leetcode.com/problems/parallel-courses/)
- [LeetCode 1786 — Number of Restricted Paths From First to Last Node](https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/)
- [LeetCode 2115 — Find All Possible Recipes from Given Supplies](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/)
- [LeetCode 2192 — All Ancestors of a Node in a Directed Acyclic Graph](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/)

Hard:

- [LeetCode 329 — Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/)
- [LeetCode 1857 — Largest Color Value in a Directed Graph](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/)
- [LeetCode 2050 — Parallel Courses III](https://leetcode.com/problems/parallel-courses-iii/)
- [LeetCode 2328 — Number of Increasing Paths in a Grid](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/)

Reduction Problems

- [LeetCode 300 — Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
- [LeetCode 368 — Largest Divisible Subset](https://leetcode.com/problems/largest-divisible-subset/)
- [LeetCode 787 — Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)
- [LeetCode 1048 — Longest String Chain](https://leetcode.com/problems/longest-string-chain/)
- [LeetCode 1548 — The Most Similar Path in a Graph](https://leetcode.com/problems/the-most-similar-path-in-a-graph/)
- [LeetCode 1937 — Maximum Number of Points with Cost](https://leetcode.com/problems/maximum-number-of-points-with-cost/)

Related Patterns

- Topological Sort
- Graph DFS
- Linear DP
- Grid DP
- Longest Increasing Subsequence

# Pattern 106

Pattern Name: Trie

Category: String Algorithms

Difficulty: Intermediate

Recognition Keywords:

- Prefix lookup
- Dictionary of strings
- Autocomplete
- Shared prefixes
- Character-by-character search
- Maximum XOR queries

Core Idea:

Store strings as paths through shared prefix nodes so insertion and lookup depend on key length rather than dictionary size. Binary tries apply the same idea to bits for XOR optimization.

Prerequisites:

- Trees
- Hash maps or fixed alphabets
- String traversal
- Bit manipulation

Common Algorithms:

- Trie insertion
- Exact-word search
- Prefix search
- Wildcard trie DFS
- Bitwise trie
- Trie pruning

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 720 — Longest Word in Dictionary](https://leetcode.com/problems/longest-word-in-dictionary/)
- [LeetCode 208 — Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/)
- [LeetCode 211 — Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/)
- [LeetCode 421 — Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/)
- [LeetCode 648 — Replace Words](https://leetcode.com/problems/replace-words/)
- [LeetCode 677 — Map Sum Pairs](https://leetcode.com/problems/map-sum-pairs/)
- [LeetCode 1268 — Search Suggestions System](https://leetcode.com/problems/search-suggestions-system/)

Hard:

- [LeetCode 212 — Word Search II](https://leetcode.com/problems/word-search-ii/)
- [LeetCode 745 — Prefix and Suffix Search](https://leetcode.com/problems/prefix-and-suffix-search/)
- [LeetCode 1707 — Maximum XOR With an Element From Array](https://leetcode.com/problems/maximum-xor-with-an-element-from-array/)

Reduction Problems

- [LeetCode 139 — Word Break](https://leetcode.com/problems/word-break/)
- [LeetCode 336 — Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/)
- [LeetCode 472 — Concatenated Words](https://leetcode.com/problems/concatenated-words/)
- [LeetCode 676 — Implement Magic Dictionary](https://leetcode.com/problems/implement-magic-dictionary/)
- [LeetCode 1032 — Stream of Characters](https://leetcode.com/problems/stream-of-characters/)

Related Patterns

- Aho–Corasick
- Backtracking
- Bitwise XOR
- Rolling Hash
- Suffix Automaton

# Pattern 107

Pattern Name: Knuth–Morris–Pratt (KMP)

Category: String Algorithms

Difficulty: Advanced

Recognition Keywords:

- Exact pattern matching
- Longest proper prefix and suffix
- Overlapping matches
- Repeated pattern
- Linear-time substring search

Core Idea:

Precompute failure links from the pattern so a mismatch reuses the longest compatible prefix instead of restarting. This gives linear preprocessing and linear scanning.

Prerequisites:

- String indexing
- Prefix/suffix reasoning
- Invariant design

Common Algorithms:

- Prefix-function construction
- Failure-function construction
- KMP search
- Border-chain traversal
- Sequence KMP

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 28 — Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)
- [LeetCode 459 — Repeated Substring Pattern](https://leetcode.com/problems/repeated-substring-pattern/)
- [LeetCode 796 — Rotate String](https://leetcode.com/problems/rotate-string/)
- [LeetCode 1668 — Maximum Repeating Substring](https://leetcode.com/problems/maximum-repeating-substring/)

Medium:

- [LeetCode 686 — Repeated String Match](https://leetcode.com/problems/repeated-string-match/)
- [LeetCode 1764 — Form Array by Concatenating Subarrays of Another Array](https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/)

Hard:

- [LeetCode 214 — Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/)
- [LeetCode 1392 — Longest Happy Prefix](https://leetcode.com/problems/longest-happy-prefix/)
- [LeetCode 3008 — Find Beautiful Indices in the Given Array II](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/)
- [LeetCode 3031 — Minimum Time to Revert Word to Initial State II](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/)

Reduction Problems

- [LeetCode 572 — Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/)
- [LeetCode 3006 — Find Beautiful Indices in the Given Array I](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-i/)
- [LeetCode 3291 — Minimum Number of Valid Strings to Form Target I](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-i/)
- [LeetCode 3292 — Minimum Number of Valid Strings to Form Target II](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii/)
- [LeetCode 3455 — Shortest Matching Substring](https://leetcode.com/problems/shortest-matching-substring/)

Related Patterns

- Z Algorithm
- Rabin–Karp
- Rolling Hash
- Trie

# Pattern 108

Pattern Name: Z Algorithm

Category: String Algorithms

Difficulty: Advanced

Recognition Keywords:

- Prefix match at every position
- String borders
- Prefix overlap
- Pattern plus separator
- Sum of prefix scores

Core Idea:

The Z-array records the longest prefix match beginning at every position. A maintained matching interval lets all values be computed in linear time.

Prerequisites:

- String indexing
- Interval invariants
- Prefix matching

Common Algorithms:

- Z-array construction
- Pattern-separator-text matching
- Border detection
- Prefix-overlap aggregation

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 28 — Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)
- [LeetCode 459 — Repeated Substring Pattern](https://leetcode.com/problems/repeated-substring-pattern/)

Medium:

- [LeetCode 3029 — Minimum Time to Revert Word to Initial State I](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/)

Hard:

- [LeetCode 1392 — Longest Happy Prefix](https://leetcode.com/problems/longest-happy-prefix/)
- [LeetCode 214 — Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/)
- [LeetCode 2223 — Sum of Scores of Built Strings](https://leetcode.com/problems/sum-of-scores-of-built-strings/)
- [LeetCode 3031 — Minimum Time to Revert Word to Initial State II](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/)
- [LeetCode 3303 — Find the Occurrence of First Almost Equal Substring](https://leetcode.com/problems/find-the-occurrence-of-first-almost-equal-substring/)

Reduction Problems

- [LeetCode 686 — Repeated String Match](https://leetcode.com/problems/repeated-string-match/)
- [LeetCode 3008 — Find Beautiful Indices in the Given Array II](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/)
- [LeetCode 3292 — Minimum Number of Valid Strings to Form Target II](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii/)
- [LeetCode 3455 — Shortest Matching Substring](https://leetcode.com/problems/shortest-matching-substring/)

Related Patterns

- KMP
- Rolling Hash
- Manacher’s Algorithm
- Prefix/Suffix Decomposition

# Pattern 109

Pattern Name: Rabin–Karp

Category: String Algorithms

Difficulty: Intermediate

Recognition Keywords:

- Pattern matching
- Fixed-length substrings
- Many candidate matches
- Hash fingerprints
- Duplicate substring

Core Idea:

Hash the pattern and update the text window’s hash in constant time as it slides. Verify hash matches or use multiple hashes when collisions cannot be tolerated.

Prerequisites:

- Sliding window
- Modular arithmetic
- String indexing

Common Algorithms:

- Polynomial string hashing
- Rolling-window hash
- Double hashing
- Hash-match verification
- Binary search plus hashing

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 28 — Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)

Medium:

- [LeetCode 187 — Repeated DNA Sequences](https://leetcode.com/problems/repeated-dna-sequences/)
- [LeetCode 686 — Repeated String Match](https://leetcode.com/problems/repeated-string-match/)
- [LeetCode 718 — Maximum Length of Repeated Subarray](https://leetcode.com/problems/maximum-length-of-repeated-subarray/)
- [LeetCode 1062 — Longest Repeating Substring](https://leetcode.com/problems/longest-repeating-substring/)
- [LeetCode 1554 — Strings Differ by One Character](https://leetcode.com/problems/strings-differ-by-one-character/)
- [LeetCode 1698 — Number of Distinct Substrings in a String](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/)
- [LeetCode 2261 — K Divisible Elements Subarrays](https://leetcode.com/problems/k-divisible-elements-subarrays/)

Hard:

- [LeetCode 1044 — Longest Duplicate Substring](https://leetcode.com/problems/longest-duplicate-substring/)
- [LeetCode 1923 — Longest Common Subpath](https://leetcode.com/problems/longest-common-subpath/)
- [LeetCode 2156 — Find Substring With Given Hash Value](https://leetcode.com/problems/find-substring-with-given-hash-value/)

Reduction Problems

- [LeetCode 1147 — Longest Chunked Palindrome Decomposition](https://leetcode.com/problems/longest-chunked-palindrome-decomposition/)
- [LeetCode 1316 — Distinct Echo Substrings](https://leetcode.com/problems/distinct-echo-substrings/)
- [LeetCode 2168 — Unique Substrings With Equal Digit Frequency](https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency/)
- [LeetCode 2430 — Maximum Deletions on a String](https://leetcode.com/problems/maximum-deletions-on-a-string/)

Related Patterns

- Rolling Hash
- Binary Search on Answer
- Fixed Sliding Window
- KMP
- Suffix Array

# Pattern 110

Pattern Name: Rolling Hash

Category: String Algorithms

Difficulty: Advanced

Recognition Keywords:

- Substring equality
- Repeated substrings
- Palindrome queries
- Longest common substring
- Deduplicate sequences

Core Idea:

Represent substrings with prefix-based fingerprints so equal-length substring hashes are extracted in constant time. Use normalized powers, two moduli, or direct verification to control collisions.

Prerequisites:

- Prefix sums
- Modular arithmetic
- Fast power
- Hashing

Common Algorithms:

- Polynomial prefix hash
- Double hash
- Bidirectional hash
- Hash normalization
- Hash-set deduplication

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 718 — Maximum Length of Repeated Subarray](https://leetcode.com/problems/maximum-length-of-repeated-subarray/)
- [LeetCode 1062 — Longest Repeating Substring](https://leetcode.com/problems/longest-repeating-substring/)
- [LeetCode 1554 — Strings Differ by One Character](https://leetcode.com/problems/strings-differ-by-one-character/)
- [LeetCode 1698 — Number of Distinct Substrings in a String](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/)
- [LeetCode 2261 — K Divisible Elements Subarrays](https://leetcode.com/problems/k-divisible-elements-subarrays/)

Hard:

- [LeetCode 1044 — Longest Duplicate Substring](https://leetcode.com/problems/longest-duplicate-substring/)
- [LeetCode 1147 — Longest Chunked Palindrome Decomposition](https://leetcode.com/problems/longest-chunked-palindrome-decomposition/)
- [LeetCode 1316 — Distinct Echo Substrings](https://leetcode.com/problems/distinct-echo-substrings/)
- [LeetCode 1923 — Longest Common Subpath](https://leetcode.com/problems/longest-common-subpath/)
- [LeetCode 2430 — Maximum Deletions on a String](https://leetcode.com/problems/maximum-deletions-on-a-string/)
- [LeetCode 3327 — Check if DFS Strings Are Palindromes](https://leetcode.com/problems/check-if-dfs-strings-are-palindromes/)

Reduction Problems

- [LeetCode 30 — Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/)
- [LeetCode 214 — Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/)
- [LeetCode 336 — Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/)
- [LeetCode 187 — Repeated DNA Sequences](https://leetcode.com/problems/repeated-dna-sequences/)
- [LeetCode 2156 — Find Substring With Given Hash Value](https://leetcode.com/problems/find-substring-with-given-hash-value/)

Related Patterns

- Rabin–Karp
- Binary Search on Answer
- Manacher’s Algorithm
- Suffix Array
- Trie

# Pattern 111

Pattern Name: Manacher’s Algorithm

Category: String Algorithms

Difficulty: Advanced

Recognition Keywords:

- All palindromic radii
- Longest palindrome
- Odd and even centers
- Linear-time palindrome preprocessing
- Palindrome range queries

Core Idea:

Reuse the mirror radius inside the rightmost known palindrome, expanding only beyond its boundary. A separator transformation can unify odd- and even-length palindromes.

Prerequisites:

- Expand Around Center
- String indexing
- Interval invariants

Common Algorithms:

- Odd-radius Manacher
- Even-radius Manacher
- Separator-transformed Manacher
- Palindrome interval extraction

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 5 — Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)
- [LeetCode 647 — Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/)

Hard:

- [LeetCode 214 — Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/)
- [LeetCode 1745 — Palindrome Partitioning IV](https://leetcode.com/problems/palindrome-partitioning-iv/)
- [LeetCode 1960 — Maximum Product of the Length of Two Palindromic Substrings](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings/)
- [LeetCode 2472 — Maximum Number of Non-overlapping Palindrome Substrings](https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/)
- [LeetCode 3327 — Check if DFS Strings Are Palindromes](https://leetcode.com/problems/check-if-dfs-strings-are-palindromes/)

Reduction Problems

- [LeetCode 131 — Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)
- [LeetCode 132 — Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/)
- [LeetCode 336 — Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/)

Related Patterns

- Expand Around Center
- Interval DP
- Rolling Hash
- Z Algorithm

# Pattern 112

Pattern Name: Aho–Corasick

Category: String Algorithms

Difficulty: Advanced

Recognition Keywords:

- Many patterns in one text
- Dictionary matching
- Forbidden substrings
- Streaming matches
- Failure links on a trie

Core Idea:

Build a trie of all patterns and add failure links that preserve the longest suffix which is also a trie prefix. The resulting automaton reports all dictionary matches in one pass over the text.

Prerequisites:

- Trie
- BFS
- KMP failure links
- Finite-state transitions

Common Algorithms:

- Trie construction
- Failure-link BFS
- Output-link propagation
- Automaton scanning
- Aho–Corasick plus DP

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 1065 — Index Pairs of a String](https://leetcode.com/problems/index-pairs-of-a-string/)
- [LeetCode 1408 — String Matching in an Array](https://leetcode.com/problems/string-matching-in-an-array/)

Medium:

- [LeetCode 616 — Add Bold Tag in String](https://leetcode.com/problems/add-bold-tag-in-string/)
- [LeetCode 758 — Bold Words in String](https://leetcode.com/problems/bold-words-in-string/)
- [LeetCode 2707 — Extra Characters in a String](https://leetcode.com/problems/extra-characters-in-a-string/)

Hard:

- [LeetCode 1032 — Stream of Characters](https://leetcode.com/problems/stream-of-characters/)
- [LeetCode 2781 — Length of the Longest Valid Substring](https://leetcode.com/problems/length-of-the-longest-valid-substring/)
- [LeetCode 3213 — Construct String with Minimum Cost](https://leetcode.com/problems/construct-string-with-minimum-cost/)
- [LeetCode 3292 — Minimum Number of Valid Strings to Form Target II](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii/)

Reduction Problems

- [LeetCode 139 — Word Break](https://leetcode.com/problems/word-break/)
- [LeetCode 140 — Word Break II](https://leetcode.com/problems/word-break-ii/)
- [LeetCode 472 — Concatenated Words](https://leetcode.com/problems/concatenated-words/)
- [LeetCode 2977 — Minimum Cost to Convert String II](https://leetcode.com/problems/minimum-cost-to-convert-string-ii/)
- [LeetCode 3291 — Minimum Number of Valid Strings to Form Target I](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-i/)

Related Patterns

- Trie
- KMP
- State Machine DP
- Multi-Pattern Matching
- Suffix Automaton

# Pattern 113

Pattern Name: Suffix Array

Category: String Algorithms

Difficulty: Advanced

Recognition Keywords:

- Sorted suffixes
- Longest repeated substring
- Lexicographic substring order
- Longest common prefix
- Distinct substrings

Core Idea:

Sort all suffixes by lexicographic rank and pair the order with an LCP array. Substring searches and repeated-substring questions then become range or neighbor operations on suffix ranks.

Prerequisites:

- Sorting
- String comparison
- Coordinate compression
- Sparse table

Common Algorithms:

- Prefix-doubling suffix array
- Counting-sort rank refinement
- Kasai LCP construction
- Suffix-array binary search
- LCP range minimum query

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 718 — Maximum Length of Repeated Subarray](https://leetcode.com/problems/maximum-length-of-repeated-subarray/)
- [LeetCode 1062 — Longest Repeating Substring](https://leetcode.com/problems/longest-repeating-substring/)
- [LeetCode 1698 — Number of Distinct Substrings in a String](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/)

Hard:

- [LeetCode 1044 — Longest Duplicate Substring](https://leetcode.com/problems/longest-duplicate-substring/)
- [LeetCode 1163 — Last Substring in Lexicographical Order](https://leetcode.com/problems/last-substring-in-lexicographical-order/)
- [LeetCode 1316 — Distinct Echo Substrings](https://leetcode.com/problems/distinct-echo-substrings/)
- [LeetCode 1923 — Longest Common Subpath](https://leetcode.com/problems/longest-common-subpath/)
- [LeetCode 1977 — Number of Ways to Separate Numbers](https://leetcode.com/problems/number-of-ways-to-separate-numbers/)

Reduction Problems

- [LeetCode 28 — Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)
- [LeetCode 2223 — Sum of Scores of Built Strings](https://leetcode.com/problems/sum-of-scores-of-built-strings/)
- [LeetCode 1754 — Largest Merge Of Two Strings](https://leetcode.com/problems/largest-merge-of-two-strings/)
- [LeetCode 2261 — K Divisible Elements Subarrays](https://leetcode.com/problems/k-divisible-elements-subarrays/)
- [LeetCode 2430 — Maximum Deletions on a String](https://leetcode.com/problems/maximum-deletions-on-a-string/)

Related Patterns

- Rolling Hash
- Suffix Automaton
- Sparse Table
- Binary Search
- Coordinate Compression

# Pattern 114

Pattern Name: Suffix Automaton

Category: String Algorithms

Difficulty: Advanced

Recognition Keywords:

- All substrings
- Distinct substring count
- Longest common substring
- End-position equivalence
- Online string processing

Core Idea:

Build the minimal automaton recognizing every substring by extending one character at a time and cloning states when needed. State lengths and suffix links compactly encode substring occurrence classes.

Prerequisites:

- Finite automata
- Suffix links
- Trie concepts
- DAG DP

Common Algorithms:

- Online suffix-automaton construction
- State cloning
- Suffix-link propagation
- Occurrence counting
- Longest-common-substring scan

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 467 — Unique Substrings in Wraparound String](https://leetcode.com/problems/unique-substrings-in-wraparound-string/)
- [LeetCode 718 — Maximum Length of Repeated Subarray](https://leetcode.com/problems/maximum-length-of-repeated-subarray/)
- [LeetCode 1062 — Longest Repeating Substring](https://leetcode.com/problems/longest-repeating-substring/)
- [LeetCode 1698 — Number of Distinct Substrings in a String](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/)
- [LeetCode 2261 — K Divisible Elements Subarrays](https://leetcode.com/problems/k-divisible-elements-subarrays/)

Hard:

- [LeetCode 1044 — Longest Duplicate Substring](https://leetcode.com/problems/longest-duplicate-substring/)
- [LeetCode 1923 — Longest Common Subpath](https://leetcode.com/problems/longest-common-subpath/)

Reduction Problems

- [LeetCode 28 — Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)
- [LeetCode 1392 — Longest Happy Prefix](https://leetcode.com/problems/longest-happy-prefix/)
- [LeetCode 3076 — Shortest Uncommon Substring in an Array](https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/)

Related Patterns

- Suffix Array
- Aho–Corasick
- Rolling Hash
- DAG DP
- Trie

# Pattern 115

Pattern Name: Bitwise XOR

Category: Bit Manipulation

Difficulty: Intermediate

Recognition Keywords:

- Paired values cancel
- Unique element
- Toggle parity
- Maximum XOR
- Missing value
- Prefix XOR

Core Idea:

Use XOR’s cancellation, commutativity, and bitwise independence to remove paired contributions or encode parity. For optimization, choose opposite bits greedily through a binary trie or basis.

Prerequisites:

- Binary representation
- Bitwise operators
- Prefix aggregates

Common Algorithms:

- XOR cancellation
- Prefix XOR
- XOR partitioning
- Bit-frequency reconstruction
- Binary trie
- XOR basis

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 136 — Single Number](https://leetcode.com/problems/single-number/)
- [LeetCode 268 — Missing Number](https://leetcode.com/problems/missing-number/)
- [LeetCode 389 — Find the Difference](https://leetcode.com/problems/find-the-difference/)
- [LeetCode 461 — Hamming Distance](https://leetcode.com/problems/hamming-distance/)
- [LeetCode 1720 — Decode XORed Array](https://leetcode.com/problems/decode-xored-array/)

Medium:

- [LeetCode 137 — Single Number II](https://leetcode.com/problems/single-number-ii/)
- [LeetCode 260 — Single Number III](https://leetcode.com/problems/single-number-iii/)
- [LeetCode 421 — Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/)
- [LeetCode 1310 — XOR Queries of a Subarray](https://leetcode.com/problems/xor-queries-of-a-subarray/)
- [LeetCode 1442 — Count Triplets That Can Form Two Arrays of Equal XOR](https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/)
- [LeetCode 1829 — Maximum XOR for Each Query](https://leetcode.com/problems/maximum-xor-for-each-query/)

Hard:

- [LeetCode 1707 — Maximum XOR With an Element From Array](https://leetcode.com/problems/maximum-xor-with-an-element-from-array/)

Reduction Problems

- [LeetCode 645 — Set Mismatch](https://leetcode.com/problems/set-mismatch/)
- [LeetCode 810 — Chalkboard XOR Game](https://leetcode.com/problems/chalkboard-xor-game/)
- [LeetCode 1734 — Decode XORed Permutation](https://leetcode.com/problems/decode-xored-permutation/)
- [LeetCode 2429 — Minimize XOR](https://leetcode.com/problems/minimize-xor/)
- [LeetCode 2433 — Find The Original Array of Prefix Xor](https://leetcode.com/problems/find-the-original-array-of-prefix-xor/)

Related Patterns

- Prefix XOR
- Trie
- Bitmask Enumeration
- Frequency Counting

# Pattern 116

Pattern Name: Bitmask Enumeration

Category: Bit Manipulation

Difficulty: Intermediate

Recognition Keywords:

- Small set size
- Select any subset
- Boolean features
- Compatibility constraints
- Set encoded as an integer

Core Idea:

Encode membership of a small set in the bits of an integer and enumerate masks from zero to (2^n-1). Bit tests, insertion, removal, and compatibility checks then become constant-time operations.

Prerequisites:

- Subsets
- Binary representation
- Bitwise operators
- Complexity analysis

Common Algorithms:

- Full mask enumeration
- Set-bit iteration
- Mask compatibility testing
- Meet-in-the-middle masks
- Mask-state BFS

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 401 — Binary Watch](https://leetcode.com/problems/binary-watch/)
- [LeetCode 1863 — Sum of All Subset XOR Totals](https://leetcode.com/problems/sum-of-all-subset-xor-totals/)

Medium:

- [LeetCode 78 — Subsets](https://leetcode.com/problems/subsets/)
- [LeetCode 90 — Subsets II](https://leetcode.com/problems/subsets-ii/)
- [LeetCode 473 — Matchsticks to Square](https://leetcode.com/problems/matchsticks-to-square/)
- [LeetCode 1239 — Maximum Length of a Concatenated String with Unique Characters](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/)
- [LeetCode 1947 — Maximum Compatibility Score Sum](https://leetcode.com/problems/maximum-compatibility-score-sum/)
- [LeetCode 2002 — Maximum Product of the Length of Two Palindromic Subsequences](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/)

Hard:

- [LeetCode 1178 — Number of Valid Words for Each Puzzle](https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/)
- [LeetCode 1255 — Maximum Score Words Formed by Letters](https://leetcode.com/problems/maximum-score-words-formed-by-letters/)
- [LeetCode 1284 — Minimum Number of Flips to Convert Binary Matrix to Zero Matrix](https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/)
- [LeetCode 1601 — Maximum Number of Achievable Transfer Requests](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/)

Reduction Problems

- [LeetCode 698 — Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)
- [LeetCode 1125 — Smallest Sufficient Team](https://leetcode.com/problems/smallest-sufficient-team/)
- [LeetCode 1681 — Minimum Incompatibility](https://leetcode.com/problems/minimum-incompatibility/)
- [LeetCode 1723 — Find Minimum Time to Finish All Jobs](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/)
- [LeetCode 2305 — Fair Distribution of Cookies](https://leetcode.com/problems/fair-distribution-of-cookies/)

Related Patterns

- Subsets Backtracking
- Bitmask DP

# Pattern 117

Pattern Name: Submask Enumeration

Category: Bit Manipulation

Difficulty: Advanced

Recognition Keywords:

- Partition a mask
- Enumerate subsets of a subset
- Assign one group at a time
- Disjoint feature sets
- Small-universe DP

Core Idea:

Enumerate every submask of a mask with `sub = (sub - 1) & mask`, touching exactly the valid subsets. This is the standard transition engine for partitioning and group-assignment DP over small sets.

Prerequisites:

- Bitmask Enumeration
- Bitmask DP
- Subset representation

Common Algorithms:

- Proper-submask loop
- Complement-mask transition
- Mask partition DP
- Sum-over-subsets DP
- Meet-in-the-middle

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 638 — Shopping Offers](https://leetcode.com/problems/shopping-offers/)
- [LeetCode 698 — Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)
- [LeetCode 1986 — Minimum Number of Work Sessions to Finish the Tasks](https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/)
- [LeetCode 2305 — Fair Distribution of Cookies](https://leetcode.com/problems/fair-distribution-of-cookies/)

Hard:

- [LeetCode 1125 — Smallest Sufficient Team](https://leetcode.com/problems/smallest-sufficient-team/)
- [LeetCode 1494 — Parallel Courses II](https://leetcode.com/problems/parallel-courses-ii/)
- [LeetCode 1655 — Distribute Repeating Integers](https://leetcode.com/problems/distribute-repeating-integers/)
- [LeetCode 1681 — Minimum Incompatibility](https://leetcode.com/problems/minimum-incompatibility/)
- [LeetCode 1723 — Find Minimum Time to Finish All Jobs](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/)
- [LeetCode 1799 — Maximize Score After N Operations](https://leetcode.com/problems/maximize-score-after-n-operations/)
- [LeetCode 2172 — Maximum AND Sum of Array](https://leetcode.com/problems/maximum-and-sum-of-array/)

Reduction Problems

- [LeetCode 473 — Matchsticks to Square](https://leetcode.com/problems/matchsticks-to-square/)
- [LeetCode 1255 — Maximum Score Words Formed by Letters](https://leetcode.com/problems/maximum-score-words-formed-by-letters/)
- [LeetCode 1601 — Maximum Number of Achievable Transfer Requests](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/)
- [LeetCode 1947 — Maximum Compatibility Score Sum](https://leetcode.com/problems/maximum-compatibility-score-sum/)
- [LeetCode 2002 — Maximum Product of the Length of Two Palindromic Subsequences](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/)

Related Patterns

- Bitmask Enumeration
- Bitmask DP
- Partition DP
- Backtracking

# Pattern 118

Pattern Name: Binary Lifting

Category: Bit Manipulation

Difficulty: Advanced

Recognition Keywords:

- K-th ancestor
- Repeated function application
- Many ancestor queries
- Functional graph
- Jump powers of two
- LCA queries

Core Idea:

Precompute the result of (2^j) jumps from every state, then decompose each requested jump count into set bits. The same doubling table supports ancestors, functional graphs, and path aggregates.

Prerequisites:

- Trees or functional graphs
- Binary representation
- Dynamic programming
- Lowest Common Ancestor

Common Algorithms:

- Ancestor doubling table
- Bit-decomposed jumping
- Binary-lifting LCA
- Doubling with path aggregates
- Functional-graph lifting

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 235 — Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)
- [LeetCode 236 — Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)
- [LeetCode 1740 — Find Distance in a Binary Tree](https://leetcode.com/problems/find-distance-in-a-binary-tree/)
- [LeetCode 2096 — Step-By-Step Directions From a Binary Tree Node to Another](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/)

Hard:

- [LeetCode 1483 — Kth Ancestor of a Tree Node](https://leetcode.com/problems/kth-ancestor-of-a-tree-node/)
- [LeetCode 2277 — Closest Node to Path in Tree](https://leetcode.com/problems/closest-node-to-path-in-tree/)
- [LeetCode 2836 — Maximize Value of Function in a Ball Passing Game](https://leetcode.com/problems/maximize-value-of-function-in-a-ball-passing-game/)
- [LeetCode 2846 — Minimum Edge Weight Equilibrium Queries in a Tree](https://leetcode.com/problems/minimum-edge-weight-equilibrium-queries-in-a-tree/)

Reduction Problems

- [LeetCode 1257 — Smallest Common Region](https://leetcode.com/problems/smallest-common-region/)
- [LeetCode 1650 — Lowest Common Ancestor of a Binary Tree III](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/)
- [LeetCode 1676 — Lowest Common Ancestor of a Binary Tree IV](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/)
- [LeetCode 2509 — Cycle Length Queries in a Tree](https://leetcode.com/problems/cycle-length-queries-in-a-tree/)
- [LeetCode 2646 — Minimize the Total Price of the Trips](https://leetcode.com/problems/minimize-the-total-price-of-the-trips/)

Related Patterns

- Lowest Common Ancestor
- Sparse Table
- Tree DFS
- Functional Graphs
- Bitmask Enumeration

# Pattern 119

Pattern Name: Fenwick Tree

Category: Advanced Data Structures

Difficulty: Advanced

Recognition Keywords:

- Point updates
- Prefix queries
- Dynamic frequencies
- Order statistics
- Count smaller elements
- Inversion counting

Core Idea:

Store partial prefix aggregates in ranges determined by the least significant set bit. Point updates and prefix queries both take logarithmic time with a compact array representation.

Prerequisites:

- Prefix Sum
- Binary representation
- Coordinate Compression
- Associative operations

Common Algorithms:

- Point update and prefix query
- Range query by prefix difference
- Range update with dual Fenwick trees
- Frequency order statistic
- Offline inversion counting

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 307 — Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/)
- [LeetCode 1395 — Count Number of Teams](https://leetcode.com/problems/count-number-of-teams/)

Hard:

- [LeetCode 315 — Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)
- [LeetCode 327 — Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)
- [LeetCode 493 — Reverse Pairs](https://leetcode.com/problems/reverse-pairs/)
- [LeetCode 1649 — Create Sorted Array through Instructions](https://leetcode.com/problems/create-sorted-array-through-instructions/)
- [LeetCode 2179 — Count Good Triplets in an Array](https://leetcode.com/problems/count-good-triplets-in-an-array/)
- [LeetCode 2426 — Number of Pairs Satisfying Inequality](https://leetcode.com/problems/number-of-pairs-satisfying-inequality/)
- [LeetCode 2659 — Make Array Empty](https://leetcode.com/problems/make-array-empty/)
- [LeetCode 2926 — Maximum Balanced Subsequence Sum](https://leetcode.com/problems/maximum-balanced-subsequence-sum/)

Reduction Problems

- [LeetCode 406 — Queue Reconstruction by Height](https://leetcode.com/problems/queue-reconstruction-by-height/)
- [LeetCode 2250 — Count Number of Rectangles Containing Each Point](https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/)
- [LeetCode 2519 — Count the Number of K-Big Indices](https://leetcode.com/problems/count-the-number-of-k-big-indices/)
- [LeetCode 2736 — Maximum Sum Queries](https://leetcode.com/problems/maximum-sum-queries/)
- [LeetCode 3187 — Peaks in Array](https://leetcode.com/problems/peaks-in-array/)

Related Patterns

- Prefix Sum
- Coordinate Compression
- Segment Tree
- Merge-Sort Counting
- Ordered Set

# Pattern 120

Pattern Name: Segment Tree

Category: Advanced Data Structures

Difficulty: Advanced

Recognition Keywords:

- Dynamic range query
- Point updates
- Arbitrary associative aggregate
- Interval decomposition
- Online queries

Core Idea:

Recursively partition an index range and store an aggregate for each segment. Any query interval decomposes into logarithmically many canonical nodes, while point updates repair one root-to-leaf path.

Prerequisites:

- Divide and conquer
- Recursion
- Associative operations
- Array indexing

Common Algorithms:

- Recursive segment tree
- Iterative segment tree
- Point update
- Range query
- Coordinate-compressed segment tree
- Dynamic segment tree

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 307 — Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/)
- [LeetCode 729 — My Calendar I](https://leetcode.com/problems/my-calendar-i/)
- [LeetCode 731 — My Calendar II](https://leetcode.com/problems/my-calendar-ii/)

Hard:

- [LeetCode 218 — The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/)
- [LeetCode 699 — Falling Squares](https://leetcode.com/problems/falling-squares/)
- [LeetCode 715 — Range Module](https://leetcode.com/problems/range-module/)
- [LeetCode 732 — My Calendar III](https://leetcode.com/problems/my-calendar-iii/)
- [LeetCode 2213 — Longest Substring of One Repeating Character](https://leetcode.com/problems/longest-substring-of-one-repeating-character/)
- [LeetCode 2286 — Booking Concert Tickets in Groups](https://leetcode.com/problems/booking-concert-tickets-in-groups/)
- [LeetCode 2407 — Longest Increasing Subsequence II](https://leetcode.com/problems/longest-increasing-subsequence-ii/)
- [LeetCode 2569 — Handling Sum Queries After Update](https://leetcode.com/problems/handling-sum-queries-after-update/)
- [LeetCode 3161 — Block Placement Queries](https://leetcode.com/problems/block-placement-queries/)

Reduction Problems

- [LeetCode 315 — Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)
- [LeetCode 327 — Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)
- [LeetCode 493 — Reverse Pairs](https://leetcode.com/problems/reverse-pairs/)
- [LeetCode 1649 — Create Sorted Array through Instructions](https://leetcode.com/problems/create-sorted-array-through-instructions/)
- [LeetCode 2926 — Maximum Balanced Subsequence Sum](https://leetcode.com/problems/maximum-balanced-subsequence-sum/)

Related Patterns

- Fenwick Tree
- Lazy Segment Tree
- Coordinate Compression
- Sweep Line

# Pattern 121

Pattern Name: Lazy Segment Tree

Category: Advanced Data Structures

Difficulty: Advanced

Recognition Keywords:

- Range updates
- Range queries
- Deferred propagation
- Interval assignment
- Interval increment
- Online coverage

Core Idea:

Attach pending update tags to segment-tree nodes and push them to children only when required. Entire covered ranges can then be updated and queried in logarithmic time.

Prerequisites:

- Segment Tree
- Function composition
- Interval invariants
- Recursion

Common Algorithms:

- Lazy range addition
- Lazy range assignment
- Affine lazy tags
- Push and pull operations
- Dynamic lazy segment tree

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 731 — My Calendar II](https://leetcode.com/problems/my-calendar-ii/)

Hard:

- [LeetCode 699 — Falling Squares](https://leetcode.com/problems/falling-squares/)
- [LeetCode 715 — Range Module](https://leetcode.com/problems/range-module/)
- [LeetCode 732 — My Calendar III](https://leetcode.com/problems/my-calendar-iii/)
- [LeetCode 850 — Rectangle Area II](https://leetcode.com/problems/rectangle-area-ii/)
- [LeetCode 1622 — Fancy Sequence](https://leetcode.com/problems/fancy-sequence/)
- [LeetCode 2286 — Booking Concert Tickets in Groups](https://leetcode.com/problems/booking-concert-tickets-in-groups/)
- [LeetCode 2569 — Handling Sum Queries After Update](https://leetcode.com/problems/handling-sum-queries-after-update/)

Reduction Problems

- [LeetCode 370 — Range Addition](https://leetcode.com/problems/range-addition/)
- [LeetCode 1109 — Corporate Flight Bookings](https://leetcode.com/problems/corporate-flight-bookings/)
- [LeetCode 1893 — Check if All the Integers in a Range Are Covered](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/)
- [LeetCode 2251 — Number of Flowers in Full Bloom](https://leetcode.com/problems/number-of-flowers-in-full-bloom/)
- [LeetCode 2406 — Divide Intervals Into Minimum Number of Groups](https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/)

Related Patterns

- Segment Tree
- Difference Array
- Sweep Line
- Coordinate Compression

# Pattern 122

Pattern Name: Sparse Table

Category: Advanced Data Structures

Difficulty: Advanced

Recognition Keywords:

- Static range queries
- Idempotent operation
- Range minimum or maximum
- Immutable array
- Power-of-two decomposition

Core Idea:

Precompute answers for every power-of-two interval. Idempotent range queries such as minimum, maximum, GCD, AND, or OR can then combine two overlapping blocks in constant time.

Prerequisites:

- Binary representation
- Dynamic programming
- Associative operations
- Range queries

Common Algorithms:

- Sparse-table preprocessing
- Constant-time RMQ
- Disjoint power-of-two decomposition
- LCP range queries
- Doubling tables

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 1438 — Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/)
- [LeetCode 2411 — Smallest Subarrays With Maximum Bitwise OR](https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/)

Hard:

- [LeetCode 239 — Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
- [LeetCode 1521 — Find a Value of a Mysterious Function Closest to Target](https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/)
- [LeetCode 2940 — Find Building Where Alice and Bob Can Meet](https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/)
- [LeetCode 3171 — Find Subarray With Bitwise OR Closest to K](https://leetcode.com/problems/find-subarray-with-bitwise-or-closest-to-k/)

Reduction Problems

- [LeetCode 84 — Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)
- [LeetCode 654 — Maximum Binary Tree](https://leetcode.com/problems/maximum-binary-tree/)
- [LeetCode 1483 — Kth Ancestor of a Tree Node](https://leetcode.com/problems/kth-ancestor-of-a-tree-node/)
- [LeetCode 2458 — Height of Binary Tree After Subtree Removal Queries](https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/)
- [LeetCode 2846 — Minimum Edge Weight Equilibrium Queries in a Tree](https://leetcode.com/problems/minimum-edge-weight-equilibrium-queries-in-a-tree/)

Related Patterns

- Segment Tree
- Binary Lifting
- Prefix/Suffix Decomposition
- Suffix Array

# Pattern 123

Pattern Name: Ordered Set

Category: Advanced Data Structures

Difficulty: Advanced

Recognition Keywords:

- Predecessor or successor
- Dynamic sorted values
- Floor or ceiling
- Rank queries
- Ordered multiset
- Online intervals

Core Idea:

Maintain keys in sorted order while supporting logarithmic insertion, deletion, and neighbor queries. Add counts or augmented subtree sizes when duplicates or rank selection matter.

Prerequisites:

- Binary Search Tree
- Sorting
- Invariants
- Comparator design

Common Algorithms:

- Balanced binary search tree
- Ordered multiset
- Ordered map
- Predecessor/successor search
- Order-statistic tree
- Interval map

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 729 — My Calendar I](https://leetcode.com/problems/my-calendar-i/)
- [LeetCode 855 — Exam Room](https://leetcode.com/problems/exam-room/)
- [LeetCode 981 — Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/)
- [LeetCode 1438 — Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/)
- [LeetCode 2034 — Stock Price Fluctuation](https://leetcode.com/problems/stock-price-fluctuation/)
- [LeetCode 2349 — Design a Number Container System](https://leetcode.com/problems/design-a-number-container-system/)

Hard:

- [LeetCode 220 — Contains Duplicate III](https://leetcode.com/problems/contains-duplicate-iii/)
- [LeetCode 352 — Data Stream as Disjoint Intervals](https://leetcode.com/problems/data-stream-as-disjoint-intervals/)
- [LeetCode 480 — Sliding Window Median](https://leetcode.com/problems/sliding-window-median/)
- [LeetCode 715 — Range Module](https://leetcode.com/problems/range-module/)
- [LeetCode 2102 — Sequentially Ordinal Rank Tracker](https://leetcode.com/problems/sequentially-ordinal-rank-tracker/)
- [LeetCode 2659 — Make Array Empty](https://leetcode.com/problems/make-array-empty/)

Reduction Problems

- [LeetCode 218 — The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/)
- [LeetCode 239 — Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
- [LeetCode 846 — Hand of Straights](https://leetcode.com/problems/hand-of-straights/)
- [LeetCode 1847 — Closest Room](https://leetcode.com/problems/closest-room/)
- [LeetCode 1942 — The Number of the Smallest Unoccupied Chair](https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/)

Related Patterns

- Binary Search Tree
- Two Heaps
- Segment Tree
- Coordinate Compression
- Sweep Line

- String DP

# Pattern 124

Pattern Name: Strongly Connected Components

Category: Advanced Graph Algorithms

Difficulty: Advanced

Recognition Keywords:

- Directed cycles
- Mutual reachability
- Condensation DAG
- Collapse cyclic dependencies
- Source components

Core Idea:

Partition a directed graph into maximal groups whose vertices can all reach one another. Contracting each group produces a DAG on which dependency and reachability reasoning becomes simpler.

Prerequisites:

- Graph DFS
- Directed graphs
- DFS timestamps
- Topological Sort

Common Algorithms:

- Tarjan’s SCC algorithm
- Kosaraju’s algorithm
- Condensation graph construction
- Low-link propagation
- Source-SCC counting

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 207 — Course Schedule](https://leetcode.com/problems/course-schedule/)
- [LeetCode 210 — Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)
- [LeetCode 802 — Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/)

Hard:

- [LeetCode 1857 — Largest Color Value in a Directed Graph](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/)
- [LeetCode 2127 — Maximum Employees to Be Invited to a Meeting](https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/)
- [LeetCode 2360 — Longest Cycle in a Graph](https://leetcode.com/problems/longest-cycle-in-a-graph/)

Reduction Problems

- [LeetCode 1059 — All Paths from Source Lead to Destination](https://leetcode.com/problems/all-paths-from-source-lead-to-destination/)
- [LeetCode 1203 — Sort Items by Groups Respecting Dependencies](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/)
- [LeetCode 1462 — Course Schedule IV](https://leetcode.com/problems/course-schedule-iv/)
- [LeetCode 1591 — Strange Printer II](https://leetcode.com/problems/strange-printer-ii/)
- [LeetCode 2392 — Build a Matrix With Conditions](https://leetcode.com/problems/build-a-matrix-with-conditions/)

Related Patterns

- Topological Sort
- Graph DFS
- Bridges
- Functional Graphs
- DAG DP

# Pattern 125

Pattern Name: Bridges

Category: Advanced Graph Algorithms

Difficulty: Advanced

Recognition Keywords:

- Critical edge
- Disconnect after edge removal
- No alternate route
- Network vulnerability
- Low-link value

Core Idea:

During DFS, compare each child’s low-link value with its parent’s discovery time. A tree edge is a bridge exactly when the child’s subtree cannot reach the parent or an ancestor without that edge.

Prerequisites:

- Graph DFS
- Undirected graphs
- DFS timestamps
- Tree edges and back edges

Common Algorithms:

- Tarjan bridge detection
- Discovery-time DFS
- Low-link propagation
- Bridge-tree construction
- Offline critical-edge classification

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 684 — Redundant Connection](https://leetcode.com/problems/redundant-connection/)

Hard:

- [LeetCode 1192 — Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/)
- [LeetCode 1489 — Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/)
- [LeetCode 2204 — Distance to a Cycle in Undirected Graph](https://leetcode.com/problems/distance-to-a-cycle-in-undirected-graph/)
- [LeetCode 2608 — Shortest Cycle in a Graph](https://leetcode.com/problems/shortest-cycle-in-a-graph/)

Reduction Problems

- [LeetCode 1319 — Number of Operations to Make Network Connected](https://leetcode.com/problems/number-of-operations-to-make-network-connected/)
- [LeetCode 1568 — Minimum Number of Days to Disconnect Island](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/)
- [LeetCode 1579 — Remove Max Number of Edges to Keep Graph Fully Traversable](https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/)

Related Patterns

- Articulation Points
- Graph DFS
- Strongly Connected Components
- Minimum Spanning Tree
- Union Find

# Pattern 126

Pattern Name: Articulation Points

Category: Advanced Graph Algorithms

Difficulty: Advanced

Recognition Keywords:

- Critical vertex
- Disconnect after vertex removal
- Single point of failure
- Biconnected components
- Low-link value

Core Idea:

Track discovery and low-link times in an undirected DFS tree. A non-root vertex is an articulation point when a child subtree has no back edge above it; the root is critical when it has multiple DFS children.

Prerequisites:

- Graph DFS
- Bridges
- DFS timestamps
- Connected components

Common Algorithms:

- Tarjan articulation-point detection
- Low-link DFS
- Biconnected-component decomposition
- Block-cut tree construction

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 2368 — Reachable Nodes With Restrictions](https://leetcode.com/problems/reachable-nodes-with-restrictions/)

Hard:

- [LeetCode 924 — Minimize Malware Spread](https://leetcode.com/problems/minimize-malware-spread/)
- [LeetCode 928 — Minimize Malware Spread II](https://leetcode.com/problems/minimize-malware-spread-ii/)
- [LeetCode 1192 — Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/)
- [LeetCode 1568 — Minimum Number of Days to Disconnect Island](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/)

Reduction Problems

- [LeetCode 827 — Making A Large Island](https://leetcode.com/problems/making-a-large-island/)
- [LeetCode 1443 — Minimum Time to Collect All Apples in a Tree](https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/)
- [LeetCode 2458 — Height of Binary Tree After Subtree Removal Queries](https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/)

Related Patterns

- Bridges
- Graph DFS
- Connected Components
- Union Find
- Min Cut

# Pattern 127

Pattern Name: Euler Tour

Category: Advanced Graph Algorithms

Difficulty: Advanced

Recognition Keywords:

- Entry and exit time
- Flatten a tree
- Subtree range
- Ancestor query
- DFS order
- Path or subtree queries

Core Idea:

Record each node’s DFS entry and exit positions so every subtree becomes a contiguous interval. Tree queries can then be reduced to array range queries or timestamp comparisons.

Prerequisites:

- Tree DFS
- Recursion
- Prefix Sum
- Range-query structures

Common Algorithms:

- Entry-time Euler tour
- Entry/exit Euler tour
- Subtree flattening
- Ancestor timestamp test
- Euler tour plus Fenwick tree
- Euler tour plus segment tree

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 94 — Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)
- [LeetCode 144 — Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)
- [LeetCode 145 — Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)
- [LeetCode 589 — N-ary Tree Preorder Traversal](https://leetcode.com/problems/n-ary-tree-preorder-traversal/)
- [LeetCode 590 — N-ary Tree Postorder Traversal](https://leetcode.com/problems/n-ary-tree-postorder-traversal/)

Hard:

- [LeetCode 2322 — Minimum Score After Removals on a Tree](https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/)
- [LeetCode 2458 — Height of Binary Tree After Subtree Removal Queries](https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/)
- [LeetCode 2846 — Minimum Edge Weight Equilibrium Queries in a Tree](https://leetcode.com/problems/minimum-edge-weight-equilibrium-queries-in-a-tree/)
- [LeetCode 3327 — Check if DFS Strings Are Palindromes](https://leetcode.com/problems/check-if-dfs-strings-are-palindromes/)

Reduction Problems

- [LeetCode 1443 — Minimum Time to Collect All Apples in a Tree](https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/)
- [LeetCode 1519 — Number of Nodes in the Sub-Tree With the Same Label](https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/)
- [LeetCode 1938 — Maximum Genetic Difference Query](https://leetcode.com/problems/maximum-genetic-difference-query/)
- [LeetCode 2477 — Minimum Fuel Cost to Report to the Capital](https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/)
- [LeetCode 2581 — Count Number of Possible Root Nodes](https://leetcode.com/problems/count-number-of-possible-root-nodes/)

Related Patterns

- Tree DFS
- Fenwick Tree
- Segment Tree
- Binary Lifting
- Lowest Common Ancestor

# Pattern 128

Pattern Name: Euler Path and Circuit

Category: Advanced Graph Algorithms

Difficulty: Advanced

Recognition Keywords:

- Use every edge exactly once
- Reconstruct itinerary
- Arrange directed pairs
- Degree balance
- De Bruijn sequence

Core Idea:

Check degree and connectivity conditions, then consume edges with Hierholzer’s algorithm and append vertices during backtracking. Reversing that postorder yields an Euler trail using every edge once.

Prerequisites:

- Graph DFS
- Directed and undirected degree
- Stack traversal
- Connectivity

Common Algorithms:

- Hierholzer’s algorithm
- Degree-balance validation
- Lexicographic Euler traversal
- De Bruijn graph construction
- Edge-indexed adjacency lists

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 565 — Array Nesting](https://leetcode.com/problems/array-nesting/)
- [LeetCode 1743 — Restore the Array From Adjacent Pairs](https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/)

Hard:

- [LeetCode 332 — Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/)
- [LeetCode 753 — Cracking the Safe](https://leetcode.com/problems/cracking-the-safe/)
- [LeetCode 2097 — Valid Arrangement of Pairs](https://leetcode.com/problems/valid-arrangement-of-pairs/)

Reduction Problems

- [LeetCode 457 — Circular Array Loop](https://leetcode.com/problems/circular-array-loop/)
- [LeetCode 2127 — Maximum Employees to Be Invited to a Meeting](https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/)
- [LeetCode 2204 — Distance to a Cycle in Undirected Graph](https://leetcode.com/problems/distance-to-a-cycle-in-undirected-graph/)
- [LeetCode 2360 — Longest Cycle in a Graph](https://leetcode.com/problems/longest-cycle-in-a-graph/)

Related Patterns

- Graph DFS
- Stack Simulation
- Strongly Connected Components
- Graph Modeling

# Pattern 129

Pattern Name: Maximum Flow

Category: Advanced Graph Algorithms

Difficulty: Advanced

Recognition Keywords:

- Capacity constraints
- Route maximum units
- Disjoint assignments
- Source and sink
- Residual network
- Feasible circulation

Core Idea:

Send flow from a source to a sink while maintaining residual capacities that allow earlier choices to be reversed. Many allocation and matching constraints become capacities in a flow network.

Prerequisites:

- Graph BFS and DFS
- Directed weighted graphs
- Greedy augmentation
- Invariant design

Common Algorithms:

- Ford–Fulkerson
- Edmonds–Karp
- Dinic’s algorithm
- Capacity scaling
- Min-cost max-flow
- Flow decomposition

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 1820 — Maximum Number of Accepted Invitations](https://leetcode.com/problems/maximum-number-of-accepted-invitations/)
- [LeetCode 2850 — Minimum Moves to Spread Stones Over Grid](https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/)

Hard:

- [LeetCode 1349 — Maximum Students Taking Exam](https://leetcode.com/problems/maximum-students-taking-exam/)
- [LeetCode 1601 — Maximum Number of Achievable Transfer Requests](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/)
- [LeetCode 2123 — Minimum Operations to Remove Adjacent Ones in Matrix](https://leetcode.com/problems/minimum-operations-to-remove-adjacent-ones-in-matrix/)
- [LeetCode 3276 — Select Cells in Grid With Maximum Score](https://leetcode.com/problems/select-cells-in-grid-with-maximum-score/)

Reduction Problems

- [LeetCode 1066 — Campus Bikes II](https://leetcode.com/problems/campus-bikes-ii/)
- [LeetCode 1568 — Minimum Number of Days to Disconnect Island](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/)
- [LeetCode 1595 — Minimum Cost to Connect Two Groups of Points](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/)
- [LeetCode 1879 — Minimum XOR Sum of Two Arrays](https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/)
- [LeetCode 1947 — Maximum Compatibility Score Sum](https://leetcode.com/problems/maximum-compatibility-score-sum/)
- [LeetCode 2071 — Maximum Number of Tasks You Can Assign](https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/)

Related Patterns

- Min Cut
- Bipartite Matching
- Graph Modeling
- State-Space Search
- Greedy + Heap

# Pattern 130

Pattern Name: Minimum Cut

Category: Advanced Graph Algorithms

Difficulty: Advanced

Recognition Keywords:

- Separate source and sink
- Minimum capacity removal
- Vertex cover
- Disconnect a network
- Flow-cut duality

Core Idea:

After computing maximum flow, vertices reachable from the source in the residual graph define a minimum source–sink cut. Node splitting converts vertex-removal costs into edge capacities.

Prerequisites:

- Maximum Flow
- Graph reachability
- Residual networks
- Cut definitions

Common Algorithms:

- Max-flow min-cut theorem
- Residual reachability
- Node splitting
- Bipartite minimum vertex cover
- Global-cut reductions

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 1820 — Maximum Number of Accepted Invitations](https://leetcode.com/problems/maximum-number-of-accepted-invitations/)

Hard:

- [LeetCode 1192 — Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/)
- [LeetCode 1349 — Maximum Students Taking Exam](https://leetcode.com/problems/maximum-students-taking-exam/)
- [LeetCode 1568 — Minimum Number of Days to Disconnect Island](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/)
- [LeetCode 2123 — Minimum Operations to Remove Adjacent Ones in Matrix](https://leetcode.com/problems/minimum-operations-to-remove-adjacent-ones-in-matrix/)

Reduction Problems

- [LeetCode 455 — Assign Cookies](https://leetcode.com/problems/assign-cookies/)
- [LeetCode 870 — Advantage Shuffle](https://leetcode.com/problems/advantage-shuffle/)
- [LeetCode 928 — Minimize Malware Spread II](https://leetcode.com/problems/minimize-malware-spread-ii/)
- [LeetCode 1353 — Maximum Number of Events That Can Be Attended](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/)
- [LeetCode 2071 — Maximum Number of Tasks You Can Assign](https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/)

Related Patterns

- Maximum Flow
- Bridges
- Articulation Points
- Bipartite Matching
- Union Find

# Pattern 131

Pattern Name: Bipartite Matching

Category: Advanced Graph Algorithms

Difficulty: Advanced

Recognition Keywords:

- Assign left side to right side
- One-to-one pairing
- Worker-job assignment
- Maximum compatible pairs
- Minimum vertex cover

Core Idea:

Model candidates and resources as opposite partitions and add edges for valid pairings. Augmenting paths repeatedly reroute existing matches to increase the matching size.

Prerequisites:

- Bipartite Coloring
- Graph DFS or BFS
- Maximum Flow
- Augmenting paths

Common Algorithms:

- Kuhn’s algorithm
- Hopcroft–Karp
- Matching via max flow
- Hungarian algorithm
- Min-cost matching
- Kőnig’s theorem

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 1066 — Campus Bikes II](https://leetcode.com/problems/campus-bikes-ii/)
- [LeetCode 1820 — Maximum Number of Accepted Invitations](https://leetcode.com/problems/maximum-number-of-accepted-invitations/)
- [LeetCode 1947 — Maximum Compatibility Score Sum](https://leetcode.com/problems/maximum-compatibility-score-sum/)
- [LeetCode 2850 — Minimum Moves to Spread Stones Over Grid](https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/)

Hard:

- [LeetCode 1349 — Maximum Students Taking Exam](https://leetcode.com/problems/maximum-students-taking-exam/)
- [LeetCode 1595 — Minimum Cost to Connect Two Groups of Points](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/)
- [LeetCode 1879 — Minimum XOR Sum of Two Arrays](https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/)
- [LeetCode 2123 — Minimum Operations to Remove Adjacent Ones in Matrix](https://leetcode.com/problems/minimum-operations-to-remove-adjacent-ones-in-matrix/)
- [LeetCode 3276 — Select Cells in Grid With Maximum Score](https://leetcode.com/problems/select-cells-in-grid-with-maximum-score/)

Reduction Problems

- [LeetCode 455 — Assign Cookies](https://leetcode.com/problems/assign-cookies/)
- [LeetCode 870 — Advantage Shuffle](https://leetcode.com/problems/advantage-shuffle/)
- [LeetCode 1353 — Maximum Number of Events That Can Be Attended](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/)
- [LeetCode 2071 — Maximum Number of Tasks You Can Assign](https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/)
- [LeetCode 2611 — Mice and Cheese](https://leetcode.com/problems/mice-and-cheese/)

Related Patterns

- Maximum Flow
- Min Cut
- Bipartite Coloring
- Greedy + Heap
- Bitmask DP

# Pattern 132

Pattern Name: Greatest Common Divisor

Category: Mathematics

Difficulty: Beginner

Recognition Keywords:

- Common divisor
- Coprime
- Repeating unit
- Ratio normalization
- Bézout identity
- Least common multiple

Core Idea:

Use Euclid’s algorithm to replace ((a,b)) with ((b,a \bmod b)) until the remainder is zero. GCD normalizes ratios, exposes periodic structure, and combines with LCM for divisibility counting.

Prerequisites:

- Division and remainders
- Basic number theory
- Invariant design

Common Algorithms:

- Euclidean algorithm
- Extended Euclidean algorithm
- LCM via GCD
- GCD accumulation
- Ratio normalization

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 914 — X of a Kind in a Deck of Cards](https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/)
- [LeetCode 1071 — Greatest Common Divisor of Strings](https://leetcode.com/problems/greatest-common-divisor-of-strings/)
- [LeetCode 1979 — Find Greatest Common Divisor of Array](https://leetcode.com/problems/find-greatest-common-divisor-of-array/)
- [LeetCode 2427 — Number of Common Factors](https://leetcode.com/problems/number-of-common-factors/)

Medium:

- [LeetCode 365 — Water and Jug Problem](https://leetcode.com/problems/water-and-jug-problem/)

Hard:

- [LeetCode 149 — Max Points on a Line](https://leetcode.com/problems/max-points-on-a-line/)
- [LeetCode 1250 — Check If It Is a Good Array](https://leetcode.com/problems/check-if-it-is-a-good-array/)
- [LeetCode 1819 — Number of Different Subsequences GCDs](https://leetcode.com/problems/number-of-different-subsequences-gcds/)
- [LeetCode 2344 — Minimum Deletions to Make Array Divisible](https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/)

Reduction Problems

- [LeetCode 878 — Nth Magical Number](https://leetcode.com/problems/nth-magical-number/)
- [LeetCode 1201 — Ugly Number III](https://leetcode.com/problems/ugly-number-iii/)
- [LeetCode 1447 — Simplified Fractions](https://leetcode.com/problems/simplified-fractions/)
- [LeetCode 2197 — Replace Non-Coprime Numbers in Array](https://leetcode.com/problems/replace-non-coprime-numbers-in-array/)
- [LeetCode 2807 — Insert Greatest Common Divisors in Linked List](https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/)

Related Patterns

- Modular Inverse
- Prime Factorization
- Sieve
- Binary Search on Answer

# Pattern 133

Pattern Name: Modular Arithmetic

Category: Mathematics

Difficulty: Intermediate

Recognition Keywords:

- Answer modulo a prime
- Divisibility by k
- Remainder classes
- Cyclic state
- Large counts
- Congruence

Core Idea:

Replace integers by congruent remainder classes while preserving addition and multiplication. Normalize negative values and postpone division until a valid modular inverse is available.

Prerequisites:

- Division and remainders
- Algebra
- Prefix Sum

Common Algorithms:

- Modular normalization
- Modular addition and multiplication
- Remainder-frequency counting
- Prefix remainders
- Modular exponentiation

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 523 — Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/)
- [LeetCode 974 — Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/)
- [LeetCode 1497 — Check If Array Pairs Are Divisible by k](https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/)
- [LeetCode 1590 — Make Sum Divisible by P](https://leetcode.com/problems/make-sum-divisible-by-p/)
- [LeetCode 1814 — Count Nice Pairs in an Array](https://leetcode.com/problems/count-nice-pairs-in-an-array/)
- [LeetCode 1922 — Count Good Numbers](https://leetcode.com/problems/count-good-numbers/)
- [LeetCode 2575 — Find the Divisibility Array of a String](https://leetcode.com/problems/find-the-divisibility-array-of-a-string/)
- [LeetCode 2961 — Double Modular Exponentiation](https://leetcode.com/problems/double-modular-exponentiation/)

Hard:

- [LeetCode 920 — Number of Music Playlists](https://leetcode.com/problems/number-of-music-playlists/)
- [LeetCode 2338 — Count the Number of Ideal Arrays](https://leetcode.com/problems/count-the-number-of-ideal-arrays/)
- [LeetCode 2514 — Count Anagrams](https://leetcode.com/problems/count-anagrams/)
- [LeetCode 2842 — Count K-Subsequences of a String With Maximum Beauty](https://leetcode.com/problems/count-k-subsequences-of-a-string-with-maximum-beauty/)

Reduction Problems

- [LeetCode 891 — Sum of Subsequence Widths](https://leetcode.com/problems/sum-of-subsequence-widths/)
- [LeetCode 907 — Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums/)
- [LeetCode 1856 — Maximum Subarray Min-Product](https://leetcode.com/problems/maximum-subarray-min-product/)
- [LeetCode 2281 — Sum of Total Strength of Wizards](https://leetcode.com/problems/sum-of-total-strength-of-wizards/)
- [LeetCode 2954 — Count the Number of Infection Sequences](https://leetcode.com/problems/count-the-number-of-infection-sequences/)

Related Patterns

- Fast Power
- Modular Inverse
- Prefix Sum
- Combinatorics
- GCD

# Pattern 134

Pattern Name: Fast Power

Category: Mathematics

Difficulty: Intermediate

Recognition Keywords:

- Huge exponent
- Repeated multiplication
- Exponent modulo
- Power in logarithmic time
- Binary exponentiation

Core Idea:

Decompose the exponent into binary powers and repeatedly square the base. This reduces exponentiation from linear to logarithmic multiplications and generalizes to matrices and other monoids.

Prerequisites:

- Binary representation
- Modular Arithmetic
- Associative multiplication

Common Algorithms:

- Iterative binary exponentiation
- Recursive exponentiation by squaring
- Modular exponentiation
- Fast inverse power
- Monoid exponentiation

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 231 — Power of Two](https://leetcode.com/problems/power-of-two/)
- [LeetCode 326 — Power of Three](https://leetcode.com/problems/power-of-three/)
- [LeetCode 342 — Power of Four](https://leetcode.com/problems/power-of-four/)

Medium:

- [LeetCode 50 — Pow(x, n)](https://leetcode.com/problems/powx-n/)
- [LeetCode 372 — Super Pow](https://leetcode.com/problems/super-pow/)
- [LeetCode 1922 — Count Good Numbers](https://leetcode.com/problems/count-good-numbers/)
- [LeetCode 2550 — Count Collisions of Monkeys on a Polygon](https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon/)
- [LeetCode 2961 — Double Modular Exponentiation](https://leetcode.com/problems/double-modular-exponentiation/)
- [LeetCode 1969 — Minimum Non-Zero Product of the Array Elements](https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/)

Hard:

- [LeetCode 1808 — Maximize Number of Nice Divisors](https://leetcode.com/problems/maximize-number-of-nice-divisors/)

Reduction Problems

- [LeetCode 552 — Student Attendance Record II](https://leetcode.com/problems/student-attendance-record-ii/)
- [LeetCode 935 — Knight Dialer](https://leetcode.com/problems/knight-dialer/)
- [LeetCode 1220 — Count Vowels Permutation](https://leetcode.com/problems/count-vowels-permutation/)
- [LeetCode 1411 — Number of Ways to Paint N × 3 Grid](https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/)
- [LeetCode 2851 — String Transformation](https://leetcode.com/problems/string-transformation/)

Related Patterns

- Modular Arithmetic
- Modular Inverse
- Matrix Exponentiation
- Binary Lifting

# Pattern 135

Pattern Name: Modular Inverse

Category: Mathematics

Difficulty: Advanced

Recognition Keywords:

- Division under a modulus
- Prime modulus
- Binomial coefficient modulo p
- Factorial ratios
- Undo multiplication

Core Idea:

Replace division by multiplication with an inverse satisfying (a a^{-1} \equiv 1 \pmod m). Compute inverses with extended Euclid when coprime or Fermat’s theorem under a prime modulus.

Prerequisites:

- Modular Arithmetic
- GCD
- Fast Power
- Prime numbers

Common Algorithms:

- Fermat inverse
- Extended-Euclid inverse
- Factorial and inverse-factorial tables
- Batch inverse recurrence
- Modular binomial coefficients

Representative Problems (Easy → Hard)

Hard:

- [LeetCode 1622 — Fancy Sequence](https://leetcode.com/problems/fancy-sequence/)
- [LeetCode 1735 — Count Ways to Make Array With Product](https://leetcode.com/problems/count-ways-to-make-array-with-product/)
- [LeetCode 1830 — Minimum Number of Operations to Make String Sorted](https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted/)
- [LeetCode 1916 — Count Ways to Build Rooms in an Ant Colony](https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/)
- [LeetCode 2338 — Count the Number of Ideal Arrays](https://leetcode.com/problems/count-the-number-of-ideal-arrays/)
- [LeetCode 2514 — Count Anagrams](https://leetcode.com/problems/count-anagrams/)
- [LeetCode 2842 — Count K-Subsequences of a String With Maximum Beauty](https://leetcode.com/problems/count-k-subsequences-of-a-string-with-maximum-beauty/)
- [LeetCode 2954 — Count the Number of Infection Sequences](https://leetcode.com/problems/count-the-number-of-infection-sequences/)

Reduction Problems

- [LeetCode 1569 — Number of Ways to Reorder Array to Get Same BST](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/)
- [LeetCode 3343 — Count Number of Balanced Permutations](https://leetcode.com/problems/count-number-of-balanced-permutations/)
- [LeetCode 3405 — Count the Number of Arrays with K Matching Adjacent Elements](https://leetcode.com/problems/count-the-number-of-arrays-with-k-matching-adjacent-elements/)

Related Patterns

- Modular Arithmetic
- Fast Power
- GCD
- Combinatorics
- Prime Factorization

# Pattern 136

Pattern Name: Sieve of Eratosthenes

Category: Mathematics

Difficulty: Intermediate

Recognition Keywords:

- Many primality queries
- All primes up to n
- Smallest prime factor
- Factor many numbers
- Prime contribution counting

Core Idea:

Mark multiples of each discovered prime, starting from its square, to preprocess primality for an entire range. A smallest-prime-factor sieve also makes repeated factorization efficient.

Prerequisites:

- Multiples and divisibility
- Arrays
- Complexity Analysis

Common Algorithms:

- Eratosthenes sieve
- Linear sieve
- Smallest-prime-factor sieve
- Segmented sieve
- Prime-count prefix array

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 762 — Prime Number of Set Bits in Binary Representation](https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/)
- [LeetCode 1175 — Prime Arrangements](https://leetcode.com/problems/prime-arrangements/)
- [LeetCode 2614 — Prime In Diagonal](https://leetcode.com/problems/prime-in-diagonal/)

Medium:

- [LeetCode 204 — Count Primes](https://leetcode.com/problems/count-primes/)
- [LeetCode 2521 — Distinct Prime Factors of Product of Array](https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/)
- [LeetCode 2601 — Prime Subtraction Operation](https://leetcode.com/problems/prime-subtraction-operation/)
- [LeetCode 2761 — Prime Pairs With Target Sum](https://leetcode.com/problems/prime-pairs-with-target-sum/)
- [LeetCode 3044 — Most Frequent Prime](https://leetcode.com/problems/most-frequent-prime/)

Hard:

- [LeetCode 952 — Largest Component Size by Common Factor](https://leetcode.com/problems/largest-component-size-by-common-factor/)
- [LeetCode 2818 — Apply Operations to Maximize Score](https://leetcode.com/problems/apply-operations-to-maximize-score/)

Reduction Problems

- [LeetCode 1735 — Count Ways to Make Array With Product](https://leetcode.com/problems/count-ways-to-make-array-with-product/)
- [LeetCode 1998 — GCD Sort of an Array](https://leetcode.com/problems/gcd-sort-of-an-array/)
- [LeetCode 2338 — Count the Number of Ideal Arrays](https://leetcode.com/problems/count-the-number-of-ideal-arrays/)
- [LeetCode 2709 — Greatest Common Divisor Traversal](https://leetcode.com/problems/greatest-common-divisor-traversal/)
- [LeetCode 2862 — Maximum Element-Sum of a Complete Subset of Indices](https://leetcode.com/problems/maximum-element-sum-of-a-complete-subset-of-indices/)

Related Patterns

- Prime Factorization
- GCD
- Frequency Counting
- Union Find
- Combinatorics

# Pattern 137

Pattern Name: Prime Factorization

Category: Mathematics

Difficulty: Intermediate

Recognition Keywords:

- Prime factors
- Divisor structure
- Shared factor connectivity
- Product constraints
- Factor exponents

Core Idea:

Express every positive integer as a product of prime powers and reason independently about their exponents. Trial division is sufficient for one small number; smallest-prime-factor preprocessing handles many values.

Prerequisites:

- Prime numbers
- GCD
- Sieve
- Exponent rules

Common Algorithms:

- Trial division
- Smallest-prime-factor decomposition
- Divisor generation
- Exponent-vector counting
- Factor-graph construction

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 263 — Ugly Number](https://leetcode.com/problems/ugly-number/)
- [LeetCode 2427 — Number of Common Factors](https://leetcode.com/problems/number-of-common-factors/)

Medium:

- [LeetCode 650 — 2 Keys Keyboard](https://leetcode.com/problems/2-keys-keyboard/)
- [LeetCode 1492 — The kth Factor of n](https://leetcode.com/problems/the-kth-factor-of-n/)
- [LeetCode 2507 — Smallest Value After Replacing With Sum of Prime Factors](https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/)
- [LeetCode 2521 — Distinct Prime Factors of Product of Array](https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/)

Hard:

- [LeetCode 952 — Largest Component Size by Common Factor](https://leetcode.com/problems/largest-component-size-by-common-factor/)
- [LeetCode 1998 — GCD Sort of an Array](https://leetcode.com/problems/gcd-sort-of-an-array/)
- [LeetCode 2197 — Replace Non-Coprime Numbers in Array](https://leetcode.com/problems/replace-non-coprime-numbers-in-array/)
- [LeetCode 2584 — Split the Array to Make Coprime Products](https://leetcode.com/problems/split-the-array-to-make-coprime-products/)
- [LeetCode 2709 — Greatest Common Divisor Traversal](https://leetcode.com/problems/greatest-common-divisor-traversal/)

Reduction Problems

- [LeetCode 172 — Factorial Trailing Zeroes](https://leetcode.com/problems/factorial-trailing-zeroes/)
- [LeetCode 264 — Ugly Number II](https://leetcode.com/problems/ugly-number-ii/)
- [LeetCode 1735 — Count Ways to Make Array With Product](https://leetcode.com/problems/count-ways-to-make-array-with-product/)
- [LeetCode 2338 — Count the Number of Ideal Arrays](https://leetcode.com/problems/count-the-number-of-ideal-arrays/)
- [LeetCode 2818 — Apply Operations to Maximize Score](https://leetcode.com/problems/apply-operations-to-maximize-score/)

Related Patterns

- Sieve
- GCD
- Modular Arithmetic
- Union Find
- Combinatorics

# Pattern 138

Pattern Name: Matrix Exponentiation

Category: Mathematics

Difficulty: Advanced

Recognition Keywords:

- Huge recurrence index
- Linear recurrence
- Repeated state transition
- Fixed-size transition matrix
- Logarithmic-time DP

Core Idea:

Encode a fixed-order linear recurrence as multiplication by a transition matrix, then raise that matrix to a large power. Binary exponentiation reduces the number of transitions from linear to logarithmic.

Prerequisites:

- Fast Power
- Linear algebra
- Dynamic Programming
- Modular Arithmetic

Common Algorithms:

- Transition-matrix construction
- Binary matrix exponentiation
- Matrix-vector exponentiation
- Companion matrix
- Automaton matrix exponentiation

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 70 — Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
- [LeetCode 509 — Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)
- [LeetCode 1137 — N-th Tribonacci Number](https://leetcode.com/problems/n-th-tribonacci-number/)

Medium:

- [LeetCode 790 — Domino and Tromino Tiling](https://leetcode.com/problems/domino-and-tromino-tiling/)
- [LeetCode 935 — Knight Dialer](https://leetcode.com/problems/knight-dialer/)

Hard:

- [LeetCode 552 — Student Attendance Record II](https://leetcode.com/problems/student-attendance-record-ii/)
- [LeetCode 1220 — Count Vowels Permutation](https://leetcode.com/problems/count-vowels-permutation/)
- [LeetCode 1411 — Number of Ways to Paint N × 3 Grid](https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/)
- [LeetCode 2851 — String Transformation](https://leetcode.com/problems/string-transformation/)
- [LeetCode 3337 — Total Characters in String After Transformations II](https://leetcode.com/problems/total-characters-in-string-after-transformations-ii/)

Reduction Problems

- [LeetCode 198 — House Robber](https://leetcode.com/problems/house-robber/)
- [LeetCode 576 — Out of Boundary Paths](https://leetcode.com/problems/out-of-boundary-paths/)
- [LeetCode 740 — Delete and Earn](https://leetcode.com/problems/delete-and-earn/)
- [LeetCode 1269 — Number of Ways to Stay in the Same Place After Some Steps](https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/)
- [LeetCode 1931 — Painting a Grid With Three Different Colors](https://leetcode.com/problems/painting-a-grid-with-three-different-colors/)

Related Patterns

- Fast Power
- Linear DP
- State Machine DP
- Modular Arithmetic

# Pattern 139

Pattern Name: Combinatorics

Category: Mathematics

Difficulty: Advanced

Recognition Keywords:

- Count arrangements
- Choose k from n
- Permutations with repetition
- Interleavings
- Factorial ratios
- Stars and bars

Core Idea:

Count outcomes structurally with permutations, combinations, multinomials, inclusion–exclusion, or constructive recurrences. Precompute factorials and inverse factorials when many modular binomial queries are required.

Prerequisites:

- Modular Arithmetic
- Modular Inverse
- Factorials
- Counting principles

Common Algorithms:

- Binomial coefficients
- Pascal recurrence
- Stars and bars
- Inclusion–exclusion
- Multinomial counting
- Factorial preprocessing

Representative Problems (Easy → Hard)

Easy:

- [LeetCode 118 — Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/)
- [LeetCode 119 — Pascal's Triangle II](https://leetcode.com/problems/pascals-triangle-ii/)

Medium:

- [LeetCode 62 — Unique Paths](https://leetcode.com/problems/unique-paths/)
- [LeetCode 77 — Combinations](https://leetcode.com/problems/combinations/)
- [LeetCode 1641 — Count Sorted Vowel Strings](https://leetcode.com/problems/count-sorted-vowel-strings/)

Hard:

- [LeetCode 920 — Number of Music Playlists](https://leetcode.com/problems/number-of-music-playlists/)
- [LeetCode 1359 — Count All Valid Pickup and Delivery Options](https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/)
- [LeetCode 1735 — Count Ways to Make Array With Product](https://leetcode.com/problems/count-ways-to-make-array-with-product/)
- [LeetCode 2338 — Count the Number of Ideal Arrays](https://leetcode.com/problems/count-the-number-of-ideal-arrays/)
- [LeetCode 2954 — Count the Number of Infection Sequences](https://leetcode.com/problems/count-the-number-of-infection-sequences/)

Reduction Problems

- [LeetCode 96 — Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/)
- [LeetCode 1569 — Number of Ways to Reorder Array to Get Same BST](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/)
- [LeetCode 1830 — Minimum Number of Operations to Make String Sorted](https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted/)
- [LeetCode 2514 — Count Anagrams](https://leetcode.com/problems/count-anagrams/)
- [LeetCode 2842 — Count K-Subsequences of a String With Maximum Beauty](https://leetcode.com/problems/count-k-subsequences-of-a-string-with-maximum-beauty/)

Related Patterns

- Catalan Numbers
- Modular Inverse
- Probability DP
- Backtracking
- Partition DP

# Pattern 140

Pattern Name: Catalan Numbers

Category: Mathematics

Difficulty: Advanced

Recognition Keywords:

- Balanced parentheses
- Binary-tree shapes
- Noncrossing structures
- Recursive left/right split
- Polygon triangulation

Core Idea:

Catalan objects split around a distinguished root into independent left and right objects, yielding (C_n=\sum C_iC_{n-1-i}). Use the recurrence for structural DP or the closed form for pure counting.

Prerequisites:

- Combinatorics
- Interval DP
- Recursive decomposition
- Modular Inverse

Common Algorithms:

- Catalan recurrence
- Closed-form Catalan computation
- Balanced-parentheses generation
- Root-split DP
- Noncrossing-structure counting

Representative Problems (Easy → Hard)

Medium:

- [LeetCode 22 — Generate Parentheses](https://leetcode.com/problems/generate-parentheses/)
- [LeetCode 95 — Unique Binary Search Trees II](https://leetcode.com/problems/unique-binary-search-trees-ii/)
- [LeetCode 96 — Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/)
- [LeetCode 241 — Different Ways to Add Parentheses](https://leetcode.com/problems/different-ways-to-add-parentheses/)
- [LeetCode 894 — All Possible Full Binary Trees](https://leetcode.com/problems/all-possible-full-binary-trees/)

Hard:

- [LeetCode 1259 — Handshakes That Don't Cross](https://leetcode.com/problems/handshakes-that-dont-cross/)

Reduction Problems

- [LeetCode 312 — Burst Balloons](https://leetcode.com/problems/burst-balloons/)
- [LeetCode 375 — Guess Number Higher or Lower II](https://leetcode.com/problems/guess-number-higher-or-lower-ii/)
- [LeetCode 1000 — Minimum Cost to Merge Stones](https://leetcode.com/problems/minimum-cost-to-merge-stones/)
- [LeetCode 1039 — Minimum Score Triangulation of Polygon](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/)
- [LeetCode 1547 — Minimum Cost to Cut a Stick](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/)

Related Patterns

- Combinatorics
- Interval DP
- Parentheses Matching
- Divide-and-Conquer Tree Construction
- Backtracking
