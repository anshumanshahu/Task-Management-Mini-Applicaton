const jwt = require("jsonwebtoken");

const JWT_SECRET = "secret";

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ msg: "No token, access denied" });
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = decoded; // { id, role }

    next();

  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};