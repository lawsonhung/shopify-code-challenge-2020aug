import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  handleChange = (e) => {
    this.props.storeUsername(e.target.value);
  }

  render() {
    return (
      <div>
        <h1>The Shoppies</h1>
        <h2>Hey, {this.props.username}!</h2>
        <label htmlFor='username'>Username: </label>
        <input 
          type='text' 
          id='username' 
          onChange={(e) => this.handleChange(e)}
          value={this.props.username} />
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    username: store.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeUsername: (username) => {
      dispatch({
        type: 'STORE_USERNAME',
        username: username
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
