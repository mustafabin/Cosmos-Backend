import db from "./connection/connection.js";
import chalk from "chalk";
import app from "./server/App.js";
const PORT = process.env.PORT || 8080;

db.on("connected", () => {
  console.clear();
  console.log(chalk.greenBright("connected to MongoDB!"));
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
