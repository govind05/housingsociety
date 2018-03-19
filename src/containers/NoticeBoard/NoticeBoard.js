import React from 'react';
import axios from 'axios';

import Notices from '../../components/Notices/Notices';
import Spinner from '../../components/UI/Spinner/Spinner';
import Layout from '../../hoc/Layout/Layout';

class NoticeBoard extends React.Component {
  state = {
    currentNotice: '',
    notices: '',
    loading: true,
  }

  componentDidMount() {
    // Retrieving Token from localstorage.
    const token = localStorage.getItem('token')

    // Redirect to login page if no token found.
    if (!token) {
      this.props.history.replace('/')
    }

    // Fetching all notices
    axios.get('https://thawing-reef-43238.herokuapp.com/api/notices', {
      headers: {
        'x-auth': token
      }
    })
      .then(res => {
        return this.setState({
          notices: res.data,
          loading: false,
        })
      })
      .catch(e => console.log(e))
  }

  // Setting the current notice to read.
  onReadMoreHandler = (id) => {
    id = this.state.currentNotice === id ? '' : id;
    this.setState({
      currentNotice: id
    })
  }

  render() {
    let notices = !this.state.loading ? (
      <div>
      {/* 
        Creating a Notices component.
       */}
        <Notices
          data={this.state.notices}
          currentNotice={this.state.currentNotice}
          onReadMore={this.onReadMoreHandler} />
      </div>
    ) : <Spinner />;
    return (
      <Layout>
        {notices}
      </Layout>
    );
  }
}

export default NoticeBoard;