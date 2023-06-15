import { Box } from "@mui/material";
import { videoData } from "helpers/videoData";
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
          <Box
            key={item.id}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <YouTube
              videoId={item.sourceId}
              opts={opts}
              style={{ borderRadius: "20px", margin: "1rem" }}
            />
          </Box>
        );
      })}
    </>
  );
};

export default Video;
