import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Home />
      <ToastContainer pauseOnFocusLoss={false} limit={3} />
    </>
  );
}

export default App;
