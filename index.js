const chalk = require("chalk");
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.json([
    {
        "id": 0,
        "name": "shoeb"
    },
    {
        "id": 1,
        "name": "reba"
    },
    {
        "id": 2,
        "name": "abedin"
    },
    {
        "id": 3,
        "name": "akhter"
    },
  ])
});

app.listen(3000, function () {
  console.log(chalk.bgGreen("port running on 3000"));
});
