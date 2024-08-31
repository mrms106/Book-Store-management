import TextField from '@mui/material/TextField';
import { useState } from 'react';
import './adbook.css'
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
        <span>
        <TextField id="outlined-basic" label="title" variant="outlined" name='title' className='input' />
        <TextField id="outlined-basic" label="author" variant="outlined" name='author' className='input'/>
        </span>
        <span>
        <TextField id="outlined-basic" label="price" variant="outlined" name='price' type='number' className='input' />
        <TextField id="outlined-basic" label="stock" variant="outlined" name='stock' type='number' className='input'/>
        </span>
        <TextField id="outlined-basic" label="description" variant="outlined" name='description' className='input'/>
        <TextField id="outlined-basic" label="Add image link" variant="outlined" name='image' type='link' className='input'/>
        <button>Add</button>
        </form>
        </div>
        </>
    )
}