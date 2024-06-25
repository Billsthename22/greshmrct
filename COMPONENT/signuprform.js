 'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import GFP from '../COMPONENT/Slides.png';
import logo from '../COMPONENT/layout_set_logo 1.png';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [nin, setNin] = useState('');
  const [phone, setPhone] = useState('');
  const [customerType, setCustomerType] = useState('Individual');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
    console.log({
      firstName,
      lastName,
      email,
      nin,
phone,
      customerType,
      password
    });
  };

  const openVerificationPage = () => {
    // Logic to open verification page
    console.log("Opening verification page...");
  };

  return (
    <div className='signup-container'>
      <div className='img-section'>
        <Image src={GFP} alt='' />
      </div>
      <div className='form-section'>
        <div className='formm'>
          <Image src={logo} alt='' />
          <h2>Create an account for free</h2>
          <p>Kindly fill in the following details to create an account.</p>
          <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />

            <label>Last Name</label>
            <input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />

            <label>Email Address</label>
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />

            <label>NIN</label>
            <input type="text" placeholder='NIN' value={nin} onChange={(e) => setNin(e.target.value)} />

            <label>Phone Number</label>
            <input type="text" placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} />

            <label>Password</label>
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

            <div className="customer-type">
              <label>Customer Type</label>
              <div>
                <label>
                  <input
                    type="radio"
                    value="Individual"
                    checked={customerType === 'Individual'}
                    onChange={(e) => setCustomerType(e.target.value)}
                  />
                  Individual
                </label>
                <label>
                  <input
                    type="radio"
                    value="Joint"
                    checked={customerType === 'Joint'}
                    onChange={(e) => setCustomerType(e.target.value)}
                  />
                  Joint
                </label>
                <label>
                  <input
                    type="radio"
                    value="Children"
                    checked={customerType === 'Children'}
                    onChange={(e) => setCustomerType(e.target.value)}
                  />
                  Children
                </label>
                <label>
                  <input
                    type="radio"
                    value="Estate"
                    checked={customerType === 'Estate'}
                    onChange={(e) => setCustomerType(e.target.value)}
                  />
                  Estate
                </label>
                <label>
                  <input
                    type="radio"
                    value="Corporate"
                    checked={customerType === 'Corporate'}
                    onChange={(e) => setCustomerType(e.target.value)}
                  />
                  Corporate
                </label>
              </div>
            </div>

            <button type="submit" onClick={openVerificationPage}>Sign Up</button>
          </form>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
          <p>
            By signing up, you are agreeing to the <b>Privacy policy</b> and <b>Terms of use</b> of Gresham Asset Management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;