import { useState } from 'react';
import './adbook.css'
import AddInput from './addinputs';
export default function AdBooks(){

    let [form,setform]=useState({})

    const onINputChange=(event)=>{
        setform({...form,[event.target.name]:event.target.value})
    }

    const onFormSubmit=async(event)=>{
      event.preventDefault();
        try{
            const response= await fetch("http://localhost:8080/api/books/bookadd",{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(form)
            })
            if(response.ok){
                alert("the form is submitted")
            }else{
                alert("probkem in submission")
            }
        }catch(err){
            console.log(err)
        }

    }
    console.log(form)
    return(
        <>
        <div className="addBookform">
        <h3>Add New Book</h3>
        <form onSubmit={onFormSubmit} onChange={onINputChange}>
        <AddInput/>
        </form>
        </div>
        </>
    )
}