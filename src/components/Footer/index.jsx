import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import payment from "../../assets/images/payment.png";
import { mobile } from "../../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Payment = styled.img`
  width: 50%;
`;
export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Apparel 360</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          quia cupiditate maiores. Voluptates quod nisi veritatis maiores
          reiciendis officia iure quas quo. Et assumenda eveniet sed voluptas
          praesentium. Alias eos reiciendis officia magni eum. Nulla at sint
          ullam fugit reiciendis sapiente eveniet ea, natus ipsa, iusto quod
          incidunt quibusdam quae.
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Mens Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accesories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contac Us</Title>
        <ContactItem>
          <Room style={{ marginRight: 10 }} /> 1040 Shermer Rd, Northbrook,
          Mumbai, 400007
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: 10 }} />
          +91 9851742457
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: 10 }} />
          apparel360@shop.com
        </ContactItem>
        <Payment src={payment} />
      </Right>
    </Container>
  );
};
