import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../src/hoc/Layout/Layout'
import Login from './containers/Form/Form';
import Home from './containers/Home/Home';
import NoticeBoard from './containers/NoticeBoard/NoticeBoard';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout >
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/notice' component={NoticeBoard} />
            {/* <Route path='/event' component={Events} /> */}
            {/* <Route path='/complaint' component={Complaint} /> */}
            {/* <Route path='/account' component={Account} /> */}
            <Route path='/' exact component={Login} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
