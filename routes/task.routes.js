const express = require("express");
const router = express.Router();
const Task = require("../models/Task.model");

// Create a new task
router.post("/", async (req, res, next) => {
  try {
    const { name, description, projectId } = req.body;
    const task = await Task.create({ name, description, projectId });
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
});

// Get all tasks
router.get("/", async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
});

// Get a task by ID
router.get("/:id", async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
});

// Update by ID
router.put("/:id", async (req, res, next) => {
  try {
    const { name, description, projectId } = req.body;
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { name, description, projectId },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
});

// Delete by ID
router.delete("/:id", async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
