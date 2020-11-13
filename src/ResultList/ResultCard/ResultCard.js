import React from 'react';
import './ResultCard.css';

const ResultCard = function(props) {
  return (
    <div className='result-container'>
      <h3>{props.result.name}</h3>
    </div>
    )
  
}

export default ResultCard;