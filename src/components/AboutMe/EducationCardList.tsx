import CardList from "../CardList";

import { educations, IEducation } from "@/constants/education";
import StyledCard_Description from "../StyledCard/StyledCard_Link";

const EducationCardList = () => (
  <CardList title="Education" columns={2}>
    {educations
      .sort((a, b) => b.id - a.id)
      .map((education: IEducation) => (
        <StyledCard_Description key={education.id} {...education} />
      ))}
  </CardList>
);

export default EducationCardList;
