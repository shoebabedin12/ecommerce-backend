const mongoose = require("mongoose");
const chalk = require("chalk");

const setupDB = () => {
  mongoose.set("strictQuery", false);
  //     mongoose.connect(process.env.DB_URL, () => {
  //     chalk.blue('DB Connected')
  // })
  mongoose.connect(process.env.DB_URL).then(
    () => {
      console.log(chalk.green("DB Connected"));
    },
    (err) => {
      console.log(chalk.red("DB not Connected"));
    }
  );
};

module.exports = setupDB;
