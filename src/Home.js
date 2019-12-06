import React from "react";
import "./App.css";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <div className="cover">
        <h1>Twitter Showcase</h1>
        <p>
          Allows users to search for tweets using a twitter username or by tweet
          content from last week.
        </p>
      </div>
    </div>
  );
}
