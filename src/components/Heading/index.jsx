import { Grid, Typography, Button, styled } from "@mui/material";
import { InnerText, headingText, DownloadButton } from "./style";

const Heading = ({ name, type }) => {
  return (
    <>
      <Grid
        container
        sx={{ borderBottom: "1px solid #000000", pb: "0.5rem" }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item lg={9}>
          <Typography sx={headingText}>
            <InnerText>
              {name}
              {""}
            </InnerText>{" "}
            {type}
          </Typography>
        </Grid>

        <Grid item>
          <Button variant="contained" color="error">
            Download Broucher
          </Button>
          {/* <DownloadButton />
           */}
        </Grid>
      </Grid>
    </>
  );
};
export default Heading;
