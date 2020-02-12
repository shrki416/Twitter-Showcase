import React from "react";

function Tweet(props) {
  return (
    <div>
      <div>
        <h2>{props.name}</h2>
      </div>
      <div>
        <p>{props.Tweet.retweet_count}</p>
        {/* <p>{props.tweet.}</p> */}
      </div>
    </div>
  );
}

export default Tweet;
