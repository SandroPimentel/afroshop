import React from 'react';
import './card.scss';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card"> 
      <img src={imageUrl} alt={title} className="image" />
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
};


export default Card;
