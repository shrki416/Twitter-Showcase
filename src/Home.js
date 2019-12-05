import React from "react";

export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <p>
          <i className="fab fa-twitter-square"></i>
        </p>
        <p>Home</p>
        <p>User</p>
        <p>Random</p>
      </div>
      <div className="cover">
        <h1>Twitter Showcase</h1>
        <p>
          Allows users to search for tweets using a twitter username or by tweet content from
          the last week.
        </p>
      </div>
    </div>
  );
}
