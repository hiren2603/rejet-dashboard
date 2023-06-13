import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import certificate from "../../assets/certificates/cert.jpg";
import makeInIndia from "../../assets/certificates/makeinindia.png";
import quality from "../../assets/certificates/quality.png";
import satisfaction from "../../assets/certificates/satisfaction.png";
import PageHeading from "../../components/PageHeading";
import { aboutUs } from "../../helpers/aboutUs";
import Vision from "../../components/Vision";
import { gridItemStyle } from "./style";

const About = () => {
  return (
    <Stack width="90%" sx={{ m: "0 auto", mt: 5 }}>
      <PageHeading heading="About Us" />
      <Grid container pt={2}>
        {aboutUs.map((para) => {
          return (
            <Grid item key={para.id}>
              <Typography
                component={para.id >= 2 && para.id < 6 ? "span" : "p"}
                align="justify"
                key={para.id}
                sx={{
                  lineHeight: 2,
                  fontWeight:
                    para.id > 2 && para.id < 6 && para.id !== 4
                      ? "700"
                      : "normal",
                  color:
                    para.id > 2 && para.id < 6 && para.id !== 4
                      ? `#ff0000`
                      : "black",
                  textTransform:
                    para.id > 2 && para.id < 6 && para.id !== 4 && "uppercase",
                }}
              >
                {para.item}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
      <Grid container my={2}>
        <Stack width={"100%"}>
          <Typography variant="h4" align="left" mb={2}>
            Why Choose Us
          </Typography>
          <Divider />
        </Stack>
      </Grid>
      <Grid
        container
        columnSpacing={0}
        rowSpacing={2}
        justifyContent={"space-between"}
      >
        <Grid item>
          <Box sx={gridItemStyle}>
            <img src={certificate} alt="certificate" />
          </Box>
        </Grid>
        <Grid item>
          <Box sx={gridItemStyle}>
            <img src={quality} alt="quality" height={180} />
          </Box>
        </Grid>
        <Grid item>
          <Box sx={gridItemStyle}>
            <img src={makeInIndia} alt=" make in india" />
          </Box>
        </Grid>
        <Grid item>
          <Box sx={gridItemStyle}>
            <img src={satisfaction} alt=" satisfaction" />
          </Box>
        </Grid>
      </Grid>
      <Vision />
    </Stack>
  );
};
export default About;
