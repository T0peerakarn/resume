"use client";

import { useEffect, useState } from "react";

import { Card, Container, Grid, Stack, useMediaQuery } from "@mui/material";

import Loading from "@/components/Loading";
import MenuBar from "../components/MenuBar";

import { menus, IMenu } from "@/constants/menu";

const HomePage = () => {
  const [currentMenu, setCurrentMenu] = useState<number>(
    menus.find((menu: IMenu) => menu.isLanding)!.id
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const isLaptop = useMediaQuery("(min-width:1024px)");

  const renderComponent = () => {
    const menu = menus.find((menu: IMenu) => menu.id === currentMenu)!;
    return <menu.component />;
  };

  useEffect(() => {
    const timer = setInterval(() => setIsLoading(false), 1000);
    return () => clearInterval(timer);
  }, [isLaptop]);

  return isLoading ? (
    <Container sx={{ width: "400px" }}>
      <Loading />
    </Container>
  ) : isLaptop ? (
    <Container sx={{ p: 4 }}>
      <Grid container columns={4} columnSpacing={4} sx={{ width: "full" }}>
        <Grid item xs={1}>
          <MenuBar
            currentMenu={currentMenu}
            setCurrentMenu={(newMenu: number) => setCurrentMenu(newMenu)}
          />
        </Grid>

        <Grid item xs={3}>
          <Card
            sx={{ p: 4, backgroundColor: "#F9F5F6" }}
            className="rounded-lg"
          >
            {renderComponent()}
          </Card>
        </Grid>
      </Grid>
    </Container>
  ) : (
    <Stack sx={{ p: 4 }} spacing={8}>
      {menus.map((menu: IMenu) => (
        <menu.component key={menu.id} />
      ))}
    </Stack>
  );
};

export default HomePage;
