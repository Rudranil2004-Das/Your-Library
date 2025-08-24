import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = ({ setIsRegistered }) => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!username) newErrors.username = 'Username is required';
        if (!email) newErrors.email = 'Email is required';
        if (!password) newErrors.password = 'Password is required';
        if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const userData = { username, email, password };
            localStorage.setItem('registeredUser', JSON.stringify(userData));
            localStorage.setItem('registered', true);
            setIsRegistered(true);

            // Optional: Use a toast or small delay to show success before redirect
            alert('Registration successful! Redirecting to login...');
            
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');

            setTimeout(() => {
                navigate('/login');
            }, 100); // Short delay to allow alert to finish
        }
    };

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleRegister} noValidate>
                <h2 className="title">Register</h2>

                <label>
                    <input
                        className="input"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        placeholder=" "
                    />
                    <span>Username</span>
                    {errors.username && <p className="error-message">{errors.username}</p>}
                </label>

                <label>
                    <input
                        className="input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder=" "
                    />
                    <span>Email</span>
                    {errors.email && <p className="error-message">{errors.email}</p>}
                </label>

                <label>
                    <input
                        className="input"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder=" "
                    />
                    <span>Password</span>
                    {errors.password && <p className="error-message">{errors.password}</p>}
                </label>

                <label>
                    <input
                        className="input"
                        type={showPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        placeholder=" "
                    />
                    <span>Confirm Password</span>
                    {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
                </label>

                <div className="show-password-container">
                    <input
                        type="checkbox"
                        id="showPassword"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                    />
                    <label htmlFor="showPassword">Show Password</label>
                </div>

                <button type="submit" className="submit">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
