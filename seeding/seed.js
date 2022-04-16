import ProductModel from '../models/productModel.js';
import UserModel from '../models/userModel.js';
import db from '../connection/connection.js';
import planetData from '../seeding/data/planetData.json' assert { type: 'json' };
import userData from '../seeding/data/userData.json' assert {type: 'json'};


const seedDatabase = async () => {

  await ProductModel.deleteMany();
  await UserModel.insertMany(userData);
  await ProductModel.insertMany(planetData);
  db.close();

}

seedDatabase();

