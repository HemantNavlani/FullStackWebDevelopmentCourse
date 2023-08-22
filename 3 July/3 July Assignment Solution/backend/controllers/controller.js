const emailValidator = require('email-validator');
const userModel = require('../models/userSchema');
const bcrypt = require('bcrypt')

const signUp = async(req,res)=>{
    const {name,userName,email,password,confirmPassword,bio} = req.body;
    console.log(name,userName,email,password,confirmPassword,bio)

    if (!name || !userName || !email || !password || !confirmPassword){
        return res.status(400).json({
            success:false,
            message:"Please fill out the required fields"
        })
    }

    const validateEmail = emailValidator.validate(email);
    if (!validateEmail){
        return res.status(400).json({
            success:false,
            message:'Invalid Email'
        })
    }

    if (password!==confirmPassword){
        return res.status(400).json({
            success:false,
            message:'Password does not match with confirm password'
        })
    }

    try{
        const userInfo = new userModel(req.body)
        const result = await userInfo.save();

        return res.status(200).json({
            success:true,
            data:result
        })
    }
    catch(e){
        if (e.code===11000){
            return res.status(400).json({
                success:false,
                message:'Account already registered, Try to login',
            })
        }
        return res.status(400).json({
            success:false,
            message:e.message
        })
    }
}

const logIn = async(req,res)=>{
    const {email,password} = req.body;
    if (!email || !password){
        return res.status(400).json({
            success:false,
            message:'All field are mandatory',
        })
    }

    try{
        const user = await userModel.findOne({email}).select('+password')
        if (!user || !(await bcrypt.compare(password,user.password))){
            return res.status(400).json({
                success:false,
                message:'Invalid Credentials'
            })
        }

        const token = user.jwtToken();
        user.password=undefined;
        const cookieOption = {
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
        res.status(400).json({
            success:false,
            message:e.message
        })
    }
}

const getUser = async(req,res)=>{
    const userid = req.user.id;
    try{
        const user = await userModel.findById(userid);
        return res.status(200).json({
            success:true,
            data:user
        })
    }
    catch(e){
        res.status(400).json({
            success:false,
            message:e.message
        })
    }
}
module.exports={
    signUp,
    logIn,
    getUser
}