import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetBooks from './elements/showBooks/Books';
import Navbar from './elements/include/Navbar';
import AdBooks from './elements/addBooks/AdBooks';
import SignUp from './elements/user/signup';
import Login from './elements/user/login';


const App = () => {
let[curruser,setcurruser]=useState(null)
let[isloggedIn,setisloggedIn]=useState(null)
    const fetchuser=async()=>{
        try{
        const responce=await fetch("http://localhost:8080/api/auth/user",{
            credentials:"include"
        })
        if(!responce.ok){
            console.log("Something went wrong");
                setIsLoggedIn(false);
                return; 
        }
        const data= await responce.json()
        setcurruser(data)
        setisloggedIn(true)
    }catch(err){
        console.log(err)
        setisloggedIn(false)
    }
    }
console.log(curruser)
console.log(isloggedIn)
    useEffect(()=>{
        fetchuser()
    },[])
if(isloggedIn===null){
    return <p>LOading</p>
}
    return (
        <Router>
            <Navbar/>
            <Routes>
              <Route path='/' element={<GetBooks/>} />
              <Route path='/addBook' element={<AdBooks/>} />
              <Route path='/signup' element={<SignUp/>} />
              <Route path='/login' element={<Login/>} />

            </Routes>
        </Router>
    );
};

export default App;
