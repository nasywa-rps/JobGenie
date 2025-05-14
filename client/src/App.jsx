import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar';
import Card from '../components/card';
import SearchCard from '../components/searchCard';
import Footer from '../components/footer';
import JobForm from './jobform/page';
import JobList from './joblist/page';
import LoginPage from './login/page'; 
import RegisterPage from './register/page';

function App() {
  const navbarData = {
    logo: "jobgenie 5.png",
    logoAlt: "JobGenie Logo",
    title: "JobGenie",
    links: [
      { text: "Home", url: "/#" },
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

  const footerText = "Link Github: https://github.com/nasywa-rps/Senpro-B3-09.git";

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        <Route path="/" element={
          <div className="app-container">
            <Navbar {...navbarData} />
            <div style={{ marginTop: '80px' }} className="app-content">
              <Card title="Apa itu JobGenie?" text={jobGenieText} />
              <Card title="Keuntungan JobGenie" text={jobGenieText2} />
              <SearchCard {...searchCardData} />
            </div>
            <Footer text={footerText} />
          </div>
        } />

        <Route path="/jobform" element={
          <div className="app-container">
            <Navbar {...navbarData} />
            <div className="app-content">
              <JobForm />
            </div>
            <Footer text={footerText} />
          </div>
        } />

        <Route path="/joblist" element={
          <div className="app-container">
            <Navbar {...navbarData} />
            <div className="app-content">
              <JobList />
            </div>
            <Footer text={footerText} />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
