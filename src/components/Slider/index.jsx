import React, { useState, useRef, useEffect } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { SlideItems } from "@/helpers/SlideItems";
import { slideDetails, overlayStyle } from "./style";
import { motion } from "framer-motion";
import inkjet from "@/assets/products/re200plus.png";
import Slide from "./Slide";

const delay = 5000;
const Slider = () => {
  const length = SlideItems.length;
  const [slideId, setSlideId] = useState(1);
  const timeoutRef = useRef(null);

  // Timing Function
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setSlideId((prevSlideId) =>
          prevSlideId === length ? 1 : prevSlideId + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [slideId, length]);

  // const nextSlide = () => {
  //   if (slideId === length) {
  //     setSlideId(1);
  //     console.log(slideId);
  //   } else {
  //     setSlideId(slideId + 1);
  //   }
  // };
  // const prevSlide = () => {
  //   if (slideId === 1) {
  //     console.log(slideId);
  //     setSlideId(length);
  //   } else {
  //     setSlideId(slideId - 1);
  //   }
  // };

  return (
    <div
      style={{
        margin: "3rem auto",
        width: "85vw",
        minHeight: "60vh",
        display: "flex",
        justifyContent: "center",
        whiteSpace: "nowrap",
        overflow: "hidden",
        // border: "2px solid white",
      }}
    >
      {SlideItems.map((slide) => (
        <div
          key={slide.id}
          style={{
            flexWrap: "wrap",
            flexDirection: {
              lg: "row",
              md: "column",
              sm: "column",
              xs: "column",
            },
            width: "100%",
            justifyContent: "space-between",
            display: `${slideId == slide.id ? "flex" : "none"}`,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { lg: "flex-start", md: "center" },
              width: {
                xl: "50%",
                lg: "50%",
                md: "100%",
                sm: "100%",
                xs: "100%",
              },
              minWidth: "50%",
              mb: { lg: 0, md: 0, sm: 4, xs: 4 },
            }}
          >
            <Typography
              sx={{
                fontSize: "50px",
                fontWeight: "700",
                whiteSpace: "wrap",
                color: "#c5c5c5",
                fontFamily: "poppins, san-serif",
                textTransform: "uppercase",
                lineHeight: "1.3",
                mb: 2,
              }}
            >
              {slide.title}
            </Typography>
            <Typography sx={{ color: "#c5c5c5", whiteSpace: "wrap" }}>
              {slide.info}
            </Typography>
            <Button
              variant="contained"
              color="error"
              sx={{ pt: 2, pb: 2, mt: 4 }}
            >
              Learn More
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                lg: "space-around",
                md: "center",
                sm: "center",
                xs: "center",
              },
              height: "inherit",
              backgroundColor: "#5c5c5c",
              flex: "50%",
            }}
          >
            <img
              src={slide.image}
              alt="product"
              style={{ height: "auto", width: "50%" }}
            />
          </Box>
        </div>
      ))}
    </div>
  );
};
export default Slider;
