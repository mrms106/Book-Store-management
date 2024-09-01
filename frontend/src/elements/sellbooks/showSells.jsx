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

  const downloadReceiptPDF = (sell) => {
    const doc = new jsPDF();

    // Add receipt content
    doc.setFontSize(20);
    doc.text("Receipt for Sale", 20, 20);
    
    doc.setFontSize(12);
    doc.text(`Name: ${sell.name}`, 20, 40);
    doc.text(`Price: $${sell.price}`, 20, 50);
    doc.text(`Date: ${sell.date}`, 20, 60);
    doc.text(`Stock Sold: ${sell.stock}`, 20, 70);

    // Save the PDF with a filename
    doc.save(`receipt_${sell.name}.pdf`);
  };
  console.log(selldata.date)
    return(
        <>
        <div className="main-sell-show">
            {selldata.map((sell,idx)=>(
               <ShowSellcard sell={sell} downloadReceiptPDF={downloadReceiptPDF}/>
                
            ))}
        
        </div>
        </>
    )
}