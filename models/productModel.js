// Import Mongoose
import mongoose from 'mongoose';

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

export default mongoose.model("Products", productSchema);