import { useEffect, useRef, useState } from "react";
import { brands } from "../../helpers/clientsData";
import { Grid, Typography, Divider, Stack, Box } from "@mui/material";
import {
  brandsSectionContainer,
  brandsTitle,
  slideShow,
  slideShowSlider,
  slideImgContainer,
} from "./style";
import classes from "./Brands.module.css";

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
    <>
      <Stack
        direction="column"
        alignItems={"center"}
        justifyContent={"center"}
        justifySelf={"center"}
        sx={brandsSectionContainer}
      >
        <Stack
          flexDirection={"column"}
          justifyContent="center"
          alignItems={"center"}
          marginTop={"4rem"}
        >
          <Typography sx={brandsTitle}>Our Clients</Typography>
          <Divider />
        </Stack>

        <Box sx={slideShow}>
          <Box
            sx={{
              ...slideShowSlider,
              transform: `translateX(${-index * 210}px)`,
            }}
          >
            {brands?.map((brand, index) => (
              <>
                <Box key={index} sx={slideImgContainer}>
                  <img src={brand} alt="clients" className={classes.slide} />
                </Box>
              </>
            ))}
          </Box>
        </Box>
      </Stack>
      {/* <Grid container alignItems="center" justifyContent="center">
        <Grid item lg={3} alignItems="center" justifyContent="center">
          <Typography>Our Clients</Typography>
          <Divider />
        </Grid>

        <Grid item container>
          <Grid
            item
            container
            sx={{ transform: `translateX(${-index * 210}px` }}
          >
            {brands?.map((brands, index) => (
              <Grid item>
                <img src={brands} alt="clients" />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid> */}
    </>
  );
};
export default Brands;
