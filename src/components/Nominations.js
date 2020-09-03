import React, { Component } from 'react';
import { connect } from 'react-redux';

class Nominations extends Component {

  renderNominations = () => {
    console.log(this.props.nominations);
    return (
      <ul>
        {this.props.nominations.map((nomination, nominationIndex) => {
          return (
            <li key={nomination.imdbID}
            id={`nomination ${nomination.imdbID}`}>
              {nomination.Title} ({nomination.Year})
              <button onClick={() => this.removeNomination(nominationIndex)}>Remove</button>
            </li>
          )
        })}
      </ul>
    )
  }

  removeNomination = (nominationIndex) => {
    console.log(`We have to remove ${nominationIndex}`);
    this.props.removeNomination(nominationIndex);
    console.log(this.props.nominations);

  }

  render() {
    return (
      <div>
        <h2>Nominations</h2>
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