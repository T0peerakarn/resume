import { Stack } from "@mui/material";

import CardList from "../CardList";
import StyledCard_Modal from "../StyledCard/StyledCard_Modal";

import { awards, IAward } from "@/constants/award";

const Awards = () => {
  return (
    <Stack gap={8}>
      <CardList title="Award" columns={2}>
        {awards
          .sort((a, b) => b.id - a.id)
          .map((award: IAward) => (
            <StyledCard_Modal key={award.id} {...award} />
          ))}
      </CardList>
    </Stack>
  );
};

export default Awards;
