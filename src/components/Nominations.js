import React, { Component } from 'react';
import { connect } from 'react-redux';

class Nominations extends Component {

  render() {
    return (
      <div>
        <h2>Nominations</h2>
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
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nominations)