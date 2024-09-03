import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Bookcard({bookdata,idx,fetchData}){
  const[basket,setbasket]=useState(false)

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
  setbasket(true)
  try{
    const responce=await fetch(`http://localhost:8080/api/books/add/${bookdata._id}`,{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ inBasket: true }),
    })
    if(!responce.ok){
      alert("problem in add basket")
      return;
    }
    alert("added in basket")
  }catch(err){
    console.log(err)
  }
}
console.log(basket,"the basket value")

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
 <span className="card-text">price: ₹{bookdata.price}</span>
 </p>
    <p>
    <button className="btn btn-primary" onClick={deleteBook}>remove</button>&nbsp;
    <button className="btn btn-primary" onClick={()=>navigate(`/sell/${bookdata._id}`)}>&nbsp;&nbsp;Sell&nbsp;&nbsp;</button>&nbsp;
    <button className="btn btn-primary" onClick={()=>navigate(`/update/${bookdata._id}`)}>Update</button>
    <button className="btn btn-primary" onClick={addBasket}>Add</button>
    </p>
    
  </div>
</div>
        </>
    )
}