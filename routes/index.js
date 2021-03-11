const express = require("express");
const axios = require("axios");
const router = express.Router();
const tokenService = require("../controllers/token-service");

require("dotenv").config();

router.get("/search", async (req, res) => {
  const url = `https://api.twitter.com/1.1/search/tweets.json`;

  await tokenService.getToken();

  const config = {
    params: {
      q: req.query.search_term,
      count: 6,
      result_type: "popular",
    },
  };
  axios
    .get(url, config)
    .then((response) => res.send(response.data))
    .catch((error) => {
      console.log(`Something went wrong: ${error}`);
      res.sendStatus(500);
    });
});

router.get("/random", async (req, res) => {
  const url = `https://api.twitter.com/1.1/statuses/user_timeline.json`;

  await tokenService.getToken();

  const config = {
    params: {
      screen_name: req.query.screen_name,
      count: 6,
    },
  };
  axios
    .get(url, config)
    .then((response) => res.send(response.data))
    .catch((error) => {
      console.log(`Something went wrong: ${error}`);
      res.sendStatus(500);
    });
});

module.exports = router;
