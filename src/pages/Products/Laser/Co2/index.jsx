import React from "react";
import ProductButton from "../../../../components/ProductButton";
import Heading from "../../../../components/Heading";
import { Grid, Typography } from "@mui/material";
import { productHeading } from "./style";

const Co2 = () => {
  return (
    <>
      <Grid container alignItems="center" justifyContent={"center"}>
        <Typography sx={productHeading}>Co2 Laser Marking System</Typography>
        <Heading name={"PETMARK"} type={"Flying Laser"} />
      </Grid>
    </>
  );
};

export default Co2;
