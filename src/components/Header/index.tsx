import * as Styles from "./styles";

export const Header = () => {
  return (
    <Styles.Header>
      <Styles.Container>
        <Styles.Brand>CART</Styles.Brand>
        <Styles.Menu>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </Styles.Menu>
      </Styles.Container>
    </Styles.Header>
  );
};
