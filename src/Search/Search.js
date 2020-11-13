import React from 'react';
import './Search.css';

const Search = function(props) {
    return (
    <div className='search-container'>
      <form className='search-form'>
        <fieldset>
          <legend>Search by name</legend>
          <label htmlFor='search-bar'>Name: </label>
          <input type='text' id='search-bar' onChange={event => props.handleSearchChange(event)} placeholder='Skywalker'/>
          <button type='submit' onClick={event => props.handleSubmitClick(event)}>Search!</button>
        </fieldset>
      </form>
    </div>
    )
  
}

export default Search;