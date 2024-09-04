import CardList from "../../CardList";
import HobbyCard from "./HobbyCard";

import { hobbys, IHobby } from "@/constants/hobby";

const HobbyCardList = () => (
  <CardList title="What I do" columns={2}>
    {hobbys.map((hobby: IHobby) => (
      <HobbyCard key={hobby.id} hobby={hobby} />
    ))}
  </CardList>
);

export default HobbyCardList;
