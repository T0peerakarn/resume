import CardList from "../CardList";
import StyledCard_Expand from "../StyledCard/StyledCard_Expand";

import { hobbys, IHobby } from "@/constants/hobby";

const HobbyCardList = () => (
  <CardList title="What I do" columns={2}>
    {hobbys.map((hobby: IHobby) => (
      <StyledCard_Expand key={hobby.id} {...hobby} />
    ))}
  </CardList>
);

export default HobbyCardList;
