import React from "react";
import "./Markloader.css"; // Import the CSS file

const Markloader = ({ score, maxScore }) => {
  // Calculate the percentage for the rating bar
  const percentage = (score / maxScore) * 100;

  return (
    <div className="performance-container">
      <div className="rating-bar">
        <div
          className="rating-fill"
          style={{ width: `${percentage}%` }} // Set width dynamically
        ></div>
      </div>
        
    </div>
  );
};
export default Markloader;  