import { useState } from "react";

export const FilledCardExample = ({ role, image, name }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const makeCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={makeCardFlip}
    >
      <div className="card-content">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={image} alt="person" className="user-image" />
            <h2 className="user-name">{name}</h2>
            <h3 className="user-role">{role}</h3>
            <p className="user-role-rating">5.0</p>
          </div>
          <div className="flip-card-back">
            <img src={image} alt="person" className="user-image" />
            <p>5 stars: 10</p>
            <p>4 stars: 0</p>
          </div>
        </div>
      </div>
    </div>
  );
};
