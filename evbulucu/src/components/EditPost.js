import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import NavBar from './NavBar';
import './EditPost.css';

const EditPost = () => {
  const { postId } = useParams();
  const [postData, setPostData] = useState({
    type_of_property: '',
    price: '',
    city: '',
    whatsapp: '',
    phone_number: '',
    address: '',
    beds: '',
    baths: '',
    rooms: '',
    wifi: false,
    running_water: false,
    school: '',
    market: '',
    parking: '',
    bus_stop: '',
    restaurant: '',
  });

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await axios.get(`/api/posts/${postId}`);
        const postData = response.data;
        setPostData(postData);
      } catch (error) {
        console.error('Error fetching post data for editing', error);
      }
    };

    fetchPostData();
  }, [postId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setPostData({
      ...postData,
      [name]: checked,
    });
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`/api/posts/edit/${postId}`, postData);
      console.log('Post edited successfully.');
      setTimeout(() => {
        setShowSuccessModal(false);
        navigate('/listings');
      }, 2000);
    } catch (error) {
      console.error('Error editing post', error);
    }
  };

  return (
    <div className='container'>
      <NavBar />
      <form className='mt-3' onSubmit={handleEditSubmit}>
        <hr />
        <h3 className='text-center mt-5 p-5'>Type Details</h3>
        <div className='row justify-content-center border-1 p-2'>
          <div className='col-md-6'>
            <div className='form-group my-2'>
              <label htmlFor='type_of_property'>Type of property</label>
              <select
                className='form-control'
                id='type_of_property'
                value={postData.type_of_property}
                onChange={handleInputChange}
              >
                <option value='House'>House</option>
                <option value='Apartment'>Apartment</option>
                <option value='Studio'>Studio</option>
                <option value='House'>House</option>
              </select>
            </div>
            <div className='form-group my-2'>
              <label>Price</label>
              <input
                type='text'
                className='form-control'
                id='price'
                name='price'
                title='Enter the price'
                placeholder='100TL/Month'
                value={postData.price}
                onChange={handleInputChange}
              />
            </div>
            <div className='form-group my-2'>
              <label>City</label>
              <input
                type='text'
                className='form-control'
                id='city'
                name='city'
                title='Enter the City'
                placeholder='Guzelyurt, Nicosia, Magusa, Girne, Lefke'
                value={postData.city}
                onChange={handleInputChange}
              />
            </div>
            <div className='form-group my-2'>
              <label htmlFor='whatsapp'>WhatsApp</label>
              <input
                type='tel'
                className='form-control'
                id='whatsapp'
                name='whatsapp'
                title='Enter WhatsApp number'
                placeholder='0 5__ ___ ____'
                value={postData.whatsapp}
                onChange={handleInputChange}
              />
            </div>
            <div className='form-group my-2'>
              <label htmlFor='phoneNumber'>Phone Number</label>
              <input
                type='tel'
                className='form-control'
                id='phoneNumber'
                name='phoneNumber'
                title='Enter phone number'
                placeholder='0 5__ ___ ____'
                value={postData.phone_number}
                onChange={handleInputChange}
              />
            </div>
            <div className='form-group my-2'>
              <label htmlFor='address'>Address</label>
              <input
                type='text'
                className='form-control'
                id='address'
                name='address'
                title='Enter property address'
                aria-describedby='addrInfo'
                placeholder='123 Street_Name'
                value={postData.address}
                onChange={handleInputChange}
              />
              <small id='addrInfo' className='form-text text-muted'>
                Type address in full to reach more people.
              </small>
            </div>
            <div className='form-group my-2'>
              <label htmlFor='beds'>Number of <strong>beds</strong></label>
              <select
                className='form-control'
                id='beds'
                value={postData.beds}
                onChange={handleInputChange}
              >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>above 4</option>
              </select>
            </div>
            <div className='form-group my-2'>
              <label htmlFor='baths'>Number of <strong>baths</strong></label>
              <select
                className='form-control'
                id='baths'
                value={postData.baths}
                onChange={handleInputChange}
              >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>above 4</option>
              </select>
            </div>
            <div className='form-group my-2'>
              <label htmlFor='rooms'>Number of <strong>rooms</strong></label>
              <select
                className='form-control'
                id='rooms'
                value={postData.rooms}
                onChange={handleInputChange}
              >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>above 4</option>
              </select>
            </div>
          </div>
        </div>
        <h3 className='text-center'>Checked Details</h3>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='form-check'>
              <input
                type='checkbox'
                className='form-check-input'
                id='wifi'
                checked={postData.wifiChecked}
                onChange={handleCheckboxChange}
              />
              <label className='form-check-label' htmlFor='wifi'>
                WiFi
              </label>
            </div>
            <div className='form-check'>
              <input
                type='checkbox'
                className='form-check-input'
                id='runningWater'
                checked={postData.running_water}
                onChange={handleCheckboxChange}
              />
              <label className='form-check-label' htmlFor='runningWater'>
                Running water
              </label>
            </div>
          </div>
        </div>
        <h3 className='text-center'>Infrastructure</h3>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='form-group my-2'>
              <label htmlFor='school'>School</label>
              <select
                className='form-control'
                id='school'
                value={postData.school}
                onChange={handleInputChange}
                name='school'
              >
                <option value='around area'>around area</option>
                <option value='2km'>2km</option>
                <option value='4km'>4km</option>
                <option value='6km'>6km</option>
                <option value='Far / Next town'>Far / Next town</option>
              </select>
            </div>
            <div className='form-group my-2'>
              <label htmlFor='market'>Market</label>
              <select
                className='form-control'
                id='market'
                value={postData.market}
                onChange={handleInputChange}
                name='market'
              >
                <option value='around area'>around area</option>
                <option value='2km'>2km</option>
                <option value='4km'>4km</option>
                <option value='6km'>6km</option>
                <option value='Far / Next town'>Far / Next town</option>
              </select>
            </div>
            <div className='form-group my-2'>
              <label htmlFor='parking'>Parking</label>
              <select
                className='form-control'
                id='parking'
                value={postData.parking}
                onChange={handleInputChange}
                name='parking'
              >
                <option value='Yes'>Yes</option>
                <option value='N/A'>N/A</option>
              </select>
            </div>
            <div className='form-group my-2'>
              <label htmlFor='bus-stop'>Bus Stop</label>
              <select
                className='form-control'
                id='bus-stop'
                value={postData.busStopDistance}
                onChange={handleInputChange}
                name='busStopDistance'
              >
                <option value='around area'>around area</option>
                <option value='2km'>2km</option>
                <option value='4km'>4km</option>
                <option value='6km'>6km</option>
                <option value='Far / Next town'>Far / Next town</option>
              </select>
            </div>
            <div className='form-group my-2'>
              <label htmlFor='restaurant'>Restaurant</label>
              <select
                className='form-control'
                id='restaurant'
                value={postData.restaurant}
                onChange={handleInputChange}
                name='restaurant'
              >
                <option value='around area'>around area</option>
                <option value='2km'>2km</option>
                <option value='4km'>4km</option>
                <option value='6km'>6km</option>
                <option value='Far / Next town'>Far / Next town</option>
              </select>
            </div>
          </div>
        </div>
        <div className='row m-3 d-flex justify-content-center mx-auto'>
          <div className='col-md-6 d-flex justify-content-center align-items-center'>
            <button type='submit' className='btn btn-primary mx-auto'>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
