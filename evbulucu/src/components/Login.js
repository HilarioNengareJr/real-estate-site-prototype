import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Login.css';
import Footer from './Footer';

const Login = () => {
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
                                className='form-control'
                                placeholder='Email address'
                                required
                                autoFocus
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='userPassword'>Password</label>
                            <input
                                type='password'
                                id='userPassword'
                                className='form-control'
                                placeholder='Password'
                                required
                            />
                        </div>
                        <div className='form-check m-3'>
                            <input id='checkBox' className='form-check-input' type='checkbox' value='remember-me' />
                            <label className='form-check-label' htmlFor='checkBox'>Remember me</label>
                        </div>
                        <button className='btn btn-lg btn-primary btn-block' type='submit'>
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
