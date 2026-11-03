import type { CurriculumData } from "./types";

export type StudyScope = "essentials" | "interview" | "full";

export const STUDY_SCOPES: { id: StudyScope; label: string; description: string }[] = [
  { id: "essentials", label: "Essentials", description: "A compact pass through the main pattern families. Start here for broad coverage with fewer questions." },
  { id: "interview", label: "Interview revision", description: "A focused revision set with common variations. Intended for about a week if you have practiced DSA before; adjust the pace to your weak areas." },
  { id: "full", label: "Full", description: "The complete catalog, including advanced techniques. Each question appears once under a practical pattern." },
];

// Explicit representative questions, rather than the first N or easiest N in
// each section. Interview extends Essentials, so earlier work always carries over.
export const ESSENTIAL_IDS = [
  121,53,49,41,560,238,54,15,283,287,5,75,438,3,76,239,435,
  215,33,34,875,20,150,739,84,295,23,621,19,206,141,56,
  55,104,102,98,105,112,543,236,200,133,994,207,684,785,
  743,78,46,39,79,198,62,416,322,300,1143,72,309,208,136,
];

export const INTERVIEW_EXTRA_IDS = [
  1,128,152,73,268,525,974,304,1094,48,11,142,143,643,
  567,209,424,1438,347,973,74,153,162,981,1011,71,22,
  1249,227,402,503,85,2,92,25,148,57,986,253,45,134,
  763,199,230,113,124,297,417,752,210,721,787,90,47,
  40,131,213,91,139,63,494,518,516,211,137,50,28,
];

export function buildStudyPatterns(catalog: CurriculumData, scope: StudyScope) {
  const selected = scope === "full" ? null : new Set(
    scope === "essentials" ? ESSENTIAL_IDS : [...ESSENTIAL_IDS, ...INTERVIEW_EXTRA_IDS],
  );
  const patterns = [...catalog.patterns].sort((a, b) => a.number - b.number);
  const owners = new Map<number, number>();
  for (const problem of catalog.problems) {
    if (selected && !selected.has(problem.id)) continue;
    // Mindset sections reference many unrelated techniques. Prefer an actual
    // algorithm section so a familiar problem is taught in its useful context.
    const practical = patterns.filter((pattern) => pattern.number > 6);
    const owner = practical.find((pattern) => pattern.representativeIds.includes(problem.id))
      ?? practical.find((pattern) => pattern.problemIds.includes(problem.id))
      ?? patterns.find((pattern) => pattern.problemIds.includes(problem.id));
    if (owner) owners.set(problem.id, owner.number);
  }
  return patterns.map((pattern) => ({
    pattern,
    ids: pattern.problemIds.filter((id, index, ids) => owners.get(id) === pattern.number && ids.indexOf(id) === index),
  })).filter(({ ids }) => ids.length > 0);
}
