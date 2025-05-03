const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("New Blog Project Starting");
});
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
