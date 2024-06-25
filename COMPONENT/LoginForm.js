'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../COMPONENT/layout_set_logo 1.png';

function LoginForm() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    
    console.log('Email:', Email);
    console.log('Password:', Password);
  
  };

  return (
    <div className='container'>
      <div className='img-container'>
        {}
        <Image src={logo} alt='Logo' width={200} height={100} />
      </div>
      <div className='login-container'>
        <div className='login'>
          <h2>Welcome back!</h2>
          <h4>Login into your account</h4>
          <div className='inputlogin'>
            <label>Email</label>
            <input type="text" placeholder='Email' value={Email} onChange={handleEmailChange} />

            <label>Password</label>
            <input type="password" placeholder='Password' value={Password} onChange={handlePasswordChange} />
          </div>
          <button onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
