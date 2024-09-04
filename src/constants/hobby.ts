export interface IHobby {
  id: number;
  title: string;
  description: string;
}

export const hobbys: IHobby[] = [
  {
    id: 1,
    title: "Coding",
    description:
      "I started coding in grade 10 with competitive programming, joining the POSN camp where I earned a gold medal, became the second runner-up in the national round, and was one of six representatives from Thailand to compete in the Asia Pacific Informatics Olympiad. Afterward, I participated in machine learning and mathematical modeling competitions, which led me to study Data Science at university, where I strengthened my skills in scientific computing, data analysis, and machine learning. Alongside this, I also took courses in full-stack, mobile app, and game development to broaden my experience in development programming.",
  },
  {
    id: 2,
    title: "Music Band",
    description:
      "When I was young, I learned the basics of guitar and kept playing and learning on my own. By grade 10, I had the chance to play in a band with my friends. Since one of them was really good at guitar, I switched to playing drums. Then, when another friend who was great at drums joined, I switched again, this time to bass. I've been playing bass ever since, though I still rotate to other positions when needed.",
  },
  {
    id: 3,
    title: "Badminton",
    description:
      "Badminton is my favorite sport. I've played a lot of different sports, like football, basketball, volleyball, frisbee, and sepak takraw, but badminton stands out as the best for me, even though I'm not that great at it.",
  },
  {
    id: 4,
    title: "Photography",
    description:
      "I used to be really into photography, especially when I saw something beautiful. After taking pictures, I would name each one with one or two words and an emoji to make every piece unique. Please feel free to walk around in my gallery section :)",
  },
];
