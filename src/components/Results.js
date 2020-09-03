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
              <button 
                onClick={(e) => this.handleNominateClick(e, show)}
                id={`show ${show.imdbID} button`}>
                  Nominate
              </button>
            </li>
          )
          })
        }
      </ul>
    )
  }

  handleNominateClick = (e, show) => {
    e.target.disabled = true;
    this.props.storeNomination(show);
  }

  componentDidMount = () => {
    this.disableNominateButton();
  }

  componentDidUpdate = () => {
    this.disableNominateButton();
  }

  disableNominateButton = () => {
    this.props.nominations.map(nomination => {
      const button = document.getElementById(`show ${nomination.imdbID} button`);
      if (button) button.disabled = true;
      return null;
    })
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
    searchResults: store.searchResults,
    nominations: store.nominations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeNomination: (nomination) => {
      dispatch({
        type: 'STORE_NOMINATION',
        nominations: nomination
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)