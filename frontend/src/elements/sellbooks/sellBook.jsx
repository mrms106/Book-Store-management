import TextField from '@mui/material/TextField';
import { useState,useEffect } from 'react';
import SellCard from './sellcard';
import {  useNavigate,useParams } from 'react-router-dom';
import { generateReceipt } from './receipt';
import PrintIcon from '@mui/icons-material/Print';


export default function SellBook(){
   
    let [data,setdata]=useState({})
    const { id } = useParams(); 
    let [form,setform]=useState({})
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
        setdata(data.book)
        setform(prevForm => ({
            ...prevForm,
            bookname: data.book.title,  
            price: data.book.price 
        }));
        
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    const onInputChange=(event)=>{
        const { name, value } = event.target;

        setform((prevform)=>{
            const updatedForm = { ...prevform, [name]: value };
            if (name === 'stock') {
                updatedForm.price = data.price * value;
              }
              return updatedForm
        })
    }
    const onFormSubmit=async (event)=>{
         event.preventDefault()
         if(form.stock>data.stock || form.stock<1){
            alert("Plese enter the valid stock")
            return;
         }
         try{
            const responce=await fetch(`http://localhost:8080/api/books/sell/${id}`,{
                method:"POST",
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(form)

            })
            if(responce.ok){
                const  sell=({
                    name:form.name,
                    phone:form.phone,
                    date:new Date(),
                    bookdata:[{
                        price:form.price,
                        stock: form.stock,
                        bookname:form. bookname,
                 }]
                })
                await generateReceipt(sell)
                // alert("the receipt is generated")
                navigate("/receipts")
            }else{
                alert("problem in generating the receipt")
            }
         }catch(err){
            console.log(err)
            alert("somethin went wrong")
         }
    }
    return(
        <>
        <div className="sellbook">
          <div className="addBookform ">
        <h3>Sell Book</h3>
        <form onSubmit={onFormSubmit} onChange={onInputChange}>
        <span>
        <TextField id="outlined-basic" label="Buyer name" variant="outlined" name='name' className='input' required/>
        <TextField id="outlined-basic" label="Buyer phone" variant="outlined" name='phone' type='number' className='input' required/>
        </span>
        <span>
        <TextField id="outlined-basic" label="price" variant="outlined" name='price' type='number' className='input' defaultValue={0}  value={form.price } disabled focused/>
        <TextField id="outlined-basic" label="stock" 
        variant="outlined" name='stock' 
        type='number' className='input'
         defaultValue={0} required/>
        </span>
        <TextField id="outlined-basic" label="Book-Name" variant="outlined" name='bookname' type='text' className='input' value={form.bookname} required focused/>
        <button >Get receipt <PrintIcon/></button>
        </form>
        </div>
        <SellCard form={data}/>
        </div>
        </>
    )
}