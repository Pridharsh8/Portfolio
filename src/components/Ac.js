import React from "react";
import "./ac.css";
import Half from '../pic/Half.png'
import Cen from '../pic/Cen.png'

const achievements = [
  {
    title: "50 Days Streak - LeetCode",
    description:
      "Awarded for consistently solving problems on LeetCode for 50 days straight.",
    badgeImage: Half, // Example URL, replace with actual badge URL if available
  },
  {
    title: "100 Days Streak - LeetCode",
    description:
      "Awarded for consistently solving problems on LeetCode for 100 days straight.",
    badgeImage: Cen,
  },
];

const Ac = () => {
  return (
    <div className="achievements-container">
      <h1 className="achievements-title">My Achievements</h1>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <img
              src={achievement.badgeImage}
              alt={achievement.title}
              className="achievement-badge"
            />
            <h2 className="achievement-title">{achievement.title}</h2>
            <p className="achievement-description">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ac;
