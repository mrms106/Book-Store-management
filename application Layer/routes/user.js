const express = require('express');
const route = express.Router();
const USerController=require("../controllers/user")
const passport=require("passport")
const isLoggedIn=require("../middleware/isloggedin")

route.post('/register', USerController.register);
route.post('/login',passport.authenticate('local'), USerController.login);

route.get("/user",isLoggedIn,USerController.user)

module.exports = route;
