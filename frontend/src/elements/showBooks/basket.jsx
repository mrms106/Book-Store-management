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
    return(
        <>
        <div style={{display:"flex"}}>
           <div className="basket-card">
            {
                basketData.map((basketBook,idx)=>(
                    // <li key={idx}>{basketBook.title}</li>
                    <SellCard form={basketBook} />
                ))
            }
                
            </div>
            <div>
                <BasketBuy basketData={basketData}/>
            </div>
            </div>
           
        
        </>
    )
}