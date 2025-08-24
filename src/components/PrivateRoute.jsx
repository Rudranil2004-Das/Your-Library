// src/components/PrivateRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';

// A component that checks if the user is authenticated and redirects accordingly
const PrivateRoute = ({ element }) => {
  // Assuming you store user authentication state in localStorage or you can use React Context
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'; // Update based on your auth state

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // Redirect to login page if not authenticated
  }

  return element; // If authenticated, render the element
};

export default PrivateRoute;
