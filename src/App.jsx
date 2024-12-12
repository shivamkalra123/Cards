import React, { useState } from "react";
import "./App.css";

const Card = ({ title, image, isExpanded, onMouseEnter, onMouseLeave, id }) => {
  return (
    <div
      className={`card ${isExpanded ? "expanded" : ""}`}
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={onMouseLeave}
    >
      <div className="header">{title}</div>
      <img src={image} alt={title + " Image"} />
      {isExpanded && (
        <div className="arrow">&#8594; {/* Right arrow character */}</div>
      )}
    </div>
  );
};

const CardContainer = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (id) => {
    setExpandedCard(id);
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const cards = [
    {
      id: 1,
      title: "STRENGTH",
      image:
        "https://images.unsplash.com/photo-1685633224330-d2bd56d7adf1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "MOBILITY",
      image:
        "https://images.unsplash.com/photo-1529693662653-9d480530a697?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "DRILLS",
      image:
        "https://plus.unsplash.com/premium_photo-1670349270918-9ede9297bf3f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
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
          onMouseLeave={handleMouseLeave}
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
