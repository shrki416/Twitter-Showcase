import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";
import "./Random.css";

const MLB = require("./assets/MLB.png");
const NHL = require("./assets/NHL.png");
const NFL = require("./assets/NFL.png");
const MLS = require("./assets/MLS.png");
const NBA = require("./assets/NBA.png");

const handleClick = e => {
  const user = e.target.alt;
  console.log(user);
};

class Random extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    console.log(props.tweets);
  }

  render() {
    return (
      <>
        <div className="random-container">
          <Header />
          <h1 className="random-header">Random Tweet Page</h1>
          <p className="random-header-p">
            Click on the logo below to view a randomly selected tweet
          </p>
          <section className="random-section">
            <img
              onClick={handleClick}
              className="random-img"
              src={MLB}
              alt="MLB-Logo"
            />
            <img
              onClick={handleClick}
              className="random-img"
              src={NHL}
              alt="NHL-Logo"
            />
            <img
              onClick={handleClick}
              className="random-img"
              src={NBA}
              alt="NBA-Logo"
            />
            <img
              onClick={handleClick}
              className="random-img"
              src={MLS}
              alt="MLS-Logo"
            />
            <img
              onClick={handleClick}
              className="random-img"
              src={NFL}
              alt="NFL-Logo"
            />
          </section>
        </div>
      </>
    );
  }
}
export default Random;
