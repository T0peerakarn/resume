import CardList from "@/components/CardList";
import StyledCard_Modal from "@/components/StyledCard/StyledCard_Modal";

import { internships, IIntership } from "@/constants/internship";

const InternshipCardList = () => (
  <CardList title="Internship" columns={2}>
    {internships
      .sort((a, b) => b.id - a.id)
      .map((internship: IIntership) => (
        <StyledCard_Modal key={internship.id} {...internship} />
      ))}
  </CardList>
);

export default InternshipCardList;
