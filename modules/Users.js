const mongoose = require("mongoose");

const userScheme = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: String,
  bio: {
    type: String,
    required: true,
  },
});

const User = new mongoose.model("Users", userScheme);

module.exports = User;
