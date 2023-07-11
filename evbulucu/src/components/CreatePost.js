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
          <div className='row p-3 mx-auto'>
           
            <div className='col-lg-6 col-12 ms-3'>
              <form className='upload-form'>
                <div className='mb-4'>
                  <h3 className='section-title'>Gallery</h3>
                  <div className='input-group'>
                    <div className='custom-file'>
                      <input
                        name='images'
                        className='custom-file-input shadow-none'
                        type="file"
                        multiple
                        onChange={handleFileChange}
                      />
                      <label className='custom-file-label' htmlFor='images'>
                        Upload Images
                      </label>
                    </div>
                  </div>
                </div>
                <div className='mb-4'>
                  <h3 className='section-title'>Address</h3>
               
                </div>
                <div className='mb-4'>
                  <h3 className='section-title'>Overview</h3>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='wifi'
                      name='wifi'
                      checked={details.wifi}
                      onChange={handleInputChange}
                    />
                    <label className='form-check-label' htmlFor='wifi'>
                      WiFi
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='busStopDistance'
                      name='busStopDistance'
                      checked={details.busStopDistance}
                      onChange={handleInputChange}
                    />
                    <label className='form-check-label' htmlFor='busStopDistance'>
                      Bus Stop Distance
                    </label>
                    {/* Input field for bus stop distance */}
                  </div>
                  {/* Other overview fields */}
                </div>
                <div className='mb-4'>
                  <h3 className='section-title'>Facilities</h3>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='running-water'
                      name='running-water'
                      checked={details.runningWater}
                      onChange={handleInputChange}
                    />
                    <label className='form-check-label' htmlFor='running-water'>
                      Running Water
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='parking'
                      name='parking'
                      checked={details.parking}
                      onChange={handleInputChange}
                    />
                    <label className='form-check-label' htmlFor='parking'>
                      Parking
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='school'
                      name='school'
                      checked={details.school}
                      onChange={handleInputChange}
                    />
                    <label className='form-check-label' htmlFor='school'>
                      School
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='rooms'
                      name='rooms'
                      checked={details.rooms}
                      onChange={handleInputChange}
                    />
                    <label className='form-check-label' htmlFor='rooms'>
                      Rooms
                    </label>
                  </div>
                </div>
                <div className='d-flex justify-content-center text-center mb-3'>
                  <button className='btn btn-primary' type='submit'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
      
};

export default CreatePost;
