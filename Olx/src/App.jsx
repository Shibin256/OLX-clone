import './App.css'
import Home from './pages/Home/Home'
import ProductPage from './pages/ProductPage/ProductPage'
import ProductAdd from './pages/ProductAdd/ProductAdd'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebase'
import { ToastContainer, toast } from 'react-toastify';
import ContextProvider from './context/ContextProvider'

function App() {
  const navigate=useNavigate();
  useEffect(()=>{
      onAuthStateChanged(auth, async (user)=>{
        if(user){
          console.log("Logged In")
          navigate('/')
        }else{
          console.log('Logged Out')
          navigate('/login')
        }

      })
  },[])

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
