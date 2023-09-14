import { useDispatch } from "react-redux";
import { currencyFormatter } from "../../helpers/currency";
import { ProductCart } from "../../types/Product";
import * as Styles from "./styles";
import {
  descreaseProduct,
  increaseProduct,
} from "../../redux/products/productsSlice";

type Props = {
  product: ProductCart;
};

export const ProductInCart = ({ product }: Props) => {
  const { name, imageURL, price, quantity } = product;
  const dispatch = useDispatch();

  const handleIncreaseProduct = () => {
    dispatch(increaseProduct(product.id));
  };

  const handleDecreaseProduct = () => {
    dispatch(descreaseProduct(product.id));
  };

  return (
    <Styles.Product>
      <Styles.Cover>
        <Styles.Image src={imageURL} alt={name} />
      </Styles.Cover>

      <Styles.Details>
        <Styles.Name>{name}</Styles.Name>
        <Styles.Price>{currencyFormatter("US", "USD", price)}</Styles.Price>
        <Styles.Buttons>
          <Styles.Button onClick={handleDecreaseProduct}>-</Styles.Button>
          <Styles.Quantity>{quantity}</Styles.Quantity>
          <Styles.Button onClick={handleIncreaseProduct}>+</Styles.Button>
        </Styles.Buttons>
      </Styles.Details>
    </Styles.Product>
  );
};
