const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true, unique: true },
    genre: { type: String, required: true },
    description: { type: String, required: false },
    reviews: { type: {}, required: false },
  },
  { timestamps: true }
);

const User = mongoose.model("book", bookSchema);

module.exports = Book;
