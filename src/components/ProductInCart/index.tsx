import { currencyFormatter } from "../../helpers/currency";
import { ProductCart } from "../../types/Product";
import * as Styles from "./styles";

type Props = {
  product: ProductCart;
};

export const ProductInCart = ({ product }: Props) => {
  const { name, imageURL, price, quantity } = product;

  return (
    <Styles.Product>
      <Styles.Cover>
        <Styles.Image src={imageURL} alt={name} />
      </Styles.Cover>

      <Styles.Details>
        <Styles.Name>{name}</Styles.Name>
        <Styles.Price>{currencyFormatter("US", "USD", price)}</Styles.Price>
        <Styles.Buttons>
          <Styles.Button>-</Styles.Button>
          <Styles.Quantity>{quantity}</Styles.Quantity>
          <Styles.Button>+</Styles.Button>
        </Styles.Buttons>
      </Styles.Details>
    </Styles.Product>
  );
};
