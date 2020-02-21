const express = require("express");
const axios = require("axios");
const path = require("path");

require("dotenv").config();
const API_KEY = process.env.API_KEY;
const API_SECRET_KEY = process.env.API_SECRET_KEY;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/api/search", (req, res) => {
  const url = `https://api.twitter.com/1.1/search/tweets.json?q=${req.query.search_term}&count=6&result_type=popular`;

  const config = {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`
    }
  };
  axios
    .get(url, config)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(`Something went wrong: ${error}`);
      res.sendStatus(500);
    });
});

app.listen(port, () => console.log(`Server Started on port ${port}!`));
