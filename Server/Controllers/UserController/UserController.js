var express = require('express');
var router = express.Router();
const path = require('path');
const schema = require('../../dbSchema/userSchema')
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userLogin = (async (req,res)=>{
  console.log('dddd  .');                                                        
  let user = await schema.userData.findOne({
    email:req.body.email
  })
 if(user){
   bcrypt.compare(req.body.password,user.password).then((status)=>{
     console.log(status,'a');
    if(status){
     console.log('log in success');

     const token = jwt.sign({_id:user._id},"123",{expiresIn:"2d"}) 
     console.log(token,'kk');
     res.send({message:'log in success',user,token: token,valid:true})
    }
    else {
         console.log('login failed');
         res.send({message:'Invalid email or passowrd',valid:false})
        }
   }) 
 } else {
  console.log('no user');
  res.send({message:'no user found',valid:false}) 
 }
})  

const userSignup = (async (req,res)=>{
  console.log(req.body,'dd77');
  let userExist = await schema.userData.findOne({
    email:req.body.email
  })                    
  if(userExist){   
    console.log('sssss');
    res.send({message:'user Already exist',userAdded:false})   
  }else{
    const hashPassword = await bcrypt.hash(req.body.password,10)
    req.body.password = hashPassword                                                              
    await schema.userData(req.body).save();  
    console.log('user added');
    
    res.send({message:'succesfuly registerd',userAdded:true})    
  }       
})  

const getUsers = (async (req,res)=>{
     console.log('>>>>');
     const users = await schema.userData.find()
     console.log(users);
     res.send({usersData:users})   
})

const deleteUser = (async (req,res)=>{
  const userID = req.params.id
  await schema.userData.findByIdAndRemove({ _id : userID })
  res.send({message:'succesfuly deleted'})   
})

const editProfile = (async (req,res)=>{
  console.log(req.body,'sdsdsd');
  await schema.userData.updateOne({ _id : req.body._id },{
    $set:{
      fname:req.body.fname,
      lname:req.body.lname,
      phone:req.body.phone,
      email:req.body.email,
    }
  })
  console.log('edit done');
  res.send({message:'succesfuly profile edited'})   
})

module.exports  = {
   userLogin,userSignup,getUsers,deleteUser,editProfile
}