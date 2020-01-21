import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

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
      <Footer />
    </div>
  );
};

export default Home;
