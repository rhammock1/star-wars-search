import React from 'react';
import './App.css';
import Loading from './Loading/Loading';
import Search from './Search/Search';
import Header from './Header/Header';

class App extends React.Component {
  state ={
    searchTerm: {
      value: ''
    },
    loading: false,
    error:null,
  }

  handleSearchChange = (event) => {
    this.setState({searchTerm: {value: event.target.value}})
  }
  handleSubmitClick = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const baseURL = 'https://swapi.co/api/people/?search='
    fetch(`${baseURL}${this.state.searchTerm.value}`, {
      method: 'GET',
      header: {
        'content-type': 
      }
    })
    .then(res => res.ok ? res.json() : error => Promise.reject(error))
    .then(results => {
      console.log(results)
      this.setState({loading:false})
    })
    .catch(error => this.setState({error:error, loading: false}))
  }
  render() {
    if(this.state.loading) {
      return(
        <>
          <Header />
          <Search />
          <Loading />
        </>
      )
    }
    return (
      <Search 
        handleSearchChange={this.handleSearchChange}
        handleSubmitClick={this.handleSubmitClick}
        />
    )
  }
}

export default App;
