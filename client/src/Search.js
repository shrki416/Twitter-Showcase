import React, { Component } from "react";
import Navbar from "./Navbar";
import "./Search.css";
import axios from "axios";

class Search extends Component {
  constructor() {
    super();

    this.state = {
      tweets: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/search")
      .then(response => {
        this.setState({ tweets: response.data });
        console.log(this.state.tweets);
        console.log(`Tweet: ${response.data.statuses[1].text}`);
        console.log(`Fav_Count: ${response.data.statuses[1].favorite_count}`);
        console.log(`RT_Count: ${response.data.statuses[1].retweet_count}`);
      })
      .catch(error => {
        console.log(`Something is wrong: ${error}`);
      });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="search-container">
          <h1 className="search-header">Search Tweet Page</h1>
          <div className="search-page">
            <form className="form">
              <input type="text" placeholder="Enter a twitter username" />
              <input type="text" placeholder="Topic" />
              <button>
                Search <i className="fab fa-twitter"></i>
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Search;
