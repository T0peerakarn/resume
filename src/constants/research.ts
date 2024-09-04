export interface IResearch {
  id: number;
  title: string;
  year: string;
  description: string;
  link: string;
}

export const researches: IResearch[] = [
  {
    id: 1,
    title:
      "Forced Randomized Response Protocol Using Arbitrary Random Variable",
    year: "2022",
    description:
      "Optimized the tradeoff between polling accuracy and privacy by using an arbitrary random variable in randomized response.",
    link: "https://www.researchgate.net/publication/363609214_Forced_Randomized_Response_Protocol_Using_Arbitrary_Random_Variable",
  },
];
