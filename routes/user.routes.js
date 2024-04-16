const express = require("express");
const router = express.Router();
const User = require("../models/User.model");

// Create a new user
router.post("/", async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, avatar } = req.body;
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      avatar,
    });
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

// Get all users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

// Get a user by ID
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

// Update by ID
router.put("/:id", async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, avatar } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, email, password, avatar },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

// Delete by ID
router.delete("/:id", async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
