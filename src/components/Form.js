import React, { useState } from 'react';
import axios from 'axios';
// import './Form.css';

const Form = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setMessage('');

    // Front-end validation
    if (!email) {
      setError('Email is required.');
      return;
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]*$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    // if (email.endsWith('@ez.works')) {
    //   setError('Emails from @ez.works are not allowed.');
    //   return;
    // }

    // API integration
    try {
      const response = await axios.post('http://34.225.132.160:8002/api', {
        email,
      });
      if (response.status === 200) {
        setMessage('Form Submitted');
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setError(error.response.data.detail);
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />
          <button type="submit">Contact Me</button>
        </div>
        {error && <div className="error">{error}</div>}
        {message && <div className="message">{message}</div>}
      </form>
    </div>
  );
};

export default Form;
