import Head from "@/components/Head";
import handy from "@/assets/products/handy.png";
import Heading from "@/components/Heading";
import { handyData, handyFeatures, handyApp } from "helpers/handyData";
import { Grid, Typography } from "@mui/material";
import { modelHeading } from "./style";

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
        <Heading name="TP HANDY" type="TIJ PRINTER" />

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
              <img src={handy} alt="Handy" height={130} width={200} />
            </Grid>

            <Grid item>
              <Typography sx={modelHeading}>Applicable Products</Typography>
              {handyApp?.map((item) => {
                return <Typography key={item.id}>{item.item}</Typography>;
              })}
            </Grid>

            <Grid container item>
              <Typography sx={modelHeading}>Features</Typography>
              {handyFeatures?.map((item) => (
                <Grid container item key={item.id} sx={{ m: "2px 0" }}>
                  <Grid item lg={6} md={6}>
                    <Typography sx={{ fontWeight: "580" }}>
                      {item.title}
                    </Typography>
                  </Grid>
                  <Grid item lg={6} md={6}>
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
                  <Grid item lg={6} md={6}>
                    <Typography sx={{ fontWeight: "580" }}>
                      {item.title}
                    </Typography>
                  </Grid>
                  <Grid item lg={6} md={6}>
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
