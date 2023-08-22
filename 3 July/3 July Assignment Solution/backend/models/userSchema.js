const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')
const userSchema =  new mongoose.Schema({
     name:{
        type:String,
        required:[true,'Name is required'],
        minLength:[5,'Name must be atleast 5 characters'],
        maxLength:[50,'Name must be maximum of 50 charachters'],
        trim:true
    },
    userName:{
        type:String,
        required:[true,'User Name is Required'],
        minLength:[5,'User Name must be atleast 5 characters'],
        maxLength:[50,'User Name must be maximum of 50 charachters'],
        trim:true,
        lowercase:true
    },
    email:{
        type: String,
        required:[true, 'Email is required'],
        unique: [true,'Already Registered'],
        lowercase : true,
    },
    password:{
        type:String,
        select:false
    },
    bio:{
        type :String,
        maxLength:[200,'Bio should be under 200 words']
    }
},
{
    timestamps:true
}
)

userSchema.pre('save',async function(next){
    if (!(this.isModified('password'))) return next();
    this.password = await bcrypt.hash(this.password,10);
    return next();
})

userSchema.methods={
    jwtToken(){
        return JWT.sign(
            {id:this._id,email:this.email},
            process.env.SECRET,
            {expiresIn:'24h'}
        )
    }
}
const userModel = mongoose.model('user',userSchema);
module.exports=userModel;