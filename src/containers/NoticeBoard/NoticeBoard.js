import React from 'react';
import axios from 'axios';

import Notices from '../../components/Notices/Notices';
import Layout from '../../hoc/Layout/Layout';

class NoticeBoard extends React.Component {
  state = {
    currentNotice: '',
    notices: ''
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if(!token){
      this.props.history.replace('/')
    }
    axios.get('https://thawing-reef-43238.herokuapp.com/api/notices', {
      headers: {
        'x-auth': token
      }
    })
      .then(res => {
        return this.setState({
        notices: res.data
      })})
      .catch(e => console.log(e))
  }

  onReadMoreHandler = (id) => {
    id = this.state.currentNotice === id ? '' : id;
    this.setState({
      currentNotice: id
    })
  }

  render() {
    let notices = this.state.notices.length > 0 ? (
      <div>
        <Notices
          data={this.state.notices}
          currentNotice={this.state.currentNotice}
          onReadMore={this.onReadMoreHandler} />
      </div>
    ) : null;
    return (
      <Layout>
        {notices}
      </Layout>
    );
  }
}

export default NoticeBoard;