import React from "react";
import "./companyinfo.css";

const CompanyInfo = () => {
  return (
    <div className="company">
      <h2 className="company-title">
        Are you looking for hands on candidate for your company?
      </h2>
      <p className="company-subtitle">
        Internee.pk kickstart student's tech careers with first internships,
        providing industry exposure, practical skills, and networking
        opportunities, paving the way for their success in the tech industry.
      </p>
      <div className="company-stats">
        <div className="stat-item">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="stat-icon"
            viewBox="0 0 24 24"
          >
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          <h3 className="stat-number">7k+</h3>
          <p className="stat-text">Internships Provided</p>
        </div>
        <div className="stat-item">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="stat-icon"
            viewBox="0 0 24 24"
          >
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h3 className="stat-number">15K+</h3>
          <p className="stat-text">LinkedIn Family</p>
        </div>
        <div className="stat-item">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="stat-icon"
            viewBox="0 0 24 24"
          >
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg>
          <h3 className="stat-number">19</h3>
          <p className="stat-text">Courses on LMS</p>
        </div>
        <div className="stat-item">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="stat-icon"
            viewBox="0 0 24 24"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <h3 className="stat-number">15</h3>
          <p className="stat-text">Companies Onboarded</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
