import mongoose from "mongoose";

const bolgscema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,

    require: true,
  },
  imageurl: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export const Blog = mongoose.model("Blog", bolgscema);
