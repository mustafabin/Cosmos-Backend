import mongoose from "mongoose";

let mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}



mongoose.connect("mongodb://127.0.0.1:27017/authors", mongooseConfig)

export default mongoose;