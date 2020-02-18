import React from "react";
import "./Tweet.css";

function Tweet(props) {
  return (
    <div className="card">
      <h4>{props.name}</h4>
      <h5>@{props.screen_name}</h5>
      <h6>{props.created}</h6>
      <img className="circle-img" src={props.img} alt="user-image" />
      <p>{props.text}</p>
      <p>
        <i className="fas fa-retweet"></i>
        {props.retweet}
      </p>
      <p>
        <i className="fas fa-heart"></i>
        {props.favorite}
      </p>
    </div>
  );
}

export default Tweet;
