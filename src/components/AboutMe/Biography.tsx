import Link from "next/link";
import Image from "next/image";

import { Grid, Stack, Typography, useMediaQuery } from "@mui/material";

import { contacts, IContact } from "@/constants/contact";
import profile from "@/assets/images/profile.jpg";

const Biography = () => {
  const isTablet = useMediaQuery("(min-width:768px)");

  return (
    <Grid container columns={isTablet ? 5 : 3} columnSpacing={4} rowSpacing={4}>
      <Grid
        item
        xs={isTablet ? 2 : 3}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Image
          src={profile}
          alt="Profile image"
          width={0}
          height={0}
          sizes="100vw"
          className={`${isTablet ? "w-full" : "w-2/3"} rounded-lg`}
          unoptimized
        />
      </Grid>

      <Grid
        item
        xs={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack gap={6}>
          <Typography
            align="center"
            sx={{
              fontWeight: "bold",
              fontSize: isTablet ? "1.75em" : "1.5em",
              color: "#666666",
            }}
          >
            Peerakarn Thongsata (Top)
          </Typography>

          <Typography align="center" sx={{ color: "#666666" }}>
            &quot; a data science student with some dev skills &quot;
          </Typography>

          <Stack
            spacing={isTablet ? 8 : 4}
            direction="row"
            justifyContent="center"
            sx={{ width: "full" }}
          >
            {contacts.map((contact: IContact) => (
              <Link key={contact.id} href={contact.link} target="blank">
                <contact.icon
                  size="1.5em"
                  cursor="pointer"
                  className="text-[#666666] hover:text-[#FF8E9E] transition-color duration-150"
                />
              </Link>
            ))}
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Biography;
