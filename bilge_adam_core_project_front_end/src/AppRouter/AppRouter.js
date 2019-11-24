import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "../MainPage";

const AppRouter = () => (
  <BrowserRouter>
    <Route exact path="/" component={MainPage} />
  </BrowserRouter>
);
export default AppRouter;
