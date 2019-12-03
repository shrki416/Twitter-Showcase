import React from "react";

export default function Navbar() {
  return (
    <header>
      <h1 className="logo">
        <i className="fab fa-twitter"></i>
      </h1>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <nav>
        <ul>
          <li>Home</li>
          <li>Page 1</li>
          <li>Page 2</li>
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
    </header>
  );
}
