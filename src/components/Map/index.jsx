import { Divider, Grid, Typography } from "@mui/material";
import { mapHeadStyle, mapStyle } from "./style";

const Map = () => {
  const API_KEY = `${import.meta.env.VITE_APP_API_KEY}`;
  return (
    <>
      <Grid item lg={12} md={12} sm={12} xs={12} mb={2}>
        <Typography
          sx={{
            ...mapHeadStyle,
            textAlign: { lg: "center", md: "center", sm: "left" },
          }}
        >
          Find Us On Map
        </Typography>
        <Divider />
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <iframe
          title="map"
          samesite="None"
          secure="true"
          loading="lazy"
          allowFullScreen
          src={API_KEY}
          style={mapStyle}
        ></iframe>
      </Grid>
    </>
  );
};

export default Map;
