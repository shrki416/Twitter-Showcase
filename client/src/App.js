import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Search from "./Search";
import Random from "./Random";

class App extends Component {
  constructor() {
    super();

    this.state = {
      tweets: []
    };
  }

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/search"
              render={props => <Search tweets={this.state.tweets} {...props} />}
            />
            <Route
              exact
              path="/random"
              render={props => <Random tweets={this.state.tweets} {...props} />}
            />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
