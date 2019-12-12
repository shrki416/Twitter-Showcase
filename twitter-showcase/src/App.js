import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Search from './Search';
import Random from './Random';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/random" component={Random} />
      </Switch>
    </Router>
  );
}

export default App;

/*
API_Key = 27BVFGMRua0RLELLJRnlPgOoY
API_Secret_Key = PzZkHa0vvsLLnaFoBKiyyUkt4onwami74D17ETQmEAzxerFKNp
*/
