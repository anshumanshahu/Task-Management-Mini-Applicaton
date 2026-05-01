const express = require("express");
const router = express.Router();

const auth = require("../middlewares/authMiddleware");
const { isAdmin } = require("../middlewares/roleMiddleware");

const {
  createTask,
  getTasks,
  deleteTask
} = require("../controllers/taskController");

router.post("/tasks", auth, createTask);
router.get("/tasks", auth, getTasks);
router.delete("/tasks/:id", auth, isAdmin, deleteTask);

module.exports = router;