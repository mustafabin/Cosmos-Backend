import mongoose from "mongoose";
import chalk from "chalk";


let mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

let connectionString = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Cosmos";

mongoose.connect(connectionString, mongooseConfig)

const db = mongoose.connection;

db.on("error", (error) => {
  console.error(chalk.red(error))
});

db.once("disconnected", () => {
  console.log(chalk.green("Disconnected from MongoDB"));
});

export default db;