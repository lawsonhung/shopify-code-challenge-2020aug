import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {

  handleChange = (e) => {
    this.props.storeTitle(e.target.value);
    this.fetchMovies(e.target.value);
  }

  fetchMovies = (searchQuery) => {
    fetch(`http://www.omdbapi.com/?apikey=a9602605&s=${searchQuery}`)
      .then(res => res.json())
      .then(searchResults => this.renderSearchResults(searchResults))
  }

  renderSearchResults = (searchResults) => {
    this.props.storeSearchResults(searchResults);

    if(this.props.searchResults.Response === 'True')
      this.props.storeNumResults(searchResults.totalResults);
    else if (this.props.searchResults.Error === 'Too many results.')
      this.props.resetNumResults();
    else if (this.props.searchResults.Error === 'Movie not found!')
      this.props.resetNumResults();
    else
      return null
  }

  render() {
    return (
      <div>
        <label htmlFor='title'>Movie Title: </label>
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
    title: store.title,
    searchResults: store.searchResults
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeTitle: (title) => {
      dispatch({
        type: 'STORE_TITLE',
        title: title
      })
    },

    storeNumResults: (resultCt) => {
      dispatch({
        type: 'STORE_NUM_RESULTS',
        resultCt: resultCt
      })
    },

    resetNumResults: () => {
      dispatch({
        type: 'RESET_NUM_RESULTS',
        resultCt: 0
      })
    },

    storeSearchResults: (searchResults) => {
      dispatch({
        type: 'STORE_SEARCH_RESULTS',
        searchResults: searchResults
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)