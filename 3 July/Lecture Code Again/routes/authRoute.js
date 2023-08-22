const express = require('express')

const authRouter = express.Router();

const jwtAuth = require('../middleware/jwtAuth.js')

const {signUp, signIn,logOut,getUser} = require('../controller/authController.js')

authRouter.post('/signup',signUp)
authRouter.post('/signin',signIn)
authRouter.get('/logout',jwtAuth,logOut)
authRouter.get('/user',jwtAuth,getUser)

module.exports=authRouter