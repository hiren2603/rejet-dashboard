import { useState, useEffect } from "react";
import { Box, Skeleton } from "@mui/material";
import { videoData } from "helpers/videoData";

const Video = () => {
  const [isVideoReady, setIsVideoReady] = useState(false);

  const handleVideoReady = () => { setIsVideoReady(true) };

  useEffect(() => {
    setTimeout(handleVideoReady, 2000);
  }, []);

  return (
    <>
      {videoData?.map((item) => (
        <Box key={item.id} display={"flex"} alignItems="center" justifyContent={"center"} sx={{ borderRadius: "5px" }}>
          {!isVideoReady ? (
            <Skeleton variant="rectangular" height={250} width={300} sx={{ borderRadius: "20px", margin: "1rem" }} />
          ) : (
            <iframe
              width="300"
              height="250"
              src={`https://www.youtube.com/embed/${item.sourceId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              style={{ borderRadius: "20px", margin: "1rem" }}
              onLoad={handleVideoReady}
            />
          )}
        </Box>
      ))}
    </>
  );
};

export default Video;