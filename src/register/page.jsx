'use client';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css'; // Copy dari login.css
import axios from 'axios';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password dan konfirmasi password tidak sama!");
      return;
    }

    axios.post('http://localhost:3001/register', { username, password })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  return (
    <div className="login-page"> {/* gunakan kembali styling login */}
      <div className="stars"></div>
      <div className="login-container">
        <div className="login-form">
          <h1>Register</h1>

          <div className="input-group">
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleUsername}
              placeholder="Username"
              className="input-field"
            />
            <span className="input-icon">👤</span>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
              placeholder="Password"
              className="input-field"
            />
            <span className="input-icon">🔒</span>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPassword}
              placeholder="Confirm Password"
              className="input-field"
            />
            <span className="input-icon">🔒</span>
          </div>

          <button className="login-button" onClick={handleSubmit}>
            Register
          </button>

          <div className="register-row">
            <span>Already have an account? </span>
            <a href="#" onClick={() => navigate('/login')} className="register-link">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
