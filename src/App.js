import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import { Route } from 'react-router';

import HomePage from './Home';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
      </div>
    );
  }
}

export default App;
