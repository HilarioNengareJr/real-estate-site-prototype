import React, { useState } from 'react';
import './CreatePost.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navbar, Container, Form, FormControl, Modal, Nav } from 'react-bootstrap';

const CreatePost = () => {

    const [imageFiles, setImageFiles] = useState([]);
    const [details, setDetails] = useState({
        wifi: false,
        busStopDistance: '',
        runningWater: false,
        market: '',
        rooms: '',
        school: '',
        parking: '',
    });


    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setImageFiles(files);
    };

    const handleInputChange = (event) => {
        const { name, type, value, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setDetails((prevDetails) => ({
            ...prevDetails,
            [name]: newValue,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <div className='container'>
            <Navbar id="navbarOnPost" className="navbarOnPost d-flex justify-content-center fixed-top bg-dark navbar-dark mb-3" expand="lg">
                <h1 className='text-center new-listing'>New Listing</h1>
            </Navbar>
            <div className='row mx-auto'>

                <div className='col-lg-6 col-12 ms-3'>
                    <form className='upload-form ' onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <span className='m-4'><h3>Gallery</h3></span>
                            </div>
                            <div className='col-6'>
                                <label htmlFor='images'>Upload Images:</label>
                            </div>
                            <div className='col-6'>
                                <input
                                    name='images'
                                    className='shadow-none'
                                    type="file"
                                    multiple
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>
                        <span className='m-4'><h3>Address</h3></span>
                        <span className='m-4'><h3>Overview</h3></span>
                        <div className='row'>
                            <div className='col-6'>
                                <label htmlFor='wifi'>WiFi:</label>
                            </div>
                            <div className='col-6'>
                                <input
                                    className='shadow-none'
                                    type="checkbox"
                                    name="wifi"
                                    checked={details.wifi}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <hr className='' />
                        <div className='row'>
                            <div className='col-6'>
                                <label htmlFor='busStopDistance'>Bus Stop Distance:</label>
                            </div>
                            <div className='col-6'>
                                <input
                                    className='shadow-none w-75 border-1 rounded p-3'
                                    type="text"
                                    name="busStopDistance"
                                    value={details.busStopDistance}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <hr className='' />
                        <div className='row'>
                            <div className='col-6'>
                                <label htmlFor='running-water'>Running water:</label>
                            </div>
                            <div className='col-6'>
                                <input
                                    className='shadow-none'
                                    type='checkbox'
                                    name='running-water'
                                    value={details.runningWater}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <hr className='' />
                        <div className='row'>
                            <div className='col-6'>
                                <label htmlFor='parking'>Parking:</label>
                            </div>
                            <div className='col-6'>
                                <input
                                    className='shadow-none'
                                    type='checkbox'
                                    name='parking'
                                    value={details.parking}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <hr className='' />
                        <div className='row'>
                            <div className='col-6'>
                                <label htmlFor='school'>School:</label>
                            </div>
                            <div className='col-6'>
                                <input
                                    className='shadow-none'
                                    type='checkbox'
                                    name='school'
                                    value={details.school}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <hr className='' />
                        <div className='row'>
                            <div className='col-6'>
                                <label htmlFor='rooms'>Rooms:</label>
                            </div>
                            <div className='col-6'>
                                <input
                                    className='shadow-none'
                                    type='checkbox'
                                    name='rooms'
                                    value={details.rooms}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='d-flex justify-content-center text-center mb-3'>
                <button className='btn p-3 mx-auto' type="submit">okay</button>
            </div>
        </div>
    );
};

export default CreatePost;
