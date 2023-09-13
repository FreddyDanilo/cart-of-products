import { products } from "../../data/products";
import { ProductItem } from "../ProductItem";
import * as Styles from "./styles";

export const Body = () => {
  return (
    <Styles.Body>
      <Styles.Container>
        <Styles.Products>
          {products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </Styles.Products>
      </Styles.Container>
    </Styles.Body>
  );
};
