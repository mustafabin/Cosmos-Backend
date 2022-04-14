// Import Mongoose
import mongoose from '../connection/connection.js';

// Create our "schema" for our Product model
let productSchema = new mongoose.Schema({
  // properties--
  _id: String,
  name: String,
  image: String,
  category: String,
  warrenty: Number,
  price: Number,
  description: String,
  price: String,
  galaxy: String,
  onSale: Boolean,
})

// Create our product model
let Product = mongoose.model("Product", productSchema)

export default Product;