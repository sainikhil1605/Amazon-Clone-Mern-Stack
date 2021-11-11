const jwt=require('jsonwebtoken')
exports.getCart=(req,res)=>{
    const {token}=req.body;
    console.log(token);
    jwt.verify(token,'nikhil',(err,decoded)=>{
        console.log(decoded);
    }
}