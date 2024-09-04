import CardList from "../CardList";
import StyledCard_Link from "../StyledCard/StyledCard_Link";

import { researches, IResearch } from "@/constants/research";

const ResearchCardList = () => (
  <CardList title="Research" columns={2}>
    {researches
      .sort((a, b) => b.id - a.id)
      .map((research: IResearch) => (
        <StyledCard_Link key={research.id} {...research} />
      ))}
  </CardList>
);

export default ResearchCardList;
