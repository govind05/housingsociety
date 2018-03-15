import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

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

  onSubmitComplaintHandler = (e) => {
    e.preventDefault();
    if (this.state.subject.trim() === '' || this.state.complaint.trim() === '') return;
    this.resetForm();
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
          <AccountNavigation/>
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
