import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkBox, setCheckBox] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password,
        checkBox,
      });
      const { success, user, message } = response.data;
      if (success) {
        console.log('Login successful!', user);
      } else {
        console.log(message);
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  };

  return (
    <div className='container-fluid pt-5'>
      <div className='row justify-content-center align-items-center mt-2 mb-5'>
        <div className='col-lg-4 col-md-6 col-sm-8'>
          <form className='login-form bg-white p-4'>
            <div className='text-center mb-4 brand-font'>
              Student Rental
              <div className="line w-50 m-auto"></div>
              <h1 className='h3 font-weight-normal mt-3'>Sign In</h1>
            </div>

            <div className='form-group mb-3'>
              <label htmlFor='inputEmail'>Email address</label>
              <input
                type='email'
                id='inputEmail'
                value={email}
                className='form-control'
                placeholder='Email address'
                onChange={(e) => { setEmail(e.target.value) }}
                required
                autoFocus
              />
            </div>

            <div className='form-group'>
              <label htmlFor='userPassword'>Password</label>
              <input
                type='password'
                id='userPassword'
                value={password}
                className='form-control'
                placeholder='Password'
                onChange={(e) => { setPassword(e.target.value) }}
                required
              />
            </div>
            <div className='form-check m-3'>
              <input
                id='checkBox'
                className='form-check-input'
                type='checkbox'
                checked={checkBox}
                onChange={(e) => setCheckBox(e.target.checked)}
              />
              <label className='form-check-label' htmlFor='checkBox'>Remember me</label>
            </div>
            <button className='btn btn-lg btn-primary btn-block' type='submit' onClick={handleLogin}>
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
