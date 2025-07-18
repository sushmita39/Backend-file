const express = require("express");
const {
  register,
  loginUser,
  logoutUser,
} = require("../Controllers/authController");

const authRoutes = express.Router();

authRoutes.post("/", register);
authRoutes.post("/login", loginUser);
authRoutes.post("/logout", logoutUser);

module.exports = authRoutes;
