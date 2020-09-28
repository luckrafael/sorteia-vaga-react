import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sobre" component={Sobre} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
