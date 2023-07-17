import React, { useState } from 'react';
import './CreatePost.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const CreatePost = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const [address, setAddress] = useState('');
  const [wifiChecked, setWifiChecked] = useState(false);
  const [runningWaterChecked, setRunningWaterChecked] = useState(false);

  const [details, setDetails] = useState({
    busStopDistance: '',
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
    const { name, value } = event.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic goes here
  };

  return (
    <div className='container'>
       <nav className='navbar mt-2 rounded-4 p-3 navbar-expand-md navbar-dark bg-dark w-100'>
        <div className='container-fluid text-center'>
          <h2 className='navbar-brand'>List Your Property</h2>
          <p className='navbar-text'>
            Reach tons of renters. Get in touch. Screen tenants. Set up rent payments.
          </p>
        </div>
      </nav>
      <form className='mt-4' onSubmit={handleSubmit}>
        <h3 className='text-center'>Type Details</h3>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='form-group'>
              <label htmlFor='exampleFormControlSelect1'>Type of property</label>
              <select className='form-control' id='exampleFormControlSelect1'>
                <option>Apartment</option>
                <option>Studio</option>
                <option>House</option>
              </select>
            </div>
            <div className='form-group'>
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
            <div className='form-group'>
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
            <div className='form-group'>
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
            <div className='form-group'>
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
            <div className='form-group'>
              <label htmlFor='school'>School</label>
              <select className='form-control' id='school'>
                <option>500m</option>
                <option>2km</option>
                <option>4km</option>
                <option>6km</option>
                <option>Far / Next town</option>
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='market'>Market</label>
              <select className='form-control' id='market'>
                <option>500m</option>
                <option>1km</option>
                <option>3km +</option>
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='parking'>Parking</label>
              <select className='form-control' id='parking'>
                <option>Yes</option>
                <option>N/A</option>
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='bus-stop'>Bus Stop</label>
              <select className='form-control' id='bus-stop'>
                <option>500m</option>
                <option>1km</option>
                <option>3km+</option>
                <option>N/A</option>
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='restaurant'>Restaurant</label>
              <select className='form-control' id='restaurant'>
                <option>500m</option>
                <option>1km</option>
                <option>3km+</option>
                <option>N/A</option>
              </select>
            </div>
          </div>
        </div>
        <div className='row m-3'>
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

export default CreatePost;
