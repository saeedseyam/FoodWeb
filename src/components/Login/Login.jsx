import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
const Login = ({setShowLogin}) => {
    const [currState , setCurrState] = useState ('Login')
  return (
    <div className='Login'>
      <form action="" className='loginContainer'>
        <div className="login-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-inputs">
            {currState === 'Login' ? <></> :<input type="text" placeholder="Enter your Username"  required/> }
            <input type="email" placeholder="Enter your email"  required/>
            <input type="password" placeholder="Enter your Password"  required/>
        </div>
        <button>{currState=== 'Sign Up' ? 'Create Account' : 'Login' }</button>
        <div className='login-condition'>
            <input type="checkBox"  required/>
            <p>By continue, you agree to our Terms of Service and Privacy Policy</p>
        </div>
        {currState === 'Login' ?<p>Create a new account ? <span onClick={()=> setCurrState('Sign Up')}>Click here</span></p>:
         <p>Already Have an Acc <span onClick={()=> setCurrState('Login')}>Login here</span></p>
 }
       
      </form>
    </div>
  )
}

export default Login
