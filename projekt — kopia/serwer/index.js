const express = require("express");
require("dotenv").config();

const app = express();
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

app.use(bodyParser.json());
app.use(cors());
app.use(
  express.urlencoded(),
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
const DBSOURCE = "baza.db";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.log("mamy problem " + err.message);
    throw err;
  } else {
    // wwalimy dane
  }
});

app.get("/api/getTasks", (req, res) => {
  var sql = "Select * from Task";

  db.all(sql, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      dane: rows,
    });
    console.log(rows);
  });
});

app.post("/api/addTasks", (req, res) => {
  console.log(req.body);

  const { data, status } = req.body;

  var sql = "INSERT INTO Task (name, description, column) VALUES (?,?,?)";

  db.all(sql, [data.name, data.description, status], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

app.listen(8002, console.log("działaaa"));
