import React from "react";
import "./Tweet.css";

function Tweet(props) {
  return (
    <div className="card">
      <div className="profile-sidebar">
        <img className="profile-image" src={props.img} alt="user-image" />
      </div>
      <div className="profile-main">
        <h2 className="profile-name">{props.name}</h2>
        <p className="profile-position">@{props.screen_name}</p>
        <p className="profile-position">{props.created}</p>
        <p className="profile-body">{props.text}</p>
        <p className="tweet-stats">
          <i className="fas fa-retweet"></i> {props.retweet}
        </p>
        <p className="tweet-stats">
          <i className="fas fa-heart"></i> {props.favorite}
        </p>
      </div>
    </div>
  );
}

export default Tweet;
