import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import { db } from "./Components/Home/Firebase";
import Login from "./Components/Login/Login";

function App() {
  const [cart, setCart] = useState([]);

  const getCartItems = () => {
    db.collection("CartItems").onSnapshot((snapshot) => {
      let tempProduct = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setCart(tempProduct);
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);
  console.log(cart);
  return (
    <Router>
      <Container>
        <Header cart={cart} />
        <Switch>
          <Route path="/cart">
            <Cart cart={cart} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: white;
`;
