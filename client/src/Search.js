import React, { Component } from "react";
import Header from "./Header";
import "./Search.css";
import axios from "axios";
import Tweet from "./Tweet";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      tweets: []
    };
  }

  handleClick = e => {
    e.preventDefault();
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

    console.log(tweetData);

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
              <button onClick={this.handleClick}>
                Search <i className="fab fa-twitter"></i>
              </button>
            </form>
          </div>
          {tweetData.map(tweet => (
            <Tweet
              key={tweet.id}
              created={tweet.created_at}
              img={tweet.user.profile_image_url}
              name={tweet.user.name}
              screen_name={tweet.user.screen_name}
              text={tweet.text}
              retweet={tweet.retweet_count}
              favorite={tweet.favorite_count}
            />
          ))}
        </div>
      </>
    );
  }
}
export default Search;
