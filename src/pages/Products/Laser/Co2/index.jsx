import React from "react";
import LaserImg from "../../../../assets/products/co2.png";
import Samples from "../../../../assets/samples/co2_samples.png";
import ProductButton from "../../../../components/ProductButton";
import Heading from "../../../../components/Heading";
import { Grid, Typography, List, Card, ListItemText } from "@mui/material";
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
        alignItems="center"
        justifyContent={"center"}
        sx={{ margin: "4rem 0" }}
      >
        <Typography sx={productHeading}>Co2 Laser Marking System</Typography>
        <Heading name={"PETMARK"} type={"Flying Laser"} />

        <Grid
          item
          container
          sx={{ marginTop: "3rem" }}
          columnGap={10}
          alignItems={"center"}
          justifyContent={"center"}
          direction={{ lg: "row", md: "column-reverse", sm: "column-reverse" }}
        >
          <Grid item container lg={6} rowSpacing={4}>
            <Grid item conatiner>
              <Card elevation={7} sx={{ p: "1rem" }}>
                <Typography sx={modelHeading}>
                  {Co2laserData[0].model}
                </Typography>
                <Grid container alignItems={"center"}>
                  <Grid item lg={7}>
                    <Typography sx={headings}>Laser Power :</Typography>
                  </Grid>
                  <Grid item>{Co2laserData[0].power}</Grid>
                </Grid>

                <Grid container alignItems={"center"}>
                  <Grid item lg={7}>
                    <Typography sx={headings}>Marking Speed :</Typography>
                  </Grid>
                  <Grid item>{Co2laserData[0].mark_speed}</Grid>
                </Grid>

                <Grid container alignItems={"center"}>
                  <Grid item lg={7}>
                    <Typography sx={headings}>Marking Area :</Typography>
                  </Grid>
                  <Grid item>{Co2laserData[0].mark_area}</Grid>
                </Grid>

                <Grid container alignItems={"center"}>
                  <Grid item lg={7} alignSelf={"flex-start"}>
                    <Typography sx={headings}>Machine Speed :</Typography>
                  </Grid>
                  <Grid item lg={4}>
                    {Co2laserData[0].machine_speeed}
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            <Grid item container>
              <Card elevation={7} sx={{ p: "1rem" }}>
                <Typography sx={modelHeading}>
                  {Co2laserData[1].model}
                </Typography>
                <Grid container alignItems={"center"}>
                  <Grid item lg={7}>
                    <Typography sx={headings}>Laser Power :</Typography>
                  </Grid>
                  <Grid item>{Co2laserData[1].power}</Grid>
                </Grid>

                <Grid container alignItems={"center"}>
                  <Grid item lg={7}>
                    <Typography sx={headings}>Marking Speed :</Typography>
                  </Grid>
                  <Grid item>{Co2laserData[1].mark_speed}</Grid>
                </Grid>

                <Grid container alignItems={"center"}>
                  <Grid item lg={7}>
                    <Typography sx={headings}>Marking Area :</Typography>
                  </Grid>
                  <Grid item>{Co2laserData[1].mark_area}</Grid>
                </Grid>

                <Grid container alignItems={"center"}>
                  <Grid item lg={7} alignSelf={"flex-start"}>
                    <Typography sx={headings}>Machine Speed :</Typography>
                  </Grid>
                  <Grid item lg={4}>
                    {Co2laserData[1].machine_speeed}
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            <Grid item container rowSpacing={1}>
              <Typography sx={modelHeading}>Specifications</Typography>
              <Grid item container alignItems={"center"}>
                <Grid item lg={7}>
                  <Typography>Laser Type :</Typography>
                </Grid>
                <Grid item>{commonSpace[0].type}</Grid>
              </Grid>

              <Grid item container alignItems={"center"}>
                <Grid item lg={7}>
                  <Typography>Electrical Requirement :</Typography>
                </Grid>
                <Grid item>{commonSpace[0].power_supply}</Grid>
              </Grid>

              <Grid item container alignItems={"center"}>
                <Grid item lg={7}>
                  <Typography>Operating Temprature :</Typography>
                </Grid>
                <Grid item>{commonSpace[0].temp}</Grid>
              </Grid>

              <Grid item container alignItems={"center"}>
                <Grid item lg={7}>
                  <Typography>Humidity :</Typography>
                </Grid>
                <Grid item>{commonSpace[0].humidity}</Grid>
              </Grid>

              <Grid item container alignItems={"center"}>
                <Grid item lg={7}>
                  <Typography>Wave Length :</Typography>
                </Grid>
                <Grid item>{commonSpace[0].wave_length}</Grid>
              </Grid>

              <Grid item container alignItems={"center"}>
                <Grid item lg={7}>
                  <Typography>Laser Source :</Typography>
                </Grid>
                <Grid item>{commonSpace[0].laser_source}</Grid>
              </Grid>

              <Grid item container alignItems={"center"}>
                <Grid item lg={7}>
                  <Typography>Depth of Engraving :</Typography>
                </Grid>
                <Grid item>{commonSpace[0].depth}</Grid>
              </Grid>

              <Grid item container alignItems={"center"}>
                <Grid item lg={7} alignSelf={"flex-start"}>
                  <Typography>Marking Format :</Typography>
                </Grid>
                <Grid item lg={5}>
                  {commonSpace[0].format}
                </Grid>
              </Grid>

              <Grid item container alignItems={"center"}>
                <Grid item lg={7}>
                  <Typography>Language Ability :</Typography>
                </Grid>
                <Grid item>{commonSpace[0].languages}</Grid>
              </Grid>

              <Grid item container alignItems={"center"}>
                <Grid item lg={7}>
                  <Typography>Gross Power :</Typography>
                </Grid>
                <Grid item>{commonSpace[0].gross_pow}</Grid>
              </Grid>

              <Grid item container alignItems={"center"}>
                <Grid item lg={7}>
                  <Typography>Gross Weight :</Typography>
                </Grid>
                <Grid item>{commonSpace[0].weight}</Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Part 2 */}
          <Grid
            item
            container
            lg={4}
            direction="column"
            rowGap={9}
            justifyContent={{ sm: "center" }}
            alignItems={{ sm: "center" }}
          >
            <Grid
              item
              justifySelf={"flex-start"}
              sx={{
                height: "50%",
              }}
              sm={5}
            >
              <ProductImg src={LaserImg} />
              {/* <ProductButton /> */}
            </Grid>

            <Grid
              item
              container
              direction="column"
              rowSpacing={8}
              alignItems="center"
              justifyContent="flex-start"
            >
              <Typography sx={modelHeading} textAlign={"start"}>
                Print Samples
              </Typography>
              <img src={Samples} />

              <Grid item>
                <Typography sx={modelHeading}>Applicable Products</Typography>
                {applications?.map((item, index) => {
                  return (
                    <>
                      <List key={index}>{item}</List>
                    </>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={10.8} sx={{ mt: "1rem" }}>
          <Typography sx={modelHeading}>Benifits</Typography>
          <List>
            <ListItemText>{benifits[0].marking}</ListItemText>
            <ListItemText>{benifits[0].efficiency}</ListItemText>
            <ListItemText>{benifits[0].power}</ListItemText>
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default Co2;
