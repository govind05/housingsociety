import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

import NoticeForm from './../../components/AdminComponents/NoticeForm/NoticeForm';
import ResidentForm from './../../components/AdminComponents/ResidentForm/ResidentForm';
import UserForm from './../../components/AdminComponents/UserForm/UserForm';
import ComplaintList from './../../components/AdminComponents/ComplaintList/ComplaintList';
import AdminSideBar from './../../components/AdminComponents/AdminSideBar/AdminSideBar';


export default class Admin extends Component {
  state = {
    title: '',
    subject: '',
    body: '',
    name: '',
    flatNo: '',
    floor: '',
    wing: '',
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    token: '',
    complaints: [],
    loadingUser: false,
    loadingNotice: false,
    loadingResident: false,
    loadingComplaint: false,
  }

  componentDidMount() {
    // Retrieving Token from localstorage.
    const token = localStorage.getItem('token')

    // Redirect to login page if no token found.
    if (!token) {
      this.props.history.replace('/')
    }
    console.log(token)
    this.setState({
      token,
      loadingComplaint: true,
    })

    // Fetching all complaints.
    axios.get('https://thawing-reef-43238.herokuapp.com/api/complaints', {
      headers: {
        'x-auth': token
      }
    })
      .then(res => this.setState({
        complaints: res.data,
        loadingComplaint: false
      }))
      .catch(e => {
        this.setState({
          loadingComplaint: false
        })
        console.log(e)
      });

  }

  onNoticeSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({
      loadingNotice: true,
    })
    if (this.state.title.trim() === '' ||
      this.state.subject.trim() === '' ||
      this.state.body.trim() === '') throw Error;
    axios.post('https://thawing-reef-43238.herokuapp.com/api/notices', {
      title: this.state.title,
      subtitle: this.state.subject,
      body: this.state.body,
    }, {
        headers: {
          'x-auth': this.state.token
        }
      }, )
      .then(res => {
        this.setState({
          loadingNotice: false,
        })
        this.resetForm();
      })
      .catch(e => {
        this.setState({
          loadingNotice: false,
        })
        console.log(e)
      });
  }

  onResidentSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({
      loadingResident: true,
    })
    if (this.state.name.trim() === '' ||
      this.state.flatNo.trim() === '' ||
      this.state.wing.trim() === '' ||
      this.state.floor.trim() === '') throw Error;
    axios.post('https://thawing-reef-43238.herokuapp.com/api/residents', {
      name: this.state.name,
      flatNo: this.state.flatNo,
      wing: this.state.wing,
      floor: this.state.floor,
    }, {
        headers: {
          'x-auth': this.state.token
        }
      }, )
      .then(res => {
        this.setState({
          loadingResident: false,
        })
        this.resetForm();
      })
      .catch(e => {
        this.setState({
          loadingResident: false,
        })
        console.log(e)
      });
  }

  onUserSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({
      loadingUser: true,
    })
    if (this.state.userName.trim() === '' ||
      this.state.password.trim() === '')
      throw Error;
    axios.post('https://thawing-reef-43238.herokuapp.com/api/signup', {
      name: this.state.userName,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    }, {
        headers: {
          'x-auth': this.state.token
        }
      }, )
      .then(res => {
        this.setState({
          loadingUser: false,
        })
        this.resetForm();
      })
      .catch(e => {
        this.setState({
          loadingUser: false,
        })
        console.log(e)
      });
  }
  resetForm = () => {
    this.setState({
      title: '',
      subject: '',
      body: '',
      name: '',
      flatNo: '',
      floor: '',
      wing: '',
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
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
    console.log(this.state.complaints)
    return (
      <div>
        {/* Sidebar */}
        {/* 
          pages: 
          1. Add/Remove Resident
          2. Add/Remove Notice
          3. Add Users
          4. View Complaints
         */}
        <AdminSideBar />
        <div style={{ marginLeft: '200px', marginTop: '106px' }} >
          <Switch>
            <Route path='/admin/notice' render={() => <NoticeForm fields={this.state} onChange={this.onChangeHandler} onSubmit={this.onNoticeSubmitHandler} loading={this.state.loadingNotice} />} />
            <Route path='/admin/resident' render={() => <ResidentForm fields={this.state} onChange={this.onChangeHandler} onSubmit={this.onResidentSubmitHandler} loading={this.state.loadingResident} />} />
            <Route path='/admin/user' render={() => <UserForm fields={this.state} onChange={this.onChangeHandler} onSubmit={this.onUserSubmitHandler} loading={this.state.loadingUser} />} />
            <Route path='/admin/complaints' render={() => <ComplaintList complaints={this.state.complaints} loading={this.state.loadingComplaint} />} />
            <Redirect to='/admin/notice' />
          </Switch>
        </div>

      </div>
    )
  }
}
