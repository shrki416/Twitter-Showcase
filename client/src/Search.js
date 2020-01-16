import React from "react";
import Navbar from "./Navbar";
import "./Search.css";
import axios from "axios";

const Search = () => {
  axios
    .get("/api/search")
    .then(response => {
      console.log(response.data);
      console.log(`Tweet: ${response.data.statuses[1].text}`);
      console.log(`Fav Count: ${response.data.statuses[1].favorite_count}`);
      console.log(`Retweet Count: ${response.data.statuses[1].retweet_count}`);
    })
    .catch(error => {
      console.log(error);
    });

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
};

export default Search;
