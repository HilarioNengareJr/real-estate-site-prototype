import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Register.css';
import axios from 'axios';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3000/register', {
        name,
        email,
        password,
      });

      const { success, id, error } = response.data;
      if (password !== confirmPassword){
        console.log('Passwords do not match..sorry');
      }

      if (success) {
        console.log('Registration successful! User ID:', id);
      } else {
        console.log('Registration failed:', error);
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row justify-content-center align-items-center mb-5'>
        <div className='col-lg-4 col-md-6 col-sm-8'>
          <form className='login-form bg-white p-4'>
            <div className='text-center mb-4 brand-font'>
            Student Rental
            <div className="line w-50 m-auto"></div>
              <h1 className='h3 font-weight-normal mt-3'>Registration</h1>
            </div>
            <div className='form-group mb-3'>
              <label htmlFor='inputName'>Name</label>
              <input
                type='text'
                id='inputName'
                value={name}
                className='form-control'
                placeholder='Your full name'
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className='form-group mb-3'>
              <label htmlFor='inputEmail'>Email address</label>
              <input
                type='email'
                id='inputEmail'
                value={email}
                className='form-control'
                placeholder='Email address'
                onChange={(e)=> setEmail(e.target.value)}
                required
              />
            </div>

            <div className='form-group mb-3'>
              <label htmlFor='userPassword'>Password</label>
              <input
                type='password'
                id='userPassword'
                value={password}
                className='form-control'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className='form-group mb-2'>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input
                type='password'
                id='confirmPassword'
                value={confirmPassword}
                className='form-control'
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder='Confirm Password'
                required
              />
            </div>

            <button className='btn btn-lg btn-primary btn-block mt-2' type='submit' onClick={handleRegister}>
              Register
            </button>
          </form>
        </div>
      </div>
     
    </div>
  );
};

export default Register;
