import React, { useState, useRef, useEffect } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SlideItems } from "@/helpers/SlideItems";
import { AnimatePresence, motion } from "framer-motion";

// animation start //

const variant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

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
        <motion.div
          variants={variant}
          transition={{ duration: 6, delay: 0.1 }}
          exit={{ opacity: 0 }}
          animate={slideId == slide.id ? "visible" : "hidden"}
          key={slide.id}
          style={{
            flexWrap: "wrap",
            flexDirection: {
              lg: "row",
              md: "row",
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
              alignItems: {
                xl: "flex-start",
                lg: "flex-start",
                md: "center",
              },
              order: { lg: 1, sm: 2, xs: 2 },
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
                fontSize: {
                  lg: "50px",
                  md: "50px",
                  sm: "40px",
                  xs: "30px",
                },
                fontWeight: "700",
                whiteSpace: "wrap",
                color: "#ffffff",
                fontFamily: "poppins, sans-serif",
                textTransform: "uppercase",
                lineHeight: "1.3",
                mb: 2,
              }}
            >
              {slide.title}
            </Typography>
            <Typography
              // component={motion.p}
              sx={{
                color: "#ffffff",
                whiteSpace: "wrap",
                fontFamily: "poppins, sans-serif",
              }}
            >
              {slide.info}
            </Typography>
            <Button
              component={Link}
              to={slide.link}
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
                lg: "flex-end",
                md: "center",
                sm: "center",
                xs: "center",
              },
              height: "inherit",
              order: { lg: 1, sm: 1, xs: 1 },
              mb: { xl: 0, lg: 0, md: 2, sm: 4, xs: 4 },
              // backgroundColor: "#5c5c5c",
              flex: "50%",
            }}
          >
            <Box
              component="img"
              src={slide.image}
              alt="product"
              sx={{
                height: "auto",
                width: { lg: "60%", md: "60%", sm: "60%", xs: "80%" },
                objectFit: "cover",
              }}
            />
          </Box>
        </motion.div>
      ))}
    </div>
  );
};
export default Slider;
