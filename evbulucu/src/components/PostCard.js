import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Card, Button } from 'react-bootstrap';
import Images from './Images';


const PostCard = () => {
    return (
        <div className="container-fluid">
        <div className="mt-5 p-4"></div>
            <Card className='p-2'>
                <Card.Img variant="top" src="rental-image.jpg" alt="Rental Property" />
                <Card.Body>
                    <Card.Title>New House</Card.Title>
                    <Images />
                    <br/>
                    <Card.Text>House is so and so.</Card.Text>
                    <ul>
                        <li>Price: 4500</li>
                        <li>Location: Guzelyurt</li>
                        <li>Availability: Vacant</li>
                        <li>Room Types: roomtypes</li>
                        <li>Furnishing: furnished</li>
                        <li>Amenities: Amenities</li>
                        <li>Security: none</li>
                    </ul>
                    <Card.Text>Contact: email</Card.Text>
                    <Button variant="primary">Learn More</Button>
                </Card.Body>
            </Card>
            <br/>
        </div>
    );
};

export default PostCard;