var express = require('express');    
var router = express.Router();       
const {userLogin,userSignup,getUsers,deleteUser,editProfile} = require('../Controllers/UserController/UserController')
                                     
/* GET users listing. */            
                                
router.post('/login', userLogin );    
router.post('/signup', userSignup );    
router.get('/', getUsers );   
router.delete('/delete-user/:id', deleteUser ); 
router.put('/edit-profile', editProfile );   

module.exports = router;
