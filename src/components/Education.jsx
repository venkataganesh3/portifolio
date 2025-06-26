// src/components/Education.jsx
import React from "react";
import "./Education.css";

const Education = ({ content }) => {
  return (
    <div className="education-container" id="education">
      <h2 className="about-title">Education</h2>
      <div className="underline"></div>
      <p className="about-subtitle">My Academic Journey</p>
      <div className="timeline">
        {content.map((edu, index) => (
          <div key={index} className={`timeline-item ${edu.side}`}>
            <div className="timeline-dot"></div>
            <div className="edu-card">
              <span className="edu-duration">{edu.duration}</span>
              <h3 className="edu-title">{edu.institution}</h3>
              <p className="edu-course">{edu.course}</p>
              <p className="score">{edu.score}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
