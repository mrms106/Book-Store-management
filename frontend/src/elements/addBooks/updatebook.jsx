import { useState,useEffect } from 'react';
import './adbook.css'
import TextField from '@mui/material/TextField';
import { useNavigate,useParams } from 'react-router-dom';

export default function UpdateBook(){

    let [form,setform]=useState({})
    const { id } = useParams(); 
const navigate=useNavigate()
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
            const response= await fetch(`http://localhost:8080/api/books/update/${id}`,{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(form),
                credentials:"include"
            })
            if(response.ok){
                alert("the book is updated")
                navigate("/")
            }else{
                alert("problem in update the book")
            }
        }catch(err){
            console.log(err)
        }

    }
    return(
        <>
        <div className="addBookform updatebook">
        <h3>Update the Book data</h3>
        <form onSubmit={onFormSubmit}  >
        <span>
        <TextField id="outlined-required" label="title"  name='title' className='input'
          value={form.title}
          onChange={onINputChange}  focused/>
          
          
        <TextField id="outlined-basic" label="author" variant="outlined" name='author' className='input'
        value={form.author}
        onChange={onINputChange} focused/>
        </span>
        <span>
        <TextField id="outlined-basic" label="price" variant="outlined" name='price' type='number' className='input'
        value={form.price}
        onChange={onINputChange}  focused/>
        <TextField id="outlined-basic" label="stock" variant="outlined" name='stock' type='number' className='input'
        value={form.stock}
        onChange={onINputChange} focused/>
        </span>
        <TextField id="outlined-basic" label="location" variant="outlined" name='location' type='text' className='input'
        value={form.location}
        onChange={onINputChange} focused/>
         <TextField id="outlined-basic" label="category" variant="outlined" name='category' type='text' className='input'
        value={form.category}
        onChange={onINputChange} focused/>
        <TextField id="outlined-basic" label="description" variant="outlined" name='description' className='input'
        value={form.description}
        onChange={onINputChange} focused/>
         <img src={form.image} alt={form.title}></img>
        <TextField id="outlined-basic" label="Add image link" variant="outlined" name='image' type='link' className='input'
        value={form.image}
        onChange={onINputChange} focused/>
        <button>Add</button>
       
        </form>
        </div>
        </>
    )
}