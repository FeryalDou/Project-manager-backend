const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated.js");
const User = require("../models/User.model.js");

router.get("/health", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", require("../routes/auth.routes.js"));
router.use("/projects", require("../routes/project.routes"));
router.use("/tasks", require("../routes/task.routes"));
router.use("/users", require("../routes/user.routes.js"));

module.exports = router;
