import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Random from "./Pages/Random";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/random" component={Random} />
      </Switch>
    </Router>
  );
};

export default App;
