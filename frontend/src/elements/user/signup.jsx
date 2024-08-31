import { useState } from "react"
import TextField from '@mui/material/TextField';
import '../addBooks/adbook.css'

export default function SignUp(){
    let [form,setform]=useState({})
    const onInputChange=(event)=>{
        setform({...form,[event.target.name]:event.target.value})
    }
    const onFormSubmit=async(event)=>{
        event.preventDefault()
        try{
            const responce= await fetch("",{
                method:"POST",
                headers:{
                    'Content-Type' : 'application/json'
                },
                body:JSON.stringify(form)
            })
            if(responce.ok){
                alert("the user is registered successfull")
            }else(
                alert("the user is already present on system")
            )
        }catch(err){
            console.log(err,"something went wroong")
            alert("something went wrong")
        }
    }
    return(
        <>
        <div className="addBookform">
        <h3>Sign-Up</h3>
        <form onSubmit={onFormSubmit} onChange={onInputChange}>
        <TextField id="outlined-basic" label="username" variant="outlined" name='username' type="username" className='input' required />
        <TextField id="outlined-basic" label="email" variant="outlined" name='email' className='input' type="email" required/>
        <TextField id="outlined-basic" label="password" variant="outlined" name='password' type='password' className='input' required />
        <button>Sign-Up</button>
        </form>
        </div>
        </>
    )
}