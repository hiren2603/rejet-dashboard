import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import certificate from "@/assets/certificate.png";
import { imageContainerStyle, certificateStyle, contentStyle, infoContent, infoTitle } from "./style";

const Info = () => {
  return (
    <>
      <Grid container justifyContent={"center"} height={'content-height'} mb={3}>
        <Grid item lg={10} md={10} sm={10} xs={10}>
          <Typography sx={infoTitle}>Who we are?</Typography>
          <Divider />
        </Grid>
        <Grid item lg={5} md={5} sm={10} xs={10} pt={5} sx={imageContainerStyle}>
          <Box component="img"
            src={certificate}
            alt="certificate"
            sx={certificateStyle}
          />
        </Grid>
        <Grid
          item
          lg={5}
          md={5}
          sm={10}
          xs={10}
          pt={2}
          sx={{contentStyle}}
        >
          <Typography sx={infoContent}>
            Our story began in 2011. Back then we were roadster and service
            provider of Continuous ink jet printer with a single area of the
            market. Now we are manufacturer of CIJ Printer,Laser Machine and TIJ
            Printer.
          </Typography>
          <Typography sx={infoContent}>
            Today, we are privileged to connect with hundreds of customers
            everyday with exceptional products and more than 5 branches. Today
            Radhe Enterprise is fastest growing company engaged in providing
            total service & consumable supports to all users of inkjet printers.
            We are having head office at Rajkot(Gujarat) and branch offices in{" "}
            <b> Ahmedabad, Surat, Morbi, Gandhidham, Vapi. </b>Recently we have
            started our own manufacturing of “RE-Jet” CIJ Printer, Laser
            Machine, and TIJ Printer Machine.
          </Typography>
          <Typography sx={infoContent}>
            We have always believed in serving the best product possible. It’s
            our goal for all of our products to be grown under the highest
            standards of quality, using ethical sourcing practices.
          </Typography>

          <Grid item>
            <Link to="/about">
              <Button variant="contained" color="error">
                Read More
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Info;
