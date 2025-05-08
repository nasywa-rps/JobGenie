'use client';

import { useNavigate } from 'react-router-dom';
import '../app.css';

const JobList = () => {
  const navigate = useNavigate();

  const jobs = [
    { id: 1, title: 'Job 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 2, title: 'Job 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, title: 'Job 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 4, title: 'Job 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
  ];

  return (
    <div className="joblist-container">
      <header className="joblist-header">
        <h1 className="joblist-title">Lorem Ipsum</h1>
      </header>

      <div className="joblist-content">
        {jobs.map((job) => (
          <div key={job.id} className="joblist-card" onClick={() => navigate(`/job/${job.id}`)}>
            <div className="joblist-card-icon">💼</div>
            <div className="joblist-card-text">
              <h2 className="joblist-card-title">{job.title}</h2>
              <p className="joblist-card-description">{job.description}</p>
            </div>
            <div className="joblist-card-arrow">➤</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
