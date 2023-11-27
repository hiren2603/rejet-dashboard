import React, { useState, useRef, useEffect } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { SlideItems } from "@/helpers/SlideItems";
import { slideTextStyle, slideTitle, slideTag, slideDetails, overlayStyle, iconContainerStyle, rightIconContainer, leftIconContainer } from "./style";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const delay = 30000;
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
    <Stack direction="row" sx={{ position: "relative" }}>
       <Box sx={overlayStyle}></Box>
       <Box sx={{ ...iconContainerStyle, ...leftIconContainer }}>
        <ChevronLeft onClick={prevSlide} />
      </Box>
      {
        SlideItems.map((slide)=>{
          return(
            <React.Fragment key={slide.id}>
              <video autoPlay loop muted style={{width: "100%", objectFit: 'cover', display: slide.id == slideId ? "flex" : "none"}}>
                <source src={slide.video} type="video/mp4" />
              </video>
              <Box key={slide.id} sx={{...slideTextStyle, display: slide.id == slideId ? "flex" : "none"}}>
                <Typography variant="h3" sx={slideTitle} color="white">{slide.title}</Typography>
                <Typography variant="h4" sx={slideTag}>{slide.tagline}</Typography>
                <Typography variant="h4" sx={slideDetails}>{slide.info}</Typography>
              </Box>
            </React.Fragment> 
          )
        })
      }
      <Box sx={{ ...iconContainerStyle, ...rightIconContainer }}>
        <ChevronRight onClick={nextSlide} />
      </Box>
    </Stack>
  );
};
export default Slider;
