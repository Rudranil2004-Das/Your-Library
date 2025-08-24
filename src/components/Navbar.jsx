// src/components/Navbar.jsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
    const navigate = useNavigate();

    // Handle Logout
    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove authentication token
        setIsAuthenticated(false); // Update state
        navigate('/login'); // Redirect to login page
    };

    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to="/">Home</Link>
                {!isAuthenticated && <Link to="/login">Login</Link>}
                {!isAuthenticated && <Link to="/register">Register</Link>}
              
                {isAuthenticated && <Link to="/about">About Us</Link>}
                {isAuthenticated && (
                    <button className="logout-button" onClick={handleLogout}>
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
