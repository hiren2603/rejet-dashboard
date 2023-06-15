import Head from "@/components/Head";
import { Grid, Typography } from "@mui/material";
import { videoData } from "helpers/videoData";
import YouTube from "react-youtube";
import { productHeading } from "./style";

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
        sx={{ width: "80%", margin: "auto" }}
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

        <Grid item container columns={3}>
          {videoData?.map((item) => {
            // var id = getYouTubeID(item.sourceId);
            return (
              <Grid
                item
                key={item.id}
                lg={1}
                sx={{ alignSelf: "center", borderRadius: "3px" }}
              >
                <YouTube
                  videoId={item.sourceId}
                  opts={opts}
                  style={{ borderRadius: "20px" }}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default Applications;
