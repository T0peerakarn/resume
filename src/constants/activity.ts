export interface IActivity {
  id: number;
  title: string;
  position: string;
  year: string;
  description: string;
}

export const activitys: IActivity[] = [
  {
    id: 1,
    title: "KVIS Ultimate Challenge",
    position: "Problemsetter",
    year: "2019",
    description: "KVIS academic contest joined by more than 50 schools.",
  },
  {
    id: 2,
    title: "KVISOI Club",
    position: "Co-Founder",
    year: "2019",
    description:
      "Together with my friend, Touch S., we teached and trained the students who are interested in the competitive programming.",
  },
  {
    id: 3,
    title: "KVIS Student Committee",
    position: "Problemsetter",
    year: "2019",
    description:
      "Together with team, we planned and organized events in the school such as KVIS Sport Festival, KVIS Concert, and many more.",
  },
  {
    id: 4,
    title: "TOCPC",
    position: "Problemsetter",
    year: "2021",
    description:
      "A competitive programming contest held by Olympiad students. Almost 700 contestants participated in the competition.",
  },
  {
    id: 5,
    title: "SIIT Sub Student Committee 30",
    position: "Vice President",
    year: "June 2022 - May 2023",
    description:
      "Together with team, we organized First Meet, Baan's Day, and many more.",
  },
  {
    id: 6,
    title: "SIIT Student Committee 30",
    position: "President",
    year: "June 2023 - May 2024",
    description:
      "Together with team, we initiated and supported movements of students in the faculty.",
  },
  {
    id: 7,
    title: "SIIT Insight Camp 2024",
    position: "President",
    year: "2024",
    description:
      "The SIIT Insight Camp is an open house event designed specifically for high school students interested in exploring the academic and extracurricular offerings at the SIIT, Thammasat University.",
  },
];
