import React, { useState, useEffect } from "react";
import "./PortfolioEditor.css";
import portfolioJson from "../data/content.json";

const PortfolioEditor = () => {
  const [portfolio, setPortfolio] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("portfolioData");
    if (saved) setPortfolio(JSON.parse(saved));
    else setPortfolio(portfolioJson);
  }, []);

  const handleChange = (section, key, value) => {
    setPortfolio({ ...portfolio, [section]: { ...portfolio[section], [key]: value } });
  };

  const handleValueChange = (key, value) => {
    setPortfolio({ ...portfolio, [key]: value });
  };

  const handleArrayItemChange = (section, index, key, value) => {
    const updatedArray = [...portfolio[section]];
    updatedArray[index][key] = value;
    setPortfolio({ ...portfolio, [section]: updatedArray });
  };

  const addItem = (section, newItem) => {
    const updatedArray = [...portfolio[section], newItem];
    setPortfolio({ ...portfolio, [section]: updatedArray });
  };

  const removeItem = (section, index) => {
    const updatedArray = portfolio[section].filter((_, i) => i !== index);
    setPortfolio({ ...portfolio, [section]: updatedArray });
  };

  const downloadJson = () => {
    const blob = new Blob([JSON.stringify(portfolio, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "portfolioData.json";
    link.click();
  };
   
  return (
    <div className="editor-container">
      <h1 className="editor-title">Portfolio Editor</h1>
      <div className="section">
        <input
          className="text-input"
          placeholder="Name"
          value={portfolio.name || ""}
          onChange={(e) => handleValueChange("name", e.target.value)}
        />
        <input
          className="text-input"
          placeholder="Role"
          value={portfolio.role || ""}
          onChange={(e) => handleValueChange("role", e.target.value)}
        />
        <textarea
          className="text-area"
          placeholder="Objective"
          value={portfolio.objective || ""}
          onChange={(e) => handleValueChange("objective", e.target.value)}
        />
      </div>

      {portfolio.contact && (
        <div className="section">
          <h2 className="section-title">Contact Info</h2>
          {Object.entries(portfolio.contact).map(([key, value]) => (
            <input
              key={key}
              className="text-input"
              placeholder={key}
              value={value}
              onChange={(e) => handleChange("contact", key, e.target.value)}
            />
          ))}
        </div>
      )}

      {portfolio.skillsGrouped && (
        <div className="section">
          <h2 className="section-title">Skills</h2>
          {portfolio.skillsGrouped.map((item, i) => (
            <div key={i} className="array-item">
              <input
                className="text-input"
                placeholder="Label"
                value={item.label}
                onChange={(e) => handleArrayItemChange("skillsGrouped", i, "label", e.target.value)}
              />
              <input
                className="number-input"
                type="number"
                value={item.level}
                onChange={(e) => handleArrayItemChange("skillsGrouped", i, "level", e.target.value)}
              />
              <input
                className="text-input"
                placeholder="Skills (comma separated)"
                value={item.skills.join(", ")}
                onChange={(e) =>
                  handleArrayItemChange("skillsGrouped", i, "skills", e.target.value.split(",").map((s) => s.trim()))
                }
              />
              <button className="remove-btn" onClick={() => removeItem("skillsGrouped", i)}>Remove</button>
            </div>
          ))
          }
          < button
            className="add-btn"
            onClick={() => addItem("skillsGrouped", { label: "", level: 0, skills: [] })}
          >
            + Add Skill Group
          </button>
        </div>
      )}

      {["education", "projects", "experience", "achievements", "certifications"].map((section) =>
        portfolio[section] ? (
          <div className="section" key={section}>
            <h2 className="section-title">{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
            {portfolio[section].map((item, i) => (
              <div key={i} className="array-item">
                {Object.entries(item).map(([key, value]) => (
                  <input
                    key={key}
                    className="text-input"
                    placeholder={key}
                    value={Array.isArray(value) ? value.join(", ") : value}
                    onChange={(e) =>
                      handleArrayItemChange(
                        section,
                        i,
                        key,
                        e.target.value.includes(", ")
                          ? e.target.value.split(",").map((s) => s.trim())
                          : e.target.value
                      )
                    }
                  />
                ))}
                <button className="remove-btn" onClick={() => removeItem(section, i)}>Remove</button>
              </div>
            ))}
            <button className="add-btn" onClick={() => addItem(section, {})}>+ Add {section.slice(0, -1)}</button>
          </div>
        ) : null
      )}

      <div className="section">
        <h2 className="section-title">CGPA</h2>
        <input
          className="number-input"
          type="number"
          step="0.01"
          value={portfolio.cgpa || ""}
          onChange={(e) => handleValueChange("cgpa", parseFloat(e.target.value))}
        />
      </div>
      <button className="save-btn" onClick={downloadJson}>Download JSON</button>
    </div>
  );
};

export default PortfolioEditor;