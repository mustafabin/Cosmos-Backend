import Jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";

const protect = async (req, res, next) => {
  let token;

  //check headers for token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //get token (token comes in like "Bearer `token`" so we grab the second word)
      token = req.headers.authorization.split(" ")[1];

      //verify
      const decoded = Jwt.verify(token, process.env.JWT_SECRET);

      //get id info from payload but remove password for security
      req.user = await UserModel.findById(decoded.id).select("-password");
      //we now have access to the user field as long as is func is in the middle ware
      //call the next piece of middleware
      next();
    } catch (err) {
      return res.status(401).json({ message: "Not Authorized" });
    }
  }
  if (!token) {
    return res.status(401).json({ message: "No Token" });
  }
};
export default protect;
