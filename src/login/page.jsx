'use client';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css'; 

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: inputValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      // save token to localStorage or context
      localStorage.setItem('token', res.data.token);
      navigate('/');
      alert('Login success!');
    } catch (err) {
      console.log(err);
    }

  };

  return (
    <div className="login-page">
      <div className="stars"></div>
      <div className="login-container">
        <div className="login-form">
          <h1>Login</h1>
          
          <div className="input-group">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="input-field"
            />
            <span className="input-icon">👤</span>
          </div>
          
          <div className="input-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="input-field"
            />
            <span className="input-icon">🔒</span>
          </div>
          
          <div className="options-row">
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <a href="#" onClick={() => navigate('/forgot-password')} className="forgot-link">
              Forgot Password?
            </a>
          </div>
          
          <button className="login-button" onClick={handleSubmit}>
            Login
          </button>
          
          <div className="register-row">
            <span>Don't have an account? </span>
            <a href="#" onClick={() => navigate('/register')} className="register-link">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
