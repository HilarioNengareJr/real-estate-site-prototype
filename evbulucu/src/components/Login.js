import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkBox, setCheckBox] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');

  const navigate = useNavigate(); 
  const handleLogin = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('http://localhost:3000/api/users/login', {
        email,
        password,
        checkBox,
      });
      const { success, user, message } = response.data;
      if (success) {
        setModalTitle('Login Successful');
        setModalMessage(`Welcome , ${user.username}!`);
        setShowModal(true);
        navigate('/listings');
      } else {
        setModalTitle('Login Failed');
        setModalMessage(message);
        setShowModal(true);
      }
    } catch (error) {
      setModalTitle('Error');
      setModalMessage('An error occurred: ' + error.message);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='container-fluid pt-5'>
      <div className='row justify-content-center align-items-center mt-2 mb-5'>
        <div className='col-lg-4 col-md-6 col-sm-8'>
          <form className='login-form bg-white p-4' onSubmit={handleLogin}>
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
            <button className='btn btn-lg btn-primary btn-block' type='submit'>
              Sign in
            </button>
          </form>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <button className='btn btn-primary' onClick={handleCloseModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
