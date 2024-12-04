import React from "react";
import "./pc.css";

const projects = [
  {
    title: "SHOP IT - E COMMERCE APPLICATION",
    description:
      "A MERN-based e-commerce application for clothing. The admin can add, delete, or edit products, while users can log in, browse available items, and add them to the cart. The application features a simple, user-friendly interface for seamless shopping and efficient product management by the admin.",
    techStack: "Express JS, React JS, Mongoose",
    link: "https://github.com/Pridharsh8/E-Commerce-Application/tree/main",
  },
  {
    title: "GAME-BASED LEARNING APP",
    description:
      "This project is developed for engaging students with the learning process in an interactive manner. It includes a Reading module for revising concepts, a Quiz module for tests, and text-to-speech conversion for people with disorders.",
    techStack: "React, Node.js, MongoDB",
    link: "https://github.com/Pridharsh8/210701198-PRIEEProject",
  },
  {
    title: "PRICE PULSE - A PRICE TRACKER",
    description:
      "This RPA project tracks product prices from specified websites. When a price drops, it sends an email notification to the user, allowing them to take advantage of the discount. It provides a simple solution for tracking discounts in real-time.",
    techStack: "RPA, UiPath",
    link: "https://github.com/Pridharsh8/PriceTracker",
  },
  {
    title: "CODERS CLUB WEBSITE APPLICATION",
    description:
      "This project provides a platform that allows admins to post events, manage user registrations, and track participation. It integrates an automated email system that sends confirmation emails to users after successful event registration.",
    techStack: "HTML, CSS, PHP",
    link: "https://github.com/Pridharsh8/Ineu-IP-Project",
  },
];

const Pc = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <p className="project-techstack">
              <strong>Tech Stack:</strong> {project.techStack}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pc;
