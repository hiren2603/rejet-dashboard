import Head from "@/components/Head";
import ProductButton from "@/components/ProductButton";
import Details from "@/components/Details";
import image from "@/assets/products/re2000.png";
import Samples from "@/assets/samples/re200_samples.png";
import Heading from "@/components/Heading";
import CatalougFile from "@/assets/catalouge/CIJ_RE2000.pdf";
import { Grid, Typography } from "@mui/material";
import {
  re2000PrintParams,
  re2000Params,
  inkSystem,
  printHead,
  benifits,
} from "@/helpers/re2000_Data";
import { productHeading, modelHeading, headings, ProductImg } from "./style";

const Re2000 = () => {
  return (
    <>
      <Head title="Re2000" description="Radhe Enterprise Re2000 Page" />
      <Grid
        container
        width={"90%"}
        sx={{ margin: "0 auto" }}
        alignItems={"center"}
        justifyContent={"center"}
        pb={5}
      >
        <Typography
          sx={{
            ...productHeading,
            display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
            color: "white",
          }}
          align="center"
        >
          Small Character Inkjet Printer
        </Typography>
        <Heading name="RE2000" type="INKJET PRINTER" pdf={CatalougFile} />
        <Grid
          container
          item
          direction={"row"}
          columnGap={9}
          sx={{ mt: "3rem" }}
          justifyContent="space-between"
        >
          <Grid
            container
            item
            direction={"column"}
            lg={5}
            md={5}
            rowSpacing={{ lg: 5, sm: 0 }}
          >
            <Grid
              item
              alignSelf={"center"}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={image} alt="Re200+" width={350} />
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
              <ProductImg src={Samples} sx={{ height: "90%", width: "90%" }} />
            </Grid>

            <Grid item>
              <Typography sx={headings}>KEY BENIFITS</Typography>
              {benifits?.map((item) => {
                return <Details key={item.id} content={item.content} />;
              })}
            </Grid>
            <Grid item sx={{ color: "white" }}>
              <Typography sx={headings}>Ink System</Typography>
              {inkSystem.content}
            </Grid>
          </Grid>

          <Grid container item direction="column" lg={6} md={5} rowSpacing={4}>
            <Grid container item>
              <Typography
                sx={{ ...modelHeading, textAlign: "center" }}
                textAlign={"center"}
              >
                Product Details
              </Typography>
              {re2000PrintParams?.map((item) => (
                <Grid
                  container
                  item
                  key={item.id}
                  sx={{ m: "2px 0", color: "white" }}
                >
                  <Grid item lg={7} md={7} sm={7} xs={7}>
                    <Typography sx={{ fontWeight: "600" }}>
                      {item.title} :
                    </Typography>
                  </Grid>
                  <Grid item lg={5} md={5} sm={5} xs={5}>
                    {item.content}
                  </Grid>
                </Grid>
              ))}
            </Grid>

            <Grid container item>
              <Typography
                sx={{ ...modelHeading, textAlign: "center" }}
                textAlign={"center"}
              >
                Specifications
              </Typography>
              {re2000Params?.map((item) => (
                <Grid
                  container
                  item
                  key={item.id}
                  sx={{ m: "2px 0", color: "white" }}
                >
                  <Grid item lg={7} md={7} sm={7} xs={6}>
                    <Typography sx={{ fontWeight: "600" }}>
                      {item.title} :
                    </Typography>
                  </Grid>
                  <Grid item lg={5} md={5} sm={5} xs={6}>
                    {item.content}
                  </Grid>
                </Grid>
              ))}
            </Grid>
            <Grid item>
              <Typography sx={headings}>Print Head</Typography>
              <Typography sx={{ color: "white" }}>
                {printHead.content}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Re2000;
