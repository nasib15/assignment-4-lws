import { useState } from "react";
import { CartContext } from "../contexts";

const CartProvider = ({ children }) => {
  const [cartsData, setCartsData] = useState([]);
  return (
    <>
      <CartContext.Provider value={{ cartsData, setCartsData }}>
        {children}
      </CartContext.Provider>
    </>
  );
};
export default CartProvider;
