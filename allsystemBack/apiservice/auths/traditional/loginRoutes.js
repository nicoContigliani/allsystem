//traditional route
const express = require('express');
const router = express.Router();
const login = require('./loginController')




router.post('/', login.findUser);




module.exports = router;
