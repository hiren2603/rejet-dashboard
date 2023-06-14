import Head from "@/components/Head";
import React from "react";
import Video from "@/components/Video";
import { Grid, Typography } from "@mui/material";
import { videoData } from "helpers/videoData";
import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";
import ReactPlayer from "react-player";

const Applications = () => {
  const opts = {
    height: "250",
    width: "300",
    playerVars: { autoplay: 0, origin: window.location.origin },
  };
  return (
    (
    <>
      <Grid container>
        <Typography>
      <Head
        title="Applications"
        description="Radhe Enterprise Application Page"
      />
      Applications
     of RE200 Inkjet Printers</Typography>
        {videoData?.map((item) => {
          return (
            <Grid item key={item.id}>
              <ReactPlayer url={item.url} />
            </Grid>
          );
        })}
        {/* {videoData?.map((item) => {
          var id = getYouTubeID(item.sourceId);
          return (
            <Grid item key={item.id}>
              <YouTube videoId={id} opts={opts} />
            </Grid>
          );
        })} */}
      </Grid>
    </>
  )
  );
};

export default Applications;
