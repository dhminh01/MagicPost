const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/logout", (req, res) => {
  // Clear the JWT cookie
  res.clearCookie("jwt");

  // Redirect to the home page after logout
  res.redirect("/");
});

module.exports = router;
