const express = require("express");

const router = express.Router();

router.get("/user_home", (req, res) => {
  res.render("user/user_home");
});
router.get("/create_order", (req, res) => {
  res.render("user/create_order");
});

module.exports = router;
