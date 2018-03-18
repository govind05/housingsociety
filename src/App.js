import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Login from './containers/Form/Form';
import NoticeBoard from './containers/NoticeBoard/NoticeBoard';
import Residents from './containers/Residents/Residents';
import Account from './containers/Account/Account';
import Admin from './containers/Admin/Admin';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/notice' component={NoticeBoard} />
          <Route path='/residents' component={Residents} />
          <Route path='/account' component={Account} />
          <Route path='/admin' component={Admin} />
          <Route path='/' exact component={Login} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
