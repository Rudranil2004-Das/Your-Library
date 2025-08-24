// src/components/Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the navigate hook

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the navigate hook

  // Handle the login process
  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation (you can replace this with actual API validation)
    if (email && password) {
      // Simulate a successful login by saving the auth status in localStorage
      localStorage.setItem('isAuthenticated', 'true');
      // Redirect to the home page (or another page)
      navigate('/');
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
