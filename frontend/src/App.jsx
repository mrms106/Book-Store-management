import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetBooks from './elements/showBooks/Books';
import Navbar from './elements/include/Navbar';
import AdBooks from './elements/addBooks/AdBooks';
import SignUp from './elements/user/signup';
import Login from './elements/user/login';
import PrivateRoute from './protected';
import UpdateBook from './elements/addBooks/updatebook';
import SellBook from './elements/sellbooks/sellBook';
import Sells from './elements/sellbooks/showSells';

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
            <Navbar isloggedIn={isloggedIn}/>
            <Routes>
              <Route path='/signup' element={<SignUp/>} />
              <Route path='/login' element={<Login />} />
              <Route element={<PrivateRoute isloggedIn={isloggedIn} />}>
                    <Route path="/addBook" element={<AdBooks />} />
                    <Route path='/' element={<GetBooks/>} />
                    <Route path="/update/:id" element={<UpdateBook />} />
                    <Route path="/sell/:id" element={<SellBook />} />
                    <Route path="/receipts" element={<Sells />} />

                </Route>
            </Routes>
        </Router>
    );
};

export default App;
