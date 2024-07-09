const router = require("express").Router();
const { json } = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");

//Registration
router.post("/register", async (req, res) => {
  try {
    const username = await User.findOne({ username: req.body.username });
    if (username)
      return res.status(409).json({ message: "User already exist" });

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });
    const user = await newUser.save();
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Verification
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.otp) return res.status(400).json("otp is wrong");

    // const u = await User.findOne({ _id: req.params.id });
    // res.status(200).json(u);
    const user = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { verified: true } },
      { upsert: true }
    );
    // const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong credentials!");

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
