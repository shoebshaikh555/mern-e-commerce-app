import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 60vh;
  background-color: #fcf5f5;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 40px;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  padding-left: 20px;
  flex: 8;
`;
const Button = styled.button`
  border: none;
  flex: 1;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
export const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products </Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};
