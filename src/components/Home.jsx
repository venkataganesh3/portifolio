import React from 'react';
import './Home.css';
import profile from '../assets/profile.jpg'; // replace with your actual image

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-left">
        <h1 className="home-name">Vasana Venkata <br /><span>Ganesh</span></h1>
        <h2 className="home-role">Full Stack Developer</h2>
        <p className="home-desc">
          Dedicated B.Tech student specializing in full-stack development with the MERN stack.
          Proven ability to build scalable web applications using React, Node.js, and MongoDB.
        </p>
        <div className="home-buttons">
          <a href="#contact" className="primary-btn">Contact Me</a>
          <a href="#projects" className="outline-btn">View Projects</a>
        </div>
        <div className="home-icons">
          <a href="https://linkedin.com/in/venkata-ganesh-318867287/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/venkataganesh3" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://leetcode.com/u/venkataganesh2003/" target="_blank" rel="noreferrer"><i className="fas fa-code"></i></a>
          <a href="https://www.codechef.com/users/ganesh2811"><i className="fas fa-laptop-code"></i></a>
          <a href="https://www.hackerrank.com/profile/venkataganesh281"><i className="fas fa-terminal"></i></a>
        </div>
      </div>
      <div className="home-right">
        <img src={profile} alt="Profile" className="profile-img" />
      </div>
    </section>
  );
};

export default Home;
