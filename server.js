const express = require("express");
const axios = require("axios");
const path = require("path");

require("dotenv").config();
const API_KEY = process.env.API_KEY;
const API_SECRET_KEY = process.env.API_SECRET_KEY;

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "client/build")));

// app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Server Started on port ${port}!`));
