import React from "react";
import styled from "styled-components";
import LoginBG from "../../assets/images/login-bg.jpg";
import { mobile } from "../../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${LoginBG});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  margin: 10px 0px;
  padding: 20px;
  min-width: 40%;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  background-color: teal;
  color: white;
  border: none;
  padding: 15px 20px;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  cursor: pointer;
  text-decoration: underline;
  margin: 5px 0px;
  font-size: 12px;
`;

export const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>Login</Button>
          <Link>Forgot Password?</Link>
          <Link>Create new account.</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};
