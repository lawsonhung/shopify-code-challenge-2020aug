import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Results.css';

class Results extends Component {

  renderResults = () => {
    if (this.props.searchResults === null)
      return (
        <p>No search results.</p>
      )
    else if (this.props.searchResults.Response === 'False'){
      return (
        <p>{this.props.searchResults.Error}</p>
      )
    } else 
      return this.renderSearchResults();
  }

  renderSearchResults = () => {
    if (this.props.searchResults.Search){
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
    else {
      return (
        <p>No search results yet.</p>
      )
    }
  }

  handleNominateClick = (e, show) => {
    e.target.disabled = true;
    this.props.storeNomination(show);
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
      <div className='results'>
        <h2>Results for "{this.props.title}"</h2>
        <p>There are {this.props.resultCt} result(s) for this search.</p>
        {this.renderResults()}
        {this.disableNominateButton()}
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