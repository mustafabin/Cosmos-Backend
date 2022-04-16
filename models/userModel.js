// Import Mongoose
import mongoose from "mongoose";

// Create our "schema" for our Product model
let userSchema = new mongoose.Schema({
  // properties--
  name: String,
  password: String,
  email: String,
});

// Create our product model
export default mongoose.model("Users", userSchema);
