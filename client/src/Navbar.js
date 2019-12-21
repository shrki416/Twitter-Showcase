import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const collapsed = () => {
    let mainNav = document.getElementById("js-menu");
    let navBarToggle = document.getElementById("js-navbar-toggle");
    navBarToggle.addEventListener("click", () => {
      mainNav.classList.toggle("active");
    });
  };

  return (
    <nav className="navbar">
      <span className="navbar-toggle" id="js-navbar-toggle">
        <i className="fas fa-bars fa-2x" onClick={collapsed}></i>
      </span>

      <i className="fab fa-twitter-square fa-2x"></i>

      <ul className="main-nav" id="js-menu">
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
