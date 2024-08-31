import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetBooks from './elements/showBooks/Books';
import Navbar from './elements/include/Navbar';


const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
              <Route path='/' element={<GetBooks/>} />
            </Routes>
        </Router>
    );
};

export default App;
