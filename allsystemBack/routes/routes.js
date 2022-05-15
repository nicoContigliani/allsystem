const  express = require('express');
const  router = express.Router();


const auths = require('../apiservice/auths/authRoutes')
const registers = require('../apiservice/registers/registerRoutes')
// router.get('/', function(req, res, next) {
//     res.send('Estoy vivo y estoy funcionando');
//   });
router.use('/auth',auths)  
router.use('/register',registers)  


module.exports = router;

