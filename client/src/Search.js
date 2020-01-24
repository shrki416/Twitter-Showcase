import React, { Component } from "react";
import Header from "./Header";
import "./Search.css";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
      tweets: props.tweets
    };

    // console.log(props.tweets);
  }

  handleClick = e => {
    e.preventDefault();
    console.log("clicked!");
  };

  handleChange = e => {
    const name = e.target.value;
    this.setState({ name });
    console.log(name);
  };

  render() {
    let { tweets } = this.state;
    const tweetData = tweets.statuses;

    console.log(tweets.statuses);
    console.log(tweetData[0].id);
    console.log(tweetData[0].text);

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
