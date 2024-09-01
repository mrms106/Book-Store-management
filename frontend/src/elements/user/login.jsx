import { useState} from "react"
import TextField from '@mui/material/TextField';
import '../addBooks/adbook.css'
import'./login.css'
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const navigate = useNavigate();
    let [form,setform]=useState({})
    const onInputChange=(event)=>{
        setform({...form,[event.target.name]:event.target.value})
    }
    const onFormSubmit=async(event)=>{
        event.preventDefault()
        try{
            const responce= await fetch("http://localhost:8080/api/auth/login",{
                method:"POST",
                headers:{
                    'Content-Type' : 'application/json'
                },
                body:JSON.stringify(form),
                credentials:"include"
            })
            if(responce.ok){
                alert("User log In successfull")
              navigate("/")
            }else(
                alert("problem in login")
            )
        }catch(err){
            console.log(err,"something went wroong")
            alert("something went wrong")
        }
    }
    return(
        <>
        <div className="addBookform login">
        <h3>Login</h3>
        <form onSubmit={onFormSubmit} onChange={onInputChange}>
        <TextField id="outlined-basic" label="username" variant="outlined" name='username' type="username" className='input' required />
        <TextField id="outlined-basic" label="password" variant="outlined" name='password' type='password' className='input' required />
        <button>Login</button>
        </form>
        </div>
        </>
    )
}