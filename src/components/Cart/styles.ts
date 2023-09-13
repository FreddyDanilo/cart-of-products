import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 1;
  backdrop-filter: blur(5px);
`;

export const Cart = styled.div`
  width: min(90%, 480px);
  height: 100%;
  background-color: rgb(250, 250, 250);
  box-shadow: 5px 0 15px rgb(0, 0, 0, 0.1);
`;
