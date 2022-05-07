import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0:
  left: 0;
  opacity: 0;
  background-color: rgb(0,0,0,0.2);
  z-index: 3;
  transition: all 0.5s ease;
  cursor: pointer;
  `;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 320px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &: hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 62%;
  z-index: 2;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
export const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};
