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
  const [screenName, setScreenName] = useState("");

  const iconStyle = {
    color: "var(--primary)",
    fontSize: "100px",
    border: "2px solid var(--primary)",
    borderRadius: "10px",
    margin: "2%"
  };

  const handleClick = e => {
    e.preventDefault();
    const { name } = e.target;

    setScreenName({ screenName: name });

    axios
      .get(`/api/random?screen_name=${screenName}`)
      .then(response => {
        setScreenName({ screenName: response.data });
      })
      .catch(error => {
        console.log(`Something is wrong: ${error}`);
      });
    console.log(screenName);
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
            <button name="mlb" onClick={handleClick}>
              Search Tweets
            </button>
          </div>
          <div>
            <SportsBasketballIcon style={iconStyle} />
            <p className="screen-name">@NBA</p>
            <button name="nba" onClick={handleClick}>
              Search Tweets
            </button>
          </div>
          <div>
            <SportsSoccerIcon style={iconStyle} />
            <p className="screen-name">@MLS</p>
            <button name="mls" onClick={handleClick}>
              Search Tweets
            </button>
          </div>
          <div>
            <SportsFootballIcon style={iconStyle} />
            <p className="screen-name">@NFL</p>
            <button name="nfl" onClick={handleClick}>
              Search Tweets
            </button>
          </div>
          <div>
            <SportsHockeyIcon style={iconStyle} />
            <p className="screen-name">@NHL</p>
            <button name="nhl" onClick={handleClick}>
              Search Tweets
            </button>
          </div>
        </section>
        <div className="tweet-card">
          <p>Tweets go here</p>
        </div>
      </div>
    </>
  );
};

export default Random;
