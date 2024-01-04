import { Stack, Box, Typography } from "@mui/material";

const Slide = ({ slide }) => {
  return (
    <Stack direction={"row"} sx={{ flex: "100%", width: "inherit" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            width: "70%",
            fontSize: "50px",
            fontWeight: "bold",
            whiteSpace: "wrap",
            textAlign: "left",
          }}
        >
          {slide.title}
        </Typography>
        <Typography>{slide.info}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          border: "2px solid white",
          height: "100%",
          position: "relative",
        }}
      >
        <img
          src={slide.image}
          alt="product"
          style={{ height: "auto", width: "250px" }}
        />
      </Box>
    </Stack>
  );
};

export default Slide;
