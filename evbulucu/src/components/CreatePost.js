import React, { useState } from 'react';
import './CreatePost.css';

const CreatePost = () => {

    const [imageFiles, setImageFiles] = useState([]);
    const [details, setDetails] = useState({
        wifi: false,
        busStopDistance: '',

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
        <div className='row'>
        <h1 className='text-center p-3'>New Listing</h1>
        <div className='col-6 ms-3'>
            
            <form className='upload-form ' onSubmit={handleSubmit}>
                <div>
                    <label for='images'>Upload Images: </label>
                    <input name='images' className='shadow-none' type="file" multiple onChange={handleFileChange} />
                </div>
                <hr className='w-100 mx-auto'/>
                <div className='m-3'>
                    <label for='wifi'>WiFi: </label>
                    <input className='shadow-none'
                        type="checkbox"
                        name="wifi"
                        checked={details.wifi}
                        onChange={handleInputChange}
                    />
                </div>
                <hr className='w-100 mx-auto'/>
                <div className='m-3'>
                    <label for='busStopDistance'>Bus Stop Distance: </label>
                    <input className='shadow-none border-1 rounded p-3'
                        type="text"
                        name="busStopDistance"
                        value={details.busStopDistance}
                        onChange={handleInputChange}
                    />
                </div>

                <hr className='w-100 mx-auto'/>
                <label>Parking</label>
                <button className='btn w-25 p-3 mx-auto' type="submit">okay</button>
            </form>
            </div>
            </div>
        </div>
    );
};

export default CreatePost;
