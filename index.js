const chalk = require("chalk");
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000, function () {
  console.log(chalk.bgGreen("port running on 3000"));
});
