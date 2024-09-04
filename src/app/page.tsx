"use client";

import { useState } from "react";

import { Card, Container, Grid, Stack, useMediaQuery } from "@mui/material";

import MenuBar from "../components/MenuBar";
import AboutMe from "../components/AboutMe";
import Experiences from "../components/Experiences";
import Awards from "../components/Awards";

const HomePage = () => {
  const [currentMenu, setCurrentMenu] = useState<string>("About me");

  const isLaptop = useMediaQuery("(min-width:1024px)");

  const render = () => {
    switch (currentMenu) {
      case "About me":
        return <AboutMe />;
      case "Experiences":
        return <Experiences />;
      case "Awards":
        return <Awards />;
    }
  };

  return isLaptop ? (
    <Container sx={{ p: 4 }}>
      <Grid container columns={4} columnSpacing={4} sx={{ width: "full" }}>
        <Grid item xs={1}>
          <MenuBar
            currentMenu={currentMenu}
            setCurrentMenu={(newMenu: string) => setCurrentMenu(newMenu)}
          />
        </Grid>

        <Grid item xs={3}>
          <Card
            sx={{ p: 4, backgroundColor: "#F9F5F6" }}
            className="rounded-lg"
          >
            {render()}
          </Card>
        </Grid>
      </Grid>
    </Container>
  ) : (
    <Stack sx={{ p: 4 }} spacing={8}>
      <AboutMe />
      <Experiences />
      <Awards />
    </Stack>
  );
};

export default HomePage;
