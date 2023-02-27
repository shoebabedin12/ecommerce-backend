const chalk = require("chalk");
const express = require("express");
var cors = require('cors')
const app = express();
const UsersRouter = require("./routes/UsersRoutes");

const port = process.env.PORT || 5000;

// middlewear
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


app.use("/", UsersRouter)

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
