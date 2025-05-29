'use client';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css';

const JobList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    jobType: [],
    location: [],
    experience: []
  });
  const [loading, setLoading] = useState(true);

  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      location: 'Jakarta',
      type: 'Full Time',
      salary: 'Rp 8-12 juta/bulan',
      experience: '1-3 tahun',
      description: 'Kami mencari Frontend Developer yang berpengalaman dalam React.js dan memiliki pemahaman yang kuat tentang UI/UX.',
      logo: '💻'
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      company: 'Creative Studio',
      location: 'Bandung',
      type: 'Full Time',
      salary: 'Rp 7-10 juta/bulan',
      experience: '1-3 tahun',
      description: 'Bergabunglah dengan tim desain kami untuk menciptakan pengalaman pengguna yang luar biasa untuk produk digital kami.',
      logo: '🎨'
    },
    {
      id: 3,
      title: 'Data Analyst Intern',
      company: 'Data Insights Co.',
      location: 'Jakarta',
      type: 'Intern',
      salary: 'Rp 3-5 juta/bulan',
      experience: '<1 tahun',
      description: 'Kesempatan magang untuk mahasiswa atau lulusan baru yang tertarik dengan analisis data dan business intelligence.',
      logo: '📊'
    },
    {
      id: 4,
      title: 'Backend Developer',
      company: 'Cloud Services',
      location: 'Surabaya',
      type: 'Part Time',
      salary: 'Rp 6-9 juta/bulan',
      experience: '1-3 tahun',
      description: 'Posisi paruh waktu untuk developer backend dengan keahlian dalam Node.js, Express, dan database SQL/NoSQL.',
      logo: '⚙️'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const filteredJobs = jobs.filter(job => {
    const matchesSearch =
      searchTerm === '' ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesJobType =
      selectedFilters.jobType.length === 0 ||
      selectedFilters.jobType.includes(job.type);

    const matchesLocation =
      selectedFilters.location.length === 0 ||
      selectedFilters.location.includes(job.location);

    const matchesExperience =
      selectedFilters.experience.length === 0 ||
      selectedFilters.experience.includes(job.experience);

    return matchesSearch && matchesJobType && matchesLocation && matchesExperience;
  });

  const handleFilterChange = (category, value) => {
    setSelectedFilters(prev => {
      const updatedFilters = { ...prev };

      if (updatedFilters[category].includes(value)) {
        updatedFilters[category] = updatedFilters[category].filter(item => item !== value);
      } else {
        updatedFilters[category] = [...updatedFilters[category], value];
      }

      return updatedFilters;
    });
  };

  const clearFilters = () => {
    setSelectedFilters({
      jobType: [],
      location: [],
      experience: []
    });
    setSearchTerm('');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const MotionDiv = motion ? motion.div : 'div';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Lowongan Kerja Tersedia</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan pekerjaan yang sesuai dengan keahlian dan preferensi Anda
          </p>
        </header>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:max-w-md">
              <input
                type="text"
                placeholder="Cari lowongan kerja..."
                className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div className="flex gap-2 w-full sm:w-auto">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filter
              </button>

              {(selectedFilters.jobType.length > 0 || selectedFilters.location.length > 0 || selectedFilters.experience.length > 0) && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 border border-red-200 rounded-lg hover:bg-red-100 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Clear
                </button>
              )}
            </div>
          </div>

          {filterOpen && (
            <MotionDiv
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 p-4 bg-white rounded-lg shadow-md border border-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Tipe Pekerjaan</h3>
                  <div className="space-y-2">
                    {['Full Time', 'Part Time', 'Intern'].map(type => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded text-emerald-600 focus:ring-emerald-500 mr-2"
                          checked={selectedFilters.jobType.includes(type)}
                          onChange={() => handleFilterChange('jobType', type)}
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Lokasi</h3>
                  <div className="space-y-2">
                    {['Jakarta', 'Bandung', 'Surabaya', 'Yogyakarta'].map(location => (
                      <label key={location} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded text-emerald-600 focus:ring-emerald-500 mr-2"
                          checked={selectedFilters.location.includes(location)}
                          onChange={() => handleFilterChange('location', location)}
                        />
                        {location}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Pengalaman</h3>
                  <div className="space-y-2">
                    {['<1 tahun', '1-3 tahun', '>3 tahun'].map(exp => (
                      <label key={exp} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded text-emerald-600 focus:ring-emerald-500 mr-2"
                          checked={selectedFilters.experience.includes(exp)}
                          onChange={() => handleFilterChange('experience', exp)}
                        />
                        {exp}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </MotionDiv>
          )}
        </div>

        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            {loading ? 'Mencari lowongan...' : `Menampilkan ${filteredJobs.length} lowongan`}
          </p>
          <div className="text-sm text-gray-500">
            Diurutkan berdasarkan: Terbaru
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
          </div>
        ) : filteredJobs.length > 0 ? (
          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {filteredJobs.map((job) => (
              <MotionDiv
                key={job.id}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden cursor-pointer"
                onClick={() => navigate(`/job/${job.id}`)}
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-emerald-100 text-emerald-800 p-3 rounded-lg mr-4">
                      <span className="text-2xl">{job.logo}</span>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                        <div>
                          <h2 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h2>
                          <p className="text-gray-600 font-medium">{job.company}</p>
                        </div>
                        <div className="mt-2 sm:mt-0">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                            {job.type}
                          </span>
                        </div>
                      </div>

                      <p className="mt-3 text-gray-600 line-clamp-2">{job.description}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.experience}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.salary}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </MotionDiv>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">😔</div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Tidak ada lowongan yang ditemukan</h3>
            <p className="text-gray-600">Coba ubah filter atau kata kunci pencarian Anda</p>
            <button
              onClick={clearFilters}
              className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Reset Pencarian
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobList;
