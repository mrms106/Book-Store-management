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

module.exports.getupdate=async(req,res)=>{
    const id=req.params.id
    try{
      const book= await books.findById(id)
      res.status(200).json({message:"the data fetched success",
        book:book
      })

    }catch(err){
        res.status(500).json({
            message:"something went wrong",err
        })
        console.log(err)
    }
}

module.exports.update=async(req,res)=>{
    const id=req.params.id
    const updatedata=req.body
    try{

      const updateBook= await books.findByIdAndUpdate(id,updatedata,{ new: true})
      if (!updateBook) {
        return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'Book updated successfully', book: updateBook });
} catch (err) {
    console.error('Error updating book:', err);
    res.status(500).json({ message: 'Internal server error' });
}
};

module.exports.addBasket=async(req,res)=>{
  const booklId=req.params.id;
  const { inBasket } = req.body; 
//   console.log(inBasket)
  try{
    const book=await books.findByIdAndUpdate(booklId,{inBasket:inBasket},{ new: true } )
    res.status(200).json({
        message:"the book is added in basket",
        book: book,
    })
    if (!book) {
        return res.status(404).json({
          message: "Book not found",
        });
      }
  }catch(err){
    console.log(err)
    res.status(500).json({
        message:"problem in add the book"
    })
  }
}