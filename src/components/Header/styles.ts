import styled from "styled-components";

export const Header = styled.div`
  background-color: #141e2a;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const Container = styled.div`
  width: min(100%, 1920px);
  margin: 0 auto;
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Brand = styled.div`
  font-size: 32px;
  color: #f4faff;
  font-weight: 300;
`;

export const Menu = styled.div`
  button {
    all: unset;
    color: #f4faff;
    font-size: 16px;
    cursor: pointer;
  }
`;
