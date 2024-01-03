import { useState } from "react";
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
  cardRow,
  cardSection,
} from "./style";

const ProductCard = () => {
  const [hoverState, setHoverState] = useState({ id: 0, isHover: false });

  const showTexteHandler = (id) => {
    setHoverState({ id: id, isHover: true });
  };
  const hideTextHandler = (id) => {
    setHoverState({ id: id, isHover: false });
  };

  return (
    <Stack sx={cardSection}>
      <Stack flexDirection={{ lg: "row", md: "row", sm: "row" }} sx={cardRow}>
        {cardItems.map((cardDetails) => {
          return (
            <Stack
              direction="row"
              mb={4}
              key={cardDetails.id}
              sx={cardContainer}
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
                    // color="primary"
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
    </Stack>
  );
};
export default ProductCard;
