import { Grid, Stack, Typography, useMediaQuery } from "@mui/material";

interface Props {
  title: string;
  columns: number;
  children: React.ReactNode;
}

const CardList = (props: Props) => {
  const isLaptop = useMediaQuery("(min-width:1024px)");
  const isTablet = useMediaQuery("(min-width:768px)");

  return (
    <Stack spacing={2}>
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
      <Grid
        container
        columns={isTablet ? props.columns : 1}
        spacing={isTablet ? 2 : 0}
        gap={isTablet ? 0 : 2}
      >
        {props.children}
      </Grid>
    </Stack>
  );
};

export default CardList;
