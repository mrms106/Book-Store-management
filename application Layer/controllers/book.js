const books=require("../modules/book")

module.exports.getBook=async (req, res) => {
    try {
        const bookData = await books.find({});
        res.status(200).json({
            message: "Books fetched successfully",
            data: bookData,
        });
    } catch (err) {
        console.error("Error fetching books:", err);
        res.status(500).json({
            message: "Something went wrong",
            error: err.message,
        });
    }
}

module.exports.addBook=async (req, res) => {
    const addBook = req.body;
    console.log("Received book data:", addBook);
    
    try {
        const Adbook = new books(addBook);
        await Adbook.save();
        res.status(201).json({
            message: "The book was added successfully",
            book: Adbook,
        });
    } catch (err) {
        console.error("Error adding book:", err);
        res.status(500).json({
            message: "Something went wrong",
            error: err.message,
        });
    }
}

module.exports.delete=async(req,res)=>{
     const id=req.params.id
     try{
        await books.findByIdAndDelete(id)
        res.status(200).json({message:"the bookdata is deleted"})
     }catch(err){
        console.log(err,"deleting to the book")
        res.status(500).json({message:"error in deleting the book"})
     }
}