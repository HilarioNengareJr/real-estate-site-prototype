import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Listing from './components/Listing';
import CreatePost from './components/CreatePost';
import UserProfile from './components/UserProfile';
import EditPost from './components/EditPost';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/listings' element={<Listing />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/edit/:postId' element={<EditPost />} />
      </Routes>
    </Router>
  );
}


export default App;
