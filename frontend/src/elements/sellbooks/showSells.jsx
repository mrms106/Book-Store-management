import { useEffect, useState } from "react"
import { jsPDF } from "jspdf";
import ShowSellcard from "./showsellcard";
export default function Sells(){

    let[selldata,setselldata]=useState([])

  const sellData=async()=>{
    try{
        const responce=await fetch("http://localhost:8080/api/books/sell",{
            credentials:"include"
        })
        if(responce.ok){
        const data = await responce.json();
        setselldata(data.sells)
        }else{
            alert("error in fetch sell data")
        }
    }catch(err){
        console.log(err)
    }
  }
  useEffect(()=>{
    sellData()
  },[])

 
  console.log(selldata.date)
    return(
        <>
        <div className="main-sell-show">
            {selldata.map((sell,idx)=>(
               <ShowSellcard sell={sell} sellData={sellData}/>
                
            ))}
        
        </div>
        </>
    )
}