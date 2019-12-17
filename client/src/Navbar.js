import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <i className="fab fa-twitter-square fa-5x"></i>
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
  );
}
