import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export interface IImage {
  id: number;
  media_url: string;
  caption: string;
}

const StyledImage = ({
  media_url,
  caption,
  isLast,
}: IImage & { isLast: boolean }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const lines = caption.split("\n");

  return (
    <Box
      sx={{
        position: "relative",
        flexGrow: isLast ? 0 : 1,
        p: 0.5,
        height: 200,
      }}
      className={`transition-all ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      <Image
        src={media_url}
        alt={caption}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
          height: "100%",
        }}
        className={`transition-all ${isHover && "opacity-10"}`}
        onLoad={() => setIsLoaded(true)}
        unoptimized
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        className={`transition-all opacity-0 ${isHover && "opacity-100"}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Typography sx={{ color: "#666666" }}>{lines[1]}</Typography>
        <Typography sx={{ color: "#666666" }}>{lines[2]}</Typography>
      </Box>
    </Box>
  );
};

export default StyledImage;
