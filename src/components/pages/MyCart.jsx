import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const MyCart = () => {
  const navigate = useNavigate ()
    const exitHandler = () => {
      navigate(-1);
    };


  return (
    <Container>
      <Main>My Cart page bla bla bla</Main>
      <Button onClick={exitHandler}>Go Back !</Button>
    </Container>
  );
};

export default MyCart;

const Container = styled.div`
   margin: 60px 90px;
  background-color: grey;
  margin-left: 00px; 
  margin: 0 auto;
  margin-top: 20px;
  align-items: center;
  /* background-color: white; */
  display: flex;
  /* justify-content: center; */
  width: 990px;
  padding: 20px;
`;
const Main = styled.main`
  background-color: #9d80e1;
  width: 20%;
  height: 30px;
  padding: 30px 50px;
  margin-bottom: 30px;
  border-radius:25px;
`;
const Button = styled.button`
  text-align: center;
  padding: 20px 30px;
  background-color: #19ae9f;
  border: none;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;