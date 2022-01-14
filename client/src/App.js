import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Random from "./Pages/Random";
import React from "react";
import Search from "./Pages/Search";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/random" element={<Random />} />
      </Routes>
    </Router>
  );
};

export default App;
