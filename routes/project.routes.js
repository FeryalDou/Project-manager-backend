const express = require("express");
const router = express.Router();
const Project = require("../models/Project.model");
const isAuthenticated = require("../middlewares/isAuthenticated");

//create new project
router.post("/", isAuthenticated, async (req, res, next) => {
  try {
    const { name, description, startDate, endDate } = req.body;
    const projects = await Project.create({
      name,
      description,
      startDate,
      endDate,
      user: req.currentUserId,
    });
    res.status(201).json(projects);
  } catch (error) {
    next(error);
  }
});

//Get all projects
router.get("/", isAuthenticated, async (req, res, next) => {
  try {
    const project = await Project.find({ user: req.currentUserId });
    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
});

//get project by id
router.get("/:id", isAuthenticated, async (req, res, next) => {
  try {
    const project = await Project.findOne({
      _id: req.params.id,
      user: req.currentUserId,
    });
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
});

//update by id
router.put("/:id", isAuthenticated, async (req, res, next) => {
  try {
    const { name, description, startDate, endDate } = req.body;
    const project = await Project.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.currentUserId,
      },
      { name, description, startDate, endDate },
      { new: true }
    );
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
});

//delete by id

router.delete("/:id", isAuthenticated, async (req, res, next) => {
  try {
    const project = await Project.findOneAndDelete({
      _id: req.params.id,
      user: req.currentUserId,
    });
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
