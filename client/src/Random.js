import React, { useState } from "react";
import SportsBaseballIcon from "@material-ui/icons/SportsBaseball";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import SportsHockeyIcon from "@material-ui/icons/SportsHockey";
import SportsFootballIcon from "@material-ui/icons/SportsFootball";
import Header from "./Header";
import axios from "axios";
import "./Random.css";

const Random = () => {
  const [user, setUser] = useState({
    username: "",
    image: ""
  });

  const iconStyle = {
    color: "var(--primary)",
    fontSize: "100px",
    border: "2px solid var(--primary)",
    borderRadius: "10px",
    margin: "2%"
  };

  return (
    <>
      <div className="random-container">
        <Header />
        <h1 className="random-header">Random Tweet Page</h1>
        <p className="random-header-p">
          Click on the logo below to view a randomly selected tweet
        </p>
        <section>
          <div>
            <SportsBaseballIcon style={iconStyle} />
            <p className="screen-name">@MLB</p>
          </div>
          <div>
            <SportsBasketballIcon style={iconStyle} />
            <p className="screen-name">@NBA</p>
          </div>
          <div>
            <SportsSoccerIcon style={iconStyle} />
            <p className="screen-name">@MLS</p>
          </div>
          <div>
            <SportsFootballIcon style={iconStyle} />
            <p className="screen-name">@NFL</p>
          </div>
          <div>
            <SportsHockeyIcon style={iconStyle} />
            <p className="screen-name">@NHL</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Random;
