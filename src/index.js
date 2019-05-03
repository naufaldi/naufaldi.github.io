import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";

// pages for this product
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import ProjectSection from "./views/ProfilePage/section/ProjectSection";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import Components from "./views/Components/Components";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={ProfilePage} />
      <Route path="/project" component={ProjectSection} />
      <Route path="/login-page" component={LoginPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
