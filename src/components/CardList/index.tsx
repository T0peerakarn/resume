import { isLaptop } from "@/utils/global";
import { Box, Grid, Typography } from "@mui/material";

interface Props {
  title: string;
  columns: number;
  children: React.ReactNode;
}

const CardList = (props: Props) => (
  <Box>
    <Typography
      sx={{
        color: "#666666",
        fontWeight: "bold",
        fontSize: "1.25em",
        mb: "0.25em",
      }}
      textAlign={isLaptop() ? "left" : "center"}
    >
      {props.title}
    </Typography>
    <Grid container columns={isLaptop() ? props.columns : 1} spacing={2}>
      {props.children}
    </Grid>
  </Box>
);

export default CardList;
