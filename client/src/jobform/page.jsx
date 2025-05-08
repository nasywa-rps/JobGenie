'use client';

import React, { useState, useEffect } from 'react';
import '../app.css'; // Import global CSS
import { useNavigate } from 'react-router-dom';

const JobForm = () => {
  const [formData, setFormData] = useState({
    data1: '',
    data2: '',
    data3: '',
    data4: '',
    data5: '',
    cvFile: null,
  });

  const [notification, setNotification] = useState(null);

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, cvFile: file }));
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotification({ message: 'Form submitted successfully!', type: 'success' });
    navigate('/joblist');
  };

  return (
    <div className="jobform-container">
      {/* Main Content */}
      <div className="jobform-content">
        <h1 className="jobform-title">Lorem Ipsum</h1>

        <div className="jobform-form-wrapper">
          <h2 className="jobform-subtitle">Isi Data</h2>

          <form onSubmit={handleSubmit}>
            {["data1", "data2", "data3", "data4", "data5"].map((name, index) => (
              <div key={index} className="jobform-input-group">
                <label className="jobform-label">Data {index + 1}</label>
                <input
                  type="text"
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="jobform-input"
                />
              </div>
            ))}

            <hr className="jobform-divider" />

            {/* File Input */}
            <div className="jobform-file-group">
              <label className="jobform-label">Masukkan CV</label>
              <div className="jobform-file-wrapper">
                <input 
                  type="file" 
                  onChange={handleFileChange} 
                  accept=".pdf,.doc,.docx" 
                  className="jobform-file-input"
                />
                <span className="jobform-file-note">*File CV harus dalam bentuk ATS</span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="jobform-button-wrapper">
              <button type="submit" className="jobform-submit-button">
                Cari
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
