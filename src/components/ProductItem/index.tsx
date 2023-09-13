import { currencyFormatter } from "../../helpers/currency";
import { Product } from "../../types/Product";
import * as Styles from "./styles";
import { MdAddShoppingCart } from "react-icons/md";

type Props = {
  product: Product;
};

export const ProductItem = ({ product }: Props) => {
  return (
    <Styles.Product>
      <Styles.Cover>
        <Styles.Image src={product.imageURL} alt={product.name} />
        <Styles.AddButton>
          <MdAddShoppingCart size={32} />
        </Styles.AddButton>
      </Styles.Cover>
      <Styles.Details>
        <Styles.Name>{product.name}</Styles.Name>
        <Styles.Price>
          {currencyFormatter("US", "USD", product.price)}
        </Styles.Price>
      </Styles.Details>
    </Styles.Product>
  );
};
