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

  componentDidMount() {
    axios
      .get("/api/search")
      .then(response => {
        this.setState({ tweets: response.data });
        const tweets = response.data.statuses;
        console.log(this.state.tweets);
        console.log(tweets);
      })
      .catch(error => {
        console.log(`Something is wrong: ${error}`);
      });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} tweets={this.tweets} />
          <Route exact path="/random" component={Random} />
        </Switch>
      </Router>
    );
  }
}

export default App;
