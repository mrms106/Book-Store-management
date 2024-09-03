const sell= require("../modules/sell")
const books=require("../modules/book")

module.exports.sells=async(req,res)=>{
     
    const bookId=req.params.id;
    const sellData=req.body
    console.log(sellData)
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
         const sellcreate={
            name:sellData.name,
            phone:sellData.phone,
            date:sellData.date,
            bookdata:{
                price: sellData.price,
                stock: sellData.stock,
                bookname: sellData.bookname,
            }
         }
        await sell.create(sellcreate)

        res.status(200).json({ message: "The sale is successful" });
    }catch(err){
        console.log(err);
        res.status(500).json({ message: "The sale encountered an error", error: err.message });
    }
}

module.exports.sellsmulti = async (req, res) => {
    const sellData = req.body;

    if (Array.isArray(sellData.books) && sellData.books.length > 0) {
        // Multiple book sale
        try {
            const bulkOperations = sellData.books.map(async (book) => {
                const bookId = book.bookId;
                const sellStock = book.stock;

                const bookDoc = await books.findById(bookId);
                if (!bookDoc) {
                    throw new Error(`Book with ID ${bookId} not found`);
                }

                const bookStock = bookDoc.stock - sellStock;
                if (bookStock < 0) {
                    throw new Error(`Insufficient stock for book ID ${bookId}`);
                }

                await books.findByIdAndUpdate(bookId, { stock: bookStock,inBasket:false }, { new: true });

                const sellRecord = {
                    name: sellData.name,
                    phone: sellData.phone,
                    date: sellData.date,
                    bookdata:sellData.books.map(book=>({
                        price: book.price,
                        stock: book.stock,
                        bookname: book.title
                    }))
                };

                await sell.create(sellRecord);
            });

            await Promise.all(bulkOperations);
            res.status(200).json({ message: "All sales were successful" });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Error during multiple book sale", error: err.message });
        }
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