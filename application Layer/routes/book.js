const express=require("express")
const route=express.Router()
const BookController=require("../controllers/book")
const sellController=require("../controllers/sell")
const isLoggedIn=require("../middleware/isloggedin")

route.get("/book",isLoggedIn,BookController.getBook );
route.post("/bookadd", BookController.addBook);
route.delete("/delete/:id",BookController.delete)
route.post("/update/:id",BookController.update)
route.get("/update/:id",BookController.getupdate)

route.post("/sell/:id",sellController.sells)
route.get("/sell",sellController.showsells)


module.exports=route;