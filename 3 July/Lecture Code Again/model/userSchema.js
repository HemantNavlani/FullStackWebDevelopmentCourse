const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')
const{Schema} = mongoose

const userSchema = new Schema({
    name :{
        type:String,
        required:[true,'User name is required'],
        minLength:[5,'Name must be atleast 5 characters'],
        maxLength:[50,'Name must be less than 50 characters'],
        trim: true
    },
    email:{
        type: String,
        required:[true,'Email is required'],
        lowercase:true,
        unique: true,
        unique:[true,'Already Registered']
    },
    password:{
        type:String,
        select : false
    },
    forgotPassword:{ type:String },
    forgotPasswordExpiry:{ type:Date },
},
{timestamps:true}
);

//Password Encryption
userSchema.pre("save",async function(next){
    if (!this.isModified('password')){
        return next()
    }
    this.password = await bcrypt.hash(this.password,10)
    return next()
})

userSchema.methods = {
    jwtToken(){
        return JWT.sign(
            {id:this._id,email:this.email},
            process.env.SECRET,
            {expiresIn:'24h'}
        )
    },
}
const userModel = mongoose.model('user',userSchema)
module.exports=userModel;