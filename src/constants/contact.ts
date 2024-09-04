import { IconType } from "react-icons";
import {
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export interface IContact {
  id: number;
  title: string;
  icon: IconType;
  link: string;
}

export const contacts: IContact[] = [
  {
    id: 1,
    title: "GitHub",
    icon: FaGithub,
    link: "https://github.com/t0peerakarn",
  },
  {
    id: 2,
    title: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/peerakarn-thongsata-409538201/",
  },
  {
    id: 3,
    title: "Email",
    icon: FaRegEnvelope,
    link: "mailto:t0p.eerakarn@gmail.com",
  },
  {
    id: 4,
    title: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com/t0p.eerakarn",
  },
  {
    id: 5,
    title: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/t0p.eerakarn/",
  },
];
