'use client';

import React, { useState, useEffect } from 'react';
import '../app.css'; // Import global CSS
import { useNavigate } from 'react-router-dom';

const JobForm = () => {
  const [formData, setFormData] = useState({
    workPreference: '',
    jobTypes: '',
    experience: '',
    location: '',
    salaryRange: '',
    cvFile: null,
  });

  const [notification, setNotification] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updated = checked
        ? [...prev.jobTypes, value]
        : prev.jobTypes.filter((item) => item !== value);
      return { ...prev, jobTypes: updated };
    });
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotification({ message: 'Form submitted successfully!', type: 'success' });
    console.log('Submitted Data:', formData);
    navigate('/joblist');
  };

  return (
    <div className="jobform-container"> 
      <div className="jobform-content">
        <h1 className="jobform-title">Cari Lowongan Kerja</h1>

        <div className="jobform-form-wrapper">
          <h2 className="jobform-subtitle">Isi Data</h2>

          <form onSubmit={handleSubmit}>
          <div className="jobform-input-group">
              <label className="jobform-label">Preferensi Kerja</label>
              {['WFO', 'WFH', 'Hybrid'].map((option) => (
                <label key={option} className="jobform-radio-label">
                <input
                  type="radio"
                  name="workPreference"
                  value={option}
                  checked={formData.workPreference === option}
                  onChange={handleRadioChange}
                />
                {option}
              </label>
            ))}
          </div>

          {/* Tipe Job */}
          <div className="jobform-input-group">
              <label className="jobform-label">Tipe Pekerjaan</label>
              {['Intern', 'Part Time', 'Full Time'].map((option) => (
                <label key={option} className="jobform-checkbox-label">
                  <input
                    type="checkbox"
                    value={option}
                    checked={formData.jobTypes.includes(option)}
                    onChange={handleCheckboxChange}
                  />
                  {option}
                </label>
              ))}
            </div>

            {/* Pengalaman Kerja */}
            <div className="jobform-input-group">
              <label className="jobform-label">Pengalaman Kerja</label>
              {['<1 tahun', '1-3 tahun', '>3 tahun'].map((option) => (
                <label key={option} className="jobform-radio-label">
                  <input
                    type="radio"
                    name="experience"
                    value={option}
                    checked={formData.experience === option}
                    onChange={handleRadioChange}
                  />
                  {option}
                </label>
              ))}
            </div>

            {/* Lokasi */}
            <div className="jobform-input-group">
              <label className="jobform-label">Lokasi</label>
              {['Jakarta', 'Bandung', 'Surabaya', 'Yogyakarta'].map((city) => (
                <label key={city} className="jobform-radio-label">
                  <input
                    type="radio"
                    name="location"
                    value={city}
                    checked={formData.location === city}
                    onChange={handleRadioChange}
                  />
                  {city}
                </label>
              ))}
            </div>

            {/* Gaji */}
            <div className="jobform-input-group">
              <label className="jobform-label">Range Gaji</label>
              {['<5jt', '5-10jt', '>10jt'].map((option) => (
                <label key={option} className="jobform-radio-label">
                  <input
                    type="radio"
                    name="salaryRange"
                    value={option}
                    checked={formData.salaryRange === option}
                    onChange={handleRadioChange}
                  />
                  {option}
                </label>
              ))}
            </div>

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
