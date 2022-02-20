var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.put("/", function (req, res, next) {
  res.send("PUT users");
});

module.exports = router;
