import UserModel from "../models/userModel.js";
//import for user login and register
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const userController = {
  async create(req, res) {
    const { name, email, password } = req.body;
    //if the api request is missing some fields throw an err
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Add all fields" });
    }
    //throw an error if there is an alr existing user with the same email
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    //hash user password using bcrypt salt method because it hashes the password mutiple times and is recommended
    //the hashing takes some time so we need to await it
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //after checks passed and password hashed create user
    let user = await UserModel.create({
      name: name,
      password: hashedPassword,
      email: email,
    });
    //if user successfully made send back the updated user else throw err
    if (user) {
      return res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
      });
    } else {
      return res.status(400).json("Invaild user data");
    }
  },

  //define delete route
  async delete(req, res) {
    try {
      let found = await UserModel.findByIdAndDelete(req.params.id);
      if (!found) {
        return res.status(404).json({
          message: "That ID is not in the database",
        });
      }
      res.json(found);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, {
        returnOriginal: false,
      });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },

  async getUserById(req, res) {
    try {
      let found = await UserModel.findById(req.params.id);
      if (!found) {
        return res.status(404).json({
          message: "That ID is not in the database",
        });
      }
      res.json(found);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
};
