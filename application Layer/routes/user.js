const express = require('express');
const route = express.Router();
const USerController=require("../controllers/user")
const passport=require("passport")

route.post('/register', USerController.register);
route.post('/login',passport.authenticate('local'), USerController.login);

module.exports = route;
