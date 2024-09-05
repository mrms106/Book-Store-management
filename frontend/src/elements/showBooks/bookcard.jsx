import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Bookcard({bookdata,idx,fetchData,addmulti}){
  const[basket,setbasket]=useState(bookdata.inBasket)

const navigate=useNavigate()
const deleteBook=async()=>{
  const responce=await fetch(`http://localhost:8080/api/books/delete/${bookdata._id}`,{
    method:"DELETE"
  })
  if(responce.ok){
    const result = await responce.json();
    fetchData()
    alert("the book is deleted",result)
  }else(
    alert("error in deleting the book")
  )
}

const addBasket=async()=>{
  
  try{
    const responce=await fetch(`http://localhost:8080/api/books/add/${bookdata._id}`,{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ inBasket: !basket }),
    })
    if(!responce.ok){
      alert("problem in add basket")
      return;
    }
    fetchData()
    // alert("added in basket")
    setbasket(!basket)
  }catch(err){
    console.log(err)
  }
}


    return(
        <>
    <div className="card maincard" style={{width: "18rem"}}  >
  <img src={bookdata.image} className="card-img-top" alt="Book Image"/>
  <div className="card-body">
    <p>Name: <b className="card-title">{bookdata.title}</b></p>
    <p>author: <b className="card-title">{bookdata.author}</b></p>
    <p className="card-text">About : {bookdata.description}</p>
 <p>
 <span className="card-text">Stock: {bookdata.stock}</span> &nbsp; &nbsp;
 <span className="card-text">price: ₹{bookdata.price}</span><br></br>
 <span className="card-text">location: {bookdata.location}</span><br></br>
 <span className="card-text">category: {bookdata.category}</span>
 </p>
    <p>
   
    {addmulti?
    <button className="btn btn-primary" onClick={addBasket}>{basket ? "remove from basket" : <>add in basket  <AddShoppingCartIcon /></>}</button>:<>
    <button className="btn btn-secondary" onClick={deleteBook}>remove  <DeleteIcon fontSize="small" /></button>
    <button className="btn btn-success" onClick={()=>navigate(`/update/${bookdata._id}`)}>Update</button>
    <button  className="btn btn-primary" onClick={()=>navigate(`/sell/${bookdata._id}`)}>Sell<AddShoppingCartIcon/></button></>
}
    </p>
    
  </div>
</div>
        </>
    )
}