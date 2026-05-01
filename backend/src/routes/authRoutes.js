const pool = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// ✅ REGISTER (MISSING THA)
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ msg: "All fields required" });
    }

    const userExists = await pool.query(
      "SELECT * FROM users WHERE LOWER(email)=LOWER($1)",
      [email.trim()]
    );

    if (userExists.rows.length > 0) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await pool.query(
      "INSERT INTO users(name,email,password) VALUES($1,$2,$3) RETURNING id,name,email,role",
      [name, email.trim(), hashedPassword]
    );

    res.status(201).json(newUser.rows[0]);

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
const express = require("express");
const router = express.Router();

// 🔥 direct import (no destructuring)
const authController = require("../controllers/authController");

console.log("FULL CONTROLLER:", authController);

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;