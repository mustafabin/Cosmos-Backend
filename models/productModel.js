// Import Mongoose
import mongoose from '../connection/connection.js';

// Create our "schema" for our Product model
let productSchema = new mongoose.Schema({
  // properties--
  name: String,
  image: String,
  category: String,
  warrenty: Number,
  price: Number,
  description: String,
  galaxy: String,
  onSale: Boolean,
})

// Create our product model
let Product = mongoose.model("Product", productSchema)

export default Product;