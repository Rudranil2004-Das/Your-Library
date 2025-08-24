// src/components/Register.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate to redirect after registration

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  // Handle the registration process
  const handleRegister = (e) => {
    e.preventDefault();

    // Simple validation: Check if passwords match
    if (password === confirmPassword) {
      // You would typically call an API to register the user here
      // For now, we'll just simulate successful registration

      // Optionally, store registration-related data in localStorage (not mandatory here)
      localStorage.setItem('isAuthenticated', 'true');  // Simulating logged-in state
      console.log('User registered successfully');

      // Redirect to the login page after successful registration
      navigate('/login');
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div>
      <h2>Register Page</h2>
      <form onSubmit={handleRegister}>
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
        <div>
          <label>Confirm Password:</label>
          <input 
            type="password" 
            required 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
  