import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { visions } from "@/helpers/VisionMission";

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
        <Typography variant="h4" align="left">
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
              flexDirection: {
                lg: "row",
                md: "column",
                sm: "column",
                xs: "column",
              },
              alignItems: "center",
              justifyContent: "center",
              height: { lg: 250, md: 400, sm: 450, xs: 400 },
              padding: 2,
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: { lg: 200, md: "inherit", sm: "inherit", xs: "inherit" },
                height: { lg: 200, md: 180, sm: 180, xs: 160 },
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                p: { sm: 2 },
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
