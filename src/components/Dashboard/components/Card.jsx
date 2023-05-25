import React from 'react';
import './Card.css';

function Card(props) {
  const { title, icon, description } = props;
  
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default Card;
