import Head from "@/components/Head";
import { Grid, Typography } from "@mui/material";
import { videoData } from "helpers/videoData";
import Video from "@/components/Video";
import { productHeading, VideoWrapper } from "./style";

const Applications = () => {
  const opts = {
    height: "250",
    width: "300",
    playerVars: { autoplay: 0, origin: window.location.origin },
  };
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
            Applications of RE200 Inkjet Printers
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
