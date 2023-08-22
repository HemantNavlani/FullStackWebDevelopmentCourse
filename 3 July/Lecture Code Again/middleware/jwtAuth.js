const JWT = require('jsonwebtoken')
const jwtAuth = (req,res,next)=>{
    const token = (req.cookies && req.cookies.token) || null;
    if (!token){
        res.status(400).json({
            success:false,
            message:"Not Authorized"
        })
    }
    try{
        const payLoad = JWT.verify(token,process.env.SECRET)
        req.user = {id:payLoad.id, email:payLoad.email}
    }
    catch(e){
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
    next()
}

module.exports=jwtAuth