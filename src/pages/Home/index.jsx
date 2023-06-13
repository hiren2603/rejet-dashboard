import React from "react";
import Slider from "@/components/Slider";
import ProductCard from "@/components/ProductCard";
import Info from "@/components/Info";
import Brands from "@/components/Brands";
import Form from "@/components/Form";

const Home = () => {
  return (
    <>
      <Slider />
      <ProductCard />
      <Info />
      <Brands />
      <Form />
    </>
  );
};

export default Home;
