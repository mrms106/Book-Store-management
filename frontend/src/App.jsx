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
import Footer from './elements/include/footer';
import Basket from './elements/bookBasket/basket';
import Help from './elements/footerelements/help';
import Privacy from './elements/footerelements/privacy';
import Terms from './elements/footerelements/terms';
const App = () => {
let[curruser,setcurruser]=useState(null)
let[isloggedIn,setisloggedIn]=useState(null)
    const fetchuser=async()=>{
        try{
        const responce=await fetch("http://localhost:8080/api/auth/user",{
            
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
            <div className="content">
            <Routes>
                
              <Route path='/signup' element={<SignUp/>} />
              <Route path='/login' element={<Login />} />
              <Route element={<PrivateRoute isloggedIn={isloggedIn} />}>
                    <Route path="/addBook" element={<AdBooks />} />
                    <Route path='/' element={<GetBooks/>} />
                    <Route path="/update/:id" element={<UpdateBook />} />
                    <Route path="/sell/:id" element={<SellBook />} />
                    <Route path="/receipts" element={<Sells />} />
                    <Route path="/buybasket" element={<Basket />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    
                </Route>
                
            </Routes>
            </div>
            <Footer/>
        </Router>
    );
};

export default App;
