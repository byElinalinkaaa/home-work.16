import React from "react";
import styled from "styled-components";
import { useNavigate , useParams } from "react-router-dom";
const total = [
  {
    id: 1,
    title: "Poduct Name 1",
  },
  {
    id: 2,
    title: "Poduct Name 2",
  },
  {
    id: 3,
    title: "Product Name 3",
  },
];

const Product = () => {
  const navigate = useNavigate();
  const param = useParams()
  const exitHandler = ({exithandler}) => {
    navigate(-1);
    param("")
    // useParams("");
  };
  return (
    <>
      <div>
        <Container>
          {total.map((item) => (
            <Main key={item.id}>
              {" "}
              <StyleUl>
                <h2> {item.title}</h2>
              </StyleUl>
              <StyleLink to={`/poducts/${item.id}/pageDetails`} onClick={exitHandler}>
                Detail
              </StyleLink>
            </Main>
          ))}
          <Button onClick={exitHandler}>Go back  </Button>
        </Container>
      </div>
    </>
  );
};

export default Product;

const StyleUl = styled.ul`
  background-color: #a62695;
  border-radius:20px;
  width: 780px;
  height: 80px;
`;
const Container = styled.ul`
  margin-left: 200px;
  margin-right: 40px;
  margin-top: 80px;
  width: 60%;
`;
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  margin-top: 50px;
  height: 80px;
  padding: 20px 50px;
  li {
    list-style: none;
    text-align: center;
    font-size: 25px;
  }
`;

const StyleLink = styled.li`
  padding: 15px 30px;
  text-decoration: none;
  background-color: #d92dd1;
  color: white;
  border-radius: 30px;
`;
const Button = styled.div`
  text-decoration: none;
  padding: 10px 25px;
  background-color: #19ae9f;
  border-radius: 20px;
  border: 0px solid;
  color: white;
  font-size: 23px;
  font-weight: bold;
`;
