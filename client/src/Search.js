import React, { Component } from "react";
import Header from "./Header";
import "./Search.css";
import axios from "axios";
import Tweet from "./Tweet";
// function createTweetCard() {
//   return(
//     <Tweet
//       key={tweet.id}
//       name={statuses.text}
//       img={statuses.img}
//       retweet={statuses.retweet_count}
//       favorite={statuses.favorite_count}
//     />
//   )
// }
class Search extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      tweets: []
    };
    // console.log(props.tweets);
  }

  handleClick = e => {
    e.preventDefault();
    console.log("clicked!");
    axios
      .get("/api/search?username=" + e.target.value)
      .then(response => {
        this.setState({ tweets: response.data });
      })
      .catch(error => {
        console.log(`Something is wrong: ${error}`);
      });
  };

  handleChange = e => {
    const name = e.target.value;
    this.setState({ name });
    console.log(name);
  };

  render() {
    let { tweets } = this.state;
    const tweetData = tweets.statuses || [];
    //console.log(tweets.statuses);
    //console.log(tweetData[0].id);
    //console.log(tweetData[0].text);
    return (
      <>
        <div className="search-container">
          <Header />
          <h1 className="search-header">Search Tweet Page</h1>
          <p className="search-header-p">
            Search twitter by either a twitter-handle or a topic
          </p>
          <div className="search-page">
            <form className="form">
              <input
                type="text"
                placeholder="Enter a twitter username"
                onChange={this.handleChange}
              />
              <input type="text" placeholder="Topic" />
              <button onClick={this.handleClick}>
                Search <i className="fab fa-twitter"></i>
              </button>
            </form>
          </div>
          <div className="tweet-card">
            <ul>
              {tweetData.map(tweet => (
                <li key={tweet.id}>{tweet.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default Search;
