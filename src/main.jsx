import React from 'react'; // Add this line to import React
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Create a root and render the App component inside StrictMode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
