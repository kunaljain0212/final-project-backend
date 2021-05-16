const express = require("express");
const router = express.Router();

const { signUp, signIn } = require("../controllers/auth");

//SINGUP ROUTE (SENDS TOKEN ON SUCCESSFULL SIGNUP) localhost:8000/auth/signin
router.post("/signup", signUp);
//SINGIN ROUTE (SENDS TOKEN ON SUCCESSFULL SIGNIN) localhost:8000/auth/signup
router.post("/signin", signIn);

module.exports = router;
