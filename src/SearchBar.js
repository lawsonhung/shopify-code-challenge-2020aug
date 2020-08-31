import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {

  handleChange = (e) => {
    this.props.storeTitle(e.target.value);
  }

  render() {
    return (
      <div>
        <label htmlFor='title'>Title: </label>
          <input 
            type='text' 
            id='title' 
            onChange={(e) => this.handleChange(e)}
            value={this.props.title} />
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
    storeTitle: (title) => {
      dispatch({
        type: 'STORE_TITLE',
        title: title
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)