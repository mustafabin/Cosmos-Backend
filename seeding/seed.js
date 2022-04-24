import ProductModel from "../models/productModel.js";
import db from "../connection/connection.js";
import planetData from "../seeding/data/planetData.json" assert { type: "json" };

const seedDatabase = async () => {
  await ProductModel.deleteMany();
  await ProductModel.insertMany(planetData);
  db.close();
};

seedDatabase();
