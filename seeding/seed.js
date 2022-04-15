import ProductModel from '../models/productModel.js';
import db from '../connection/connection.js';
import seedData from '../seeding/data/data.json' assert { type: 'json' };


const seedDatabase = async () => {

  await ProductModel.deleteMany();
  await ProductModel.insertMany(seedData);
  db.close();

}

seedDatabase();

