import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetBooks from './elements/showBooks/Books';
import Navbar from './elements/include/Navbar';
import AdBooks from './elements/addBooks/AdBooks';
import SignUp from './elements/user/signup';
import Login from './elements/user/login';


const App = () => {
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
