import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux'
import {BrowserRouter} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

const routes = {

  path: '/',
  indexRoute: { onEnter: (nextState, replace) => replace('/dashboard') },
  childRoutes: [
    require('./routes/dashboard').default,
    require('./routes/record-entry').default,
    require('./routes/configs').default,
    require('./routes/reports').default,


    // comment unused routes
    // this will speed up builds
  ]
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {routes}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
