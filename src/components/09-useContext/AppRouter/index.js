import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import NavBar from "../NavBar";
import AboutPage from "../AboutPage";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";

export default function AppRouter() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/login" component={LoginPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}
