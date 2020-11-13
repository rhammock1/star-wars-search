import React from 'react';
import ReactDOM from 'react-dom';
import ResultList from './ResultList';

describe('ResultList component', () => {
  it('renders without crashing', () => {
    let props = {results:[]}
    const div = document.createElement('div');
    ReactDOM.render(<ResultList results={props.results}/>, div);
  })
})