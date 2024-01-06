import LaserImg from "@/assets/products/co2.png";
import Samples from "@/assets/samples/co2_sample.png";
import ProductButton from "@/components/ProductButton";
import Details from "@/components/Details";
import Heading from "@/components/Heading";
import CatalougFile from "@/assets/catalouge/CO2_Flying_Laser.pdf";
import { Grid, Typography, Card } from "@mui/material";
import { productHeading, modelHeading, headings, ProductImg } from "./style";
import {
  Co2laserData,
  commonSpace,
  applications,
  benifits,
} from "helpers/co2Data";
import Head from "@/components/Head";

const Co2 = () => {
  return (
    <>
      <Head title="Co2" description="Radhe Enterprise Co2 Page" />
      <Grid
        container
        width={"90%"}
        sx={{ margin: "0 auto", marginBottom: "2rem" }}
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          sx={{
            ...productHeading,
            display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
            color: "white",
          }}
          align="center"
        >
          co2 laser marking system
        </Typography>
        <Heading name="PETMARK" type="FLYING LASER" pdf={CatalougFile} />
        <Grid
          container
          item
          direction={"row"}
          columnGap={7}
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
              <img src={LaserImg} alt="Laser" width={350} />
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
              <Typography sx={{ ...modelHeading, color: "#ffffff" }}>
                Print Samples
              </Typography>
              <ProductImg src={Samples} sx={{ height: "90%", width: "90%" }} />
            </Grid>

            <Grid item>
              <Typography sx={{ ...modelHeading, color: "#ffffff" }}>
                Applicable Products
              </Typography>
              {applications?.map((item, index) => {
                return <Details key={index} content={item} />;
              })}
            </Grid>
          </Grid>

          <Grid container item direction={"column"} rowGap={3} lg={6} md={6}>
            {Co2laserData?.map((item) => (
              <Grid item key={item.id}>
                <Card elevation={7} sx={{ p: "1rem" }}>
                  <Typography sx={modelHeading}>{item.model}</Typography>
                  <Grid item container>
                    <Grid item lg={7} md={6} sm={6} xs={6}>
                      <Typography sx={headings}>
                        {item.power.heading}:
                      </Typography>
                    </Grid>
                    <Grid item>{item.power.content}</Grid>
                  </Grid>

                  <Grid item container>
                    <Grid item lg={7} md={6} sm={6} xs={6}>
                      <Typography sx={headings}>
                        {item.mark_speed.heading}:
                      </Typography>
                    </Grid>
                    <Grid item>{item.mark_speed.content}</Grid>
                  </Grid>

                  <Grid item container>
                    <Grid item lg={7} md={6} sm={6} xs={6}>
                      <Typography sx={headings}>
                        {item.mark_area.heading}:
                      </Typography>
                    </Grid>
                    <Grid item>{item.mark_area.content}</Grid>
                  </Grid>

                  <Grid item container>
                    <Grid item lg={7} md={6} sm={6} xs={6}>
                      <Typography sx={headings}>
                        {item.machine_speed.heading}:
                      </Typography>
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={6}>
                      {item.machine_speed.content}
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            ))}

            <Grid container item lg={5} md={5} justifySelf={"flex-end"}>
              <Typography sx={{ ...modelHeading, color: "#ffffff" }}>
                Specifications
              </Typography>
              {commonSpace?.map((item) => (
                <Grid
                  container
                  item
                  key={item.id}
                  sx={{ m: "2px 0", color: "#ffffff" }}
                >
                  <Grid item lg={6} md={7} sm={6} xs={7}>
                    <Typography sx={{ fontWeight: "580" }}>
                      {item.title}:
                    </Typography>
                  </Grid>
                  <Grid item lg={6} md={5} sm={5} xs={5}>
                    {item.content}
                  </Grid>
                </Grid>
              ))}
            </Grid>
            <Grid container item>
              <Typography sx={{ ...modelHeading, color: "#ffffff" }}>
                Benifits
              </Typography>
              <Details content={benifits[0].marking} />
              <Details content={benifits[0].efficiency} />
              <Details content={benifits[0].power} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Co2;
