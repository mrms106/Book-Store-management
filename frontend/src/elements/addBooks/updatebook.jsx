import { useState,useEffect } from 'react';
import './adbook.css'
import TextField from '@mui/material/TextField';
import { useNavigate,useParams } from 'react-router-dom';

export default function UpdateBook(){

    let [form,setform]=useState({})

    const { id } = useParams(); 

    const fetchData=async()=>{
        try{
        const responce=await fetch(`http://localhost:8080/api/books/update/${id}`,{
            credentials:"include"
        })
        if(!responce.ok){
            throw new Error(`HTTP error! Status: ${responce.status}`); 
        }
        const data= await responce.json()
        setform(data.book)
        
        }catch(err){
            console.log(err)
        }
    }
   
    useEffect(()=>{
        fetchData()
    },[])

    const onINputChange=(event)=>{
        setform({...form,[event.target.name]:event.target.value})
    }

    const onFormSubmit=async(event)=>{
      event.preventDefault();
        try{
            const response= await fetch("http://localhost:8080/api/books/update",{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(form),
                credentials:"include"
            })
            if(response.ok){
                alert("the book is updated")
            }else{
                alert("problem in update the book")
            }
        }catch(err){
            console.log(err)
        }

    }
    return(
        <>
        <div className="addBookform">
        <h3>Update the Book data</h3>
        <form onSubmit={onFormSubmit} onChange={onINputChange}>
        <span>
        <TextField id="outlined-basic" label="title" variant="outlined" name='title' className='input' value={form.title}
          onChange={onINputChange} />
        <input value={form.title}></input>
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