//traditional route
const express = require('express');
const router = express.Router();
const register = require('./registerController')


// router.get('/', function(req, res, next) {
//     res.send('traditional');
//   });


  // router.post('/bio', function(req, res, next) {
  //   res.send('Biométrico');
  // });

  // router.post('/auth0', function(req, res, next) {
  //   res.send('auth0');
  // });

  router.post('/', register.register);




module.exports = router;
