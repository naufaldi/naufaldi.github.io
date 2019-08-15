import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";

// pages for this product
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={ProfilePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
