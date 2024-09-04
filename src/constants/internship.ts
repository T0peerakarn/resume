export interface IIntership {
  id: number;
  title: string;
  position: string;
  year: string;
  description: string;
}

export const internships: IIntership[] = [
  {
    id: 1,
    title: "Chevron Internship Program",
    position: "Data Scientist",
    year: "June - July 2023",
    description:
      "I traced the friction factor during the drilling process using an analytical tool and investigated correlations between this factor and various hole parameters. My goal was to develop a mathematical model capable of predicting friction factors for subsequent holes to minimize potential damage to the drilling rig. After evaluating different approaches, I selected a ridge regression model for this purpose.",
  },
  {
    id: 2,
    title: "LINE MAN Wongnai Junior",
    position: "Software Engineer (Frontend)",
    year: "May - July 2024",
    description:
      "As a frontend software developer, I was responsible for maintaining ERP web applications, particularly in displaying, creating, and updating sales records. I implemented form validations for inputs such as whole numbers, decimal places, and ID verification, utilizing both built-in functions and custom regular expressions. Additionally, I developed API gateways to ensure seamless communication with the backend.",
  },
];
