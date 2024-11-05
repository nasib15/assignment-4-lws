import { useContext } from "react";
import { CartContext } from "../contexts";

const useCartsData = () => {
  const { cartsData, setCartsData } = useContext(CartContext);
  return { cartsData, setCartsData };
};

export default useCartsData;
