const express = require("express");
const axios = require("axios");
const path = require("path");

require("dotenv").config();
const API_KEY = process.env.API_KEY;
const API_SECRET_KEY = process.env.API_SECRET_KEY;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/api/search", (req, res) => {
  const url =
    "https://api.twitter.com/1.1/search/tweets.json?q=nfl&result_type=popular";

  const config = {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`
    }
  };
  axios
    .get(url, config)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(port, () => console.log(`Server Started on port ${port}!`));
