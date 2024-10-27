export interface IProject {
  id: number;
  title: string;
  position: string;
  year: string;
  description: string;
  link: string;
}

export const projects: IProject[] = [
  {
    id: 1,
    title: "Treasure Guessing Game",
    position: "Fullstack Developer",
    year: "2022",
    description:
      "Developed a coins-on-a-chessboard game in Java, leveraging OOP principles.",
    link: "https://github.com/T0peerakarn/des103-treasure-guessing",
  },
  {
    id: 2,
    title: "First Meet Registration Application",
    position: "Fullstack Developer",
    year: "2022",
    description:
      "A check-in application for the event using Python, PySimpleGUI, and Google Sheet as the database.",
    link: "https://github.com/T0peerakarn/siit-first-meet-2022-registration-system",
  },
  {
    id: 3,
    title: "BookBorrow",
    position: "Fullstack Developer",
    year: "2023",
    description:
      "Library web application, built with Next.js, written in JavaScript, and integrated with MySQL and ChakraUI",
    link: "https://github.com/T0peerakarn/BookBorrow",
  },
  {
    id: 4,
    title: "Authentication System Using RSA",
    position: "Fullstack Developer",
    year: "2024",
    description:
      "Implemented RSA algorithm from scratch and developed an login app to demonstrate its application.",
    link: "https://github.com/T0peerakarn/authentication-rsa",
  },
  {
    id: 5,
    title: "Recommendation System",
    position: "Data Scientist",
    year: "2024",
    description:
      "Created a model using user preferences and movie details to predict ratings with a lower RMSE.",
    link: "https://github.com/T0peerakarn/des431-recommendation-system",
  },
  {
    id: 999,
    title: "OrcaHub",
    position: "Fullstack Developer",
    year: "Ongoing",
    description:
      "An event management system, built with Next.js, TypeScript, TailwindCSS, Prisma, and Supabase.",
    link: "https://orcahub-v01.vercel.app/",
  },
];
