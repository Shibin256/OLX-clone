import './App.css'
import Home from './pages/Home/Home'
import ProductPage from './pages/ProductPage/ProductPage'
import ProductAdd from './pages/ProductAdd/ProductAdd'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebase'
import { ToastContainer, toast } from 'react-toastify';
import ContextProvider from './context/ContextProvider'

function App() {
  const navigate=useNavigate();
  useEffect(()=>{
      const unsubscribe =onAuthStateChanged(auth, async (user)=>{
        if(user){
          if(window.location.pathname === '/login'){          //check the url has the '/login' path or not to ensure not going back to page.
            console.log("Logged In")
            navigate('/')
                }
        }else{
          if(window.location.pathname !=='/login'){ 
            console.log('Logged Out')
            navigate('/login')}
          }
      })
        return ()=>unsubscribe();
    },[navigate])         //navigate chages the useEffect will work

  return (
    <ContextProvider>
    <ToastContainer theme='dark' />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/productAdd' element={<ProductAdd />} />
      <Route path='/productPage/:id' element={<ProductPage />} />
    </Routes>
    </ContextProvider>
  )
}

export default App
