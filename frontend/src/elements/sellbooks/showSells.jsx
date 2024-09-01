import { useEffect, useState } from "react"

export default function Sells(){

    let[selldata,setselldata]=useState([])

  const sellData=async()=>{
    try{
        const responce=await fetch("",{
            credentials:"include"
        })
        if(responce.ok){
        const data=responce.json()
        setselldata(data.sellsdata)
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
    return(
        <>
        <ul>
            {selldata.map((sell,idx)=>(
                <li>{sell.name}</li>
            ))}
        </ul>
          
        </>
    )
}