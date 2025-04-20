import './App.css'
import Home from './pages/Home/Home'
import ProductPage from './pages/ProductPage/ProductPage'
import ProductAdd from './pages/ProductAdd/ProductAdd'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebase'

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
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/ProductAdd' element={<ProductAdd />} />
      <Route path='/ProductPage' element={<ProductPage />} />

    </Routes>
    </>
  )
}

export default App
