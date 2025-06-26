import React from "react";
import content from "../data/content.json";
import "./Experience.css";

const Experience = () => {
  const experiences = content.experience;

  return (
    <section className="experience-section" id="experience">
      <h2 className="about-title">Experience</h2>
      <div className="underline"></div>
      <p className="about-subtitle">My Professional Journey</p>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3 className="experience-type">{exp.type}</h3>
            <h4 className="experience-company">{exp.company}</h4>
            <p className="experience-techstack">
              <strong>Tech Stack:</strong> {exp.techstack}
            </p>
            <ul className="experience-description">
              {exp.description.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
