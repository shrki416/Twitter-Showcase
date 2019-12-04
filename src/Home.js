import React from "react";

export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <p>
          <i className="fab fa-twitter-square"></i>
        </p>
        <p>Home</p>
        <p>Page 1</p>
        <p>Page 2</p>
      </div>
      <div className="cover">
        <h1>Twitter Showcase</h1>
        <p>
          Allows users to search for a twitter username or by tweet content from
          the last week.
        </p>
      </div>
    </div>
  );
}
