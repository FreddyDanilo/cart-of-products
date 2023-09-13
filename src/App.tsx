import * as Styles from "./App.styles";
import { Header } from "./components/Header";
import { Body } from "./components/Body";

export const App = () => {
  return (
    <Styles.App>
      <Header />
      <Body />
    </Styles.App>
  );
};
