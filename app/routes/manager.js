const express = require("express");

const router = express.Router();

router.get("/manager_home", (req, res) => {
  res.render("leader/manager_home");
});

module.exports = router;
