import React from "react";
import "./Tweet.css";

const Tweet = props => {
  const date = new Date(props.created);

  const options = {
    hour: "numeric",
    minute: "numeric"
  };
  const newDateFormat = Intl.DateTimeFormat("en-US").format(date);
  const newTimeFormat = Intl.DateTimeFormat("en-US", options).format(date);

  return (
    <div className="card">
      <div>
        <img className="profile-image" src={props.img} alt="user-image" />
      </div>
      <div className="tweet-body">
        <h2 className="user-name">{props.name}</h2>
        <p className="user-screen-name">@{props.screen_name}</p>
        <p className="tweet-time-stamp">
          {newDateFormat} - {newTimeFormat}
        </p>
        <p className="tweet-text">{props.text}</p>
        <div className="tweet-stats">
          <p>
            <i className="fas fa-retweet"></i> {props.retweet}
          </p>
          <p>
            <i className="fas fa-heart"></i> {props.favorite}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
