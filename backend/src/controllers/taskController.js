const pool = require("../config/db");

// CREATE TASK
exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await pool.query(
      "INSERT INTO tasks(title, description, user_id) VALUES($1,$2,$3) RETURNING *",
      [title, description, req.user.id]
    );

    res.status(201).json(task.rows[0]);

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};


// GET USER TASKS
exports.getTasks = async (req, res) => {
  try {
    const tasks = await pool.query(
      "SELECT * FROM tasks WHERE user_id=$1",
      [req.user.id]
    );

    res.json(tasks.rows);

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};


// DELETE TASK (admin only)
exports.deleteTask = async (req, res) => {
  try {
    const result = await pool.query(
      "DELETE FROM tasks WHERE id=$1 AND user_id=$2 RETURNING *",
      [req.params.id, req.user.id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ msg: "Task not found or not yours" });
    }

    res.json({ msg: "Task deleted" });

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};