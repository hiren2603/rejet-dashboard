import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { visions } from "../../helpers/VisionMission";

const Vision = () => {
  return (
    <Grid container spacing={2} justifyContent="space-between" mt={5} mb={5}>
      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" align="center">
          Vision & Mission
        </Typography>
        <Divider textAlign="center" />
      </Grid>
      {visions.map((v) => (
        <Grid item lg={6} md={6} sm={6} key={v.id}>
          <Card
            raised
            sx={{
              display: "flex",
              flexDirection: { lg: "row", md: "column", sm: "column" },
              alignItems: "center",
              justifyContent: "center",
              height: { lg: 250, md: 400, sm: 500 },
              padding: 2,
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: { lg: 200, md: "inherit", sm: "inherit" },
                height: { lg: 200, md: 180, sm: 180 },
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              image={v.image}
              alt="vision img"
            />
            <CardContent>
              <Typography variant="h5">{v.title}</Typography>
              <Typography align="justify">{v.info}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Vision;
