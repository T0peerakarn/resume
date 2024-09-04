import { Box, Grid, Typography, useMediaQuery } from "@mui/material";

interface Props {
  title: string;
  columns: number;
  children: React.ReactNode;
}

const CardList = (props: Props) => {
  const isLaptop = useMediaQuery("(min-width:1024px)");
  const isTablet = useMediaQuery("(min-width:768px)");

  return (
    <Box>
      <Typography
        sx={{
          color: "#666666",
          fontWeight: "bold",
          fontSize: "1.25em",
          mb: "0.25em",
        }}
        textAlign={isLaptop ? "left" : "center"}
      >
        {props.title}
      </Typography>
      <Grid container columns={isTablet ? props.columns : 1} spacing={2}>
        {props.children}
      </Grid>
    </Box>
  );
};

export default CardList;
