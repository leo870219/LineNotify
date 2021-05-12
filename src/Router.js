import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./pages/App";
import Header from "./components/Header";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/header"  component={Header} />
    </Switch>
  </BrowserRouter>
);

export default Router;
