import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      setMessage("We'll send you exclusive offers to your email!");
      setEmail(''); // Clear the input field

      // Hide the message after 4 seconds
      setTimeout(() => {
        setMessage('');
      }, 4000);
    }
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value === '') {
      setMessage('');  // Hide the message when the input is cleared
    }
  };

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated.</p>
      <div>
        <input
          type="email"
          placeholder='Your email id'
          value={email}
          onChange={handleInputChange}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      {message && (
        <p className="message">{message}</p>
      )}
    </div>
  );
};

export default NewsLetter;
