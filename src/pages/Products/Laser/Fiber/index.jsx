import Heading from "@/components/Heading";
import Details from "@/components/Details";
import ProductButton from "@/components/ProductButton";
import { Typography, Grid, Box } from "@mui/material";
import { productHeading, ProductImg, modelHeading, headings } from "./style";
import laserImg from "@/assets/products/fiber.png";
import Samples from "@/assets/samples/fiber_samples.png";
import { fiberData, features, applications } from "@/helpers/fiberData";
import Head from "@/components/Head";
import CatalougFile from "@/assets/catalouge/Fiber_Flying_Laser.pdf";

const Fiber = () => {
  return (
    <>
      <Head
        title="Fiber Laser"
        description="Radhe Enterprise Fiber Laser Page"
      />
      <Grid
        container
        width={"90%"}
        sx={{ margin: "0 auto" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          sx={{
            ...productHeading,
            display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
            color: "white",
          }}
          align="center"
        >
          fiber laser marking system
        </Typography>
        <Heading name="BETABEAM" type="FIBER LASER" pdf={CatalougFile} />

        <Grid
          container
          item
          direction="row"
          sx={{ mt: { lg: "3rem" } }}
          columnGap={5}
          justifyContent={"space-between"}
        >
          <Grid
            container
            item
            direction="column"
            alignItems={"flex-start"}
            justifyContent={"center"}
            lg={6}
            md={6}
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
              <ProductImg src={laserImg} width={350} />
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
              <Typography sx={{ ...modelHeading, color: "#ffffff" }}>
                Print Samples
              </Typography>
              <ProductImg src={Samples} sx={{ height: "80%", width: "80%" }} />
            </Grid>

            <Grid item lg>
              <Typography sx={modelHeading}>Applicable Products</Typography>
              {applications?.map((item, index) => {
                return <Details key={index} content={item} />;
              })}
            </Grid>
          </Grid>

          <Grid container item lg={5} md={5}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Typography sx={modelHeading}>Specifications</Typography>
              {fiberData?.map((item) => (
                <Grid
                  container
                  item
                  key={item.id}
                  sx={{
                    m: {
                      xl: 0,
                      lg: 0,
                      md: 0,
                      sm: "2px 0",
                      xs: "2px 0",
                    },
                    color: "white",
                  }}
                >
                  <Grid item lg={6} md={7} sm={6} xs={7}>
                    <Typography sx={headings}>{item.title}</Typography>
                  </Grid>
                  <Grid item lg={6} md={5} sm={6} xs={5}>
                    <Typography>{item.content}</Typography>
                  </Grid>
                </Grid>
              ))}
            </Box>
            <Grid item lg md>
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

export default Fiber;
