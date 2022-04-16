import UserModel from "../models/userModel";
//import for user login and register
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import req from "express/lib/request";

export const userController = {
  async create(request, response) {
    const { username, email, password } = req.body;
    //if the api request is missing some fields throw an err
    if (!username || !email || !password) {
      res.status(400).json({ message: "Add all fields" });
    }
    //throw an error if there is an alr existing user with the same email
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      res.status(400).json({ message: "User already exists" });
    }

    //hash user password using bcrypt salt method because it hashes the password mutiple times and is recommended
    //the hashing takes some time so we need to await it
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //after checks passed and password hashed create user
    let user = await UserModel.create({
      name: username,
      password: hashedPassword,
      email: email,
    });
    //if user successfully made send back the updated user else throw err
    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(400).json("Invaild user data");
    }
  },

  //define delete route
  delete(request, response) {
    UserModel.deleteOne(request.params.id);
  },

  update(request, response) {
    UserModel.findOneAndUpdate(request.params.id, request.body).then((data) =>
      response.json(data)
    );
  },

  getUserById(request, response) {
    UserModel.findById(request.params.id).then((data) => response.json(data));
  },
};
