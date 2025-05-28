import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import AppCard from './components/card';
import SearchCard from './components/searchCard';
import Footer from './components/footer';
import JobForm from './jobform/page';
import JobList from './joblist/page';
import JobDetail from './joblist/[id]/page';
import LoginPage from './login/page';
import RegisterPage from './register/page';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navbarData = {
    logo: "jobgenie 5.png",
    logoAlt: "JobGenie Logo",
    title: "JobGenie",
    links: [
      { text: "Home", url: "/" },
      { text: "Job Form", url: "/jobform" },
      { text: "Login", url: "/login" }
    ],
    profileName: "Person 1",
    profileIcon: "Male User.png",
    profileIconAlt: "Profile Icon"
  };

  const jobGenieText = `JobGenie adalah platform pencari kerja berbasis AI yang mempermudah proses pencarian pekerjaan hanya dengan mengunggah CV. 
  Dengan teknologi cerdas, JobGenie menganalisis isi CV Anda dan secara otomatis mencarikan lowongan kerja yang paling sesuai dengan latar belakang, 
  keterampilan, dan pengalaman Anda.`;

  const jobGenieText2 = [
    "Rekomendasi kerja akurat berdasarkan CV Anda.",
    "AI mempercepat pencarian pekerjaan secara otomatis.",
    "Pengalaman pengguna yang dipersonalisasi.",
    "Proses cepat dan efisien hanya dengan sekali unggah.",
    "Desain antarmuka yang intuitif dan mudah digunakan."
  ];

  const searchCardData = {
    title: "Cara Kerja JobGenie:",
    steps: [
      "Unggah CV Anda ke platform JobGenie.",
      "AI menganalisis isi CV untuk memahami pengalaman kerja, pendidikan, dan keahlian Anda.",
      "Sistem mencarikan lowongan kerja yang paling cocok dengan profil Anda.",
      "Lihat dan lamar pekerjaan yang direkomendasikan langsung dari platform."
    ],
    imageUrl: "images.jpg",
    imageAlt: "Uji Sampel"
  };

  // Scroll to top button component
  const ScrollTopButton = () => (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 rounded-full bg-emerald-700 text-white shadow-lg hover:bg-emerald-600 focus:outline-none transition-all duration-300 z-50 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );

  // Feature Icons
  const FeatureIcon = ({ icon, title, description }) => (
    <div className="bg-white rounded-xl shadow-soft-xl p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-colored-lg hover:-translate-y-2">
      <div className="bg-emerald-100 p-3 rounded-full mb-4 text-emerald-700">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  // Features section
  const FeaturesSection = () => {
    const features = [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        ),
        title: "CV Analysis",
        description: "Analisis CV yang mendalam untuk memahami keahlian dan pengalaman Anda."
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        title: "AI Matching",
        description: "Teknologi AI canggih untuk mencocokkan profil Anda dengan lowongan yang tersedia."
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        title: "Proses Cepat",
        description: "Dapatkan rekomendasi pekerjaan dalam hitungan detik setelah mengunggah CV."
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        ),
        title: "Keamanan Data",
        description: "Data pribadi Anda selalu aman dan terlindungi dengan sistem keamanan terbaik."
      }
    ];

    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fitur Unggulan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">JobGenie menawarkan berbagai fitur canggih untuk membantu Anda menemukan pekerjaan yang sesuai dengan keahlian dan minat Anda.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <FeatureIcon {...feature} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Add this component after the AppCards and before the SearchCard
  const StatsSection = () => (
    <div className="bg-gradient-to-r from-emerald-800 to-emerald-700 py-16 rounded-2xl shadow-xl mb-16 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-emerald-600/30 rounded-full filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">JobGenie dalam Angka</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto">Platform kami telah membantu ribuan pencari kerja menemukan pekerjaan yang sesuai dengan keahlian mereka</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transform transition-all duration-300 hover:bg-white/20 hover:scale-105 border border-white/20">
            <div className="text-4xl font-bold text-amber-400 mb-2 animate-float">10,000+</div>
            <div className="text-emerald-100 font-medium">Pengguna Terdaftar</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transform transition-all duration-300 hover:bg-white/20 hover:scale-105 border border-white/20">
            <div className="text-4xl font-bold text-amber-400 mb-2 animate-float" style={{ animationDelay: '0.5s' }}>5,000+</div>
            <div className="text-emerald-100 font-medium">Lowongan Tersedia</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transform transition-all duration-300 hover:bg-white/20 hover:scale-105 border border-white/20">
            <div className="text-4xl font-bold text-amber-400 mb-2 animate-float" style={{ animationDelay: '1s' }}>98%</div>
            <div className="text-emerald-100 font-medium">Tingkat Akurasi</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transform transition-all duration-300 hover:bg-white/20 hover:scale-105 border border-white/20">
            <div className="text-4xl font-bold text-amber-400 mb-2 animate-float" style={{ animationDelay: '1.5s' }}>3,000+</div>
            <div className="text-emerald-100 font-medium">Berhasil Dipekerjakan</div>
          </div>
        </div>
      </div>
    </div>
  );

  // Testimonials section
  const TestimonialsSection = () => {
    const testimonials = [
      {
        id: 1,
        content: "JobGenie membantu saya menemukan pekerjaan yang sesuai dengan keahlian saya hanya dalam waktu 2 minggu. Sangat direkomendasikan!",
        author: "Arden Ganteng",
        role: "Software Engineer",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg"
      },
      {
        id: 2,
        content: "Platform yang sangat intuitif dan mudah digunakan. AI-nya sangat akurat dalam merekomendasikan lowongan yang sesuai dengan CV saya.",
        author: "Ijal Preman Kei Kecil",
        role: "UI/UX Designer",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg"
      },
      {
        id: 3,
        content: "Saya sudah mencoba berbagai platform pencari kerja, tapi JobGenie adalah yang terbaik. Rekomendasi yang diberikan sangat relevan.",
        author: "Sanie Seturan",
        role: "Marketing Specialist",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    ];

    return (
      <div className="bg-gradient-to-b from-gray-100 to-white py-16 rounded-3xl shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Apa Kata Mereka</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Testimoni dari pengguna yang telah berhasil mendapatkan pekerjaan melalui platform JobGenie</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl p-6 shadow-soft-xl transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="h-14 w-14 rounded-full overflow-hidden mr-4 border-2 border-emerald-300 shadow-md">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">{testimonial.author}</h4>
                    <p className="text-sm text-emerald-700">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.content}"</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Call-to-action section
  const CtaSection = () => (
    <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 py-16 rounded-3xl shadow-xl my-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/30 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-amber-500/20 rounded-full filter blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Siap Temukan Pekerjaan Impian Anda?</h2>
        <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
          Unggah CV Anda sekarang dan biarkan AI kami menemukan pekerjaan yang paling sesuai dengan keahlian dan pengalaman Anda.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/jobform"
            className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
          >
            Mulai Sekarang
          </a>
          <a
            href="/register"
            className="px-8 py-4 bg-white hover:bg-gray-100 text-emerald-700 font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
          >
            Daftar Akun
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <Router>
      <ScrollTopButton />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/" element={
          <div className="min-h-screen flex flex-col">
            <Navbar {...navbarData} />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-emerald-900 to-emerald-700 pt-28 pb-20 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-600/30 rounded-full filter blur-3xl"></div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center animate-fade-in">
                  <div className="inline-block">
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                      <span className="block mb-2">Temukan Pekerjaan Impian</span>
                      <span className="block text-amber-400 animate-pulse-slow">dengan Bantuan AI</span>
                    </h1>
                  </div>
                  <p className="mt-5 max-w-md mx-auto text-base text-emerald-100 sm:text-lg md:mt-6 md:text-xl md:max-w-3xl">
                    Unggah CV Anda dan biarkan AI kami menemukan pekerjaan yang paling sesuai dengan keahlian dan pengalaman Anda.
                  </p>
                  <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
                    <div className="rounded-md shadow">
                      <a
                        href="/jobform"
                        className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-amber-500 hover:bg-amber-600 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      >
                        Mulai Sekarang
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wave Divider */}
              <div className="absolute left-0 right-0 bottom-0 h-16 overflow-hidden">
                <svg
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                  className="absolute bottom-0 w-full h-16 text-gray-50 wave-animation"
                  fill="currentColor"
                >
                  <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
                  <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
                  <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
                </svg>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow bg-gray-50 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="space-y-20">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="animate-slide-in-left">
                      <AppCard
                        title="Apa itu JobGenie?"
                        text={jobGenieText}
                        icon={
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        }
                      />
                    </div>
                    <div className="animate-slide-in-right">
                      <AppCard
                        title="Keuntungan JobGenie"
                        text={jobGenieText2}
                        icon={
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        }
                      />
                    </div>
                  </div>

                  <FeaturesSection />
                  <StatsSection />
                  <SearchCard {...searchCardData} />
                  <TestimonialsSection />
                  <CtaSection />
                </div>
              </div>
            </div>

            <Footer />
          </div>
        } />

        <Route path="/jobform" element={
          <div className="min-h-screen flex flex-col">
            <Navbar {...navbarData} />
            <div className="flex-grow pt-16">
              <JobForm />
            </div>
            <Footer />
          </div>
        } />

        <Route path="/joblist" element={
          <>
            <Navbar {...navbarData} />
            <div className="content-wrapper">
              <JobList />
            </div>
            <Footer />
          </>
        } />

        <Route path="/job/:id" element={
          <>
            <Navbar {...navbarData} />
            <div className="content-wrapper">
              <JobDetail />
            </div>
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
