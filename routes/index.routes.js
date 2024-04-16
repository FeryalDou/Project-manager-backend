const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated.js");

router.use("/auth", require("../routes/auth.routes"));
router.use("/projects", require("../routes/project.routes"));
router.use("/tasks", require("../routes/task.routes"));
router.use("/users", require("../routes/user.routes.js"));

module.exports = router;
