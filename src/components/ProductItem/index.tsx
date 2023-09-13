import { currencyFormatter } from "../../helpers/currency";
import { Product } from "../../types/Product";
import * as Styles from "./styles";
import { MdAddShoppingCart } from "react-icons/md";

type Props = {
  product: Product;
};

export const ProductItem = ({ product }: Props) => {
  const { name, imageURL, price } = product;

  return (
    <Styles.Product>
      <Styles.Cover>
        <Styles.Image src={imageURL} alt={name} />

        <Styles.AddButton>
          <MdAddShoppingCart size={32} />
        </Styles.AddButton>
      </Styles.Cover>

      <Styles.Details>
        <Styles.Name>{name}</Styles.Name>
        <Styles.Price>{currencyFormatter("US", "USD", price)}</Styles.Price>
      </Styles.Details>
    </Styles.Product>
  );
};
