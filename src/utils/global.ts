import useMediaQuery from "@mui/material/useMediaQuery";

export const isLaptop = () => useMediaQuery("(min-width:1024px)");

export const isTablet = () => useMediaQuery("(min-width:768px)");
