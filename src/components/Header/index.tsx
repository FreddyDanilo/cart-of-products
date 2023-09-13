import * as Styles from "./styles";

type Props = {
  handleShowCart: () => void;
};

export const Header = ({ handleShowCart }: Props) => {
  return (
    <Styles.Header>
      <Styles.Container>
        <Styles.Brand>CART</Styles.Brand>
        <Styles.Menu>
          <button onClick={handleShowCart}>Cart</button>
        </Styles.Menu>
      </Styles.Container>
    </Styles.Header>
  );
};
