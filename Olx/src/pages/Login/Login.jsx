import React, {useContext, useState } from 'react'
import './Login.css'
import Olxlogo from '../../assets/OlxLogo'
import { login, signUp } from '../../firebase/firebase'
import MyContext from '../../context/Mycontext'
import { toast } from 'react-toastify'

function Login() {
  const [signState,setSignState]=useState("Sign Up")
  const {name,setName}=useContext(MyContext)
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [phone,setPhone]=useState("")
  const [error,setError]=useState('')
 
  const validatePassword=(value)=>{
    if (value.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    if (/\s/.test(value)) {
      return "Password must not contain spaces.";
    }
    if (!/[!@#$%^&*]/.test(value)) {
      return "Password must contain at least one special character.";
    }
    return "";
  }
  
  const handleChange=(e)=>{
        const value=e.target.value;
        setPassword(value);
        const validatemsg=validatePassword(value);
        setError(validatemsg)
  }

  const userauth = async (e) => {
    e.preventDefault();
  
    if (signState === 'Sign In') {
      if (email === "" || password === "") {
        toast.error('Email and Password are required for login');
        return;
      }
      await login(email, password);
    } else {
      if (name === "" || email === "" || password === "" || phone === "") {
        toast.error('All fields are required for signup');
        return;
      }
  
      const validatemsg = validatePassword(password);
      if (validatemsg) {
        setError(validatemsg);
        return;
      }
      setName(name)
      await signUp(name, email, phone, password);
    }
  }
  

  return (
    <div className='login'>     
      <div className='inner-login'> 
      <div className='logo'>
          <Olxlogo />
      </div>

      <div className='loginform'>
        <form >
          {signState =="Sign Up" && <div className='formGroup'>
          <label>username:</label> 
          <input value={name}                               //value{} - It connects the input field to the component's state.
          onChange={(e)=>setName(e.target.value)}
           type="text" id='name' required/>
          </div>}
            
            <div className='formGroup'>
            <label>Email:</label>
            <input value={email} 
            onChange={(e)=>{setEmail(e.target.value)}}
             type="email" id='email' required/>
            </div>

            {signState =="Sign Up" &&
            <div className='formGroup'>
            <label >phone:</label>
            <input value={phone} 
            onChange={(e)=>{setPhone(e.target.value)}}
            type="number" id='phone' required/>
            </div>}


            {signState == 'Sign Up' ? 
            <div className='formGroup'>
            <label >password:</label>
            <input value={password} 
            onChange={(e)=>{handleChange(e)}}
            type="password" id='password' required/>
            {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
            : 
            <div className='formGroup'>
            <label >password:</label>
            <input value={password} 
            onChange={(e)=>{setPassword(e.target.value)}}
            type="password" id='password' required/>
            </div>} 
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
