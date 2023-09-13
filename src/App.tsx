import * as Styles from "./App.styles";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Cart } from "./components/Cart";
import { useState } from "react";

export const App = () => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const handleShowCart = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <Styles.App>
      <Header handleShowCart={handleShowCart} />
      {showCart && <Cart />}
      <Body />
    </Styles.App>
  );
};
