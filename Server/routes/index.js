var express = require('express');    
var router = express.Router();       
const {userLogin,userSignup} = require('../Controllers/UserController/UserController')
                                     
/* GET users listing. */            
                                
router.post('/login', userLogin );    
router.post('/signup', userSignup );    


module.exports = router;
