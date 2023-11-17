const express = require("express");

const router = express.Router();
const authControllers = require("../controller/auth-controller");

// router.get("/", (req, res) => {
//   (req, res) => {
//     res.status(200).send("Welcome to My blog");
//   };
// });

router.route("/").get(authControllers.home);


router.route("/register").get(authControllers.register)
module.exports = router;
