import React from "react";

function MotionList({ motions, selectedCategory, selectedTournament }) {
  return (
    <div>
      <h2>Available Motions</h2>
      <ul>
        {motions
          .filter(
            (motion) =>
              (selectedCategory
                ? motion.category === parseInt(selectedCategory)
                : true) &&
              (selectedTournament
                ? motion.tournament === parseInt(selectedTournament)
                : true),
          )
          .map((motion) => (
            <li key={motion.id}>
              <h3>{motion.title}</h3>
              <p>
                <strong>Info Slide:</strong> {motion.info_slide}
              </p>
              <p>
                <strong>Description:</strong> {motion.description}
              </p>
              <p>
                <strong>Category:</strong> {motion.category}
              </p>
              <p>
                <strong>Tournament:</strong> {motion.tournament}
              </p>
              <p>
                <strong>Language:</strong>{" "}
                {motion.language === "EN" ? "English" : "Bangla"}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MotionList;
