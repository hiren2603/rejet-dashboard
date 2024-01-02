import Head from "@/components/Head";
import ProductButton from "@/components/ProductButton";
import Details from "@/components/Details";
import inkjet from "@/assets/products/re225.png";
import Samples from "@/assets/samples/font_sample.png";
import Heading from "@/components/Heading";
import { Grid, Typography} from "@mui/material";
import CatalougFile from "@/assets/catalouge/CIJ_RE225.pdf";
import {
  productHeading,
  modelHeading,
  ProductImg,
} from "./style";
import {
  re225TechSpec,
  re225DataSpec,
  printFunctions,
  userInterface,
  nozzleCharacterities,
  inkSystem,
  re225Features,
  re225HardwareSpec,
  re225SoftwareSystem,
} from "@/helpers/re225data";

const Re225 = () => {
  return (
    <>
      <Head title="Re225" description="Radhe Enterprise Re225 Page" />
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
            color : "white"
          }}
          align="center"
        >
          continuous inkjet printers
        </Typography>
        <Heading name="RE225" type="INKJET PRINTER" pdf={CatalougFile}/>

        <Grid
          container
          item
          direction={"row"}
          justifyContent="space-between"
          columnSpacing={3}
        >
          <Grid
            container
            item
            direction={"column"}
            lg={6}
            md={6}
            rowSpacing={3}
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
              <img src={inkjet} alt="Laser" width={350}/>
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
              <Typography sx={modelHeading}>nozzle characterities</Typography>
              {nozzleCharacterities?.map((item) => {
                return <Details key={item.id} content={item.content} />;
              })}
            </Grid>

            <Grid item>
              <Typography sx={modelHeading}>hardware specifications</Typography>
              {re225HardwareSpec?.map((item) => {
                return <Details key={item.id} content={item.content} />;
              })}
            </Grid>
          </Grid>

          <Grid
            container
            item
            direction={"column"}
            lg={6}
            md={6}
            rowSpacing={2}
          >
            <Grid container item>
              <Typography
                sx={{ ...modelHeading, textAlign: "center" }}
                textAlign={"center"}
              >
                Product Details
              </Typography>
              {re225TechSpec?.map((item) => (
                <Grid container item key={item.id} sx={{ m: "2px 0", color : "white" }}>
                  <Grid item lg={6} md={6} sm={7} xs={7}>
                    <Typography sx={{ fontWeight: "600", color : "white" }}>
                      {item.label} :
                    </Typography>
                  </Grid>
                  <Grid item sm={5}>
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
                Data Specification
              </Typography>

              {re225DataSpec?.map((item) => (
                <Grid container item key={item.id} sx={{ m: "2px 0", color : "white" }}>
                  <Grid item lg={6} md={5} sm={6} xs={6}>
                    <Typography sx={{ fontWeight: "600" }}>
                      {item.label} :
                    </Typography>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs>
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
                features
              </Typography>
              {re225Features?.map((item) => (
                <Grid container item key={item.id} sx={{ m: "2px 0", color : "white" }}>
                  <Grid item lg={6} md={6} sm={6} xs={6}>
                    <Typography sx={{ fontWeight: "600" }}>
                      {item.label} :
                    </Typography>
                  </Grid>
                  <Grid item lg={6} md={5} xs={5}>
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
                ink system
              </Typography>
              {inkSystem?.map((item) => (
                <Grid container item key={item.id} sx={{ m: "2px 0", color : "white" }}>
                  <Grid item lg={6} md={6} sm={6} xs={6}>
                    <Typography sx={{ fontWeight: "600" }}>
                      {item.label} :
                    </Typography>
                  </Grid>
                  <Grid item lg={6} md={6} xs={6}>
                    {item.content}
                  </Grid>
                </Grid>
              ))}
            </Grid>

            <Grid item>
              <Typography sx={modelHeading}>print functions</Typography>
              {printFunctions?.map((item) => {
                return <Details key={item.id} content={item.content} />;
              })}
            </Grid>

            <Grid item>
              <Typography sx={modelHeading}>user interface</Typography>
              {userInterface?.map((item) => {
                // return <List key={item.id}>{item.content}</List>;
                return <Details key={item.id} content={item.content} />;
              })}
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={12} md={12} sm={12}>
          <Typography sx={modelHeading}>software system</Typography>
          {re225SoftwareSystem?.map((item) => {
            return <Details key={item.id} content={item.content} />;
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default Re225;
