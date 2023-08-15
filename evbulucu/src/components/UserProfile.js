import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, Carousel, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBuilding, faBed, faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import './UserProfile.css';
import NavCard from './NavCard';
import './PostCard.css';
import NavBar from './NavBar';

const UserProfile = () => {
    const [listings, setListings] = useState([]);
    const [user, setUser] = useState(null);

    const fetchUserListings = async () => {
        try {
            const response = await axios.get('/api/users/check-auth');
            const userData = response.data.user;

            if (userData) {
                setUser(userData);
                const listingsResponse = await axios.get(`/api/posts/${userData.id}/profile`);
                setListings(listingsResponse.data);
            }
        } catch (error) {
            console.error('Error fetching user listings', error);
        }
    }

    useEffect(() => {
        fetchUserListings();
    }, []);

    const handleDeleteListing = async (listingId) => {
        try {
            await axios.delete(`/api/posts/${listingId}`);
            fetchUserListings();
        } catch (error) {
            console.error('Error deleting listing', error);
        }
    }

    return (
        <div className='container-fluid'>
            <NavBar />
            <div className='mt-4  wide  mb-4'>
                <hr />
                {listings.length === 0 ? (
                    <div className='vh-100'> No post data yet </div>
                ) : (
                    listings.map((listing) => (
                        <Row key={listing.id} className='justify-content-center d-flex'>
                            <Col xs={12} md={12} lg={6}>
                                <Card className='card rounded-0 shadow no-shadow border-2 border border-lg-only mb-3'>
                                    <small className='text-muted m-2'>
                                        Enlisted on {listing.created_at}
                                    </small>

                                    <div className='border no-border-lg'>
                                        <Carousel interval={null} indicators={false}>
                                            {listing.image_filenames.map((image, index) => (
                                                <Carousel.Item key={index}>
                                                    <figure className='card-banner'>
                                                        <img
                                                            className='carousel-image d-block w-100'
                                                            src={`/uploads/${image}`}
                                                            alt={`Slide ${index}`}
                                                        />
                                                    </figure>
                                                </Carousel.Item>
                                            ))}

                                        </Carousel>
                                    </div>
                                    <NavCard Data={listing} />
                                    <Card.Body>
                                        <div className='listing-details-heading font-weight-bold text-center'>
                                            <div class='card-price'>
                                                <strong>{listing.price}</strong>
                                            </div>
                                            <span className='city text-muted d-flex justify-content-start'>
                                                <h5>{listing.city}</h5>
                                            </span>
                                        </div>
                                        <div className='listing-details text-muted font-weight-light'>
                                            <ul className='list-unstyled'>
                                                <li className='list-block-item'>
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} className='detail-icon' />
                                                    <span className='m-2 detail-value'>{listing.address}</span>
                                                </li>
                                                <li className='list-block-item'>
                                                    <FontAwesomeIcon icon={faBuilding} className='detail-icon' />
                                                    <span className='detail-value m-2'>
                                                        {listing.type_of_property} - {listing.beds} beds! {listing.baths} Baths
                                                    </span>
                                                </li>
                                                <li className='list-block-item'>
                                                    <FontAwesomeIcon icon={faBed} className='detail-icon' />
                                                    <span className='detail-value m-2'>{listing.rooms} rooms Available</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className='d-flex justify-content-center'>
                                            <Link to={`/edit/${listing.id}`}> <button className='btn btn-secondary text-white m-2'>

                                                Edit

                                            </button> </Link>
                                            <button className='btn btn-danger text-white m-2' onClick={handleDeleteListing}>
                                                Delete
                                            </button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    ))
                )}
            </div>
        </div >
    );
};

export default UserProfile;
