import { useState } from "react";

import { Box, Card, Collapse, Divider, Grid, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ExpandMore from "@/components/ExpandMore";

import { IHobby } from "@/constants/hobby";

const HobbyCard = ({ hobby }: { hobby: IHobby }) => {
  const [isExpand, setIsExpand] = useState<boolean>(false);

  return (
    <Grid key={hobby.id} item xs={1}>
      <Card
        sx={{
          px: 1,
          py: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        className="hover:cursor-pointer hover:shadow-md hover:shadow-[#999999] hover:scale-105 transition-all"
        onClick={() => setIsExpand(!isExpand)}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#666666", fontWeight: "bold", pl: 1 }}>
            {hobby.title}
          </Typography>
          <ExpandMore expand={isExpand}>
            <ExpandMoreIcon />
          </ExpandMore>
        </Box>
        <Collapse in={isExpand} timeout="auto" unmountOnExit>
          <Divider />
          <Typography
            sx={{ color: "#666666", fontSize: "0.75em", mt: "0.5em", px: 1 }}
          >
            {hobby.description}
          </Typography>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default HobbyCard;
