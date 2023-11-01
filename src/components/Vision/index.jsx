import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
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
        <Typography variant="h4" align="left">
          Vision & Mission
        </Typography>
        <Divider textAlign="center" />
      </Grid>
      {visions.map((v) => (
        <Grid item lg={12} md={12} sm={12} key={v.id}>
          <Card
            raised
            sx={{
              display: "flex",
              flexDirection: {lg: "row", md: "column", sm: "column", xs: "column"},
              alignItems: "center",
              justifyContent: {lg: "center", md: "start", sm: "start", xs: "start"},
              height: { lg: 250, md: 500, sm: 500, xs: 600 },
              width: "100%"
              // padding: 2,
            }}
          >
            <Box 
              component="div"
              sx={{
                clipPath: {lg: 'polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)', md: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)', sm: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)',  xs: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)'},
                background: "#EBEBEB",
                width: { lg: "30%", md: "100%", sm: "100%", xs: "100%" },
                height: { lg: "100%", md: "100%", sm: "70%", xs: "50%" },
                display: "flex",
                flexDirection: {lg: "row", md: 'column', sm: 'column', xs: 'column'}, 
                alignItems: "center",
                justifyContent: {lg: "center",md: "center", sm: "center", xs: "center"},
                // p: { sm: 2 },
              }}
            
            >
              <CardMedia
              component="img"
              image={v.image}
              alt="vision img"
              sx={{width: {lg: 180, sm: 200, xs: 200}}}
            />
            </Box>
            
            <CardContent sx={{width: {lg: "70%", md: "100%", sm: "100%", xs: "100%"}}}>
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
