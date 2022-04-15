import router from "./routes/router";
import db from './connection/connection.js';
import app from './server/App.js';


db.on("connected", () => {
  console.clear();
  console.log("connecting to MongoDB!");
  app.listen(process.env.PORT, () => {
    process.env.NODE_ENV === "production"
      ? console.log(`Express server running in production on port ${PORT}\n\n`)
      : console.log(
        chalk.cyan(
          `Express server running in development on: http://localhost:${PORT}`
        )
      );
  });
});


db.on('error', error => console.error("error connecting to the servor\n" + error));
db.on('listening', () => console.log("yeah we really connected this time\n" + process.env.PORT));