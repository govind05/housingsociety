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
        notices: res.data,
        loading: false,
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
    let notices = !this.state.loading ? (
      <div>
        <Notices
          data={this.state.notices}
          currentNotice={this.state.currentNotice}
          onReadMore={this.onReadMoreHandler} />
      </div>
    ) : <Spinner/>;
    return (
      <Layout>
        {notices}
      </Layout>
    );
  }
}

export default NoticeBoard;