const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    description: { type: String },
    image: { type: String,
        default:"https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop"

     },
     inBasket:{
        type:Boolean,
        default:false
     },
     location:{
      type:String,
      require:true
     },
     category:String
});

module.exports=mongoose.model("book",bookSchema)

