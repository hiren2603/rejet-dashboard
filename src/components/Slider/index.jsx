import React, { useState, useRef, useEffect } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SlideItems } from "@/helpers/SlideItems";
import Slide from "./Slide";

const delay = 8000;
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
        <Slide key={slide.id} slide={slide} slideId={slideId} />
      ))}
    </div>
  );
};
export default Slider;
