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
  cardContainer,
  cardImgContainer,
  cardBtnContainer,
  cardButton,
} from "./style";
import Classes from "./ProductCard.module.css";

const ProductCard = () => {
  const theme = useTheme();
  const CardContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    justifySelf: "center",
    margin: "4rem 0",
  }));

  return (
    <>
      <Stack
        sx={cardSection}
        direction={{ lg: "row", md: "row", sm: "column" }}
      >
        {cardItems.map((cardDetails) => {
          return (
            <>
              {/* <Paper elevation={8} key={cardDetails.id}> */}
              <Stack direction="column" sx={cardContainer}>
                <Stack direction="column" sx={cardImgContainer}>
                  <img
                    src={cardDetails.image}
                    alt={cardDetails.text}
                    className={Classes.card__img}
                  />
                  <Link to={cardDetails.link} className={Classes.show}>
                    View More
                  </Link>
                </Stack>

                <Box sx={cardBtnContainer}>
                  <Link style={cardButton} to={cardDetails.link}>
                    {cardDetails.button}
                  </Link>
                </Box>
              </Stack>
              {/* </Paper> */}
            </>
          );
        })}
      </Stack>
    </>
  );
};
export default ProductCard;
