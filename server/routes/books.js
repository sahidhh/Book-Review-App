const router = require("express").Router();
const User = require("./models/User");
const Book = require("./models/Book");

//CREATE BOOK
router.post("/", async (req, res) => {
  const newBook = new Book(req.body);
  try {
    const savedBook = await newBook.save();
    res.status(200).json(savedBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE BOOK
router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book.username === req.body.username) {
      try {
        await book.delete();
        res.status(200).json("Book has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your book");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET BOOK
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json(err);
  }
});

//ADD REVIEW
router.put("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      {
        $set: { review: req.body },
      },
      { new: true }
    );
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL BOOKS
router.get("/", async (req, res) => {
  const username = req.query.user;
  const genre = req.query.cat;
  try {
    let books;
    if (username) {
      books = await Book.find({ username });
    } else if (genre) {
      books = await Book.find({
        genre: {
          $in: [catName],
        },
      });
    } else {
      books = await Book.find();
    }
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
