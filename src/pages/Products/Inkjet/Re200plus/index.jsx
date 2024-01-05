import Head from "@/components/Head";
import ProductButton from "@/components/ProductButton";
import Details from "@/components/Details";
import inkjet from "@/assets/products/re200plus.png";
import Samples from "@/assets/samples/re200_samples.png";
import consumable from "@/assets/products/cij_consumable.png";
import spares from "@/assets/products/cij_spares.png";
import Heading from "@/components/Heading";
import CatalougFile from "@/assets/catalouge/CIJ_RE200_Plus.pdf";
import { Grid, Typography, List } from "@mui/material";
import {
  re200PlusPrintParams,
  re200PlusParams,
  inkSystem,
  cabinetData,
  benifits,
  material,
  features,
} from "@/helpers/re200PlusData";
import { productHeading, modelHeading, headings, ProductImg } from "./style";

const Re200Plus = () => {
  return (
    <div>
      <Head title="Re200+" description="Radhe Enterprise Re200+ Page" />
      <Grid
        container
        width={"90%"}
        sx={{ margin: "0 auto" }}
        alignItems={"center"}
        justifyContent={"center"}
        // rowSpacing={5}
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
        <Heading name="RE200+" type="INKJET PRINTER" pdf={CatalougFile} />
        <Grid
          container
          item
          direction={"row"}
          columnGap={9}
          sx={{ mt: "3rem", mb: 5 }}
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
              <img src={inkjet} alt="Re200+" width={350} />
              <ProductButton />
            </Grid>

            <Grid item lg={2} md={1} sm={2} xs={2} mb={5}>
              <Typography sx={modelHeading}>Print Samples</Typography>
              <ProductImg src={Samples} sx={{ height: "90%", width: "90%" }} />
            </Grid>

            <Grid item>
              <Typography sx={headings}>KEY BENIFITS</Typography>
              {benifits?.map((item) => {
                return <Details key={item.id} content={item.content} />;
              })}
            </Grid>

            <Grid item>
              <Typography sx={headings}>suitable materials</Typography>
              {material?.map((item) => {
                return <Details key={item.id} content={item.content} />;
              })}
            </Grid>

            <Grid item>
              <Typography sx={headings}>standered features</Typography>
              {features?.map((item) => {
                return <Details key={item.id} content={item.content} />;
              })}
            </Grid>

            <Grid item>
              <Typography sx={headings}>data input</Typography>
              <Details content={"RS232 PCMCIA, USB"} />
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
              {re200PlusPrintParams?.map((item) => (
                <Grid container item key={item.id} sx={{ m: "2px 0" }}>
                  <Grid item lg={7} md={7} sm={7} xs={7}>
                    <Typography sx={{ fontWeight: "500", color: "white" }}>
                      {item.title} :
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    lg={5}
                    md={5}
                    sm={5}
                    xs={5}
                    sx={{ color: "white" }}
                  >
                    {item.content}
                  </Grid>
                </Grid>
              ))}
            </Grid>

            <Grid container item>
              <Typography
                sx={{ ...modelHeading, textAlign: "center", color: "white" }}
                textAlign={"center"}
              >
                Specifications
              </Typography>
              {re200PlusParams?.map((item) => (
                <Grid container item key={item.id} sx={{ m: "2px 0" }}>
                  <Grid item lg={7} md={7} sm={7} xs={6}>
                    <Typography sx={{ fontWeight: "600", color: "white" }}>
                      {item.title} :
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    lg={5}
                    md={5}
                    sm={5}
                    xs={6}
                    sx={{ color: "white" }}
                  >
                    {item.content}
                  </Grid>
                </Grid>
              ))}
            </Grid>

            <Grid item container>
              <Typography sx={headings}>ink system</Typography>
              {inkSystem?.map((item) => (
                <Grid item container key={item.id}>
                  <Grid item lg={5} md={6} sm={6} xs={6}>
                    <Typography sx={{ fontWeight: "500", color: "white" }}>
                      {item.title} :
                    </Typography>
                  </Grid>
                  <Grid item md={6} sm={6} xs={6} sx={{ color: "white" }}>
                    {item.content}
                  </Grid>
                </Grid>
              ))}
            </Grid>

            <Grid item container direction="column">
              <Typography sx={headings}>cabinet</Typography>
              <List sx={{ color: "white" }}>
                Standered Finish L Grained 304 stainless steel
              </List>

              {cabinetData?.map((item) => (
                <Grid item container key={item.id}>
                  <Grid item lg={5} md={6} sm={6}>
                    <Typography sx={{ fontWeight: "500", color: "white" }}>
                      {item.title}
                    </Typography>
                  </Grid>
                  <Grid item md={5} sm={6} sx={{ color: "white" }}>
                    {item.content}
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Re200Plus;
