import { Card, Grid, List, Typography } from "@mui/material";
import React from "react";
import LaserImg from "../../../../assets/products/co2.png";
import Samples from "../../../../assets/samples/co2_samples.png";
import Heading from "../../../../components/Heading";
import {
  productHeading,
  modelHeading,
  headings,
  modelDetails,
  ProductImg,
} from "./style";
import {
  Co2laserData,
  applications,
  benifits,
  commonSpace,
} from "../../../../helpers/co2Data";
// import { ProductImg, headings, modelHeading, productHeading } from "./style";

const Co2 = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      width="90%"
      sx={{ m: "0 auto", mt: 5 }}
    >
      <Typography sx={productHeading}>co2 laser marking system</Typography>
      <Heading name="PETMARK" type="FLYING LASER" />

      <Grid
        item
        container
        direction={{ lg: "row", md: "column-reverse", sm: "column-reverse" }}
        alignItems={"center"}
        justifyContent="center"
        sx={{ marginTop: "3rem" }}
        // columnSpacing={5}
      >
        {/* Product details and specifications section */}
        <Grid item container direction="column" lg={7} md={1} rowSpacing={5}>
          {/* Product Details */}
          {Co2laserData?.map((item) => {
            return (
              <Grid container key={item.id} mb={2}>
                <Card key={item.id} elevation={7} sx={{ p: "1rem" }}>
                  <Typography sx={modelHeading}>{item.model}</Typography>

                  <Grid item container alignItems={{ lg: "center" }}>
                    <Grid item lg={5} xs={6}>
                      <Typography sx={headings}>
                        {item.power.heading}:
                      </Typography>
                    </Grid>
                    <Grid item>{item.power.content}</Grid>
                  </Grid>

                  <Grid item container alignItems={"center"}>
                    <Grid item lg={5} xs={6}>
                      <Typography sx={headings}>
                        {item.mark_speed.heading}:
                      </Typography>
                    </Grid>
                    <Grid item>{item.mark_speed.content}</Grid>
                  </Grid>

                  <Grid item container alignItems={"center"}>
                    <Grid item lg={5} xs={6}>
                      <Typography sx={headings}>
                        {item.mark_area.heading}:
                      </Typography>
                    </Grid>
                    <Grid item>{item.mark_area.content}</Grid>
                  </Grid>

                  <Grid item container alignItems={"center"}>
                    <Grid item lg={5} xs={6}>
                      <Typography sx={headings}>
                        {item.machine_speed.heading}:
                      </Typography>
                    </Grid>
                    <Grid item lg={5} xs={6}>
                      {item.machine_speed.content}
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            );
          })}

          {/* Specification */}
          <Grid
            item
            container
            rowSpacing={1}
            lg={4}
            justifyContent={{ xs: "center", lg: "flex-start" }}
          >
            <Typography sx={modelHeading}>Specifications</Typography>
            {commonSpace?.map((item) => {
              return (
                <Grid
                  item
                  container
                  key={item.id}
                  alignItems={"center"}
                  columnSpacing={7}
                  justifyContent={{ xs: "center" }}
                >
                  <Grid
                    item
                    lg={5}
                    xs={6.7}
                    justifyContent={{ xs: "flex-start" }}
                    alignItems={{ xs: "flex-start" }}
                  >
                    <Typography sx={{ fontWeight: "580" }}>
                      {item.title} :
                    </Typography>
                  </Grid>
                  <Grid item lg={7} xs={5}>
                    {item.content}
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        {/* Print Samples, Image and Applicable Products */}
        <Grid item container direction={"column"} lg={4} rowSpacing={4}>
          <Grid item container direction={"column"} xs={1}>
            <img src={LaserImg} alt="Laser" width={300} />
          </Grid>

          <Grid item xs={12}>
            <Typography sx={modelHeading}>Print Samples</Typography>
            <ProductImg src={Samples} />
          </Grid>

          <Grid item>
            <Typography sx={modelHeading}>Applicable Products</Typography>
            {applications?.map((item, index) => {
              return <List key={index}>{item}</List>;
            })}
          </Grid>
        </Grid>
      </Grid>

      {/* Benifits */}
      <Grid item lg>
        <Typography sx={modelHeading}>Benifits</Typography>
        <List>{benifits[0].marking}</List>
        <List>{benifits[0].efficiency}</List>
        <List>{benifits[0].power}</List>
      </Grid>
    </Grid>
  );
};

export default Co2;
