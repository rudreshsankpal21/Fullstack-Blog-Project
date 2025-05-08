const User = require("../models/User");
const bcrypt = require("bcryptjs");
const passport = require("passport");

//Render Register page
exports.getRegister = (req, res) => {
  res.render("register", {
    title: "Register",
    user: req.user,
    error: "",
  });
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
        user: req.user,
        errorMessage: "User already exists",
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
      user: req.user,
      errorMessage: error,
    });
  }
};

// Render Login Page
exports.getLogin = (req, res) => {
  res.render("login", { title: "Login", error: "", user: req.user });
};

// Login logic
exports.login = async (req, res, next) => {
  // logic for login
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.render("login", {
        title: "Login",
        user: req.user,
        error: info.message,
      });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect("/");
    });
  })(req, res, next);
};

exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/auth/login");
  });
};
