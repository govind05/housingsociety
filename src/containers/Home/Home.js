import React, { Component } from 'react';
import Layout from '../../hoc/Layout/Layout';

class Home extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token')
    if(!token){
      this.props.history.replace('/')
    }
  }
  render() {
    return (
      <Layout>
        <div></div>
      </Layout>
    )
  }
}

export default Home;