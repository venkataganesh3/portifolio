import React from 'react';
import './About.css';
import content from "../data/content.json";

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>
      <div className="underline"></div>
      <p className="about-subtitle">Get to know me and my skills</p>
      <div className="about-content">
        <div className="about-text">
          <p>
            I am a dedicated B.Tech student with a strong foundation in computer science and engineering. I am proficient in various programming languages and technologies, having successfully completed several practical projects in MERN stack development. I aspire to contribute to meaningful projects and grow professionally.
          </p>
          <p>
            My experience includes working with ReactJs, NodeJs, ExpressJs, and MongoDB, along with other tools like Java, Python, and C++. I enjoy building efficient, user-friendly applications and continuously learning new technologies.
          </p>
          <p>
            Currently, I am seeking software engineering roles to apply my technical and problem-solving abilities in a dynamic, professional environment.
          </p>
        </div>

        <div className="about-skills">
            {content.skillsGrouped.map((group, index) => (
              <div className="skill-bar" key={index}>
                <div className="skill-info">
                  <span>{group.label}</span>
                  <span>{group.level}%</span>
                </div>
                <div className="bar">
                  <div
                    className="filled-bar"
                    style={{ width: `${group.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default About;
