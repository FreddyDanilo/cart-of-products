import styled from "styled-components";

export const Body = styled.div``;

export const Container = styled.div`
  width: min(100%, 1920px);
  margin: 0 auto;
  padding: 16px;
`;

export const Products = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;
