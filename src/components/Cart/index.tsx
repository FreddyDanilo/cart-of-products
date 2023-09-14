import { useSelector } from "react-redux";
import { ProductInCart } from "../ProductInCart";
import * as Styles from "./styles";
import { MouseEvent } from "react";
import { ProductCart } from "../../types/Product";

type Props = { handleShowCart: () => void };

export const Cart = ({ handleShowCart }: Props) => {
  const products = useSelector((state: any) => state.products.products);

  const handleClick = (e: MouseEvent) => e.stopPropagation();

  return (
    <Styles.Container onClick={handleShowCart}>
      <Styles.Cart onClick={handleClick}>
        {products &&
          products.map((product: ProductCart) => (
            <ProductInCart product={product} key={product.id} />
          ))}
      </Styles.Cart>
      <Styles.CloseCart>X</Styles.CloseCart>
    </Styles.Container>
  );
};
