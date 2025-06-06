import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './Signup.css'; // using same styles
import { handleError, handleSuccess } from '../utils';

export default function Login() {
  const [logininfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = logininfo;

    if (!email || !password) {
      return handleError('All fields are required');
    }

    try {
      const url = 'https://auth-app-api-1.vercel.app/auth/login';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(logininfo),
      });

      const result = await response.json();
      const { success, message, jwttoken, name, error } = result;

      if (success) {
        handleSuccess(message);
        localStorage.setItem('jwtToken', jwttoken);
        localStorage.setItem('loggedInUser', name);
        setTimeout(() => navigate('/home'), 1000);
      } else if (error) {
        const details = error?.details?.[0]?.message || 'Login error';
        handleError(details);
      } else {
        handleError(message);
      }

    } catch (err) {
      handleError(err.message || 'Something went wrong');
    }
  };

  return (
    <div className='container'>
      <h1 className='title'>Login</h1>
      <form className='signup-form' onSubmit={handleLogin}>
        <div className='form-group'>
          <input
            onChange={handleChange}
            type='email'
            name='email'
            placeholder='Enter your email'
            value={logininfo.email}
            autoFocus
          />
        </div>
        <div className='form-group'>
          <input
            onChange={handleChange}
            type='password'
            name='password'
            placeholder='Enter your password...'
            value={logininfo.password}
          />
        </div>
        <button type='submit' className='signup-button'>Login</button>
        <span>
          Don't have an account?
          <Link className='login-link' to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}
