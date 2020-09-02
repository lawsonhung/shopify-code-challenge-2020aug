import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component {

  renderResults = () => {
    if (this.props.searchResults.Response === 'False'){
      return (
        <p>{this.props.searchResults.Error}</p>
      )
    } else 
      return this.renderSearchResults();
  }

  renderSearchResults = () => {
    return (
      <ul>
        {this.props.searchResults.Search.map(show => {
          return (
            <li key={show.imdbID}>
              {show.Title} ({show.Year}) 
              <button onClick={(e) => this.handleNominateClick(e, show)}>Nominate</button>
            </li>
          )
          })
        }
      </ul>
    )
  }

  handleNominateClick = (e, show) => {
    console.log(e.target);
    console.log(show);
  }

  render() {
    return (
      <div>
        <h2>Results for "{this.props.title}"</h2>
        <p>There are {this.props.resultCt} result(s) for this search.</p>
        {this.renderResults()}
      </div>
    )
  }

}

const mapStateToProps = (store) => {
  return {
    title: store.title,
    resultCt: store.resultCt,
    searchResults: store.searchResults
  }
}

export default connect(mapStateToProps, null)(Results)