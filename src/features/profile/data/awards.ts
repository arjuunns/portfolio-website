import type { Award } from "../types/awards";

export const AWARDS: Award[] = [
  {
    id: "tiet-merit-scholarship",
    prize: "Merit Scholarship",
    title: "TIET Merit Scholarship",
    grade: "University",
    description:
      "- Awarded the TIET Merit Scholarship in recognition of outstanding academic excellence (2023–24).",
  },
  {
    id: "leetcode-knight",
    prize: "Knight",
    title: "LeetCode Knight Rank",
    grade: "Coding Profile",
    description:
      "- Achieved **Knight** rank on LeetCode by consistently solving data structures and algorithms problems.",
    referenceLink: "https://leetcode.com/codermal_/",
  },
  {
    id: "codeforces-pupil",
    prize: "Pupil",
    title: "Codeforces Pupil Rating",
    grade: "Coding Profile",
    description:
      "- Attained **Pupil** rating on Codeforces through active participation in competitive programming contests.",
  },
  {
    id: "codechef-2-star",
    prize: "2 Star",
    title: "CodeChef 2-Star Rating",
    grade: "Coding Profile",
    description:
      "- Reached **2 Star** rating on CodeChef by regularly competing in rated coding challenges.",
  },
];
