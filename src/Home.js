import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <i className="fab fa-twitter-square"></i>
          </li>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/search">
            <li>Search</li>
          </Link>
          <Link to="/random">
            <li>Random</li>
          </Link>
        </ul>
      </nav>
      <div className="cover">
        <h1>Twitter Showcase</h1>
        <p>
          Allows users to search for tweets using a twitter username or by tweet
          content from the last week.
        </p>
      </div>
    </div>
  );
}
