import {
  Button,
  Card,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import certificate from "../../assets/certificates/cert.jpg";
import makeInIndia from "../../assets/certificates/makeinindia.png";
import quality from "../../assets/certificates/quality.png";
import satisfaction from "../../assets/certificates/satisfaction.png";
import certificates from "../../assets/certificates/cert_list.png";
import PageHeading from "../../components/PageHeading";
import { aboutUs } from "../../helpers/aboutUs";
import Vision from "../../components/Vision";
import { BrandImage } from "../../components/Brands/style";

const About = () => {
  return (
    <Grid container width="90%" sx={{ m: "0 auto", mt: 5 }}>
      <PageHeading heading="About Us" />
      <Grid item lg={12} md={12} sm={12} pt={2}>
        {aboutUs.map((para) => {
          return (
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
          );
        })}
      </Grid>
      <Grid
        container
        item
        lg={12}
        md={12}
        sm={12}
        pt={4}
        gap={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h4" align="left" mb={2}>
            Why Choose Us
          </Typography>
        </Grid>
        <Grid item lg={2} md={2} align="center">
          <BrandImage src={certificate} alt="certificate" />
        </Grid>
        <Grid item lg={3} md={2} align="center">
          <BrandImage src={quality} alt="quality" />
        </Grid>
        <Grid item lg={3} md={2} align="center">
          <BrandImage src={makeInIndia} alt=" make in india" />
        </Grid>
        <Grid item lg={3} md={2} align="center">
          <BrandImage src={satisfaction} alt=" satisfaction" />
        </Grid>
      </Grid>
      <Vision />
    </Grid>
  );
};
export default About;
