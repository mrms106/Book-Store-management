import { useNavigate } from 'react-router-dom';


export default function Bookcard({bookdata,idx}){
const navigate=useNavigate()
const deleteBook=async()=>{
  const responce=await fetch(`http://localhost:8080/api/books/delete/${bookdata._id}`,{
    method:"DELETE"
  })
  if(responce.ok){
    const result = await responce.json();
    alert("the book is deleted",result)
  }else(
    alert("error in deleting the book")
  )
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
 <span className="card-text">price: ₹{bookdata.price}</span>
 </p>
    <p>
    <button className="btn btn-primary" onClick={deleteBook}>remove</button>&nbsp;
    <button className="btn btn-primary">&nbsp;&nbsp;Sell&nbsp;&nbsp;</button>&nbsp;
    <button className="btn btn-primary" onClick={()=>navigate(`/update/${bookdata._id}`)}>Update</button>
    </p>
    
  </div>
</div>
        </>
    )
}