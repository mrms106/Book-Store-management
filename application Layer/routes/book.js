const express=require("express")
const route=express.Router()
const BookController=require("../controllers/book")
const sellController=require("../controllers/sell")
const isLoggedIn=require("../middleware/isloggedin")

route.get("/book",isLoggedIn,BookController.getBook );
route.post("/bookadd",isLoggedIn, BookController.addBook);
route.delete("/delete/:id",isLoggedIn,BookController.delete)
route.post("/update/:id",isLoggedIn,BookController.update)
route.get("/update/:id",isLoggedIn,BookController.getupdate)
route.post("/add/:id",isLoggedIn,BookController.addBasket)

route.post("/sell/:id",isLoggedIn,sellController.sells)
route.post("/sell",isLoggedIn,sellController.sellsmulti)
route.get("/sell",isLoggedIn,sellController.showsells)
route.delete("/receipt/:id",isLoggedIn,sellController.deleteReceipt)

module.exports=route;