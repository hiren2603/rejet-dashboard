import { Box, Stack } from "@mui/material";
import Bg from "@/assets/bg.jpg";
import {
  overlayStyle,
  heroContainerStyle,
  videoContainerStyle,
  videoStyle,
} from "./style";
import Hero from "@/assets/videos/intro.mp4";

const HeroSection = () => {
  return (
    <Stack direction="row" sx={{ ...heroContainerStyle }}>
      <Box sx={overlayStyle}></Box>
      <Box sx={videoContainerStyle}>
        <video autoPlay loop muted style={videoStyle}>
          <source src={Hero} type="video/mp4" />
        </video>
      </Box>
    </Stack>
  );
};
export default HeroSection;
