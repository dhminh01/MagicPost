const express = require("express");

const router = express.Router();

router.get("/leader_home", (req, res) => {
  res.render("leader/leader_home");
});

module.exports = router;
