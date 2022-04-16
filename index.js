import db from "./connection/connection.js";
import chalk from "chalk";
import app from "./server/App.js";
const PORT = process.env.PORT || 8080;

db.on("connected", () => {
  console.clear();
<<<<<<< HEAD
  console.log("connecting to MongoDB!");
=======
  console.log("connecting to MongoDB!" + process.env.PORT);
>>>>>>> e2d5d539964598d4a2113aaf829c7bd1a71d2ed7
  app.listen(PORT, () => {
    process.env.NODE_ENV === "production"
      ? console.log(`Express server running in production on port ${PORT}\n\n`)
      : console.log(
          chalk.cyan(
            `Express server running in development on: http://localhost:${PORT}`
          )
        );
  });
});

db.on("error", (error) =>
  console.error("error connecting to the servor\n" + error)
);
