import { videoData } from "helpers/videoData";
import { Grid } from "@mui/material";
import YouTube from "react-youtube";

const Video = () => {
  const opts = {
    height: "250",
    width: "300",
  };

  return (
    <>
      {videoData?.map((item) => {
        return (
          <Grid item key={item.id}>
            <YouTube videoId={item.sourceId} opts={opts} />
          </Grid>
        );
      })}
    </>
  );
};

export default Video;
