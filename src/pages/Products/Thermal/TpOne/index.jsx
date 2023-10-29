import React from "react";
import Head from "@/components/Head";
import Heading from "@/components/Heading";
import Details from "@/components/Details";
import ProductButton from "@/components/ProductButton";
import samples from "@/assets/samples/tij_samples.png";
import TIJProduct from "@/assets/products/TIJ.png";
import TIJProduct1 from "@/assets/products/tij1.png";
import TIJProduct2 from "@/assets/products/tij2.png";
import {
  tijData,
  commonSpace,
  features,
  applications,
} from "@/helpers/tijData";
import { Grid, Typography } from "@mui/material";
import { productHeading, modelHeading } from "./style";

const TpOne = () => {
  return (
    <>
      <Head title="TIJ TP 1.0" description="Radhe Enterprise TIJ TP 1.0 Page" />
      <Grid
        container
        width={"90%"}
        sx={{ margin: "0 auto" }}
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          sx={{
            ...productHeading,
            display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
          }}
          align="center"
        >
          Thermal inkjet printers
        </Typography>
        <Heading name="TP 01/02" type="tij printers" />

        <Grid
          container
          item
          direction={{
            lg: "row",
            md: "row",
            sm: "column-reverse",
            xs: "column-reverse",
          }}
          justifyContent="space-between"
          columnGap={2}
          sx={{ m: "4rem 0" }}
        >
          <Grid container item direction="column" lg={6} md={5} rowGap={4}>
            {tijData?.map((item) => {
              return (
                <Grid container item key={item.id}>
                  <Typography sx={modelHeading}>{item.model}</Typography>
                  <Grid container item>
                    <Grid item lg={6} md={5} sm={5} xs={5}>
                      <Typography sx={{ fontWeight: "600" }}>
                        Dimension :
                      </Typography>
                    </Grid>
                    <Grid item lg={6} md={7} sm={6} xs={7}>
                      {item.dimension}
                    </Grid>
                  </Grid>

                  <Grid container item>
                    <Grid item lg={6} md={5} sm={5} xs={5}>
                      <Typography sx={{ fontWeight: "600" }}>
                        Weight :
                      </Typography>
                    </Grid>
                    <Grid item lg={6} md={7} xs={7}>
                      {item.weight}
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}

            <Grid container item rowGap={1}>
              <Typography sx={modelHeading}>Specifications</Typography>
              {commonSpace?.map((item) => {
                return (
                  <Grid key={item.id} container item>
                    <Grid
                      item
                      lg={6}
                      md={7}
                      sm={6}
                      xs={6}
                      sx={{ fontWeight: "600" }}
                    >
                      {item.title}
                    </Grid>
                    <Grid item lg={5} md={5} sm={6} xs={6}>
                      {item.content}
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>

            <Grid container item rowGap={1}>
              <Typography sx={modelHeading}>features</Typography>
              {features?.map((item) => {
                return (
                  <Grid key={item.id} container item>
                    <Grid
                      item
                      lg={6}
                      md={6}
                      sm={6}
                      xs={6}
                      sx={{ fontWeight: "600" }}
                    >
                      {item.title}
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                      {item.content}
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>

          <Grid container item direction="column" lg={4} md={6} rowGap={4}>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={TIJProduct1} alt="TIJ Product" width={500} />
              <img src={TIJProduct2} alt="TIJ Product" width={500} />
              <ProductButton />
            </Grid>

            <Grid item>
              <Typography sx={modelHeading}>Print Samples</Typography>
              <img src={samples} alt="Product Samples" />
            </Grid>

            <Grid item>
              <Typography sx={modelHeading}>Applicable Products</Typography>
              {applications?.map((item) => {
                return <Details key={item} content={item} />;
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TpOne;
