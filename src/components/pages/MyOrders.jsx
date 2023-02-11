import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const MyOrders = () => {
  const navigate = useNavigate();
  const exitHandler = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Main>My Orders page bla bla bla</Main>
      <Button onClick={exitHandler}>Go Back !</Button>
    </Container>
  );
};

export default MyOrders;

const Container = styled.div`
  margin: 60px 90px;
  background-color: #4389c7;
  margin-left: 00px;
  margin: 0 auto;
  margin-top: 20px;
  align-items: center;

  display: flex;
  width: 990px;
  padding: 20px;
`;
const Main = styled.main`
  background-color: #ba8f2d;
  padding: 60px 50px;
  margin-bottom: 30px;
  border-radius: 25px;
`;
const Button = styled.button`
  padding: 20px 30px;
  background-color: #19ae9f;
  border: none;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;
