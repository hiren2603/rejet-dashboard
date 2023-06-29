import Head from "@/components/Head";
import ProductButton from "@/components/ProductButton";
import Details from "@/components/Details";
import inkjet from "@/assets/products/inkjet.png";
import Samples from "@/assets/samples/font_sample.png";
import Heading from "@/components/Heading";
import { Grid, Typography, List, Card, Stack } from "@mui/material";
import {
  productHeading,
  modelHeading,
  modelDetails,
  headings,
  ProductImg,
} from "./style";
import {
  re224TechSpec,
  re224FontSpec,
  re224fileFunctions,
  re224Languages,
  re224Software,
  re224Nozel,
  re224PrintInfo,
  re224Features,
  re224Benifits,
} from "@/helpers/re224data";

const Re224 = () => {
  return (
    <>
      <Head title="Re224" description="Radhe Enterprise Re224 Page" />
      <Grid
        container
        width={"90%"}
        sx={{ margin: "0 auto" }}
        alignItems={"center"}
        justifyContent={"center"}
        rowSpacing={3}
      >
        <Typography
          sx={{
            ...productHeading,
            display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
          }}
          align="center"
        >
          continuous inkjet printers
        </Typography>
        <Heading name="RE 224" type="INKJET PRINTER" />

        <Grid
          container
          item
          direction={"row"}
          sx={{ mt: "3rem" }}
          justifyContent="space-between"
          columnGap={{ lg: 5, md: 4 }}
        >
          <Grid
            container
            item
            direction={"column"}
            lg={6}
            md={4}
            rowSpacing={5}
          >
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={inkjet} alt="Laser" width={360} />
              <ProductButton />
            </Grid>

            <Grid
              item
              alignSelf={{
                lg: "flex-start",
                md: "flex-start",
                sm: "center",
                xs: "center",
              }}
            >
              <Typography sx={modelHeading}>Print Samples</Typography>
              <ProductImg
                src={Samples}
                width={350}
                style={{ height: "400px" }}
              />
            </Grid>

            <Grid item>
              <Typography sx={modelHeading}>Print info</Typography>
              {re224PrintInfo?.map((item) => {
                return <Details key={item.id} content={item.info} />;
              })}
            </Grid>
          </Grid>

          <Grid container item direction={"column"} rowSpacing={4} lg md={6}>
            <Grid container item lg md sm>
              <Typography sx={modelHeading}>
                Technical Specifications
              </Typography>
              {re224TechSpec?.map((item) => (
                <Grid container item key={item.id}>
                  <Grid item lg={7} md={7} sm={6} xs={8}>
                    <Typography sx={{ fontWeight: "600" }}>
                      {item.label} :
                    </Typography>
                  </Grid>
                  <Grid item md={4}>
                    {item.content}
                  </Grid>
                </Grid>
              ))}
            </Grid>

            <Grid container item>
              <Typography sx={modelHeading}>Specifications</Typography>
              {re224Features?.map((item) => (
                <Grid container item key={item.id} sx={{ mt: "3px" }}>
                  <Grid item lg={7} md={6} sm={6} xs={6}>
                    <Typography sx={{ fontWeight: "600" }}>
                      {item.label} :
                    </Typography>
                  </Grid>
                  <Grid item lg={5} md={5} sm={5} xs={5}>
                    {item.feature}
                  </Grid>
                </Grid>
              ))}
            </Grid>

            <Grid container item>
              <Typography sx={modelHeading}>Font Specifications</Typography>
              {re224FontSpec?.map((item) => (
                <Grid container item key={item.id}>
                  <Grid item lg={7} md={6} sm={6} xs={6}>
                    <Typography sx={{ fontWeight: "600" }}>
                      {item.label} :
                    </Typography>
                  </Grid>
                  <Grid item lg md sm xs>
                    {item.content}
                  </Grid>
                </Grid>
              ))}
            </Grid>

            <Grid container item>
              <Typography sx={modelHeading}>Languages</Typography>
              {re224Languages?.map((item) => (
                <Grid container item key={item.id}>
                  <Grid item lg={6} md={6} sm={6} xs={6}>
                    <Typography sx={{ fontWeight: "600" }}>
                      {item.key} :
                    </Typography>
                  </Grid>
                  <Grid item lg={6} md sm xs={6}>
                    {item.content}
                  </Grid>
                </Grid>
              ))}
            </Grid>

            <Grid item>
              <Typography sx={modelHeading}>Nozel</Typography>
              {re224Nozel?.map((item) => {
                return <Details key={item.id} content={item.characteristics} />;
              })}
            </Grid>

            <Grid item>
              <Typography sx={modelHeading}>File Functions</Typography>
              {re224fileFunctions?.map((item) => {
                return <Details key={item.id} content={item.content} />;
              })}
            </Grid>

            <Grid item lg>
              <Typography sx={modelHeading}>Software</Typography>
              {re224Software?.map((item) => {
                return <Details key={item.id} content={item.featutre} />;
              })}
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={12} md={12} sm={12}>
          <Typography sx={modelHeading}>Benifits</Typography>
          {re224Benifits?.map((item) => {
            return <Details key={item.id} content={item.benifit} />;
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default Re224;
