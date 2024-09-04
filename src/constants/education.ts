export interface IEducation {
  id: number;
  title: string;
  year: string;
  link: string;
  description: string;
}

export const educations: IEducation[] = [
  {
    id: 1,
    title: "Roi-Et Wittayalai School",
    year: "2015 - 2018",
    link: "https://www.rw.ac.th/",
    description:
      "A prominent educational school located in Roi-Et. I was a part of the science room of the gifted program.",
  },
  {
    id: 2,
    title: "Kamnoetvidya Science Academy",
    year: "2018 - 2021",
    link: "https://www.kvis.ac.th/",
    description:
      "A mathematics and science academy that conducts classes primarily in English. I'm a part of batch 4.",
  },
  {
    id: 3,
    title: "SIIT, Thammasat University",
    year: "2021 - present",
    link: "https://siit.tu.ac.th/",
    description:
      "An institute from Thammasat university. I am a Digital Engineering student with a major in data science.",
  },
];
