import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";
import Tweet from "./Tweet";
import "./Search.css";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      tweets: [],
      searchTerm: ""
    };
  }

  handleClick = e => {
    e.preventDefault();
    axios
      .get(`/api/search?search_term=${this.state.searchTerm}`)
      .then(response => {
        this.setState({ tweets: response.data });
      })
      .catch(error => {
        console.log(`Something is wrong: ${error}`);
      });
  };

  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    let { tweets } = this.state;
    const tweetData = tweets.statuses || [];

    let displayTweetCards = tweetData.map(tweet => (
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
    ));

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
          <div className="tweet-card">{displayTweetCards}</div>
        </div>
      </>
    );
  }
}

export default Search;
