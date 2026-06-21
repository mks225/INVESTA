const { UserModel } = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

// SIGNUP
module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;

    // Validate required fields
    if (!email || !password || !username) {
      return res.status(400).json({
        message: "Email, username, and password are required",
        success: false,
      });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }

    // Create user - createdAt will be automatically set by the schema default
    const user = await UserModel.create({
      email,
      password,
      username,
      // createdAt is automatically handled by the schema default: Date.now
    });

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

//LOGIN
module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    console.log("Login attempt for email:", email); // Debug log

    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
        success: false,
      });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      console.log("User not found for email:", email); // Debug log
      return res.status(400).json({
        message: "Incorrect password or email",
        success: false,
      });
    }

    console.log("User found, comparing passwords..."); // Debug log
    const auth = await bcrypt.compare(password, user.password);
    console.log("Password comparison result:", auth); // Debug log

    if (!auth) {
      return res.status(400).json({
        message: "Incorrect password or email",
        success: false,
      });
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    console.log("Login successful for user:", user.username); // Debug log
    res.status(200).json({
      message: "User logged in successfully",
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
