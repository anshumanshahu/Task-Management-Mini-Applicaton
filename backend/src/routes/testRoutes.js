const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");

router.get("/dashboard", auth, (req, res) => {
  res.json({
    msg: "Welcome to dashboard",
    user: req.user
  });
});

module.exports = router;