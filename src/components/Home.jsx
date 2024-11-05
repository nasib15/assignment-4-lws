import CartProvider from "../providers/CartProvider";
import ArrivalSection from "./ArrivalSection/ArrivalSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CartProvider>
        <ArrivalSection />
      </CartProvider>
      <Footer />
    </>
  );
};
export default Home;
