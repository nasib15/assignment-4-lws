import CartProvider from "../providers/CartProvider";
import SearchProvider from "../providers/SearchProvider";
import ArrivalSection from "./ArrivalSection/ArrivalSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SearchProvider>
        <CartProvider>
          <ArrivalSection />
        </CartProvider>
      </SearchProvider>
      <Footer />
    </>
  );
};
export default Home;
