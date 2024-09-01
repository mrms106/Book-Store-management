const sell= require("../modules/sell")
const books=require("../modules/book")

module.exports.sells=async(req,res)=>{
     
    const bookId=req.params.id;
    const sellData=req.body
    const sellStock=sellData.stock
    try{
        const book= await books.findById(bookId)
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        const bookStock=book.stock - sellStock

        if (bookStock < 0) {
            return res.status(400).json({ message: "Insufficient stock to complete the sale" });
        }

        await books.findByIdAndUpdate(bookId,{stock:bookStock},{new:true})

        await sell.create(sellData)

        res.status(200).json({ message: "The sale is successful" });
    }catch(err){
        console.log(err);
        res.status(500).json({ message: "The sale encountered an error", error: err.message });
    }
}

module.exports.showsells=async(req,res)=>{
    try{
     const sells=await sell.find({})
     res.status(200).json({
        message:"sells fetched success",
        sells:sells
     })
    }catch(err){
        console.log(err)
        res.status(500).json({
            message:"an error occure to fetch sells"
        })
    }
}