//Render Register page
exports.getRegister = (req, res) => {
  res.render("register");
};

// Register logic
exports.register = async (req, res) => {
  // Main logic for user Registration
  const { username, email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ username });
    if (user) {
      res.send("User already exists");
      console.log(user);
    } else {
      // Create new user
      const newUser = new User({
        username,
        email,
        password,
      });
      // Save user
      await newUser.save();
      res.redirect("/auth/login");
    }
  } catch (error) {
    res.status(500).send(error, "Something went wrong");
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
