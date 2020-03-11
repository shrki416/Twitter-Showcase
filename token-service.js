const axios = require("axios");
require("dotenv").config();

let bearer;

let getToken = () => {
  if (!bearer) {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      auth: {
        username: process.env.API_KEY,
        password: process.env.API_SECRET_KEY
      }
    };

    bearer = axios
      .post(
        "https://api.twitter.com/oauth2/token",
        "grant_type=client_credentials",
        config
      )
      .then(response => {
        return response.data.access_token;
      })
      .catch(error => console.log(`Something went wrong: ${error}`));
  }
  return bearer;
};

module.exports = {
  getToken
};
