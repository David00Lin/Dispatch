var express = require("express");

var router = express.Router();

router.get("/", function (req, res) {
    console.log("connected");
    res.render("home/");
})

router.get("/home", function (req, res) {
    console.log("get in home page");
    res.render("home/home");
});


module.exports = router;