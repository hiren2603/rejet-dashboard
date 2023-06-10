import { Grid, Typography, Button, styled, Divider } from "@mui/material";
import { InnerText, headingText, DownloadButton } from "./style";

const Heading = ({ name, type }) => {
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction={{ lg: "row", md: "column", sm: "column" }}
      >
        <Grid item lg={8}>
          <Typography sx={headingText}>
            <InnerText>
              {name}
              {""}
            </InnerText>{" "}
            {type}
          </Typography>
        </Grid>

        <Grid item sm={2} lg={2}>
          <Button variant="contained" color="error" sx={{ height: "50px" }}>
            Download Broucher
          </Button>
        </Grid>
      </Grid>
      <Divider
        sx={{ width: "100%", backgroundColor: "#000000", alignItems: "center" }}
      />
    </>
  );
};
export default Heading;
