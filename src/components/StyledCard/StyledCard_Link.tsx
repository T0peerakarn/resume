import Link from "next/link";

import { Card, Divider, Grid, Typography } from "@mui/material";

interface IStyledCard_Link {
  title: string;
  year: number | string;
  description: string;
  link: string;
}

const StyledCard_Link = ({
  title,
  year,
  description,
  link,
}: IStyledCard_Link) => (
  <Grid item xs={1}>
    <Link href={link} target="blank">
      <Card
        sx={{
          m: 1,
          px: 1,
          py: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        className="hover:shadow-md hover:shadow-[#999999] hover:scale-105 transition-all"
      >
        <Typography
          align="center"
          sx={{ color: "#666666", fontWeight: "bold" }}
          className="line-clamp-2"
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
          sx={{ color: "#666666", fontSize: "0.75em", mt: "0.75em" }}
          className="line-clamp-4"
        >
          {description}
        </Typography>
      </Card>
    </Link>
  </Grid>
);

export default StyledCard_Link;
