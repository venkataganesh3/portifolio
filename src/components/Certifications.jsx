import React, { useRef, useState } from "react";
import "./Certifications.css";
import content from "../data/content.json";

const Certifications = () => {
  const certifications = content.certifications;
  const scrollRef = useRef(null);

  const itemsPerRow = 4; // Assuming 4 per row on desktop
  const [rowsToShow, setRowsToShow] = useState(2);

  const visibleCerts = certifications.slice(0, rowsToShow * itemsPerRow);

  const handleShowMore = () => {
    setRowsToShow(rowsToShow + 1);
  };

  const allShown = visibleCerts.length >= certifications.length;

  return (
    <section className="certifications-carousel">
      <h2 className="about-title">Certifications</h2>
      <div className="underline"></div>
      <p className="about-subtitle">Professional development and learning</p>

      <div className="carousel-wrapper">
        <div className="cert-scroll-container" ref={scrollRef}>
          {visibleCerts.map((cert, index) => (
            <div className="cert-card" key={index}>
              <h3>{cert.title}</h3>
              <p>{cert.company}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>

      {!allShown && (
        <button className="show-more-btn" onClick={handleShowMore}>
          Show More
        </button>
      )}
    </section>
  );
};

export default Certifications;
