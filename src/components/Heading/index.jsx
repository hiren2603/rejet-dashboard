import { Grid, Typography, Button, styled, Divider } from "@mui/material";
import { InnerText, headingText, DownloadButton } from "./style";

const Heading = ({ name, type }) => {
  return (
    <>
      <Grid
        container
        sx={{ borderBottom: "1px solid #000000", pb: "0.5rem" }}
        alignItems="center"
        justifyContent="center"
        direction={{ lg: "row", md: "column", sm: "column" }}
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

        <Grid item sm={2}>
          <Button variant="contained" color="error">
            Download Broucher
          </Button>
        </Grid>
      </Grid>
      <Divider component="hr" role="presentation" />
    </>
  );
};
export default Heading;
