import React from "react";
import LaserImg from "../../../../assets/products/co2.png";
import Samples from "../../../../assets/samples/co2_samples.png";
import ProductButton from "../../../../components/ProductButton";
import Heading from "../../../../components/Heading";
import { Grid, Typography, List, Card, Stack } from "@mui/material";
import {
  productHeading,
  modelHeading,
  headings,
  modelDetails,
  ProductImg,
} from "./style";
import {
  Co2laserData,
  commonSpace,
  applications,
  benifits,
} from "../../../../helpers/co2Data";

const Co2 = () => {
  return (
    <>
      <Grid
        container
        width={"90%"}
        sx={{ margin: "0 auto" }}
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          sx={{ ...productHeading, visibility: { xs: "none", lg: "visible" } }}
          align="center"
        >
          co2 laser marking system
        </Typography>
        <Heading name="PETMARK" type="FLYING LASER" />
        <Grid
          container
          item
          direction={"row"}
          columnGap={7}
          sx={{ mt: "3rem" }}
        >
          <Grid
            container
            item
            direction={"column"}
            lg={5}
            md={5}
            rowSpacing={10}
          >
            <Grid
              item
              alignSelf={"center"}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <img src={LaserImg} alt="Laser" width={200} />
              <ProductButton />
            </Grid>

            <Grid item lg={2} md={1} sm={2} xs={2}>
              <Typography sx={modelHeading}>Print Samples</Typography>
              <ProductImg src={Samples} width={400} height={10} />
            </Grid>

            <Grid item>
              <Typography sx={modelHeading}>Applicable Products</Typography>
              {applications?.map((item, index) => {
                return <List key={index}>{item}</List>;
              })}
            </Grid>
          </Grid>

          <Grid container item direction={"column"} rowGap={3} lg={6} md={6}>
            {Co2laserData?.map((item) => (
              <Grid item key={item.id}>
                <Card elevation={7} sx={{ p: "1rem" }}>
                  <Typography sx={modelHeading}>{item.model}</Typography>
                  <Grid item container>
                    <Grid item lg={7} md={6} sm={6} xs={6}>
                      <Typography sx={headings}>
                        {item.power.heading}:
                      </Typography>
                    </Grid>
                    <Grid item>{item.power.content}</Grid>
                  </Grid>

                  <Grid item container>
                    <Grid item lg={7} md={6} sm={6} xs={6}>
                      <Typography sx={headings}>
                        {item.mark_speed.heading}:
                      </Typography>
                    </Grid>
                    <Grid item>{item.mark_speed.content}</Grid>
                  </Grid>

                  <Grid item container>
                    <Grid item lg={7} md={6} sm={6} xs={6}>
                      <Typography sx={headings}>
                        {item.mark_area.heading}:
                      </Typography>
                    </Grid>
                    <Grid item>{item.mark_area.content}</Grid>
                  </Grid>

                  <Grid item container>
                    <Grid item lg={7} md={6} sm={6} xs={6}>
                      <Typography sx={headings}>
                        {item.machine_speed.heading}:
                      </Typography>
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={6}>
                      {item.machine_speed.content}
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            ))}

            <Grid container item lg={5}>
              <Typography sx={modelHeading}>Specifications</Typography>
              {commonSpace?.map((item) => (
                <Grid container item key={item.id} sx={{ m: "2px 0" }}>
                  <Grid item lg={6} md={7} sm={6} xs={7}>
                    <Typography sx={{ fontWeight: "580" }}>
                      {item.title}:
                    </Typography>
                  </Grid>
                  <Grid item lg={6} md={5} sm={5} xs={5}>
                    {item.content}
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg md>
          <Typography sx={modelHeading}>Benifits</Typography>
          <List>{benifits[0].marking}</List>
          <List>{benifits[0].efficiency}</List>
          <List>{benifits[0].power}</List>
        </Grid>
      </Grid>
    </>
  );
};

export default Co2;
