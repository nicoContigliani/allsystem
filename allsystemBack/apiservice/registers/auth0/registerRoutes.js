const express = require('express');
const router = express.Router();
const register = require('./registerController')


router.get('/', function(req, res, next) {
    res.send('desde Register');
  });

  router.post('/bio', function(req, res, next) {
    res.send('Biométrico');
  });

  router.post('/auth0', function(req, res, next) {
    res.send('auth0');
  });





module.exports = router;
