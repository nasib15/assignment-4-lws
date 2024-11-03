import { ToastContainer } from "react-toastify";
import ArrivalSection from "./components/ArrivalSection/ArrivalSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ArrivalSection />
      <Footer />
      <ToastContainer pauseOnFocusLoss={false} limit={3} />
    </>
  );
}

export default App;
