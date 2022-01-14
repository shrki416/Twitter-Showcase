import "../Styles/Tweet.css";

import { FaHeart, FaRetweet } from "react-icons/fa";

import React from "react";

const Tweet = ({ tweet }) => {
  const date = new Date(tweet.created_at);

  const options = {
    hour: "numeric",
    minute: "numeric",
  };

  const newDateFormat = Intl.DateTimeFormat("en-US").format(date);
  const newTimeFormat = Intl.DateTimeFormat("en-US", options).format(date);

  return (
    <div className="card">
      <div>
        <img
          className="profile-image"
          src={tweet.user.profile_image_url}
          alt="user-image"
        />
      </div>
      <div className="tweet-body">
        <h2 className="user-name">{tweet.user.name}</h2>
        <p className="user-screen-name">@{tweet.user.screen_name}</p>
        <p className="tweet-time-stamp">
          {newDateFormat} - {newTimeFormat}
        </p>
        <p className="tweet-text">{tweet.text}</p>
        <div className="tweet-stats">
          <p>
            <FaRetweet /> {tweet.retweet_count}
          </p>
          <p>
            <FaHeart /> {tweet.favorite_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
