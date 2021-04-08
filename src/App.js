import { createContext, useEffect, useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { db } from "./Components/Home/Firebase";
import Login from "./Components/Login/Login";
import CategoryPage from "./Components/Categories/CategoryPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import AllProduct from "./Components/AllProduct/AllProduct";
import Details from "./Components/Details/Details";
import Orders from "./Components/Orders/Orders";


export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
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

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Container>
            <Header cart={cart} />
            <Switch>
              <Route path="/cart">
                <Cart cart={cart} />
              </Route>
              <Route path="/categories/:category">
                <CategoryPage/>
              </Route>
              <Route path="/all">
                <AllProduct/>
              </Route>
              <Route path="/orders">
                <Orders/>
              </Route>
              <Route path="/details/:category/:id">
                <Details/>
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </Container>
        )}
      </Router>
    </UserContext.Provider>
  );
}

export default App;

const Container = styled.div`
  background-color: white;
  margin-top: 60px;
`;
