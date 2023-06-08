import React from "react";
import Slider from "../../components/Slider";
import { Grid } from "@mui/material";
import ProductCard from "../../components/ProductCard";
import Info from "../../components/Info";
import Brands from "../../components/Brands";

const Home = () => {
  return (
    <>
      <Slider />
      <ProductCard />
      <Info />
      {/* <Brands /> */}
    </>
  );
};

export default Home;
