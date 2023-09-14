import { currencyFormatter } from "../../helpers/currency";
import { Product } from "../../types/Product";
import * as Styles from "./styles";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/products/productsSlice";

type Props = {
  product: Product;
};

export const ProductItem = ({ product }: Props) => {
  const { name, imageURL, price } = product;
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(addProduct(product));
  };

  return (
    <Styles.Product onClick={handleAddProduct}>
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
