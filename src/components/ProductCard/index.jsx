import {
  Box,
  useTheme,
  styled,
  Paper,
  Stack,
  useMediaQuery,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import { cardItems } from "../../helpers/cardItems";
import {
  cardSection,
  cardRow,
  cardContainer,
  cardImgContainer,
  cardBtnContainer,
} from "./style";
import Classes from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <>
      <Stack flexDirection="row" sx={cardSection}>
        <Stack
          flexDirection={{ lg: "row", md: "row", sm: "column" }}
          sx={cardRow}
        >
          {cardItems?.map((cardDetails) => {
            return (
              <>
                <Stack
                  direction="column"
                  key={cardDetails.id}
                  sx={cardContainer}
                >
                  <Stack sx={cardImgContainer}>
                    <img
                      className={Classes.card__img}
                      src={cardDetails.image}
                      alt="item"
                    />
                    <Link to={cardDetails.link} className={Classes.show}>
                      View More
                    </Link>
                  </Stack>

                  <Stack sx={cardBtnContainer}>
                    <Link
                      to={cardDetails.link}
                      className={Classes.card__button}
                    >
                      {cardDetails.button}
                    </Link>
                  </Stack>
                </Stack>
              </>
            );
          })}
        </Stack>
      </Stack>
    </>
  );
};
export default ProductCard;
