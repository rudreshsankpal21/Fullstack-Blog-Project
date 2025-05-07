const User = require("../models/User");
const bcrypt = require("bcryptjs");

//Render Register page
exports.getRegister = (req, res) => {
  res.render("register");
};

// Register logic
exports.register = async (req, res) => {
  // Main logic for user Registration
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.render("register", {
        title: "Register",
        user: req.username,
        error: "User already exists",
      });
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Save user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.redirect("/auth/login");
  } catch (error) {
    res.render("register", {
      title: "Register",
      user: req.username,
      error: error.message,
    });
  }
};

// Render Login Page
exports.getLogin = (req, res) => {
  res.render("login");
};

// Login logic
exports.login = async (req, res) => {
  // logic for login
  const { email, password } = req.body;

  try {
    const userEmail = await User.findOne({ email });
    const isMatch = await User.findOne({ password });
    if (userEmail && isMatch) {
      res.send("User Login successfull");
    } else {
      res.send("User Login Failed");
    }
  } catch (error) {
    res.status(500).send("Error:", error);
  }
};
