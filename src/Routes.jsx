import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';

class Routes extends Component {
  render() {
    const landing = () => {
      return ( <Landing {...this.props} /> );
    };
    return (
      <main>

        <Switch>
          <Route exact path='/' render={landing} />
        </Switch>

      </main>
    );
  }
}

export default Routes;