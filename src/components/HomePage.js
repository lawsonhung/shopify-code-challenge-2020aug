import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Results from './Results';
import Nominations from './Nominations';

class HomePage extends Component {

  render() {
    return (
      <div>
        <h1>The Shoppies</h1>
        <SearchBar />
        <Results />
        <Nominations routerProps={this.props.routerProps}/>
      </div>
    )
  }

}

export default HomePage