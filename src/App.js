import './App.css';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
        <div className="App">
<Header/>
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </div>
  </Router>

  );
}

export default App;
