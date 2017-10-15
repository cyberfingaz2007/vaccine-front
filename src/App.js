import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux'
//import {BrowserRouter} from 'react-router-dom'
import {Router, hashHistory} from 'react-router'

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
    require('./routes/projects').default,


    // comment unused routes
    // this will speed up builds
  ]
};

class App extends Component {
  render() {
    return (
      <Router
        history={hashHistory}
        routes={routes}
      />
    );
  }
}

export default App;
