import React, { Component } from 'react';
import { connect } from 'react-redux';

class Nominations extends Component {

  renderNominations = () => {
    debugger
    console.log(this.props.nominations);
    // if (this.props.nominations.length) {
    //   return (
    //     <ul>
    //       {this.props.nominations.map(nomination => {
    //           return (
    //             <li>
    //               {nomination.Title} ({nomination.Year})
    //             </li>
    //           )
    //         })
    //       }
    //     </ul>
    //   )
    // }
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