const express=require("express")
const route=express.Router()
const BookController=require("../controllers/book")
const isLoggedIn=require("../middleware/isloggedin")

route.get("/book",isLoggedIn,BookController.getBook );
route.post("/bookadd", BookController.addBook);
route.delete("/delete/:id",BookController.delete)


module.exports=route;