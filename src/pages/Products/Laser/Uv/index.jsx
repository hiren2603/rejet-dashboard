import uvImage from "@/assets/products/uv.png";
import sample from "@/assets/samples/uv_samples.png";
import Heading from "@/components/Heading";
import { uvApps, uvData, uvFeatures } from "@/helpers/uvData";
import { Grid, List, Typography } from "@mui/material";
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
      <Typography sx={productHeading} align="center">
        uv laser marking system
      </Typography>
      <Heading name="UV" type="FLYING LASER" />

      <Grid
        container
        item
        direction={"row"}
        sx={{ mt: "3rem" }}
        rowGap={{ sx: 3 }}
        columnGap={5}
      >
        <Grid container item direction={"column"} lg={7} md={6} rowGap={9}>
          <Grid container item>
            <Typography sx={modelHeading}>Specifications</Typography>
            {uvData?.map((item) => (
              <Grid container item key={item.id} sx={{ margin: "1px 0" }}>
                <Grid item lg={5} md={6} sm={7} xs={7}>
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
            {uvFeatures?.map((item) => {
              return <List key={item}>{item}</List>;
            })}
          </Grid>
        </Grid>

        <Grid container item direction={"column"} lg={3} md={3} rowGap={3}>
          <Grid item alignSelf={"center"}>
            <ProductImg src={uvImage} />
            {/* <ProductButton /> */}
          </Grid>

          <Grid item>
            <Typography sx={modelHeading}>Print Samples</Typography>
            <ProductImg src={sample} width={390} height={170} />
          </Grid>

          <Grid item>
            <Typography sx={modelHeading}>Applicable Products</Typography>
            {uvApps?.map((item, index) => {
              return <List key={index}>{item}</List>;
            })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Uv;
