import mongoose from "mongoose";
import chalk from "chalk";


let mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}


mongoose.connect("mongodb://127.0.0.1:27017/Cosmos", mongooseConfig)

const db = mongoose.connection;

db.on("error", (error) => {
  console.error(chalk.red(error))
});

db.once("disconnected", () => {
  console.log(chalk.green("Disconnected from MongoDB"));
});

export default db;