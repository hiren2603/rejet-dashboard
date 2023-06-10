import { Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";

const PageHeading = ({ heading }) => {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h4">{heading}</Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" color="error">
          Download Broucher
        </Button>
      </Grid>
      <Divider style={{ width: "100%" }} />
    </Grid>
  );
};

export default PageHeading;
