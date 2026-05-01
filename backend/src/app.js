const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

const pool = require("./config/db");

pool.connect()
  .then(() => console.log("PostgreSQL Connected"))
  .catch(err => console.log(err));

const authRoutes = require("./routes/authRoutes");

app.use("/api/v1/auth", authRoutes);

const testRoutes = require("./routes/testRoutes");

app.use("/api/v1", testRoutes);

const taskRoutes = require("./routes/taskRoutes");

app.use("/api/v1", taskRoutes);