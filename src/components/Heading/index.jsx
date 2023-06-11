import { Grid, Typography, Button, Divider } from "@mui/material";
import { InnerText, headingText, DownloadButton } from "./style";

const Heading = ({ name, type }) => {
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        direction={{
          lg: "row",
          md: "column",
          sm: "column",
        }}
      >
        <Grid item>
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
