import React from "react";
import "./Tweet.css";

function Tweet(props) {
  const img = "http://pbs.twimg.com/media/EQnjBz7U4AA6YLM.jpg ";

  return (
    <div className="card">
      <div className="top">
        <h3 className="name">Name</h3>
        <h4>{props.created_at}</h4>
        <img className="circle-img" src={img} alt="user-image" />
      </div>
      <div className="bottom">
        <p>{props.text}</p>
        <p className="info">
          <i className="fas fa-retweet">{props.retweet_count}</i>
        </p>
        <p className="info">
          <i className="fas fa-heart">{props.favorite_count}</i>
        </p>
      </div>
    </div>
  );
}

export default Tweet;
