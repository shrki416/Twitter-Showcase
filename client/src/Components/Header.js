import React from "react";
import { Link } from "react-router-dom";
import "../Styles/App.css";

const Header = () => {
  const toggle = () => {
    let dropDownMenu = document.getElementById("dropDownMenu");
    let navbarToggle = document.getElementById("js-navbar-toggle");
    navbarToggle.addEventListener("click", () => {
      dropDownMenu.classList.toggle("active");
    });
  };

  return (
    <nav className="navbar">
      <span className="navbar-toggle" id="js-navbar-toggle">
        <i className="fas fa-bars fa-2x" onClick={toggle}></i>
      </span>

      <a href="https://twitter.com">
        <i className="fab fa-twitter-square fa-2x"></i>
      </a>
      <ul className="main-nav" id="dropDownMenu">
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
};

export default Header;
