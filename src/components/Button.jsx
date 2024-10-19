import React from 'react';
//import './Button.css';

const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Load More
    </button>
  );
};

export default Button;
