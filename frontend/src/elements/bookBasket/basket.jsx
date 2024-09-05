import { useEffect, useState } from "react";
import SellCard from "../sellbooks/sellcard";
import './basket.css'
import BasketBuy from "./basketBuy";

export default function Basket(){
    let [books,setbooks]=useState([])
     const fetchData=async()=>{
        try{
        const responce=await fetch("http://localhost:8080/api/books/book",{
            credentials:"include"
        })
        if(!responce.ok){
            throw new Error(`HTTP error! Status: ${responce.status}`); 
        }
        const data= await responce.json()
        setbooks(data.data)
        
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    const basketData = books.filter((book) => {
        return book.inBasket === true;
    });
    if(basketData.length<=0){
        return(
            <h3 style={{textAlign:"center"}}>
                Add the books In basket to sell
            </h3>
        )
    }
    return(
        <>
        <div className="basket-card-main">
           <div className="basket-card">
            
            {
                basketData.map((basketBook,idx)=>(
                    // <li key={idx}>{basketBook.title}</li>
                    <SellCard form={basketBook} key={idx} fetchData={fetchData} />
                ))
            }
                
            </div>
            <div className="basket-inputs">
                <h2>Buyer details</h2>
                <BasketBuy basketData={basketData} />
            </div>
            </div>
           
        
        </>
    )
}