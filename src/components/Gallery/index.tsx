import { useEffect, useState } from "react";

import { Box, Stack, Typography, useMediaQuery } from "@mui/material";

import StyledImage, { IImage } from "./StyledImage";

import { getInstagramImage } from "@/services/instagram";
import Loading from "../Loading";

const Gallery = () => {
  const [images, setImages] = useState<IImage[]>([]);

  const isLaptop = useMediaQuery("(min-width:1024px)");

  useEffect(() => {
    getInstagramImage().then((res) => {
      setImages(res.data);
    });
  }, []);

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
        Gallery
      </Typography>
      {images.length === 0 ? (
        <Loading />
      ) : (
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {images.map((image, i, array) => (
            <StyledImage
              key={image.media_url}
              {...image}
              isLast={i === array.length - 1}
            />
          ))}
        </Box>
      )}
    </Stack>
  );
};

export default Gallery;
