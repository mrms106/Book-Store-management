    const mongoose=require("mongoose")
    const passportLocalMongoose=require("passport-local-mongoose")

    const userScema=new mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true, // Ensure the username is unique
        },
        email:{
        type:String,
        require:true
        }
    })
    userScema.plugin(passportLocalMongoose);
    module.exports=mongoose.model("user",userScema)