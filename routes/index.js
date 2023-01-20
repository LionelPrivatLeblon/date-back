var express = require("express");
var router = express.Router();
const fetch = require("node-fetch"); 

router.get("/year", (req, res) => {
  const date = new Date();
  res.json({ year: date.getFullYear().toString() });
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
