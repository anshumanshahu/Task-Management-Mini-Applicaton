const pool = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "secret"; // baad me .env me daalenge

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


// ✅ LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    );

    if (user.rows.length === 0) {
      return res.status(400).json({ msg: "User not found" });
    }

    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].password
    );

    if (!validPassword) {
      return res.status(400).json({ msg: "Invalid password" });
    }

    // JWT token
    const token = jwt.sign(
      { id: user.rows[0].id, role: user.rows[0].role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};