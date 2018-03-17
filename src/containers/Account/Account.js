import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

import Layout from '../../hoc/Layout/Layout';
import UserInfo from '../../components/UserInfo/UserInfo';
import AccountNavigation from '../../components/AccountNavigation/AccountNavigation';
import RegisterComplaint from '../../components/RegisterComplaint/RegisterComplaint';

import './Account.css';

const USER = {
  name: 'Govind Karki',
  flatNo: 201,
  parkingSpot: '312',
  age: 22
}

export default class Account extends Component {

  state = {
    subject: '',
    complaint: '',
  }
  componentDidMount() {
    const token = localStorage.getItem('token')
    if (!token) {
      this.props.history.replace('/')
    }
  }
  onSubmitComplaintHandler = (e) => {
    e.preventDefault();
    if (this.state.subject.trim() === '' || this.state.complaint.trim() === '') return;
    axios.post('https://thawing-reef-43238.herokuapp.com/api/complaints', {
      subject: this.state.subject,
      message: this.state.complaint,
    })
    .then( res => {
      this.resetForm();
    })
    .catch(e => console.log(e));
  }

  resetForm = () => {
    this.setState({
      subject: '',
      complaint: '',
    })
  }

  onChangeHandler = (e) => {
    let state = {
      ...this.state
    }
    state[e.target.name] = e.target.value;
    this.setState({
      ...state
    });
  }

  render() {
    return (
      <Layout>
        <div className='Account'>
          <AccountNavigation />
          <Switch>
            <Route
              path='/account/user-info'
              render={() =>
                <UserInfo
                  user={USER}
                />}
            />
            <Route
              path='/account/complaint'
              render={() =>
                <RegisterComplaint
                  subject={this.state.subject}
                  complaint={this.state.complaint}
                  onChange={this.onChangeHandler}
                  onSubmitComplaint={this.onSubmitComplaintHandler}
                />}
            />
            <Redirect to='/account/user-info' />
          </Switch>
        </div>
      </Layout>
    )
  }
}
