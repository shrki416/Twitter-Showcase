import React from "react";
import "./App.css";
import Header from "./Header";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="cover">
        <h1>Twitter Showcase</h1>
        <p>
          Allows users to search for tweets using a twitter username or by tweet
          content from last week.
        </p>
      </div>
    </div>
  );
};

export default Home;
