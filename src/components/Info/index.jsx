import certificate from "../../assets/certificate.png";
import { Grid, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { infoTitle, infoContent } from "./style";

const Info = () => {
  return (
    <>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ margin: "2rem 0" }}
      >
        <Grid item lg={2} sm={6}>
          <Typography sx={infoTitle}>About Us</Typography>
        </Grid>

        <Grid
          item
          container
          justifyContent={"center"}
          alignItems="center"
          columnSpacing={{ lg: 4 }}
        >
          <Grid item lg={4} sm={2} justifySelf={{ sm: "center" }}>
            <img
              src={certificate}
              alt="certificate"
              height={500}
              width={350}
              style={{ boxShadow: "2px 2px 2px 10px #2f377a" }}
            />
          </Grid>

          <Grid
            container
            item
            lg={5}
            alignItems="center"
            justifyContent={"center"}
          >
            <Typography sx={infoContent}>
              Our story began in 2011. Back then we were roadster and service
              provider of Continuous ink jet printer with a single area of the
              market. Now we are manufacturer of CIJ Printer,Laser Machine and
              TIJ Printer.
            </Typography>
            <Typography sx={infoContent}>
              Today, we are privileged to connect with hundreds of customers
              everyday with exceptional products and more than 5 branches. Today
              Radhe Enterprise is fastest growing company engaged in providing
              total service & consumable supports to all users of inkjet
              printers like{" "}
              <b> Markem Image, Domino, Hitachi, Videojet & Willett. </b> We are
              having head office at Rajkot(Gujarat) and branch offices in{" "}
              <b> Ahmedabad, Surat, Morbi, Gandhidham, Vapi. </b>Recently we
              have started our own manufacturing of “RE-Jet” CIJ Printer, Laser
              Machine, and TIJ Printer Machine.
            </Typography>
            <Typography sx={infoContent}>
              We have always believed in serving the best product possible. It’s
              our goal for all of our products to be grown under the highest
              standards of quality, using ethical sourcing practices.
            </Typography>

            <Grid item>
              <Button variant="contained" color="error">
                Read More
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Info;
