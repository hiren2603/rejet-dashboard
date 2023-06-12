import React from "react";
import Heading from "../../../../components/Heading";
import ProductButton from "../../../../components/ProductButton";
import { Typography, Grid, List } from "@mui/material";
import {
  productHeading,
  ProductImg,
  modelHeading,
  listHeading,
} from "../Fiber/style";
import laserImg from "../../../../assets/products/fiber.png";
import printSample from "../../../../assets/samples/fiber_sample.png";
import {
  fiberData,
  features,
  applications,
} from "../../../../helpers/fiberData";

const Fiber = () => {
  return (
    <>
      <Grid
        container
        width={"90%"}
        sx={{ margin: "0 auto" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography sx={productHeading} align="center">
          fiber laser marking system
        </Typography>
        <Heading name="BETABEAM" type="FIBER LASER" />

        <Grid container item direction="row" sx={{ mt: "3rem" }} columnGap={5}>
          <Grid
            container
            item
            direction="column"
            alignItems={"flex-start"}
            justifyContent={"center"}
            lg={6}
            md={6}
            rowGap={4}
          >
            <Grid
              item
              alignSelf={"center"}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
              lg={4}
            >
              <ProductImg src={laserImg} />
              <ProductButton />
            </Grid>

            <Grid item lg={1}>
              <Typography sx={modelHeading}>Print Samples</Typography>
              <ProductImg src={printSample} width={390} height={170} />
            </Grid>

            <Grid item lg>
              <Typography sx={modelHeading}>Applicable Products</Typography>
              {applications?.map((item, index) => {
                return <List key={index}>{item}</List>;
              })}
            </Grid>
          </Grid>

          <Grid container item lg={5} md={5}>
            <Typography sx={modelHeading}>Specifications</Typography>
            {fiberData?.map((item) => (
              <Grid
                container
                item
                key={item.id}
                sx={{ m: { sm: "2px 0", xs: "2px 0" } }}
              >
                <Grid item lg={6} md={7} sm={6} xs={7}>
                  <Typography sx={{ fontWeight: "580" }}>
                    {item.title}
                  </Typography>
                </Grid>
                <Grid item lg={6} md={5} sm={6} xs={5}>
                  {item.content}
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item lg md>
          <Typography sx={modelHeading}>Features</Typography>
          {features?.map((item) => {
            return <List key={item}>{item}</List>;
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default Fiber;
