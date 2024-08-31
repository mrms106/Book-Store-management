import { useEffect, useState } from "react"
import Bookcard from "./bookcard"
import './Book.css'

export default function GetBooks(){
let [book,setbook]=useState([])

    const fetchData=async()=>{
        try{
        const responce=await fetch("http://localhost:8080/api/books/book")
        if(!responce.ok){
            throw new Error(`HTTP error! Status: ${responce.status}`); 
        }
        const data= await responce.json()
        setbook(data.data)
        
        }catch(err){
            console.log(err)
        }
    }
    console.log(book)
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <>
        <div className="Main-Book">
        <h1>Book list</h1>
        <div className="bookcard">
       
        {
            book.map((bookdata,idx)=>(
               
                <Bookcard bookdata={bookdata} key={idx}/>
               
            ))
        } </div>
       </div>
        </>
    )
}