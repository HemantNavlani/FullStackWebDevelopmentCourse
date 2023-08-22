const User = require('../models/userModel.js')

exports.home = (req,res)=>{
    res.send('Hello World')
}

exports.register = async(req,res)=>{
    try{
        const {name,email,password} = req.body

        if (!name || !email || !password){
            throw new Error('All Input Fields are required');
        }

         const userExists = await User.findOne({ email });
         if (userExists) {
            throw new Error('User already exists, Try to Login Instead');
        }

        const user = await User.create({
            name,
            email,
            password
        })
        res.status(200).json({
            success:true,
            message:'User registered succesfully',
            user
        })
    }
    catch (err){
        res.status(400).json({
            success:false,
            message:`Failed as -  ${err.message}`
        })
    }
}
exports.login = async(req,res)=>{
    try{
        const {email,password} = req.body
        if (!email || !password){
            throw new Error('All Input Fields are required');
        }

        const userExists = await User.findOne({ email });

        if (!userExists) {
           throw new Error('No account associated with this email');
       }
       else{
        if (userExists.password===password) {
            res.send('User Login Successfull')
        }
        else{
            throw new Error('Password is wrong');
        }
       }

    }
    catch (err){
        res.status(400).json({
            success:false,
            message:`Failed as -  ${err.message}`
        })
    }
}