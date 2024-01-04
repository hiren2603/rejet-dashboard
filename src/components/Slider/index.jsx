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

  const nextSlide = () => {
    if (slideId === length) {
      setSlideId(1);
      console.log(slideId);
    } else {
      setSlideId(slideId + 1);
    }
  };
  const prevSlide = () => {
    if (slideId === 1) {
      console.log(slideId);
      setSlideId(length);
    } else {
      setSlideId(slideId - 1);
    }
  };

  return (
    <Stack
      direction="row"
      sx={{
        border: "2px solid red",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "60vh",
        overflow: "scroll",
        overflowY: "hidden",
        width: "80vw",
        m: "auto",
        mt: 5,
        mb: 5,
      }}
    >
      <Box
        sx={{
          flex: "100%",
          display: "flex",
          width: "inherit",
          justifyContent: "space-between",
          color: "#ffffff",
        }}
      >
        {SlideItems.map((slide) => (
          <Slide slide={slide} key={slide.id} />
        ))}
      </Box>
    </Stack>
  );
};
export default Slider;
