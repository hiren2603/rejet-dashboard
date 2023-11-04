import Head from "@/components/Head";
import handy from "@/assets/products/handy.jpg";
import Heading from "@/components/Heading";
import Details from "@/components/Details";
import { handyData, handyFeatures, handyApp } from "helpers/handyData";
import { Grid, Typography } from "@mui/material";
import { modelHeading, productHeading } from "./style";
import CatalougFile from "@/assets/catalouge/TIJ_Handy_Machine.pdf";

const TpHandy = () => {
  return (
    <>
      <Head title="TIJ Handy" description="Radhe Enterprise TIJ Handy Page" />
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
        <Heading name="TP HANDY" type="TIJ PRINTER" pdf={CatalougFile}/>
        <Grid
          container
          item
          direction="row"
          justifyContent={"space-between"}
          columnGap={6}
          sx={{ mt: "3rem" }}
        >
          <Grid container item direction="column" lg={5} md={5} rowGap={4}>
            <Grid item alignSelf={"center"}>
              <img src={handy} alt="Handy" width={200} />
            </Grid>

            <Grid item>
              <Typography sx={modelHeading}>Applicable Products</Typography>
              {handyApp?.map((item) => {
                // return <Typography key={item.id}>{item.item}</Typography>;
                return <Details key={item.id} content={item.item} />;
              })}
            </Grid>

            <Grid container item>
              <Typography sx={modelHeading}>Features</Typography>
              {handyFeatures?.map((item) => (
                <Grid container item key={item.id} sx={{ m: "2px 0" }}>
                  <Grid item lg={6} md={6} sm={6} xs={4}>
                    <Typography sx={{ fontWeight: "580" }}>
                      {item.title}
                    </Typography>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={8}>
                    {item.content}
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid container item direction="column" lg={6} md={6} rowGap={5}>
            <Grid container item>
              <Typography sx={modelHeading}>Specifications</Typography>
              {handyData?.map((item) => (
                <Grid container item key={item.id} sx={{ m: "3px 0" }}>
                  <Grid item lg={6} md={6} sm={6} xs={6}>
                    <Typography sx={{ fontWeight: "580" }}>
                      {item.title}
                    </Typography>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={6}>
                    {item.content}
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TpHandy;
