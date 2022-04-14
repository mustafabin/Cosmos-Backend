import router from "./routes/router";
import db from ('./connection/connection.js');
import app from ('./server/App.js');


db.on("connected", () => {
  console.clear();
  console.log("connecting to MongoDB!");
  app.listen(process.env.PORT, () => {
    console.log(
      `express server running on http://localhost:${process.env.PORT}`
    );
  });
});


db.on('error', error => console.error("error connecting to the servor\n" + error));
db.on('listening', () => console.log("yeah we really connected this time\n" + process.env.PORT));