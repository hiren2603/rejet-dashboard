import Head from "@/components/Head";
import ProductButton from "@/components/ProductButton";
import Details from "@/components/Details";
import image from "@/assets/products/re1000.png";
import Samples from "@/assets/samples/dod_samples.png";
import Heading from "@/components/Heading";
import CatalougFile from "@/assets/catalouge/DOD_RE_1000.pdf";
import { Grid, Typography } from "@mui/material";
import {
  re1000PrintParams,
  re1000Params,
  inkSystem,
  printHead,
  mainHardware,
  benifits,
} from "@/helpers/re1000_dod_Data";
import { productHeading, modelHeading, headings, ProductImg } from "./style";

const Re1000 = () => {
  return (
    <div>
      <Head title="Re1000" description="Radhe Enterprise Re1000 Page" />
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
          Large Character Inkjet Printer
        </Typography>
        <Heading name="RE1000" type="INKJET PRINTER" pdf={CatalougFile} />
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
              <img src={image} alt="re1000_Image+" width={350} />
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
            <Grid item container>
              <Typography sx={headings}>Ink system</Typography>
              <Typography sx={{ color: "white" }}>
                {inkSystem.content}
              </Typography>
            </Grid>
            <Grid item container>
              <Typography sx={headings}>{mainHardware.title}</Typography>
              <Typography sx={{ color: "white" }}>
                {mainHardware.content}
              </Typography>
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
              {re1000PrintParams?.map((item) => (
                <Grid
                  container
                  item
                  key={item.id}
                  sx={{ m: "2px 0", color: "white" }}
                >
                  <Grid item lg={7} md={7} sm={7} xs={7}>
                    <Typography sx={{ fontWeight: "500" }}>
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
              {re1000Params?.map((item) => (
                <Grid
                  container
                  item
                  key={item.id}
                  sx={{ m: "2px 0", color: "white" }}
                >
                  <Grid item lg={7} md={7} sm={7} xs={6}>
                    <Typography sx={{ fontWeight: "500" }}>
                      {item.title} :
                    </Typography>
                  </Grid>
                  <Grid item lg={5} md={5} sm={5} xs={6}>
                    {item.content}
                  </Grid>
                </Grid>
              ))}
            </Grid>

            <Grid item container>
              <Typography sx={headings}>{printHead.title}</Typography>
              <Typography sx={{ color: "white" }}>
                {printHead.content}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Re1000;
