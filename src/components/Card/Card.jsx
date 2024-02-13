import React from 'react';
import './card.scss';

const Card = ({ title, description, imageUrl, srcSet, sizes }) => {
  return (
    <div className="card">
      <img src={imageUrl} srcSet={srcSet} sizes={sizes} alt={title} className="image" />
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
};

export default Card;
