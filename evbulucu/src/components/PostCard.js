import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBuilding, faBed, faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import Images from './Images';
import NavCard from './NavCard';
import './PostCard.css';

const PostCard = () => {
  const [data, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get('http://localhost:3000/api/posts/house-post');
        setPostData(response.data);
        console.log('Data retrieved in postcard:', response.data);
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='mt-4 border wide border-2 border-lg-only'>
      {data.length === 0 ? (
        <div className='vh-100'> No post data yet </div>
      ) : (
        data.map((post) => (
          <Row key={post.id} className='justify-content-center d-flex'>
            <Col xs={12} md={8} lg={12}>
              <Card className='card border-0 border-bottom rounded-0 shadow no-shadow'>    
                  <div className='border no-border-lg'>
                    <Images imageFilenames={post.image_filenames} />
                  </div>
                  <NavCard Data={post} />
                <Card.Body>
                  <div className='listing-details-heading font-weight-bold text-center'>
                    <div class='card-price'>
                      <strong>{post.price}</strong>
                    </div>
                    <span className='city text-muted d-flex justify-content-start'>
                      <h5>{post.city}</h5>
                    </span>
                  </div>
                  <div className='listing-details text-muted font-weight-light'>
                    <ul className='list-unstyled'>
                      <li className='list-block-item'>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className='detail-icon' />
                        <span className='m-2 detail-value'>{post.address}</span>
                      </li>
                      <li className='list-block-item'>
                        <FontAwesomeIcon icon={faBuilding} className='detail-icon' />
                        <span className='detail-value m-2'>
                          {post.type_of_property} - {post.beds} beds! {post.baths} Baths
                        </span>
                      </li>
                      <li className='list-block-item'>
                        <FontAwesomeIcon icon={faBed} className='detail-icon' />
                        <span className='detail-value m-2'>{post.rooms} rooms Available</span>
                      </li>
                    </ul>
                  </div>

                  <div className='d-flex justify-content-center'>
                    <button className='btn btn-primary m-2'>
                      <span className='m-1'>
                        <FontAwesomeIcon icon={faUser} className='button-icon' />
                      </span>
                      WhatsApp
                    </button>
                    <button className='btn btn-outline-primary m-2'>
                      <span className='m-1'>
                        <FontAwesomeIcon icon={faPhone} className='button-icon' />
                      </span>
                      Call
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))
      )}
    </div>
  );
};

export default PostCard;
