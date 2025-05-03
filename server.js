require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("New Blog Project Starting");
});

//Connect DB
