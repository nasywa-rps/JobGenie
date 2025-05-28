'use client';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Separator } from "../components/ui/separator";
import { motion } from 'framer-motion';

// Constants for form options
const WORK_PREFERENCES = ['WFO', 'WFH', 'Hybrid'];
const JOB_TYPES = ['Intern', 'Part Time', 'Full Time'];
const EXPERIENCE_LEVELS = ['<1 tahun', '1-3 tahun', '>3 tahun'];
const LOCATIONS = ['Jakarta', 'Bandung', 'Surabaya', 'Yogyakarta'];
const SALARY_RANGES = ['<5jt', '5-10jt', '>10jt'];

// Form group component for radio inputs
const FormRadioGroup = ({ label, name, options, value, onChange }) => (
  <div className="space-y-4">
    <Label className="text-base font-medium">{label}</Label>
    <RadioGroup value={value} onValueChange={(value) => onChange({ target: { name, value } })} className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {options.map((option) => (
        <div key={option} className="flex items-center space-x-2 rounded-md border p-3 hover:bg-gray-50 transition-colors">
          <RadioGroupItem value={option} id={`${name}-${option}`} />
          <Label htmlFor={`${name}-${option}`} className="cursor-pointer flex-grow">{option}</Label>
        </div>
      ))}
    </RadioGroup>
  </div>
);

// Form group component for checkbox inputs
const FormCheckboxGroup = ({ label, options, values, onChange }) => (
  <div className="space-y-4">
    <Label className="text-base font-medium">{label}</Label>
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {options.map((option) => (
        <div key={option} className="flex items-center space-x-2 rounded-md border p-3 hover:bg-gray-50 transition-colors">
          <Checkbox
            id={`job-type-${option}`}
            checked={values.includes(option)}
            onCheckedChange={(checked) =>
              onChange({ target: { value: option, checked } })
            }
          />
          <Label htmlFor={`job-type-${option}`} className="cursor-pointer flex-grow">{option}</Label>
        </div>
      ))}
    </div>
  </div>
);

const JobForm = () => {
  const [formData, setFormData] = useState({
    workPreference: '',
    jobTypes: [],
    experience: '',
    location: '',
    salaryRange: '',
    cvFile: null,
  });

  const [notification, setNotification] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Display notification if it exists
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      jobTypes: checked
        ? [...prev.jobTypes, value]
        : prev.jobTypes.filter((item) => item !== value),
    }));
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
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
    setIsSubmitting(true);

    // Validate form
    const requiredFields = ['workPreference', 'experience', 'location', 'salaryRange'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0 || formData.jobTypes.length === 0 || !formData.cvFile) {
      setNotification({
        message: 'Mohon lengkapi semua field yang diperlukan',
        type: 'error'
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setNotification({ message: 'Pencarian lowongan berhasil!', type: 'success' });
      console.log('Submitted Data:', formData);
      setIsSubmitting(false);

      // Redirect after successful submission
      setTimeout(() => {
        navigate('/joblist');
      }, 1000);
    }, 1500);
  };

  const MotionWrapper = motion ? motion.div : 'div';
  const cardAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container max-w-2xl mx-auto px-4">
        {notification && (
          <MotionWrapper
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`mb-4 p-4 rounded-md shadow-md ${notification.type === 'success'
              ? 'bg-green-100 text-green-800 border-l-4 border-green-500'
              : 'bg-red-100 text-red-800 border-l-4 border-red-500'
              }`}
          >
            <div className="flex items-center">
              {notification.type === 'success' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              )}
              {notification.message}
            </div>
          </MotionWrapper>
        )}
        <MotionWrapper
          initial="hidden"
          animate="visible"
          variants={cardAnimation}
        >
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center font-bold text-white">
                Cari Lowongan Kerja
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-8">
                <FormRadioGroup
                  label="Preferensi Kerja"
                  name="workPreference"
                  options={WORK_PREFERENCES}
                  value={formData.workPreference}
                  onChange={handleRadioChange}
                />

                <FormCheckboxGroup
                  label="Tipe Pekerjaan"
                  options={JOB_TYPES}
                  values={formData.jobTypes}
                  onChange={handleCheckboxChange}
                />

                <FormRadioGroup
                  label="Pengalaman Kerja"
                  name="experience"
                  options={EXPERIENCE_LEVELS}
                  value={formData.experience}
                  onChange={handleRadioChange}
                />

                <FormRadioGroup
                  label="Lokasi"
                  name="location"
                  options={LOCATIONS}
                  value={formData.location}
                  onChange={handleRadioChange}
                />

                <FormRadioGroup
                  label="Range Gaji"
                  name="salaryRange"
                  options={SALARY_RANGES}
                  value={formData.salaryRange}
                  onChange={handleRadioChange}
                />

                <Separator className="my-6" />

                <div className="space-y-4">
                  <Label className="text-base font-medium">Masukkan CV</Label>
                  <div className="grid w-full gap-1.5">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-emerald-500 transition-colors">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        id="cv-upload"
                      />
                      <label htmlFor="cv-upload" className="cursor-pointer">
                        <div className="flex flex-col items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <span className="text-sm font-medium text-gray-600">
                            {formData.cvFile ? formData.cvFile.name : "Klik untuk upload CV"}
                          </span>
                          <span className="text-xs text-gray-500">
                            PDF, DOC, or DOCX (max 5MB)
                          </span>
                        </div>
                      </label>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      *File CV harus dalam bentuk ATS
                    </p>
                  </div>
                </div>

                <div className="flex justify-center pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto px-8 bg-emerald-600 hover:bg-emerald-700 transition-colors"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Mencari...</span>
                      </div>
                    ) : "Cari"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </MotionWrapper>
      </div>
    </div>
  );
};

export default JobForm;
