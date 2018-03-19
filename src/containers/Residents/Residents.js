import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import * as _ from 'lodash';
import axios from 'axios';

import Society from '../../components/Society/Society';
import Wings from '../../components/Society/Wings/Wings';
import Layout from '../../hoc/Layout/Layout';
import Spinner from '../../components/UI/Spinner/Spinner';

export default class Residents extends Component {
  state = {
    residents: '',
    loading: true,
  }

  componentDidMount() {
    // Retrieving Token from localstorage.
    const token = localStorage.getItem('token')

    // Redirect to login page if no token found.
    if(!token){
      this.props.history.replace('/')
    }

    // Fetching all residents

    axios('https://thawing-reef-43238.herokuapp.com/api/residents',{
      headers: {
        'x-auth': token
      }})
      .then(data => {
        return this.setState({
        residents: data.data,
        loading: false
      })})
      .catch(err => console.log(err))
  }

  render() {
    let wings = this.state.residents ? _.keys(this.state.residents).sort() : [];
    let allResidents = !this.state.loading ? (<div>
      <h1 style={{ color: '#333' }}>Wing</h1>
      <Wings wings={wings} />
      <Switch>
      {/* 
        All Wings in society
       */}
        <Route path='/residents/:wing' render={() => <Society residents={this.state.residents} />} />
        <Redirect to={`/residents/${wings[0]}`} />
      </Switch>
    </div>) : <Spinner/>;
    return (
      <Layout>
        {allResidents}
      </Layout>
    )
  }
}
