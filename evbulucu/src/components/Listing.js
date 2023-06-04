import React from 'react';
import PostCard from './PostCard';
import NavBar from './NavBar';
import './Listing.css'; // Import the CSS file for styling

const Listing = () => {
  return (
    <div className="container-fluid flex-sm-nowrap">
      <NavBar />
      <PostCard />
    </div>
  );
}

export default Listing;
