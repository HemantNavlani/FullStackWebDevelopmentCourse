const emailValidator = require('email-validator');
const userModel = require('../model/userSchema');
const bcrypt = require('bcrypt')
const signUp = async (req,res,next)=>{

    const {name,email,password,confirmPassword} = req.body
    if (!name || !email || !password || !confirmPassword){
        res.status(400).json({
            success:false,
            message:'All input fields are required'
        })
    }

    const validEmail = emailValidator.validate(email);
    if (!validEmail){
        res.status(400).json({
            success:false,
            message:"Please provide valid email address"
        })
    }

    try{
        if (password!==confirmPassword){
            res.status(400).json({
                success:false,
                message:'Password and Confirm Password should be same'
            })
        }

        const userInfo =  new userModel(req.body)
        const result = await userInfo.save()

        res.status(200).json({
            success:true,
            data:result
        })
    }
    catch(e){
        res.status(400).json({
            success:false,
            message:e.message
        })
    }
}


const signIn = async(req,res,next)=>{
    const {email,password} = req.body
    if (!email || !password){
        res.status(400).json({
            success:false,
            message:"Email and Password are required"
        })
    }

    try{
        const user = await userModel.findOne({email})
        .select("+password")
        if(!user || !(await bcrypt.compare(password,user.password))){
            res.status(400).json({
                success:false,
                message:"Invalid Credentials"
            })
        }

        const token = user.jwtToken();
        user.password = undefined
        const cookieOption={
            maxAge:24*60*60*1000,
            httpOnly:true
        }
        res.cookie("token",token,cookieOption);
        res.status(200).json({
            success:true,
            data:user
        })
    }
    catch(e){
        return res.status(400).json({
            success:false,
            message:e.message
        })
    }
}

const getUser = async(req,res,next)=>{
    const userId = req.user.id;
    try{
        const user = await userModel.findById(userId)
        return res.status(200).json({
            success:true,
            data:user
        })
    }
    catch(e){
        return res.status(400).json({
            success:false,
            message:e.message
        })
    }
}

const logOut = async(req,res,next)=>{
    try{
        const cookieOption = {
            expires:new Date(),
            httpOnly:true
        }
        res.cookie('token',null,cookieOption)
        res.status(200).json({
            success:true,
            message:"User Logged Out"
        })
    }  
    catch(err){
        res.status(400).json({
            success:false,
            message:err.message
        })
    }
}
module.exports={
    signUp,
    signIn,
    getUser,
    logOut
}