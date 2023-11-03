import Head from "@/components/Head";
import ProductButton from "@/components/ProductButton";
import Details from "@/components/Details";
// import inkjet from "@/assets/products/inkjet.png";
import inkjet from "@/assets/products/inkjet-200plus.png"
import Samples from "@/assets/samples/font_sample.png";
import consumable from "@/assets/products/cij_consumable.png";
import spares from "@/assets/products/cij_spares.png";
import Heading from "@/components/Heading";
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
import {
  productHeading,
  modelHeading,
  headings,
  ProductImg,
} from "./style";

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
        <Heading name="RE200+" type="INKJET PRINTER" />
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
            rowSpacing={{lg: 5, sm: 0}} 
          
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
              <img src={inkjet} alt="Re200+" width={300}/>
              <ProductButton />
            </Grid>

            <Grid item lg={2} md={1} sm={2} xs={2} alignSelf={"center"}>
              <Typography sx={modelHeading}>Print Samples</Typography>
              <ProductImg
                src={Samples}
                width={350}
                style={{ height: "400px" }}
              />
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
              {re200PlusParams?.map((item) => (
                <Grid container item key={item.id} sx={{ m: "2px 0" }}>
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

            <Grid item container>
              <Typography sx={headings}>ink system</Typography>
              {inkSystem?.map((item) => (
                <Grid item container key={item.id}>
                  <Grid item lg={5} md={6} sm={6} xs={6}>
                    <Typography sx={{ fontWeight: "600" }}>
                      {item.title} :
                    </Typography>
                  </Grid>
                  <Grid item md={6} sm={6} xs={6}>
                    {item.content}
                  </Grid>
                </Grid>
              ))}
            </Grid>

            <Grid item container direction="column">
              <Typography sx={headings}>cabinet</Typography>
              <List>Standered Finish L Grained 304 stainless steel</List>

              {cabinetData?.map((item) => (
                <Grid item container key={item.id}>
                  <Grid item lg={5} md={6} sm={6}>
                    <Typography sx={{ fontWeight: "600" }}>
                      {item.title}
                    </Typography>
                  </Grid>
                  <Grid item md={5} sm={6}>
                    {item.content}
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Grid container item direction="row" columnSpacing={10}>
          <Grid
            item
            justifyContent={{ xs: "center", sm: "center", md: "center" }}
          >
            <img src={spares} alt="spares" width={300} height={150} />
          </Grid>

          <Grid item sx={{ display: "flex", flexDirection: "column" }} lg>
            <Typography sx={modelHeading}>re200+ spares</Typography>
            <List>
              Smart Print Head, Modular designed still give flexibility to
              replace individual spare separately. Automatic Calibration
              function automatically adjusts printing parameters according to
              the changes in the environment.
            </List>
          </Grid>
        </Grid>

        <Grid container item direction="row" columnSpacing={10}>
          <Grid
            item
            sx={{ justifySelf: { md: "center" } }}
            justifyContent={{ xs: "center", sm: "center", md: "center" }}
          >
            <img src={consumable} alt="spares" width={300} height={150} />
          </Grid>

          <Grid item sx={{ display: "flex", flexDirection: "column" }} lg>
            <Typography sx={modelHeading}>re200+ consumable</Typography>
            <List>
              Inteligent Ink Management System of RE200+ Inkjet Printer
              eliminates the wastage of consumables as there is no manual
              pouring. Easy Insertion and Removal of Cartridges eliminates the
              risk of Damage
            </List>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Re200Plus;
