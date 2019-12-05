import React from "react";
import "./App.css";
import Header from "./user_interface/components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginOrRegister from "./user_interface/containers/LoginOrRegister";
import Home from "./user_interface/containers/Home";
import Men from "./user_interface/containers/Men";
import Women from "./user_interface/containers/Women";
import MyAccount from "./user_interface/containers/MyAccount";
import Cart from "./user_interface/containers/Cart";
import Notification from "./user_interface/containers/Notification";
import DetailsProduct from "./user_interface/containers/Details";
import Footer from "./user_interface/components/Footer";
import SearchResult from "./user_interface/components/SearchResult";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route path="/details" component={DetailsProduct} />
          <Route path="/men" component={Men} />
          <Route path="/women" component={Women} />
          <Route path="/login-or-register" component={LoginOrRegister} />
          <Route path="/my-account" component={MyAccount} />
          <Route path="/cart" component={Cart} />
          <Route path="/notification" component={Notification} />
          <Route path="/search-result" component={SearchResult} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
