import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import Info from "@/components/Info";
import Form from "@/components/Form";
import Head from "@/components/Head";
import Slider from "@/components/Slider";

const Home = () => {
  return (
    <>
      <Head title="Home" description="Radhe Enterprise Home Page" />
      <HeroSection />
      <ProductCard />
      <Info />
      <Form />
    </>
  );
};

export default Home;
