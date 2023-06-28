import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Register.css';
import Footer from './Footer';

const Register = () => {
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
              <label htmlFor='inputEmail'>Email address</label>
              <input
                type='email'
                id='inputEmail'
                className='form-control'
                placeholder='Email address'
                required
              />
            </div>

            <div className='form-group mb-3'>
              <label htmlFor='userPassword'>Password</label>
              <input
                type='password'
                id='userPassword'
                className='form-control'
                placeholder='Password'
                required
              />
            </div>

            <div className='form-group mb-2'>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input
                type='password'
                id='confirmPassword'
                className='form-control'
                placeholder='Confirm Password'
                required
              />
            </div>

            <button className='btn btn-lg btn-primary btn-block mt-2' type='submit'>
              Register
            </button>
          </form>
        </div>
      </div>
     
    </div>
  );
};

export default Register;
