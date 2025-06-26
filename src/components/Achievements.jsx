import React, { useState } from "react";
import "./Achievements.css";
import content from "../data/content.json";

const icons = {
  "LeetCode Problem Solver": "💻",
  "HackerRank Silver Badge": "🎖️",
  "CodeChef Golden Badge": "🏆",
  "CodeChef Diamond Streak": "💎",
  "CodeChef Silver Badge": "🥈",
  "Academic Excellence": "📘",
};

const Achievements = () => {
  const achievements = content.achievements;
  const itemsPerRow = 3;
  const [rowsToShow, setRowsToShow] = useState(2);

  const visibleItems = achievements.slice(0, rowsToShow * itemsPerRow);
  const allShown = visibleItems.length >= achievements.length;

  const handleShowMore = () => {
    setRowsToShow(rowsToShow + 1);
  };

  return (
    <section className="achievements-section" id="achievements">
       <h2 className="about-title">Achievements</h2>
      <div className="underline"></div>
      <p className="about-subtitle">Recognition of my skills and dedication</p>
      <div className="achievement-list">
        {visibleItems.map((item, index) => (
          <div className="achievement-card" key={index}>
            <div className="achievement-icon">
              <span>{icons[item.title] || "🏅"}</span>
            </div>
            <div className="achievement-text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {!allShown && (
        <button className="show-more-btn" onClick={handleShowMore}>
          Show More
        </button>
      )}
    </section>
  );
};

export default Achievements;
