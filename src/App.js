import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';

class App extends Component {

  render() {
    return (
      <div>
        <h1>The Shoppies</h1>
        <h2>Hey, {this.props.title}!</h2>
          <SearchBar />
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    title: store.title
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storetitle: (title) => {
      dispatch({
        type: 'STORE_TITLE',
        title: title
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
