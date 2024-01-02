import Head from "@/components/Head";
import Heading from "@/components/Heading";
import Details from "@/components/Details";
import ProductButton from "@/components/ProductButton";
import samples from "@/assets/samples/tij_samples.png";
import TIJProduct1 from "@/assets/products/re_tenOne.png";
import TIJProduct2 from "@/assets/products/re10.2.png";
import {
  tijData,
  commonSpace,
  features,
  applications,
} from "@/helpers/tijData";
import { Grid, Typography } from "@mui/material";
import { productHeading, modelHeading } from "./style";
import CatalougFile from "@/assets/catalouge/TIJ.pdf";

const ReTenOne = () => {
  return (
    <>
      <Head
        title="TIJ RE 10.1"
        description="Radhe Enterprise TIJ RE 10.1/2 Page"
      />
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
            color : "white"
          }}
          align="center"
        >
          Thermal inkjet printers
        </Typography>
        <Heading name="RE 10 Series" type="tij printers" pdf={CatalougFile} />
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
          sx={{ m: { lg: "2rem 0" } }}
        >
          <Grid container item direction="column" lg={6} md={5} rowGap={4}>
            {tijData?.map((item) => {
              return (
                <Grid container item key={item.id} sx={{color : "white"}}>
                  <Typography sx={modelHeading}>{item.model}</Typography>
                  <Grid container item>
                    <Grid item lg={6} md={5} sm={5} xs={5}>
                      <Typography sx={{ fontWeight: "600" }}>
                        printHeight
                      </Typography>
                    </Grid>
                    <Grid item lg={6} md={7} sm={6} xs={7}>
                      {item.printHeight}
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}

            <Grid container item rowGap={1}>
              <Typography sx={modelHeading}>Specifications</Typography>
              {commonSpace?.map((item) => {
                return (
                  <Grid key={item.id} container item sx={{color : "white"}}>
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
                  <Grid key={item.id} container item sx={{color : "white"}}>
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
              <img src={TIJProduct1} alt="TIJ Product" width={350} />
              <img src={TIJProduct2} alt="TIJ Product" width={350} />
              <ProductButton />
            </Grid>

            <Grid item>
              <Typography sx={modelHeading}>Print Samples</Typography>
              <img src={samples} alt="Product Samples" style={{ width: 350 }} />
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

export default ReTenOne;
