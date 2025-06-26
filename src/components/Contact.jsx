import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">Contact Me</h2>
      <div className="underline"></div>
      <p className="contact-subheading">Get in touch with me</p>

      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">
              <FaPhoneAlt />
            </div>
            <div className="contact-text">
              <h4>Phone</h4>
              <p>+91 6300299445</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div className="contact-text">
              <h4>Email</h4>
              <p>venkataganesh2811@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FaLinkedin />
            </div>
            <div className="contact-text">
              <h4>LinkedIn</h4>
              <a href="https://linkedin.com/in/venkata-ganesh-318867287/" target="_blank" rel="noreferrer">View Profile</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FaGithub />
            </div>
            <div className="contact-text">
              <h4>GitHub</h4>
              <a href="https://github.com/venkataganesh3" target="_blank" rel="noreferrer">View Profile</a>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-availability">
          <h3>Currently Available For</h3>
          <ul>
            <li><MdCheckCircle /> Full-time Software Engineering Roles</li>
            <li><MdCheckCircle /> Internship Opportunities</li>
            <li><MdCheckCircle /> Freelance Web Development Projects</li>
            <li><MdCheckCircle /> Collaborative Coding Projects</li>
          </ul>
          <p>Interested in working with me?</p>
          <a href="mailto:venkataganesh2811@gmail.com" className="email-button">
            Send Me An Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
