import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetBooks from './elements/showBooks/Books';
import Navbar from './elements/include/Navbar';
import AdBooks from './elements/addBooks/AdBooks';


const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
              <Route path='/' element={<GetBooks/>} />
              <Route path='/addBook' element={<AdBooks/>} />
            </Routes>
        </Router>
    );
};

export default App;
