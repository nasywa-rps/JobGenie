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
      { text: "Login", url: "/login" },
      { text: "Lorem", url: "#" }
    ],
    profileName: "Person 1",
    profileIcon: "Male User.png",
    profileIconAlt: "Profile Icon"
  };

  const jobGenieText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
  qui officia deserunt mollit anim id est laborum.`;

  const searchCardData = {
    title: "Cara Kerja JobGenie",
    steps: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
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
              <Card title="Keuntungan JobGenie" text={jobGenieText} />
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
