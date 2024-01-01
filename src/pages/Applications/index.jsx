import Head from "@/components/Head";
import { Grid, Typography } from "@mui/material";
import Video from "@/components/Video";
import { productHeading, VideoWrapper } from "./style";

const Applications = () => {
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent={"center"}
        sx={{ margin: "auto" }}
        direction={"column"}
      >
        <Grid item lg>
          <Typography textAlign={"center"} sx={productHeading}>
            <Head
              title="Applications"
              description="Radhe Enterprise Application Page"
            />
            Applications of Rejet Printers and Coders
          </Typography>
        </Grid>

        <VideoWrapper>
          <Video />
        </VideoWrapper>
      </Grid>
    </>
  );
};

export default Applications;
