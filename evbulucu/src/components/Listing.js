import React from 'react';
import PostCard from './PostCard';
import NavBarOnPost from './NavBarOnPost';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './Listing.css';

const Listing = () => {
  return (
    <div className="container">
      <div className="mb-5">
        <NavBarOnPost />
      </div>
      <div className="row mt-5 ">
        <div className="col-md-8">
          <div className="mt-4">
            <PostCard />
          </div>
        </div>
        <div className="col-md-4 d-none d-md-flex justify-content-center align-items-center">
          <div className="position-fixed top-50 end-0 translate-middle-y w-25 m-4">
            <Sidebar className="sidebar" />
          </div>
        </div>
      </div>
      <div className='mt-3'>
        <Footer />
      </div>
    </div>
  );
};

export default Listing;
