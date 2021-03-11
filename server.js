const express = require("express");
const path = require("path");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "client/build")));

const apiRoutes = require("./routes");
app.use("/api", apiRoutes);

app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "client", "build", "index.html"))
);

app.listen(port, () => console.log(`Server Started on port ${port}!`));
