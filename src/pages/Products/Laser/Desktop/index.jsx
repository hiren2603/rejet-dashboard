import desktopImg from "assets/products/desktop.png";
import samples from "assets/samples/desktop_samples.png";
import { Grid, Typography } from "@mui/material";
import { productHeading, modelHeading, ProductImg } from "./style";
import Heading from "@/components/Heading";
import Details from "@/components/Details";
import ProductButton from "@/components/ProductButton";
import { desktopData, features, applications } from "helpers/desktopData";
import Head from "@/components/Head";
import CatalougFile from "@/assets/catalouge/Fiber_Desktop_Laser.pdf";

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
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ margin: "0 auto" }}
      >
        <Typography
          sx={{
            ...productHeading,
            display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
            color: "white",
          }}
          align="center"
        >
          desktop laser marking system
        </Typography>
        <Heading name="PLUTO" type="DESKTOP LASER" pdf={CatalougFile} />

        <Grid
          container
          item
          direction={"row"}
          sx={{ mt: "3rem" }}
          columnGap={10}
        >
          <Grid container item direction={"column"} lg={6} md={5} rowGap={4}>
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

            <Grid
              item
              lg={2}
              md={1}
              sm={2}
              xs={2}
              sx={{ mb: { xl: 0, lg: 0, sm: 4, xs: 4 } }}
            >
              <Typography sx={modelHeading}>Print Samples</Typography>
              <ProductImg src={samples} sx={{ height: "90%", width: "90%" }} />
            </Grid>

            <Grid item mt={5}>
              <Typography sx={modelHeading}>Applicable Products</Typography>
              {applications?.map((item) => {
                return <Details key={item} content={item} />;
              })}
            </Grid>
          </Grid>

          <Grid container item direction={"column"} lg={5} md={5} rowGap={5}>
            <Grid container item>
              <Typography sx={modelHeading} textAlign={{ xs: "center" }}>
                Specifications
              </Typography>
              {desktopData?.map((item) => (
                <Grid
                  key={item.id}
                  container
                  item
                  sx={{ margin: "2px 0", color: "white" }}
                >
                  <Grid item lg={7} md={8} sm={5} xs={7}>
                    <Typography sx={{ fontWeight: "580" }}>
                      {item.title}
                    </Typography>
                  </Grid>
                  <Grid item lg={5} md={4} sm={5} xs={5}>
                    {item.content}
                  </Grid>
                </Grid>
              ))}
            </Grid>

            <Grid item>
              <Typography sx={modelHeading}>Features</Typography>
              {features?.map((item) => {
                return <Details key={item} content={item} />;
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Desktop;
