import About from "../section/About";
import Banner from "../section/banner/Banner";
import ElectronicsProducts from "../section/ElectronicsProducts";
import Features from "../section/Features";
import Newsletter from "../section/Newsletter";

const Home = () => {
  return (
    <>
      <Banner />
      <Features />
      <About />
      <ElectronicsProducts />
      <Newsletter />
    </>
  );
};

export default Home;
