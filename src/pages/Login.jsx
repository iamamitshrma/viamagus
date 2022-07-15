import React, { useState } from 'react';
import banner from '../assets/images/banner.png';
import amazonlogo from '../assets/images/amazon-logo.png';
import tree from '../assets/images/tree.png'; 
import google from '../assets/images/google.png';
import fb from '../assets/images/fb.png';
import './login.css';


const Login = () => {

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const inputsHandler = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value});
        setError("");
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(inputs.email.length === 0) {
            setError("Email should not be empty");
        }
    }

    console.log(inputs);

  return (
    <div>
        <div className='login--banner_container'>
            <img src={banner} alt="banner" />
        </div>

        <div className="login--login_container">
            <div className="login--top">
                <img src={amazonlogo} alt="amazon" />
            </div>

            <div className="login--top-down">
                <h2>Login</h2>
                <img src={tree} alt="tree" />
            </div>

            <form onSubmit={submitHandler} className="login--form_container">
                <input onChange={inputsHandler} type="email" name="email" id="email" placeholder='Email' />
                <span style={{color: "#D9185F", height: '10px', marginTop: '5px'}}>{error}</span>
                <input onChange={inputsHandler} type="password" name="password" id="password" placeholder='Password'/>
                <span></span>
                <button type='submit'>Sign In</button>

                <div className='login--form_bottom'>
                    <span>Forgot Password?</span>
                    <span style={{color: '#D9185F'}}>New User? Sign Up</span>
                </div>

            </form>
            
            <span className='or'>or</span>

            <div className="login--bottom_container">
                <button>
                    <img src={google} alt="google" />
                    <span>continue with google</span>
                </button>
                <button>
                    <img src={fb} alt="fb" />
                    <span>continue with facebook</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Login;