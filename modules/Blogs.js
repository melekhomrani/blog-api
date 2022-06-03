const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;
const blogScheme = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = new model("Blogs", blogScheme);

module.exports = Blog;
