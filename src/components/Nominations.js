import React, { Component } from 'react';
import { connect } from 'react-redux';

class Nominations extends Component {

  renderNumNominations = () => {
    if (this.props.nominations.length === 0)
      return (
        <p>You have no nominations yet! Nominate a show!</p>
      )
    else if (this.props.nominations.length < 5)
      return (
        <p>You have nominated {this.props.nominations.length} show(s).</p>
      )
    else
      return (
        <div>
          <p>You've nominated 5 or more shows! Good job!</p>
          {/* Uncomment this line to manually go back to the HomePage by typing in http://localhost:3000/ . */}
          {this.maxNominations()}
        </div>
      )
  }

  renderNominations = () => {
    return (
      <ul>
        {this.props.nominations.map((nomination, nominationIndex) => {
          return (
            <li key={nomination.imdbID}
            id={`nomination ${nomination.imdbID}`}>
              {nomination.Title} ({nomination.Year})
              <button onClick={() => this.removeNomination(nominationIndex, nomination.imdbID)}>Remove</button>
            </li>
          )
        })}
      </ul>
    )
  }

  removeNomination = (nominationIndex, showID) => {
    const button = document.getElementById(`show ${showID} button`)
    this.props.removeNomination(nominationIndex);
    if (button) button.disabled = false;
  }

  maxNominations = () => {
    alert('You\'ve chosen all 5 nominations! Good job! You can choose more or submit your choices.')
    // this.props.routerProps.history.push('/maxNominations')
  }

  render() {
    return (
      <div>
        <h2>Nominations</h2>
        {this.renderNumNominations()}
        {this.renderNominations()}
      </div>
    )
  }

}

const mapStateToProps = (store) => {
  return {
    nominations: store.nominations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeNomination: (nominationIndex) => {
      dispatch({
        type: 'REMOVE_NOMINATION',
        nominationIndex: nominationIndex
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nominations)