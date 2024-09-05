import { useEffect, useState } from "react"
import { jsPDF } from "jspdf";
import TextField from '@mui/material/TextField';
import ShowSellcard from "./showsellcard";
export default function Sells(){

    let[selldata,setselldata]=useState([])
    let[search,setSearch]=useState("")

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
 
  const filtersells=selldata.filter((datasell)=>
      datasell.name.toLowerCase().includes(search.toLowerCase()) ||
      datasell.date.toLowerCase().includes(search.toLowerCase())
  )
 
//   console.log(selldata.date)
if(filtersells.length<=0){
    return(
        <h3 style={{textAlign:"center"}}>
            there Is no receipt is Available
        </h3>
    )
}
    return(
        <>
     <TextField style={{marginLeft:"20px"}} id="outlined-basic" label="Search-receipt" variant="outlined"  onChange={(e) => setSearch(e.target.value)} />
      <div className="main-sell-show">
            
            {filtersells.map((sell,idx)=>(
               <ShowSellcard sell={sell} key={idx} sellData={sellData}/>
                
            ))}
        
        </div>
        </>
    )
}