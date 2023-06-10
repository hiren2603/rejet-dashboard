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
        sx={{ margin: "4rem 0" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography sx={productHeading}>Fiber Laser Marking System</Typography>
        <Heading name={"BETABEAM"} type={"FIBER LASER"} />

        {/* Parent grid for Product specifications and other details like Image and Print Samples */}
        <Grid item container>
          {/* Product Image, Print Samples and Applicable products section grid */}
          <Grid item container>
            {/* Product Image and Product Button container */}
            <Grid item container direction="column" alignItems="center">
              <img src={laserImg} />
              <Grid item>
                <ProductButton />
              </Grid>
            </Grid>

            {/* Print Samples */}
            <Grid item>
              <Typography sx={modelHeading}>Print Samples</Typography>
              <ProductImg src={printSample} />
            </Grid>

            {/* Applicable Products */}
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

          {/* Product Specifications details grid */}
          <Grid item container>
            <Typography sx={modelHeading}>{fiberData[0].model}</Typography>
            <Grid item gridTemplateColumns={"1fr 1fr"}>
              <Typography sx={listHeading}>Laser Model :</Typography>
              <Typography>{fiberData[0].model}</Typography>
            </Grid>

            <Grid item gridTemplateColumns={"1fr 1fr"}>
              <Typography sx={listHeading}>Laser Type :</Typography>
              <Typography>{fiberData[0].type}</Typography>
            </Grid>

            <Grid item gridTemplateColumns={"1fr 1fr"}>
              <Typography sx={listHeading}>Laser Power :</Typography>
              <Typography>{fiberData[0].power}</Typography>
            </Grid>

            <Grid item gridTemplateColumns={"1fr 1fr"}>
              <Typography sx={listHeading}>Electrical Requirement :</Typography>
              <Typography>{fiberData[0].electrical_req}</Typography>
            </Grid>

            <Grid item gridTemplateColumns={"1fr 1fr"}>
              <Typography sx={listHeading}>Load :</Typography>
              <Typography>{fiberData[0].load}</Typography>
            </Grid>

            <Grid item gridTemplateColumns={"1fr 1fr"}>
              <Typography sx={listHeading}>Temprature :</Typography>
              <Typography>{fiberData[0].temp}</Typography>
            </Grid>

            <Grid item gridTemplateColumns={"1fr 1fr"}>
              <Typography sx={listHeading}>Humidity :</Typography>
              <Typography>{fiberData[0].humidity}</Typography>
            </Grid>

            <Grid item gridTemplateColumns={"1fr 1fr"}>
              <Typography sx={listHeading}>Wavelengths :</Typography>
              <Typography>{fiberData[0].wavelength}</Typography>
            </Grid>

            <Grid item gridTemplateColumns={"1fr 1fr"}>
              <Typography sx={listHeading}>Depth Of Engraving :</Typography>
              <Typography>{fiberData[0].depth}</Typography>
            </Grid>

            <Grid item gridTemplateColumns={"1fr 1fr"}>
              <Typography sx={listHeading}>Laser Source :</Typography>
              <Typography>{fiberData[0].source}</Typography>
            </Grid>

            <Grid item gridTemplateColumns={"1fr 1fr"}>
              <Typography sx={listHeading}>Laser Guide :</Typography>
              <Typography>{fiberData[0].laser_guide}</Typography>
            </Grid>

            <Grid item gridTemplateColumns={"1fr 1fr"}>
              <Typography sx={listHeading}>Marking Speed :</Typography>
              <Typography>{fiberData[0].mark_speed}</Typography>
            </Grid>

            <Grid item gridTemplateColumns={"1fr 1fr"}>
              <Typography sx={listHeading}>Marking Area :</Typography>
              <Typography>{fiberData[0].mark_area}</Typography>
            </Grid>

            <Grid item gridTemplateColumns={"1fr 1fr"}>
              <Typography sx={listHeading}>Machine Speed :</Typography>
              <Typography>{fiberData[0].machine_speeed}</Typography>
            </Grid>

            <Grid item gridTemplateColumns={"1fr 1fr"}>
              <Typography sx={listHeading}>Marking Formate :</Typography>
              <Typography>{fiberData[0].format}</Typography>
            </Grid>

            <Grid item gridTemplateColumns={"1fr 1fr"}>
              <Typography sx={listHeading}>Language Support :</Typography>
              <Typography>{fiberData[0].language}</Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Features Grid */}
      </Grid>
    </>
  );
};

export default Fiber;
