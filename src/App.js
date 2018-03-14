import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './containers/Form/Form';
import Home from './containers/Home/Home';
import NoticeBoard from './containers/NoticeBoard/NoticeBoard';
import Residents from './containers/Residents/Residents';
import Account from './containers/Account/Account';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/notice' component={NoticeBoard} />
          <Route path='/residents' component={Residents} />
          <Route path='/account' component={Account} />
          <Route path='/' exact component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
