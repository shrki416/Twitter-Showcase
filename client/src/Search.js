import React, { Component } from "react";
import Navbar from "./Navbar";
import "./Search.css";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.tweets);
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
