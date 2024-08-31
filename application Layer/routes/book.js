const express=require("express")
const route=express.Router()
const BookController=require("../controllers/book")

route.get("/book",BookController.getBook );
route.post("/bookadd", BookController.addBook);


module.exports=route;