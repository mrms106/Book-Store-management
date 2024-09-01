const mongoose=require("mongoose")

const sellSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    stock:{
        type:Number,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    bookname:{
        type:String,
        require:true
    }

})

module.exports=mongoose.model("sell",sellSchema)