const express = require("express");
const axios = require("axios");
const path = require("path");
const tokenService = require("./token-service");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/api/search", async (req, res) => {
  const url = `https://api.twitter.com/1.1/search/tweets.json?`;

  const token = await tokenService.getToken();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      q: req.query.search_term,
      count: 6,
      result_type: "popular"
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

app.get("/api/random", async (req, res) => {
  const url = `https://api.twitter.com/1.1/statuses/user_timeline.json?`;

  const token = await tokenService.getToken();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      screen_name: req.query.screen_name,
      count: 6
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

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => console.log(`Server Started on port ${port}!`));
