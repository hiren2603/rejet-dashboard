import { Button, Divider, Grid, Typography } from "@mui/material";
import pdf from "@/assets/catalouge/product_catalouge.pdf";
import { downloadButton } from "./style";

const PageHeading = ({ heading }) => {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h4">{heading}</Typography>
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
      <Divider style={{ width: "100%" }} />
    </Grid>
  );
};

export default PageHeading;
