const express = require("express");

const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("Connected!"));

app.listen(port, () => console.log(`Server Started on port ${port}!`));
