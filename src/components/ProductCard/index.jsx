import { useState } from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { cardItems } from "@/helpers/cardItems";
import {
  CardImageComponent,
  cardBtnContainer,
  cardButtonStyle,
  cardContainer,
  cardImgContainer,
  cardRow,
  cardSection,
  hideMoreText,
  showMoreText,
} from "./style";

const ProductCard = () => {
  const [hoverState, setHoverState] = useState({ id: 0, isHover: false });

  const showTexteHandler = (id) => {
    console.log(id);
    setHoverState({ id: id, isHover: true });
  };
  const hideTextHandler = (id) => {
    console.log(id);
    setHoverState({ id: id, isHover: false });
  };

  return (
    <Stack sx={cardSection}>
      <Stack flexDirection={{ lg: "row", md: "row", sm: "row" }} sx={cardRow}>
        {cardItems.map((cardDetails) => {
          return (
            <Stack
              direction="column"
              mb={4}
              key={cardDetails.id}
              sx={cardContainer}
              onMouseOver={() => showTexteHandler(cardDetails.id)}
              onMouseLeave={() => hideTextHandler(cardDetails.id)}
            >
              <Stack sx={cardImgContainer}>
                <CardImageComponent src={cardDetails.image} alt="item" />
                <Link
                  to={cardDetails.link}
                  style={
                    hoverState.isHover && hoverState.id == cardDetails.id
                      ? showMoreText
                      : hideMoreText
                  }
                >
                  View More
                </Link>
              </Stack>

              <Stack sx={cardBtnContainer}>
                <Link to={cardDetails.link} style={cardButtonStyle}>
                  {cardDetails.button}
                </Link>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};
export default ProductCard;
