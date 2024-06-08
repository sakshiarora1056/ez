import React from 'react';

const Card = (props) => {
  const { image, heading, subHeading } = props;
  return (
    <div className="card">
      <div className="card-header">
        <img src={image} alt="icon" />
        <h2>{heading}</h2>
      </div>
      <p>{subHeading}</p>
    </div>
  );
};

export default Card;
