import { Stack } from "@mui/material";

import ResearchCardList from "./ResearchCardList";
import InternshipCardList from "./InternshipCardList";
import ProjectCardList from "./ProjectCardList";
import ActivityCardList from "./ActivityCardList";

const Experiences = () => (
  <Stack gap={8}>
    <ResearchCardList />
    <InternshipCardList />
    <ProjectCardList />
    <ActivityCardList />
  </Stack>
);

export default Experiences;
