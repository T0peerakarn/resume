export interface IAward {
  id: number;
  title: string;
  year: string;
  position: string;
  description: string;
}

export const awards: IAward[] = [
  {
    id: 1,
    title: "Thailand Olympiad in Informatics",
    year: "2019",
    position: "Gold Medalist & Second Runner-up",
    description:
      "A national coding competition. I was one of the six representatives of MWIT POSN center.",
  },
  {
    id: 2,
    title: "International Mathematical Modeling Challenge",
    year: "2020",
    position: "Honorable Mentioned",
    description:
      "A competition in creating a mathematical model to solve the real world problems. We were selected to be the representative of Thailand.",
  },
  {
    id: 3,
    title: "Asia-Pacific Informatics Olympiad",
    year: "2021",
    position: "Participation",
    description:
      "An international coding competition. I was one of the six representatives of Thailand.",
  },
  {
    id: 4,
    title: "KVIS Invitational Science Fair",
    year: "2021",
    position: "Best Oral Presentation & Best Innovation in Mathematics",
    description:
      'A scientific project conference. As a team, we presented "Optimization of Binary Randomized Response by Using Normal Distribution Filter".',
  },
  {
    id: 5,
    title: "Thailand Machine Learning for Chemistry Competition",
    year: "2021",
    position: "Participation",
    description:
      "A competition in developing a machine learning to predict the CO2 absorption of MOFs. As a team of 5, we were ranked in the 9th place.",
  },
  {
    id: 6,
    title: "SIIT Data Structure Coding Competition",
    year: "2024",
    position: "Winner",
    description:
      "A data structure and algorithm coding competition organized by the SIIT CPE students, I got first place with a perfect score",
  },
];
