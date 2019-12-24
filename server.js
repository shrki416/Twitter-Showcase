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

app.get("/api/test", (req, res) => {
  res.send("Hello, World!");
});

app.get("/api/search", (req, res) => {
  const url = `https://api.twitter.com/1.1/search/tweets.json?q=nfl&result_type=popular`;

  const config = {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`
    }
  };
  axios
    .get(url, config)
    .then(response => {
      res.send(response.data);
      console.log("data sent!");
    })
    .catch(error => {
      console.log(`Something went wrong: ${err}`);
      res.sendStatus(500);
    });
});

app.listen(port, () => console.log(`Server Started on port ${port}!`));
