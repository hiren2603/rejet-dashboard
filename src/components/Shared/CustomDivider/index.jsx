import { Divider, useTheme, useMediaQuery } from "@mui/material";
import React from "react";

const CustomDivider = () => {
  const theme = useTheme();
  const smallSize = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Divider
      sx={{
        backgroundColor: "#c9c9c9",
        height: "2px",
        width: "100%",
        // ...(smallSize ? { width: "100%" } : { width: "70%" }),
      }}
    />
  );
};

export default CustomDivider;
