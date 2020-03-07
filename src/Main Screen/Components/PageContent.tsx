import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Contact";

const PageContent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/home" />
      </Switch>
    </Router>
  );
};

export default PageContent;
