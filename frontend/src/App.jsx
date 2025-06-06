import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'
import RefreshHandler from './pages/RefreshHandler'

function App() {

   const [isAuthenticated ,setIsAuthenticated] = useState(false);

   const PrivateRoute = ({ element }) =>{
     return isAuthenticated ? element : <Navigate to="/login" />
   }
  return (
    <div className='App'>
    <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
    <Routes>
        <Route path='/' element={<Navigate to={"/login"}/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/home' element={<PrivateRoute element={<Home />} />} />

    </Routes>
       <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App