import { useEffect, useRef, useState } from "react";
import { brands } from "../../helpers/clientsData";
import { Typography, Divider, Stack, Box } from "@mui/material";
import {
  brandsSectionContainer,
  brandsTitle,
  slideShow,
  slideShowSlider,
  slideImgContainer,
  BrandImage,
} from "./style";

const delay = 2500;
const length = 15;
const Brands = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) => (prevIndex === length - 4 ? 0 : prevIndex + 1)),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <Stack sx={brandsSectionContainer}>
      <Stack marginTop={"4rem"}>
        <Typography sx={brandsTitle}>Our Clients</Typography>
      </Stack>
      <Divider />

      <Box sx={slideShow}>
        <Box
          sx={{
            ...slideShowSlider,
            transform: `translateX(${-index * 210}px)`,
          }}
        >
          {brands?.map((brand, index) => (
            <Box key={index} sx={slideImgContainer}>
              <BrandImage src={brand} alt="clients" />
            </Box>
          ))}
        </Box>
      </Box>
    </Stack>
  );
};
export default Brands;
