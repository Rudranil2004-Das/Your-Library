import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  // Navigate to shelves page
  const handleCorridorClick = () => {
    navigate("/books");
  };

  return (
    <div className="library-room">
      <div className="foreground">

        {/* Corridor on the far left */}
        <div className="corridor-door" onClick={handleCorridorClick}>
          <img src="/images/corridor.png" alt="Corridor" />
          <span>→ Shelves</span>
        </div>

        {/* Librarian centered */}
        <div className="librarian-container">
          <div className="speech-bubble">
            Please click on the shelf to get your books 📚
          </div>
          <img
            src="/images/librarian.png"
            alt="Librarian"
            className="librarian-sprite"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
