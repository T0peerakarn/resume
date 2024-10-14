import AboutMe from "@/components/AboutMe";
import Awards from "@/components/Awards";
import Experiences from "@/components/Experiences";

export interface IMenu {
  id: number;
  title: string;
  component: () => JSX.Element;
}

export const menus: IMenu[] = [
  {
    id: 1,
    title: "About me",
    component: AboutMe,
  },
  {
    id: 2,
    title: "Experiences",
    component: Experiences,
  },
  {
    id: 3,
    title: "Awards",
    component: Awards,
  },
];
