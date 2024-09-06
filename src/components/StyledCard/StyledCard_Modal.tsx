import { useState } from "react";

import { Card, Divider, Grid, Typography } from "@mui/material";

import StyledModal from "@/components/StyledModal";

interface IStyledCard_Modal {
  title: string;
  year: string;
  position: string;
  description: string;
}

const StyledCard_Modal = ({
  title,
  year,
  position,
  description,
}: IStyledCard_Modal) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Grid item xs={1}>
        <Card
          sx={{
            m: 1,
            px: 1,
            py: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className="hover:cursor-pointer hover:shadow-md hover:shadow-[#999999] hover:scale-105 transition-all"
          onClick={() => setIsOpen(true)}
        >
          <Typography
            align="center"
            sx={{ color: "#666666", fontWeight: "bold" }}
            className="line-clamp-1"
          >
            {title}
          </Typography>
          <Typography
            align="center"
            sx={{ color: "#999999", fontSize: "0.75em" }}
          >
            {year}
          </Typography>
          <Divider />
          <Typography
            align="center"
            sx={{ color: "#777777", fontWeight: "bold", mt: "0.75em" }}
            className="line-clamp-1"
          >
            {position}
          </Typography>
        </Card>
      </Grid>

      <StyledModal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        title={`${title} | ${position}`}
      >
        <Typography sx={{ color: "#666666", fontSize: "0.90em" }}>
          {description}
        </Typography>
      </StyledModal>
    </>
  );
};

export default StyledCard_Modal;
