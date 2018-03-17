import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import * as _ from 'lodash';
import axios from 'axios';

import Society from '../../components/Society/Society';
import Wings from '../../components/Society/Wings/Wings';
import Layout from '../../hoc/Layout/Layout';

export default class Residents extends Component {
  state = {
    residents: ''
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if(!token){
      this.props.history.replace('/')
    }
    axios('https://thawing-reef-43238.herokuapp.com/api/residents',{
      headers: {
        'x-auth': token
      }})
      .then(data => this.setState({
        residents: data.data
      }))
      .catch(err => console.log(err))
  }

  render() {
    let wings = this.state.residents ? _.keys(this.state.residents).sort() : [];
    let allResidents = this.state.residents ? (<div>
      <h1 style={{ color: '#333' }}>Wing</h1>
      <Wings wings={wings} />
      <Switch>
        <Route path='/residents/:wing' render={() => <Society residents={this.state.residents} />} />
        <Redirect to={`/residents/${wings[0]}`} />
      </Switch>
    </div>) : null;
    return (
      <Layout>
        {allResidents}
      </Layout>
    )
  }
}
