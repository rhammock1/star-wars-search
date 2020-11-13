import React from 'react';
import './App.css';
import Loading from './Loading/Loading';
import Search from './Search/Search';
import Header from './Header/Header';
import Error from './Error/Error'
import ResultList from './ResultList/ResultList';

class App extends React.Component {
  state ={
    searchTerm: {
      value: ''
    },
    loading: false,
    error:null,
    results: [],
  }
  handleClearError = () => {
    console.log('clear clicked');
    this.setState({error:null});
  }

  handleSearchChange = (event) => {
    this.setState({searchTerm: {value: event.target.value}})
  }
  handleSubmitClick = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const baseURL = 'https://swapi-thinkful.herokuapp.com/api/people/?search='
    fetch(`${baseURL}${this.state.searchTerm.value}`, {
      method: 'GET',
      header: {
        'content-type': 'application/json'
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
    if(this.state.error) {
      return(
        <>
          <Header />
          <Error error={this.state.error} onClearError={() => this.handleClearError()}/>
        </>
      )
    }
    return (
      <>
        <Header />
        <Search 
          handleSearchChange={this.handleSearchChange}
          handleSubmitClick={this.handleSubmitClick}
        />
        <ResultList results={this.state.results} />
      </>
    )
  }
}

export default App;
