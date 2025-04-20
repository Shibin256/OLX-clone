import React, { useState } from 'react'
import './Login.css'
import Olxlogo from '../../assets/OlxLogo'
import { login, signUp } from '../../firebase/firebase'

function Login() {

  const [signState,setSignState]=useState('Sign Up')
  const [name,setName]=useState("")
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [phone,setPhone]=useState("")
  const userauth=async (e)=>{
    e.preventDefault()
    if(signState=='Sign In'){
      await login(email,password)
    }else{
      await signUp(name,  email, phone, password)
    }
  }

  return (
    <div className='login'>
      <div className='inner-login'> 

      <div className='logo'>
          <Olxlogo />
      </div>

      <div className='loginform'>
        <form>
          
          {signState =="Sign Up" && <div className='formGroup'>
          <label>username:</label> 
          <input value={name}                               //value{} - It connects the input field to the component's state.
          onChange={(e)=>setName(e.target.value)}
           type="text" id='name' />
          </div>}
            
            <div className='formGroup'>
            <label>Email:</label>
            <input value={email} 
            onChange={(e)=>{setEmail(e.target.value)}}
             type="email" id='email' />
            </div>

            {signState =="Sign Up" &&
            <div className='formGroup'>
            <label >phone:</label>
            <input value={phone} 
            onChange={(e)=>{setPhone(e.target.value)}}
            type="number" id='phone' />
            </div>}

            <div className='formGroup'>
            <label >password:</label>
            <input value={password} 
            onChange={(e)=>{setPassword(e.target.value)}}
            type="password" id='password' />
            </div>

            <button type='submit' onClick={userauth} className='signupBtn'>{signState}</button>
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
