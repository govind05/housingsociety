import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

import Layout from '../../hoc/Layout/Layout';
import UserInfo from '../../components/UserInfo/UserInfo';
import AccountNavigation from '../../components/AccountNavigation/AccountNavigation';
import RegisterComplaint from '../../components/RegisterComplaint/RegisterComplaint';

import './Account.css';


export default class Account extends Component {

  state = {
    subject: '',
    complaint: '',
    token: '',
    user:{
      userName: '',
      firstName: '',
      lastName: '',
    },
    loading: false,
  }
  componentDidMount() {
    const token = localStorage.getItem('token')
    const firstName = localStorage.getItem('firstName')
    const lastName = localStorage.getItem('lastName')
    const userName = localStorage.getItem('userName')
    const user = {
      firstName,
      lastName,
      userName,
    }
    if (!token) {
      this.props.history.replace('/')
    }
    this.setState({
      token,
      user
    })
    console.log(this.props)
  }
  onSubmitComplaintHandler = (e) => {
    this.setState({
      loading: true
    })
    e.preventDefault();
    if (this.state.subject.trim() === '' || this.state.complaint.trim() === '') {
      this.setState({
        loading: false,
      })
      return};
    axios.post('https://thawing-reef-43238.herokuapp.com/api/complaints', {
      subject: this.state.subject,
      message: this.state.complaint,
    }, {
      headers: {
        'x-auth': this.state.token
      }
      }, )
      .then(res => {
        this.resetForm();
      })
      .catch(e => console.log(e));
  }

  resetForm = () => {
    this.setState({
      subject: '',
      complaint: '',
      loading: false,
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
                  user={this.state.user}
                />}
            />
            <Route
              path='/account/complaint'
              render={() =>
                <RegisterComplaint
                  subject={this.state.subject}
                  complaint={this.state.complaint}
                  loading= {this.state.loading}
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
