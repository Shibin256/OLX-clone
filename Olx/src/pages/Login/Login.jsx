import React, { useState } from 'react'
import './Login.css'
import Olxlogo from '../../assets/OlxLogo'

function Login() {

  const [signState,setSignState]=useState('Sign Up')

  return (
    <div className='login'>
      <div className='inner-login'> 

      <div className='logo'>
          <Olxlogo />
      </div>

      <div className='loginform'>
        <form>
          {signState =="Sign Up" && <div className='formGroup'>
          <label htmlFor="">username:</label>
          <input type="text" />
          </div>}
            <div className='formGroup'>
            <label htmlFor="">Email:</label>
            <input type="text" />
            </div>
            {signState =="Sign Up" &&
            <div className='formGroup'>
            <label htmlFor="">phone:</label>
            <input type="text" />
            </div>}
            <div className='formGroup'>
            <label htmlFor="">password:</label>
            <input type="text" />
            </div>
            <button type='submit' className='signupBtn'>{signState}</button>
        </form>
        <div className='forms-switch'>
          {signState=="Sign Up"? 
          <p>Already a user?<button className="loginBtn" onClick={()=>setSignState("Sign In")}>Login</button></p>
          :
          <p>New to OLX?<button className="loginBtn" onClick={()=>setSignState("Sign Up")}>SignUp</button></p>
           }
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login
