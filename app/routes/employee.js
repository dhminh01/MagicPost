const express = require("express");

const router = express.Router();

router.get("/employee", (req, res) => {
  res.render("employee/employee_home");
});

module.exports = router;
