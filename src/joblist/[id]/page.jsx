'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const JOBS = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Solutions Inc.',
    location: 'Jakarta',
    type: 'Full Time',
    salary: 'Rp 8-12 juta/bulan',
    experience: '1-3 tahun',
    description: 'Kami mencari Frontend Developer yang berpengalaman dalam React.js dan memiliki pemahaman yang kuat tentang UI/UX.',
    logo: '💻',
    requirements: [
      'Minimal pengalaman 1 tahun dengan React.js',
      'Familiar dengan state management (Redux, Context API)',
      'Memahami HTML5, CSS3, dan JavaScript ES6+',
      'Pengalaman dengan responsive design dan cross-browser compatibility',
      'Memahami RESTful APIs dan integrasi frontend-backend'
    ],
    responsibilities: [
      'Mengembangkan dan memelihara aplikasi web dengan React.js',
      'Berkolaborasi dengan UI/UX designer untuk mengimplementasikan desain',
      'Mengoptimalkan aplikasi untuk performa maksimal',
      'Melakukan testing dan debugging',
      'Berpartisipasi dalam code review dan dokumentasi'
    ],
    benefits: [
      'Asuransi kesehatan',
      'Tunjangan transportasi',
      'Remote work 2 hari/minggu',
      'Lingkungan kerja yang dinamis',
      'Kesempatan pengembangan karir'
    ],
    companyDescription: 'Tech Solutions Inc. adalah perusahaan teknologi yang berfokus pada pengembangan aplikasi web dan mobile untuk berbagai industri. Dengan tim yang terdiri dari talenta-talenta terbaik, kami berkomitmen untuk memberikan solusi teknologi terbaik bagi klien kami.',
    applicationDeadline: '30 November 2023',
    postedDate: '1 November 2023'
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
    logo: '🎨',
    requirements: [
      'Minimal pengalaman 1 tahun sebagai UI/UX Designer',
      'Portofolio yang menunjukkan kemampuan desain UI/UX',
      'Familiar dengan Figma, Adobe XD, atau Sketch',
      'Pemahaman tentang prinsip-prinsip desain dan user-centered design',
      'Kemampuan komunikasi yang baik'
    ],
    responsibilities: [
      'Merancang wireframes, mockups, dan prototypes',
      'Melakukan user research dan usability testing',
      'Berkolaborasi dengan tim produk dan development',
      'Membuat design system dan style guide',
      'Mengoptimalkan user flow dan user experience'
    ],
    benefits: [
      'Asuransi kesehatan',
      'Tunjangan makan',
      'Flexible working hours',
      'Lingkungan kerja kreatif',
      'Pelatihan dan workshop desain'
    ],
    companyDescription: 'Creative Studio adalah studio desain digital yang fokus pada UI/UX design, branding, dan pengembangan website. Kami bekerja dengan berbagai klien dari startup hingga perusahaan enterprise untuk menciptakan produk digital yang menarik dan user-friendly.',
    applicationDeadline: '15 Desember 2023',
    postedDate: '15 November 2023'
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
    logo: '📊',
    requirements: [
      'Mahasiswa tingkat akhir atau fresh graduate jurusan Statistik, Matematika, IT, atau bidang terkait',
      'Memiliki pemahaman dasar tentang SQL dan analisis data',
      'Familiar dengan Excel atau Google Sheets untuk analisis data',
      'Kemampuan belajar yang cepat',
      'Kemampuan komunikasi yang baik'
    ],
    responsibilities: [
      'Membantu tim dalam mengumpulkan dan menganalisis data',
      'Membuat visualisasi data dan laporan',
      'Melakukan riset pasar dan kompetitor',
      'Membantu dalam pengembangan dashboard BI',
      'Berpartisipasi dalam proyek analisis data'
    ],
    benefits: [
      'Sertifikat magang',
      'Kesempatan untuk dipekerjakan full-time',
      'Mentorship dari profesional data',
      'Lingkungan belajar yang supportive',
      'Networking dengan profesional industri'
    ],
    companyDescription: 'Data Insights Co. adalah perusahaan konsultan data yang membantu bisnis dalam mengambil keputusan berbasis data. Kami menyediakan layanan analisis data, business intelligence, dan data science untuk berbagai industri.',
    applicationDeadline: '10 Desember 2023',
    postedDate: '10 November 2023'
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
    logo: '⚙️',
    requirements: [
      'Minimal pengalaman 1 tahun dengan Node.js dan Express',
      'Familiar dengan database SQL (MySQL, PostgreSQL) dan NoSQL (MongoDB)',
      'Pemahaman tentang RESTful API dan GraphQL',
      'Pengalaman dengan version control (Git)',
      'Kemampuan problem-solving yang baik'
    ],
    responsibilities: [
      'Mengembangkan dan memelihara API dan microservices',
      'Mengelola database dan optimasi query',
      'Implementasi autentikasi dan otorisasi',
      'Melakukan testing dan debugging',
      'Berkolaborasi dengan tim frontend'
    ],
    benefits: [
      'Jadwal kerja fleksibel (20 jam/minggu)',
      'Remote work',
      'Kompensasi kompetitif',
      'Kesempatan untuk proyek jangka panjang',
      'Lingkungan kerja yang mendukung work-life balance'
    ],
    companyDescription: 'Cloud Services adalah perusahaan yang berfokus pada pengembangan aplikasi berbasis cloud dan layanan SaaS. Kami menyediakan solusi cloud untuk bisnis kecil hingga menengah dengan fokus pada keamanan dan skalabilitas.',
    applicationDeadline: '5 Desember 2023',
    postedDate: '5 November 2023'
  }
];

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [applying, setApplying] = useState(false);
  const [applied, setApplied] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundJob = JOBS.find(job => job.id === parseInt(id));
      setJob(foundJob);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  const handleApply = () => {
    setApplying(true);
    setTimeout(() => {
      setApplying(false);
      setApplied(true);
      setShowModal(true);
    }, 1500);
  };

  const MotionDiv = motion ? motion.div : 'div';

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Lowongan tidak ditemukan</h1>
          <p className="text-gray-600 mb-6">Lowongan yang Anda cari mungkin sudah tidak tersedia atau telah dihapus.</p>
          <button
            onClick={() => navigate('/joblist')}
            className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Kembali ke Daftar Lowongan
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <button
          onClick={() => navigate('/joblist')}
          className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 mb-6 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Kembali ke Daftar Lowongan
        </button>

        {/* Job header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md overflow-hidden mb-8"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 p-6 text-white">
            <div className="flex items-center">
              <div className="bg-white text-emerald-800 rounded-lg p-4 mr-4">
                <span className="text-4xl">{job.logo}</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">{job.title}</h1>
                <p className="text-emerald-100 font-medium">{job.company}</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {job.location}
              </div>
              <div className="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {job.type}
              </div>
              <div className="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {job.experience}
              </div>
              <div className="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {job.salary}
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-gray-500">
                <span className="font-medium">Diposting:</span> {job.postedDate}
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-medium">Deadline:</span> {job.applicationDeadline}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Deskripsi Pekerjaan</h2>
              <p className="text-gray-700 mb-6">{job.description}</p>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-medium text-gray-900 mb-2">Tentang Perusahaan</h3>
                <p className="text-gray-700">{job.companyDescription}</p>
              </div>

              <h2 className="text-lg font-semibold text-gray-900 mb-4">Persyaratan</h2>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>

              <h2 className="text-lg font-semibold text-gray-900 mb-4">Tanggung Jawab</h2>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                {job.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>

              <h2 className="text-lg font-semibold text-gray-900 mb-4">Benefit</h2>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                {job.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </MotionDiv>

        {/* Apply section */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-md p-6 text-center"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Tertarik dengan posisi ini?</h2>
          <p className="text-gray-600 mb-6">Lamar sekarang dan mulai perjalanan karir baru Anda bersama {job.company}</p>
          <button
            onClick={handleApply}
            disabled={applying || applied}
            className={`px-8 py-3 rounded-lg font-medium transition-colors ${applied
              ? 'bg-emerald-100 text-emerald-800 cursor-default'
              : 'bg-emerald-600 text-white hover:bg-emerald-700'
              }`}
          >
            {applying ? (
              <div className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Mengirim Lamaran...</span>
              </div>
            ) : applied ? (
              <div className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Lamaran Terkirim</span>
              </div>
            ) : (
              'Lamar Sekarang'
            )}
          </button>
        </MotionDiv>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
          >
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lamaran Berhasil Terkirim!</h3>
              <p className="text-gray-600 mb-6">
                Lamaran Anda untuk posisi {job.title} di {job.company} telah berhasil terkirim.
                Tim rekrutmen akan meninjau lamaran Anda dan menghubungi Anda jika kualifikasi Anda sesuai.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </MotionDiv>
        </div>
      )}
    </div>
  );
};

export default JobDetail; 