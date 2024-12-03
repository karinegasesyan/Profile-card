import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./style.css";
const skills = [
  {
    skill: "HTML",
    color: "#ff0077",
    level: "advanced",
  },
  {
    skill: "CSS",
    color: "green",
    level: "advanced",
  },
  {
    skill: "SCSS",
    color: "pink",
    level: "advanced",
  },
  {
    skill: "JS",
    color: "gray",
    level: "intermediat",
  },
  {
    skill: "React.js",
    color: "blue",
    level: "beginner",
  },
  {
    skill: "OOP",
    color: "purple",
    level: "beginner",
  },
  {
    skill: "Web developmnt",
    color: "orange",
    level: "intermediat",
  },
  {
    skill: "Git & GitHub",
    color: "maroon",
    level: "intermediat",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/*bla lba */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.jpg" alt="name" />;
}

function Intro() {
  return (
    <div>
      <h1>Karine Gasesyan</h1>
      <p>Front-end developer.</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((item) => (
        <Skill skill={item.skill} color={item.color} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "🥰"}
        {level === "advanced" && "🥰"}
        {level === "intermediat" && "🥰"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
