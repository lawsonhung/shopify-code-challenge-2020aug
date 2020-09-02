import React, { Component } from 'react';
import { connect } from 'react-redux';

class Nominations extends Component {

  renderNominations = () => {
    console.log(this.props.nominations);
    return (
      <ul>
        <li>
          {this.props.nominations.Title} ({this.props.nominations.Year})
        </li>
      </ul>
    )
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

export default connect(mapStateToProps, null)(Nominations)