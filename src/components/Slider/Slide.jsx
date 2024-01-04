import { Stack, Box, Typography } from "@mui/material";

const Slide = ({ slide }) => {
  return (
    <Stack
      direction="row"
      width={"100%"}
      sx={{ justifyContent: "space-between" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Typography
          sx={{
            width: "70%",
            fontSize: "50px",
            fontWeight: "bold",
            whiteSpace: "wrap",
          }}
        >
          {slide.title}
        </Typography>
        <Typography sx={{ whiteSpace: "nowrap" }}>{slide.info}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
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
