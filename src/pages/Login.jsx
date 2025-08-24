import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const registeredUser = localStorage.getItem('registeredUser');

        if (registeredUser) {
            const user = JSON.parse(registeredUser);

            if (email === user.email && password === user.password) {
                localStorage.setItem('token', 'your-token-here');
                setIsAuthenticated(true);

                alert('Login successful! Redirecting to home page...');
                setTimeout(() => {
                    navigate('/');
                }, 100); // Small delay for smoother UX
            } else {
                setError('Invalid email or password. Please check and try again.');
            }
        } else {
            setError('No registered user found. Please ensure you have registered first.');
        }
    };

    return (
        <div className="card" style={{ maxWidth: '350px', margin: '2rem auto', padding: '2rem' }}>
            <h2 className="title">Login to Your Account</h2>
            {error && (
                <p style={{ color: 'tomato', fontWeight: '600', marginBottom: '1rem' }}>{error}</p>
            )}
            <form onSubmit={handleLogin}>
                <div className="field">
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="input-field"
                    />
                </div>

                <div className="field" style={{ marginTop: '1rem' }}>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="input-field"
                    />
                </div>

                <div className="show-password-container" style={{ marginTop: '10px', fontSize: '14px', color: '#333' }}>
                    <input
                        type="checkbox"
                        id="showPassword"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                        style={{ marginRight: '6px' }}
                    />
                    <label htmlFor="showPassword">Show Password</label>
                </div>

                <button type="submit" className="btn" style={{ width: '100%', marginTop: '1rem' }}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
