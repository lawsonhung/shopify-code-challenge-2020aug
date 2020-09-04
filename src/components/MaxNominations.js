import React, { Component } from 'react';
import Nominations from './Nominations';

class MaxNominations extends Component {

  render() {
    return (
      <div>
        <h1>You've selected all five of your nominations!</h1>
        <Nominations />
      </div>
    )
  }

}

export default MaxNominations