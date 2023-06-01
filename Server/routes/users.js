var express = require('express');
var router = express.Router();
const {userLogin,} = require('../Controllers/UserController/UserController')
/* GET users listing. */


router.get('/login', userLogin );    

        
   
module.exports = router;
  