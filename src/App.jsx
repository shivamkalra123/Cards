import React, { useState } from "react";
import "./App.css";

const Card = ({ title, image, isExpanded, onMouseEnter, id }) => {
  return (
    <div
      className={`card ${isExpanded ? "expanded" : ""}`}
      onMouseEnter={() => onMouseEnter(id)}
    >
      <div className="header">{title}</div>
      <img src={image} alt={title + " Image"} />
    </div>
  );
};

const CardContainer = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleMouseEnter = (id) => {
    setExpandedCard(id);
  };

  const cards = [
    { id: 1, title: "Card 1", image: "https://via.placeholder.com/300x400" },
    { id: 2, title: "Card 2", image: "https://via.placeholder.com/300x400" },
    { id: 3, title: "Card 3", image: "https://via.placeholder.com/300x400" },
  ];

  return (
    <div className="card-container">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          image={card.image}
          isExpanded={expandedCard === card.id}
          onMouseEnter={handleMouseEnter}
        />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <CardContainer />
    </div>
  );
};

export default App;
