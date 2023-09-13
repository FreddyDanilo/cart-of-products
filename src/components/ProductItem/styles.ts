import styled from "styled-components";

export const Product = styled.div`
  border-radius: 8px;
  /* background-color: rgb(240, 240, 240); */
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  border: 1px solid rgb(240, 240, 240);
  overflow: hidden;
`;

export const Cover = styled.div`
  width: 100%;
  aspect-ratio: 9/10;
  overflow: hidden;
  position: relative;

  &:hover img {
    transform: scale(1.1);
    filter: blur(1px);
  }

  &:hover button {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.25s;
`;

export const AddButton = styled.button`
  all: unset;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: 0.25s;
  font-size: 22px;
  color: rgb(250, 250, 250);
  cursor: pointer;
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
`;

export const Name = styled.h2`
  font-size: 16px;
  color: rgb(60, 60, 60);
  padding-inline: 8px;
`;

export const Price = styled.span`
  font-size: 26px;
  color: rgb(20, 20, 20);
  padding-inline: 8px;
  padding-bottom: 8px;
`;
