const express = require("express");
const router = express.Router();

const { signUp, signIn } = require("../controllers/auth");

router.post("/signup", signUp);
router.post("/signin", signIn);

//Middleware

module.exports = router;


// localhost:8000/auth/signin
// localhost:8000/auth/signup