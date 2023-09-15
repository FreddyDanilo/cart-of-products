import { useSelector } from "react-redux/es/hooks/useSelector";
import { ProductCart } from "../../types/Product";

export const selectProductsTotalPrice = (): number => {
  const products = useSelector((state: any) => state.products.products);
  const total = products.reduce(
    (acc: number, curr: ProductCart) => acc + curr.quantity * curr.price,
    0
  );
  return total;
};

export const selectProductsCount = () => {
  const products = useSelector((state: any) => state.products.products);
  const total = products.reduce(
    (acc: number, curr: ProductCart) => acc + curr.quantity,
    0
  );

  return total;
};
