// import './App.css';
// import {Routes, Route} from "react-route-dom"
// import {Products} from "./components/pages/Products"
// import {MyCart} from "./components/pages/MyCart"
// function App() {
//   return (
//     <div className="App">
//   <h1>Hello World</h1>

//   <Routes>
//   <Route path="/" element={<Products />}/>
//   <Route path="/about" element={<MyCart/>} />
//   </Routes>
//     </div>
//   );
// }

// export default App;

import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Products from "./components/pages/Products";
import MyCart from "./components/pages/MyCart";
import MyOrders from "./components/pages/MyOrders";
import styled from "styled-components";
function App() {
  return (
    <header>
      <Div>
        <Main>
          <h1>LOGO</h1>
          <nav>
            <ul>
              <li>
                <Link to="products">Products</Link>
              </li>
              <li>
                <Link to="cart">My Cart</Link>
              </li>
              <li>
                <Link to="orders">My Orders</Link>
              </li>
            </ul>
          </nav>
        </Main>
      </Div>
      <Routes>
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<MyCart />} />
        <Route path="orders" element={<MyOrders />} />
      </Routes>
    </header>
  );
}

export default App;

const Div = styled.div`
  background-color: #0596a9;
  width: 96%;
  padding: 25px;
  nav {
    width: 70%;
    /* margin-left:0px; */
  }
`;

const Main = styled.main`
  display: flex;
  list-style: none;
  color: white;
  font-size: 20px;
  justify-content: space-around;
  ul {
    display: flex;
    list-style: none;
    align-items: center;
    width: 400px;
    justify-content: space-between;
  }
  li {
    cursor: pointer;
    color: white;
    font-size: 25px;
    font-family: cursive;
    justify-content: space-around;
  }
`;
