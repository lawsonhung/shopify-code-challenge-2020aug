import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import MaxNominations from './components/MaxNominations';

class App extends Component {

  render() {
    return (
      <Switch>

        <Route path={'/maxNominations'} component={MaxNominations} />

        <Route path={'/'} 
          render={(routerProps) => <HomePage
          routerProps={routerProps} />}/>

      </Switch>
      
    )
  }
}

export default withRouter(App);
