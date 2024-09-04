import { Stack } from "@mui/material";

import Biography from "./Biography";
import EducationCardList from "./EducationCardList";
import HobbyCardList from "./HobbyCardList";

const AboutMe = () => (
  <Stack gap={8}>
    <Biography />
    <EducationCardList />
    <HobbyCardList />
  </Stack>
);

export default AboutMe;
