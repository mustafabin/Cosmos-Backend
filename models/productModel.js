// Import Mongoose
import mongoose from "mongoose";

// Create our "schema" for our Product model
let productSchema = new mongoose.Schema({
  // properties--
  name: String,
  image: String,
  category: String,
  warrenty: Boolean,
  rating: Number,
  price: Number,
  description: String,
  galaxy: String,
  relation: [String],
  onSale: Boolean,
  quantity: Number,
});

// Create our product model

export default mongoose.model("Products", productSchema);
