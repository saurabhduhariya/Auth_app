import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import {ToastContainer} from 'react-toastify';

export default function Home() {

  const [loggedInUser ,setLoggedInUser ] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    setLoggedInUser(localStorage.getItem('loggedInUser'))
  },[])

  const handleLogout = (e) => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User logout succesfully');
    setTimeout(() => {
      navigate('/login')
    },1000)
  }

  const fetchProducts = async () => {
    try{
      const url = 'http://localhost:8080/products';
      const headers = {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
        }
      }
      const responce = await fetch(url,headers);
      const result = await responce.json();
      console.log(result);
    } catch(err){
      handleError(err);
    }
  }

  useEffect(() =>{
    fetchProducts();
  },[])



  return (
    <div>
      <h1>{loggedInUser}</h1>
      <button onClick={handleLogout}>Logout</button>
      
      <ToastContainer></ToastContainer>
    </div>
  )
}
