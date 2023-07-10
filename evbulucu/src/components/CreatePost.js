import React, { useState } from 'react';
import './CreatePost.css';

const PostingComponent = () => {

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
            <h2>Create a New Posting</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Upload Images:</label>
                    <input type="file" multiple onChange={handleFileChange} />
                </div>
                <div>
                    <label>WiFi:</label>
                    <input
                        type="checkbox"
                        name="wifi"
                        checked={details.wifi}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Bus Stop Distance:</label>
                    <input
                        type="text"
                        name="busStopDistance"
                        value={details.busStopDistance}
                        onChange={handleInputChange}
                    />
                </div>



                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PostingComponent;
