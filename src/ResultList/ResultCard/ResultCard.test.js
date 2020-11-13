import React from 'react';
import ReactDOM from 'react-dom';
import ResultCard from './ResultCard';

describe('ResultCard component', () => {
  it('renders without crashing', () => {
    let props = {result:{}}
    const div = document.createElement('div');
    ReactDOM.render(<ResultCard result={props.result}/>, div);
  })
})