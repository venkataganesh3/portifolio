import React, { useState } from "react";
import { useEffect } from "react";
import "./Header.css";

const Header = () => {

useEffect(() => {
  const handleScroll = () => {
    const header = document.querySelector(".portfolio-header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const fixedUsername = "admin";
  const fixedPassword = "password123";

  const handleToggleClick = () => {
    if (!isLoggedIn) {
      setShowLogin(true);
    } else {
      alert("Already logged in!");
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === fixedUsername && password === fixedPassword) {
      setIsLoggedIn(true);
      setShowLogin(false);
      window.location.href = "/portfolio-editor";
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <>
      <header className="portfolio-header">
        <div className="logo">V.V.G<span className="dot"></span></div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>HOME</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>EDUCATION</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>EXPERIENCE</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>PROJECTS</a>
          <a href="#achievements" onClick={() => setMenuOpen(false)}>ACHIEVEMENTS</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a>
          <button className="login-btn" onClick={handleToggleClick}>
            {isLoggedIn ? "LOGGED IN" : "LOGIN"}
          </button>
        </nav>
      </header>

      {showLogin && (
        <div className="login-modal">
          <div className="login-content">
            <h3>Login to Edit Portfolio</h3>
            <form onSubmit={handleLoginSubmit}>
              <input type="text" name="username" placeholder="Username" required autoFocus />
              <input type="password" name="password" placeholder="Password" required />
              <button type="submit">Login</button>
              <button
                type="button"
                onClick={() => setShowLogin(false)}
                style={{ marginLeft: "10px" }}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
