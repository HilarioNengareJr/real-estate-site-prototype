import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import PictureFiles from './components/PictureFiles';
import Register from './components/Register';
import Listing from './components/Listing';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/listings' element={<Listing />} />
        <Route path='/picturefiles' element={<PictureFiles />} />
      </Routes>
    </Router>
  );
}


export default App;
