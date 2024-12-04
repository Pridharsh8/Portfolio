import React, { useState } from "react";
import "./cc.css"; // Import the CSS file

const certifications = [
  {
    title: "Diploma to Advanced Robotic Process",
    description:
      "This certification is awarded for completing the course on advanced robotic process automation, covering tools and techniques to automate complex workflows.",
    certificateLink: "https://drive.google.com/file/d/1kSoZ1xBW7luDiGR1z4qNxZuzdoxfriNG/view?usp=sharing", // Replace with your certificate link
  },
  {
    title: "NPTEL Joy of Computing Using Python",
    description:
      "This certification demonstrates the completion of the NPTEL course, which introduces the basics of computing and programming using Python.",
    certificateLink: "https://drive.google.com/file/d/17zfaeIa5pdpkHrLK5pWjr08CMcryEjZq/view?usp=sharing", // Replace with your certificate link
  },
  {
    title: "Entrepreneurship",
    description:
      "Successfully completed the NPTEL course on Entrepreneurship, covering the fundamentals of starting and managing a business, innovation, and building a sustainable enterprise.",
    certificateLink: "https://drive.google.com/file/d/1aQ_Vmha1GWLDC2s8bWB14Cwrllu1sI8a/view?usp=sharing", // Replace with your certificate link
  }
  
];

const Cc = () => {
  const [showCertificate, setShowCertificate] = useState(null);

  const handleShowCertificate = (index) => {
    setShowCertificate(index);
  };

  return (
    <div className="certifications-container">
      <h1 className="certifications-heading">My Certifications</h1>
      <div className="certifications-grid">
        {certifications.map((certification, index) => (
          <div className="certification-card" key={index}>
            <h2 className="certification-title">{certification.title}</h2>
            <p className="certification-description">{certification.description}</p>
            <button
              onClick={() => handleShowCertificate(index)}
              className="show-certificate-btn"
            >
              Show Certificate
            </button>
            {showCertificate === index && (
              <div className="certificate-link">
                <a
                  href={certification.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link-text"
                >
                  View Certificate
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cc;
