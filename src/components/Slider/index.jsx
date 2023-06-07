import { useState, useRef, useEffect } from "react";
import { slideItems } from "../../helpers/slideItems";
import { Box, useTheme } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { sliderWrapper } from "./style";

const delay = 2500;
const Slider = () => {
  const length = 2;
  const theme = useTheme();
  const [slideIdx, setSlideIdx] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(
      () =>
        setSlideIdx((prevSlideIdx) =>
          prevSlideIdx === length ? 0 : prevSlideIdx + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [slideIdx, length]);

  const nextSlide = () => {
    if (slideIdx === length) {
      setSlideIdx(0);
    } else {
      setSlideIdx(slideIdx + 1);
    }
  };
  const prevSlide = () => {
    if (slideIdx === 0) {
      setSlideIdx(length);
    } else {
      setSlideIdx(slideIdx - 1);
    }
  };
  return (
    <>
      <Box sx={sliderWrapper}>
        <Box onClick={prevSlide}>
          <ChevronLeft />
        </Box>
        {slideItems.map((slide) => {
          <>
            <Box
              key={slide.id}
              sx={{ backgroundImage: `url(${slide.bg})` }}
            ></Box>
          </>;
        })}
        <Box onClick={nextSlide}>
          <ChevronRight />
        </Box>
      </Box>
    </>
  );
};
export default Slider;
