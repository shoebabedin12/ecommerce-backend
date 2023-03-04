require('dotenv').config()
const express = require("express");
const chalk = require("chalk");
var cors = require('cors')
const routes = require("./routes");
const setupDB = require('./config/dbConfig');
const app = express();

const port = process.env.PORT || 5000;


console.log(process.env.BASE_URL)

// middlewear
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// db connect
setupDB();
// routes
app.use("/", routes)

app.listen(port, function () {
  console.log(chalk.bgGreen(`Your port is ${port}`));
});
