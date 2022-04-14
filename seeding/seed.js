import seedModel from ('../models/productModel.js');
import db from ('../connection/connection.js');
import seedData from ('../seeding/data/data.json') assert { type: json };


const seedDatabase = async () => {

  await db.dropDatabase();
  await seedModel.insertMany(seedData);
  db.close();

}

seedDatabase();

