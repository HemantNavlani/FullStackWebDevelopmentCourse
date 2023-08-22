const express = require('express')
const {signUp,logIn,getUser} = require('../controllers/controller.js')
const router = express.Router();
const authorized = require('../middleware/auth.js')
// const path = require('path')




// router.get('/signup',(req,res)=>{
//     res.sendFile(path.join(__dirname, "../../frontend", "signup.html"));
// });

router.post('/signup',signUp);


// router.get('/login',(req,res)=>{
//     res.sendFile(path.join(__dirname, "../../frontend", "login.html"));
// });
router.post('/login',logIn);

// router.get('/user',(req,res)=>{
//     res.sendFile(path.join(__dirname, "../../frontend", "user.html"));
// });
router.get('/user',authorized,getUser);
module.exports=router;