import { Grid, Typography, Button, Divider } from "@mui/material";
import { InnerText, headingText, downloadButton } from "./style";

const Heading = ({ name, type, pdf }) => {
  return (
    <>
      <Grid
        container
        alignItems="center"
        direction={{
          lg: "row",
          md: "row",
          sm: "row",
          xs: "column",
        }}
        sx={{
          marginTop: { lg: 0, md: 0, sm: 5, xs: 5 },
          justifyContent: { lg: "space-between", sm: "center" },
        }}
      >
        <Grid item lg={9} md={9} sm={12} xs={12}>
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
            href={pdf}
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
          backgroundColor: "#ffffff",
          alignItems: "center",
          mt: "10px",
        }}
      />
    </>
  );
};
export default Heading;
