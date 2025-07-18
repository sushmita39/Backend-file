const express = require("express");
const {
  register,
  loginUser,
  logoutUser,
} = require("../Controllers/authController");

const authRoutes = express.Routes();

authRoutes.post("/", register);
authRoutes.post("/login", loginUser);
authRoutes.post("/logout", logoutUser);

module.exports = authRoutes;
