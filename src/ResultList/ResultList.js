import React from 'react';
import ResultCard from './ResultCard/ResultCard';
import './ResultList.css';

const ResultList = function(props) {
  return(
    <div className='result-list-container'>
    {props.results.map((result, index) => {
      return (
        <ResultCard key={index} result={result} />
        )
    })}
    </div>
    )
  
}

export default ResultList;