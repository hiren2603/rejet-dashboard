import CatalougFile from "@/assets/catalouge/UV_Laser.pdf";
import uvImage from "@/assets/products/uv.png";
import sample from "@/assets/samples/uv_samples.png";
import Details from "@/components/Details";
import Head from "@/components/Head";
import Heading from "@/components/Heading";
import ProductButton from "@/components/ProductButton";
import { uvApps, uvData, uvFeatures } from "@/helpers/uvData";
import { Grid, Typography } from "@mui/material";
import { ProductImg, modelHeading, productHeading } from "./style";

const Uv = () => {
  return (
    <Grid
      container
      width={"90%"}
      sx={{ margin: "0 auto" }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Head title="Uv Laser" description="Radhe Enterprise Uv Laser Page" />
      <Typography
        sx={{
          ...productHeading,
          display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
          color: "white",
        }}
        align="center"
      >
        uv laser marking system
      </Typography>
      <Heading name="Ultra Violet" type="LASER" pdf={CatalougFile} />

      <Grid
        container
        item
        direction={"row"}
        sx={{ mt: "3rem" }}
        rowGap={{ sx: 3 }}
        columnGap={7}
        justifyContent={"space-between"}
      >
        <Grid container item direction={"column"} lg={4} md={5} rowGap={3}>
          <Grid
            item
            alignSelf={"center"}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <ProductImg src={uvImage} width={350} />
            <ProductButton />
          </Grid>

          <Grid item>
            <Typography sx={modelHeading}>Print Samples</Typography>
            <ProductImg src={sample} width={350} style={{ height: "130px" }} />
          </Grid>

          <Grid item>
            <Typography sx={modelHeading}>Applicable Products</Typography>
            {uvApps?.map((item, index) => {
              return <Details key={index} content={item} />;
            })}
          </Grid>
        </Grid>

        <Grid container item direction={"column"} lg={6} md={6} rowGap={9}>
          <Grid container item>
            <Typography sx={modelHeading}>Specifications</Typography>
            {uvData?.map((item) => (
              <Grid
                container
                item
                key={item.id}
                sx={{ margin: "1px 0", color: "white" }}
              >
                <Grid item lg={5} md={6} sm={7} xs={7}>
                  <Typography sx={{ fontWeight: "500" }}>
                    {item.title}
                  </Typography>
                </Grid>
                <Grid item lg={5} md={6} sm={5} xs={5}>
                  {item.content}
                </Grid>
              </Grid>
            ))}
          </Grid>

          <Grid item>
            <Typography sx={modelHeading}>Features</Typography>
            {uvFeatures?.map((item) => {
              return <Details key={item} content={item} />;
            })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Uv;
