import React, { useState, useRef, useEffect } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { SlideItems } from "../../helpers/SlideItems";
import {
  iconContainerStyle,
  leftIconContainer,
  rightIconContainer,
  slideStyle,
  imageTitleStyle,
  imageTypeStyle,
} from "./style";

const delay = 2000;
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
    <Stack direction="row">
      <Box sx={{ ...iconContainerStyle, ...leftIconContainer }}>
        <ChevronLeft onClick={prevSlide} />
      </Box>
      {SlideItems.map((slide) => {
        return (
          <Box
            key={slide.id}
            sx={{
              ...slideStyle,
              display: slide.id == slideId ? "flex" : "none",
              backgroundImage: `url(${slide.bg})`,
            }}
          >
            <Typography sx={imageTitleStyle}>{slide.title}</Typography>
            <Typography variant="span" sx={imageTypeStyle}>
              {slide.info}
            </Typography>
          </Box>
        );
      })}
      <Box sx={{ ...iconContainerStyle, ...rightIconContainer }}>
        <ChevronRight onClick={nextSlide} />
      </Box>
    </Stack>
  );
};
export default Slider;
