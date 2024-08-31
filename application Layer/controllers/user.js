const passport=require("passport")
const User=require("../modules/user")

module.exports.register=async(req,res)=>{
    const{username,email,password}=req.body
    const user=new User({username,email})
    try{
     User.register(user,password,(err,user)=>{
        if(err){
            return res.status(500).json({ message: 'Registration failed', error: err.message });
        }
        passport.authenticate('local')(req,res,()=>{
            res.status(201).json({ message: 'Registration successful', user });
        })
     })
    }catch(err){
        console.log(err,"the user error")
    }
}

module.exports.login=(req,res)=>{
    res.status(200).json({ message: 'Login successful', user: req.user });
}

module.exports.user=(req,res)=>{
 const   user=req.body
    try{
    res.status(201).json({user})
    }catch(err){
        res.status(500).json({message:"error in get user"})
    }
}