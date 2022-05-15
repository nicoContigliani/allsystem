const express = require('express');
const router = express.Router();

const loginTraditional = require('../auths/traditional/loginRoutes')
  router.use('/traditional',loginTraditional)  

module.exports = router;
