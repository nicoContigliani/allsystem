const express = require('express');
const router = express.Router();

const registerTraditional = require('../registers/traditional/registerRoutes')



  router.post('/bio', function(req, res, next) {
    res.send('Biométrico');
  });

  router.post('/auth0', function(req, res, next) {
    res.send('auth0');
  });

  router.use('/traditional',registerTraditional)  




module.exports = router;
