import React from "react";
import Slider from "@/components/Slider";
import ProductCard from "@/components/ProductCard";
import Info from "@/components/Info";
import Brands from "@/components/Brands";
import Form from "@/components/Form";
import Head from "@/components/Head";

const Home = () => {
  return (
    <>
      <Head title="Home" description="Radhe Enterprise Home Page" />
      <Slider />
      <ProductCard />
      <Info />
      <Brands />
      <Form />
    </>
  );
};

export default Home;
