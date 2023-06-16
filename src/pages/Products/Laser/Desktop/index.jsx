import desktopImg from "assets/products/desktop.png";
import samples from "assets/samples/desktop_samples.png";
import { Grid, Typography, List } from "@mui/material";
import { productHeading, modelHeading, ProductImg } from "./style";
import Heading from "@/components/Heading";
import ProductButton from "@/components/ProductButton";
import { desktopData, features, applications } from "helpers/desktopData";
import Head from "@/components/Head";

const Desktop = () => {
  return (
    <>
      <Head
        title="Desktop Laser"
        description="Radhe Enterprise Desktop Laser Page"
      />
      <Grid
        container
        width={"90%"}
        sx={{ margin: "0 auto" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography sx={productHeading} align="center">
          desktop laser marking system
        </Typography>
        <Heading name="PLUTO" type="FLYING LASER" />

        <Grid
          container
          item
          direction={"row"}
          sx={{ mt: "3rem" }}
          columnGap={2}
        >
          <Grid container item direction={"column"} lg={8} md={6} rowGap={5}>
            <Grid container item>
              <Typography sx={modelHeading} textAlign={{ xs: "center" }}>
                Specifications
              </Typography>
              {desktopData?.map((item) => (
                <Grid key={item.id} container item sx={{ margin: "2px 0" }}>
                  <Grid item lg={5} md={6} sm={5} xs={7}>
                    <Typography sx={{ fontWeight: "580" }}>
                      {item.title}
                    </Typography>
                  </Grid>
                  <Grid item lg={6} md={6} sm={5} xs={5}>
                    {item.content}
                  </Grid>
                </Grid>
              ))}
            </Grid>

            <Grid item>
              <Typography sx={modelHeading}>Features</Typography>
              {features?.map((item) => {
                return <List key={item}>{item}</List>;
              })}
            </Grid>
          </Grid>

          <Grid container item direction={"column"} lg={1} md={2} rowGap={4}>
            <Grid
              item
              alignSelf={"center"}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <ProductImg src={desktopImg} />
              <ProductButton />
            </Grid>

            <Grid item alignSelf={{ sm: "center" }}>
              <Typography sx={modelHeading}>Print Samples</Typography>
              <ProductImg src={samples} width={350} height={100} />
            </Grid>

            <Grid item>
              <Typography sx={modelHeading}>Applicable Products</Typography>
              {applications?.map((item, index) => {
                return <List key={index}>{item}</List>;
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Desktop;
