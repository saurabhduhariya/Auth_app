import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify';
import './Signup.css';
import { handleError, handleSuccess } from '../utils';
 
export default function Signup() {

    const [signupinfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: '',
    })

    const navigate = useNavigate();

    const handleChange = (e)=>{
        const {name, value} = e.target;
        console.log(name,value);
        const copySignupInfo = { ...signupinfo };
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    }
    console.log('signupInfo -> ',signupinfo);

    const handleSignup =  async(e)=>{
        e.preventDefault();
        const {name , email, password} = signupinfo;
        if(!name || !email || !password){
            return handleError('all fields are required')
        }
        try{
            const url = 'https://auth-app-api-1.vercel.app/auth/signup';
            const response = await fetch(url, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signupinfo)
            });
            const result = await response.json();
            const { success, message ,error } = result;
            if(success){
                handleSuccess(message);
                setTimeout(()=>{
                    navigate('/login')
                },1000)
            }else if(error){
                const details = error?.details[0].message;
                handleError(details);
            }else if(!success){
                handleError(message);
            }

            console.log(result);
        }catch(err){
            handleError(err);
        }
    }


  return (
    <div className='container'>
        <h1 className='title'>Signup</h1>
        <form className='signup-form' onSubmit={handleSignup}>
            <div className='form-group'>
                <label htmlFor='name'></label>
                <input
                onChange={handleChange}
                type='text'
                name='name'
                autoFocus
                placeholder='Enter your name'
                value={signupinfo.name}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='email'></label>
                <input
                onChange={handleChange}
                type='email'
                name='email'
                autoFocus
                placeholder='Enter your email'
                value={signupinfo.email}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='password'></label>
                <input
                onChange={handleChange}
                type='password'
                name='password'
                autoFocus
                placeholder='Enter your password...'
                value={signupinfo.password}
                />
            </div>
            <button type='submit' className='signup-button'>Signup</button>
            <span>Already have an account
               <Link className='login-link' to={"/login"}>Login</Link>
               </span>
        </form>
        <ToastContainer />
    </div>
  )
}

