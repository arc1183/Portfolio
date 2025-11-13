
import React, { useState } from 'react';
import './ExpEdu.css'; 

const experienceData = [
  {
    title: "Software Engineer, Researcher",
    company: "Syracuse University, Syracuse, NY, USA",
    duration: "Feb 2025 - Present",
    points: [
      "Contributed to deploy end-to-end anomaly detection pipeline using unsupervised ML algorithms.",
      "Engaged in production MLOps infrastructure on AWS EC2 (Dockerized), automating model retraining and deployment via GitHub Actions CI/CD pipeline.",
      "Participated in data and concept drift detection (KS-test, PSI) on production traffic, triggering automated alerts and retraining cycles."
    ]
  }
];

const educationData = [
  {
    title: "MS in Computer Science (GPA: 3.56/4)",
    institution: "Syracuse University, Syracuse, NY, USA",
    duration: "Jan 2023 - Dec 2024",
  },
  {
    title: "BS in Computer Science (GPA: 8.0/10)",
    institution: "Jahawarlal Institute of Technology, Hyderabad, India",
    duration: "Aug 2018 - May 2022",
  }
];

const ExpEdu = () => {

  const [activeTab, setActiveTab] = useState('experience');

  const content = activeTab === 'experience' ? experienceData : educationData;

  const icon = activeTab === 'experience' ? '💼' : '🎓';

  return (
    <section id="experience-education" className="ee-section">
      <div className="ee-container">

        <div className="ee-tabs">
          <button 
            className={`ee-tab-button ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>

            <button 
            className={`ee-tab-button ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
          Education 
          </button>
        </div>
        <div className="ee-content">
          {content.map((item, index) => (
            <div key={index} className="ee-card">
              <div className="ee-header">
                <h3 className="ee-card-title">{item.title}</h3>
                <span className="ee-card-duration">{item.duration}</span>
              </div>
              <p className="ee-card-institution">{item.company || item.institution}</p>
              
          
              {item.points && (
                <ul className="ee-points">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
              
             
              {item.certs && (
                <ul className="ee-certs">
                  {item.certs.map((cert, i) => (
                    <li key={i}>
                      <span className="cert-bullet">→</span> {cert}
                    </li>
                  ))}
                </ul>
              )}

            </div>
          ))}
          {content.length === 0 && <p className="ee-no-content">No data available for this section.</p>}
        </div>

      </div>
    </section>
  );
};

export default ExpEdu;