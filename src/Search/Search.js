import React from 'react';

const Search = function(props) {
    return (
    <div className='search-container'>
      <form className='search-form'>
        <fieldset>
          <legend>Search by name</legend>
          <label htmlFor='search-bar'>Search: </label>
          <input type='text' id='search-bar' onChange={event => props.handleSearchChange(event)}/>
          <button type='submit' onClick={event => props.handleSubmitClick(event)}>Search!</button>
        </fieldset>
      </form>
    </div>
    )
  
}

export default Search;