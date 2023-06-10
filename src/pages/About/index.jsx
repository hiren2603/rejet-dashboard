import { Button, Grid, Typography } from "@mui/material";
import certificate from "../../assets/certificate.png";
import makeInIndia from "../../assets/makeinindia.png";
import PageHeading from "../../components/PageHeading";
import { aboutUs } from "../../helpers/aboutUs";

const About = () => {
  return (
    <Grid container width="90%" sx={{ m: "0 auto", mt: 5 }} columnGap={0}>
      <PageHeading heading="About Us" />
      <Grid item lg={5} md={5} pt={4} position="relative">
        <img
          src={certificate}
          alt="certificate"
          style={{
            height: "65%",
            width: "80%",
            boxShadow: "2px 2px 2px 2px #2f377a",
            position: "absolute",
          }}
        />
        <img
          src={makeInIndia}
          alt="certificate"
          style={{
            position: "absolute",
            left: 0,
            bottom: "0",
          }}
        />
      </Grid>
      <Grid item lg={7} md={7} pt={2}>
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
        <Button variant="contained" color="error" sx={{ marginTop: "1rem" }}>
          Know More
        </Button>
      </Grid>
    </Grid>
  );
};
export default About;
