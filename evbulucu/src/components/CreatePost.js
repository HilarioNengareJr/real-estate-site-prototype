import React, { useState } from 'react';
import './CreatePost.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const CreatePost = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const [address, setAddress] = useState('');
  const [isChecked, setIsChecked] = useState(false);

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
    // Form submission logic goes here
  };

  return (
    <div className='container m-1'>
      <div className='text-center'>
        <h2 className='m-3 mx-auto text-center'>List Your Property</h2>
        <p>Reach tons of renters. Get in touch. Screen tenants. Set up rent payments.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='form-group m-2'>
          <label htmlFor='exampleFormControlSelect1'>Type of property</label>
          <select className='form-control' id='exampleFormControlSelect1'>
            <option>Apartment</option>
            <option>Studio</option>
            <option>House</option>
          </select>
        </div>
        <div className='form-group m-2'>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            className='form-control'
            id='address'
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
        <div className='form-group m-2'>
          <label htmlFor='beds'>Number of <strong>beds</strong></label>
          <select className='form-control' id='beds'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </div>
        <div className='form-group m-2'>
          <label htmlFor='baths'>Number of <strong>baths</strong></label>
          <select className='form-control' id='baths'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </div>
        <div className='form-group m-2'>
          <label htmlFor='rooms'>Number of <strong>rooms</strong></label>
          <select className='form-control' id='rooms'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </div>
        <div className='form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            id='exampleCheck1'
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label className='form-check-label' htmlFor='exampleCheck1'>
            Check me out
          </label>
        </div>
        <div className='form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            id='exampleCheck1'
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label className='form-check-label' htmlFor='exampleCheck1'>
            Check me out
          </label>
        </div>
        <div className='form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            id='exampleCheck1'
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label className='form-check-label' htmlFor='exampleCheck1'>
            Check me out
          </label>
        </div>
        <div className='form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            id='exampleCheck1'
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label className='form-check-label' htmlFor='exampleCheck1'>
            Check me out
          </label>
        </div>
        <button type='submit' className='btn btn-primary mt-2 mx-auto d-flex justify-content-center'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
