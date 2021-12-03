import React from "react";
import MainPage from "../Pages/MainPage/MainPage";
import { Route, Switch } from "react-router-dom";
import ResultsPage from "../Pages/ResultsPage/ResultsPage";
import BookPage from "../Pages/BookPage/BookPage";

export default function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/main" component={MainPage} />
      <Route exact path="/search/:book" component={ResultsPage} />
      <Route exact path="/search/book/:isbn" component={BookPage} />
      <Route exact path="/" component={MainPage} />
    </Switch>
  );
}
