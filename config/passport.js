const User = require("../models/User");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  // Define the local strategy for email and password authentication
  passport.User(
    new localStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          // Find the user
          const user = await User.findOne({ email });
          if (!user) {
            return done(null, false, {
              message: "User not found with entered email",
            });
          }
          //   compare the provided password with the hashed password
        } catch (error) {}
      }
    )
  );
};
