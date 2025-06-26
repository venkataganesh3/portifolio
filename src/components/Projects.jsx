import content from "../data/content.json";
import "./Projects.css";
import { FaGithub, FaBroom , FaBookOpen, FaShieldAlt,FaBell } from "react-icons/fa";



const Projects = () => {
  const iconMap = {
    "Clean Slate": <FaBroom size={40} className="project-icon" />,
    "Smart Learning": <FaBookOpen size={40} className="project-icon" />,
    "Credit Card Fraud Detection": <FaShieldAlt size={40} className="project-icon" />,
    "Disaster Preparedness" : <FaBell size={40} className="project-icon" />
  };

  return (
    <section className="projects-section" id="projects">
        <h2 className="about-title">Projects</h2>
      <div className="underline"></div>
      <p className="about-subtitle">Showcasing my best work</p>
      <div className="projects-grid">
        {content.projects.map((project, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              {/* FRONT SIDE */}
              <div className="flip-card-front">
                {iconMap[project.title] || <FaGithub size={40} className="project-icon" />}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-techstack">{project.techstak}</p>
                <p className="project-description">{project.description}</p>
                <span className="view-project-label">View Project→</span>
              </div>

              {/* BACK SIDE */}
              <div className="flip-card-back">
                <h3 className="project-title">{project.title}</h3>
                <ul className="project-details">
                  {project.moredesc.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  className="github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
