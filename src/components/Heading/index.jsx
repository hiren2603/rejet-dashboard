import { Grid, Typography, Button, Divider } from "@mui/material";
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
        <Grid item lg={9.8} md={9}>
          <Typography sx={headingText}>
            <InnerText>
              {name}
              {""}
            </InnerText>{" "}
            {type}
          </Typography>
        </Grid>

        <Grid item>
          <Button variant="contained" color="error" sx={{ height: "50px" }}>
            Download Broucher
          </Button>
        </Grid>
      </Grid>
      <Divider component="hr" role="presentation" />
      <Divider
        sx={{
          width: "100%",
          backgroundColor: "#000000",
          alignItems: "center",
          mt: "10px",
        }}
      />
    </>
  );
};
export default Heading;
