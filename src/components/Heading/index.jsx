import { Grid, Typography, Button, Divider } from "@mui/material";
import { InnerText, headingText, downloadButton } from "./style";
import broucher from "@/assets/broucher.pdf";

const Heading = ({ name, type }) => {
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        direction={{
          lg: "row",
          md: "row",
          sm: "row",
          xs: "column",
        }}
        sx={{ marginTop: { lg: 0, md: 0, sm: "1rem", xs: "1rem" } }}
      >
        <Grid item lg={9} md={9}>
          <Typography sx={headingText}>
            <InnerText>
              {name}
              {""}
            </InnerText>{" "}
            {type}
          </Typography>
        </Grid>

        <Grid item>
          <Button
            sx={downloadButton}
            variant="contained"
            color="error"
            component="a"
            href={broucher}
            target="_blank"
            rel="noreferref"
            download
          >
            Download Broucher
          </Button>
        </Grid>
      </Grid>
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
