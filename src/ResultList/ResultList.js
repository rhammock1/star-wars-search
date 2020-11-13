import React from 'react';
import ResultCard from './ResultCard/ResultCard';

const ResultList = function(props) {
  <div className='result-list-container'>
    {props.results.map((result, index) => {
      return (
        <ResultCard key={index} result={result} />
        )
    })}
  </div>
}

export default ResultList;