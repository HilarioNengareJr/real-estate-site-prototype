import React, { useState } from 'react';
import axios from 'axios';
import './CreatePost.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from './NavBar';
import ImageUploader from 'react-images-upload';

const CreatePost = () => {
  const navigate = useNavigate();
  const [imageFiles, setImageFiles] = useState([]);
  const [typeOfProperty, setTypeOfProperty] = useState('');
  const [price, setPrice] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [wifiChecked, setWifiChecked] = useState(false);
  const [runningWaterChecked, setRunningWaterChecked] = useState(false);
  const [beds, setBeds] = useState(0);
  const [baths, setBaths] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [details, setDetails] = useState({
    price: '',
    city: '',
    busStopDistance: '',
    market: '',
    rooms: '',
    school: '',
    parking: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleDeleteImage = (index) => {
    const newImageFiles = [...imageFiles];
    newImageFiles.splice(index, 1);
    setImageFiles(newImageFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    imageFiles.forEach((file) => {
      formData.append('images', file);
    });

    formData.append('type_of_property', typeOfProperty);
    formData.append('city', city);
    formData.append('price', price);
    formData.append('whatsapp', whatsapp);
    formData.append('phone_number', phoneNumber);
    formData.append('address', address);
    formData.append('beds', beds);
    formData.append('baths', baths);
    formData.append('rooms', rooms);
    formData.append('wifi', wifiChecked);
    formData.append('running_water', runningWaterChecked);
    formData.append('school', details.school);
    formData.append('market', details.market);
    formData.append('parking', details.parking);
    formData.append('bus_stop', details.busStopDistance);
    formData.append('restaurant', details.restaurant);

    console.log('Sending data:', formData);
    try {
      const response = await axios.post('/api/posts/enlist', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response.data);
      if (response.status === 200) {
        setShowSuccessModal(true);

        setTimeout(() => {
          setShowSuccessModal(false);
          navigate('/listings');
        }, 2000);
      } else {
        console.log('Error submitting data.');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };



  return (
    <div className='container'>
      <NavBar />

      <form className='mt-5 border-2 p-2' onSubmit={handleSubmit}>
        <h3 className='text-center mt-5 p-5'>Upload Images</h3>
        <div className='mt-3 border-1 p-2'>
          <ImageUploader
            withIcon={true}
            buttonText='Choose images'
            onChange={(files) => setImageFiles(files)}
            imgExtension={['.jpg', '.gif', '.png', '.jpeg']}
            maxFileSize={5242880}
          />
          {imageFiles.length > 0 && (
            <div className='image-previews mt-3'>
              {imageFiles.map((file, index) => (
                <div key={index} className='image-preview-container'>
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Preview ${index}`}
                    className='image-preview'
                  />
                  <button
                    className='delete-button'
                    onClick={() => handleDeleteImage(index)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}

        </div>
        <hr />
        <h3 className='text-center mt-5 p-5'>Type Details</h3>
        <div className='row justify-content-center border-1 p-2'>
          <div className='col-md-6'>
            <div className='form-group my-2'>
              <label htmlFor='type_of_property'>Type of property</label>
              <select
                className='form-control'
                id='type_of_property'
                value={typeOfProperty}
                onChange={(e) => setTypeOfProperty(e.target.value)}
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
                placeholder='TL500/month'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
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
                value={city}
                onChange={(e) => setCity(e.target.value)}
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
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
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
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
                value={beds}
                onChange={(e) => setBeds(e.target.value)}
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
                value={baths}
                onChange={(e) => setBaths(e.target.value)}
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
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
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
                checked={wifiChecked}
                onChange={(e) => setWifiChecked(e.target.checked)}
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
                checked={runningWaterChecked}
                onChange={(e) => setRunningWaterChecked(e.target.checked)}
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
                value={details.school}
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
                value={details.market}
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
                value={details.parking}
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
                value={details.busStopDistance}
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
                value={details.restaurant}
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
      {showSuccessModal && (
        <div className='modal show' tabIndex='-1'>
          <div className='modal-dialog modal-dialog-centered'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>Success!</h5>
                <button
                  type='button'
                  className='close'
                  onClick={() => setShowSuccessModal(false)}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                <p>Data has been submitted successfully.</p>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-primary'
                  onClick={() => setShowSuccessModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
