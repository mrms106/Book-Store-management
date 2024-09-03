import { useState } from 'react'
import './sellcard.css'
export default function SellCard({form,fetchData}){
    const[basket,setbasket]=useState(form.inBasket)

    const addBasket=async()=>{
  
        try{
          const responce=await fetch(`http://localhost:8080/api/books/add/${form._id}`,{
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
         
          // alert("added in basket")
          setbasket(!basket)
          await fetchData();
        }catch(err){
          console.log(err)
        }
      }
    return(
        <>
         <div className='book-details'>
            <div className="sell-card">
            <div className="sell-card-img"><img src={form.image}></img></div>
            <div className="sell-card-info">
                <p className="sell-text-title">Name: {form.title} </p>
                <p className="sell-text-body">Author:{form.author}</p>
                <p className="sell-text-body"><b>About:</b> &nbsp;{form.description}</p>
            </div>
            <div className="sell-card-footer">
            <span className="sell-text-title">₹{form.price}</span>
            <span className="sell-text-title stock">stock: {form.stock}</span>
            <button onClick={addBasket}>remove</button>
            </div></div>
        </div>
        </>
    )
}