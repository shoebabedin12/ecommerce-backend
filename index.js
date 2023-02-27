require('dotenv').config()
const express = require("express");
const chalk = require("chalk");
var cors = require('cors')
const routes = require("./routes");
const app = express();

const port = process.env.PORT || 5000;


console.log(process.env.BASE_URL)

// middlewear
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


app.use("/", routes)

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

app.get("/test", function(req, res){
res.json({
    "name": "test",
})
})

app.listen(port, function () {
  console.log(chalk.bgGreen(`Your port is ${port}`));
});
