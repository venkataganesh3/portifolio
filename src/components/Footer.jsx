import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaCode, FaLaptopCode, FaTerminal } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2023 Vasana Venkata Ganesh. All rights reserved.</p>
      <p>Full Stack Developer | MERN Stack Specialist</p>
      <div className="footer-icons">
        <a href="https://linkedin.com/in/venkata-ganesh-318867287/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/venkataganesh3" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/venkataganesh2003/">
          <FaCode />
        </a>
        <a href="https://www.codechef.com/users/ganesh2811">
          <FaLaptopCode />
        </a>
        <a href="https://www.hackerrank.com/profile/venkataganesh281">
          <FaTerminal />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
