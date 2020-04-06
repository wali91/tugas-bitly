var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.json({
    author: "Waliey Rahman",
  });
});

module.exports = router;
