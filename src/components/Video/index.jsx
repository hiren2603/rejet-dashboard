import { useState, useEffect } from "react";
import { Box, Skeleton } from "@mui/material";
import { videoData } from "helpers/videoData";
import YouTube from "react-youtube";

const Video = () => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const opts = {
    height: "200",
    width: "300",
    playerVars: { autoplay: 0 },
  };

  const video = {
    borderRadius: "20px",
    margin: "1rem",
  };

  const handleVideoReady = () => {
    setIsLoading(false);
    setIsVideoReady(true);
  };

  const handleVideoStateChange = (event) => {
    if (event.data === YouTube.PlayerState.PLAYING) {
      setIsVideoReady(true);
    } else {
      setIsVideoReady(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
  }, []);
  return (
    <>
      {videoData?.map((item) => (
        <Box
          key={item.id}
          display="flex"
          alignItems="center"
          justifyContent="center"
          // sx={{ borderRadius: "5px" }}
        >
          <YouTube
            videoId={item.sourceId}
            opts={opts}
            style={video}
            onReady={handleVideoReady}
            onStateChange={handleVideoStateChange}
            />
          {isLoading && !isVideoReady ? (
              <Skeleton variant="rectangular" height={250} width={300} />
            ) : null
          }
        </Box>
      ))}
    </>
  );
};

export default Video;
