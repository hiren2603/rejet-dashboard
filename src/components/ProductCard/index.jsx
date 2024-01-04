import { useState, useEffect, useRef } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { cardItems } from "@/helpers/cardItems";
import {
  cardInfoContainer,
  CardImageComponent,
  cardBtnContainer,
  cardDetail,
  cardTitle,
  cardButtonStyle,
  cardContainer,
  cardImgContainer,
  cardSection,
} from "./style";

const delay = 1000;
const ProductCard = () => {
  const length = cardItems.length;
  const [slideId, setSlideId] = useState(1);
  const timeoutRef = useRef(null);

  // Timing Function
  function resetTimeout() {
    if (timeoutRef.current) {
      console.log("reseting timeout....");
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    console.log(slideId);
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
    <Stack sx={cardSection}>
      {cardItems.map((cardDetails) => {
        return (
          <Stack
            direction="row"
            mb={4}
            key={cardDetails.id}
            sx={{
              ...cardContainer,
              display: `${slideId == cardDetails.id}` ? "flex" : "none",
            }}
          >
            <Stack sx={cardImgContainer}>
              <CardImageComponent src={cardDetails.image} alt="card image" />
            </Stack>
            <Stack sx={cardInfoContainer}>
              <Typography variant="h4" sx={cardTitle}>
                {cardDetails.slideTitle}
              </Typography>
              <Typography variant="p" sx={cardDetail}>
                {cardDetails.slideContent}
              </Typography>
              <Stack sx={cardBtnContainer}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    width: "30%",
                    height: "100%",
                    textDecoration: "none",
                    color: "#ffffff",
                    background: "#EA232E",
                    "&:hover": {
                      background: "#EA232E",
                    },
                  }}
                >
                  <Link style={{ color: "#ffffff" }} to={cardDetails.link}>
                    {cardDetails.button}
                  </Link>
                </Button>
              </Stack>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};
export default ProductCard;
