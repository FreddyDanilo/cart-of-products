import styled from "styled-components";

export const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 8px;
  overflow: hidden;
  min-height: 152px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgb(240, 240, 240);

  &:last-child {
    border-bottom: none;
  }
`;

export const Cover = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  aspect-ratio: 9/10;
  overflow: hidden;
  grid-column: 2 span;
  border-radius: 4px;

  &:hover img {
    transform: scale(1.1);
    filter: blur(1px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.25s;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  grid-column: 6 span;
  padding-left: 8px;
`;

export const Name = styled.h2`
  font-size: 16px;
  color: rgb(60, 60, 60);
`;

export const Price = styled.span`
  font-size: 26px;
  color: rgb(20, 20, 20);
`;

export const Buttons = styled.span`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const Button = styled.button`
  all: unset;
  font-size: 22px;
  color: rgb(120, 120, 120);
  cursor: pointer;
`;

export const Quantity = styled.span`
  width: 24px;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  color: rgb(20, 20, 20);
`;
