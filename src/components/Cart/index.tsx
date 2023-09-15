import { useSelector } from "react-redux";
import { ProductInCart } from "../ProductInCart";
import * as Styles from "./styles";
import { MouseEvent } from "react";
import { ProductCart } from "../../types/Product";
import { selectProductsTotalPrice } from "../../redux/products/products.selector";
import { currencyFormatter } from "../../helpers/currency";

type Props = { handleShowCart: () => void };

export const Cart = ({ handleShowCart }: Props) => {
  const products = useSelector((state: any) => state.products.products);

  const handleClick = (e: MouseEvent) => e.stopPropagation();

  return (
    <Styles.Container onClick={handleShowCart}>
      <Styles.Cart onClick={handleClick}>
        <h2>
          Total - {currencyFormatter("US", "USD", selectProductsTotalPrice())}
        </h2>
        {products &&
          products.map((product: ProductCart) => (
            <ProductInCart product={product} key={product.id} />
          ))}
      </Styles.Cart>
      <Styles.CloseCart>X</Styles.CloseCart>
    </Styles.Container>
  );
};
