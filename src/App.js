import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import Nominations from './components/Nominations';

class App extends Component {

  render() {
    return (
      <div>
        <h1>The Shoppies</h1>
        <SearchBar />
        <Results />
        <Nominations />
      </div>
    )
  }
}

export default App;
