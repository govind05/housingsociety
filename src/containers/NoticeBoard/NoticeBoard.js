import React from 'react';

import Notices from '../../components/Notices/Notices';

const NOTICES = [
  {
    id: 1,
    title: 'Title',
    date: new Date().toDateString(),
    subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, cumque!',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit recusandae voluptatum quia cupiditate voluptas sequi, harum dignissimos quidem accusamus possimus tempore obcaecati, officia, eius perferendis placeat repudiandae eum beatae vel enim autem. Autem vitae aut rerum ducimus doloribus est illo ipsum? Tempora, minus labore consectetur voluptatibus eaque incidunt velit suscipit cumque repellendus autem explicabo pariatur excepturi possimus, deleniti ducimus est, consequatur non doloremque voluptas impedit ipsam? Illum, at ducimus! Labore facilis eum in eligendi, non eveniet fuga commodi repellat illum porro recusandae tempore unde iure, a autem sapiente ipsum deleniti suscipit dicta, harum sed eaque cumque soluta sit. Perspiciatis, animi?',
  },
  {
    id: 2,
    title: 'Title',
    date: new Date().toDateString(),
    subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, cumque!',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit recusandae voluptatum quia cupiditate voluptas sequi, harum dignissimos quidem accusamus possimus tempore obcaecati, officia, eius perferendis placeat repudiandae eum beatae vel enim autem. Autem vitae aut rerum ducimus doloribus est illo ipsum? Tempora, minus labore consectetur voluptatibus eaque incidunt velit suscipit cumque repellendus autem explicabo pariatur excepturi possimus, deleniti ducimus est, consequatur non doloremque voluptas impedit ipsam? Illum, at ducimus! Labore facilis eum in eligendi, non eveniet fuga commodi repellat illum porro recusandae tempore unde iure, a autem sapiente ipsum deleniti suscipit dicta, harum sed eaque cumque soluta sit. Perspiciatis, animi?',
  },
  {
    id: 3,
    title: 'Title',
    date: new Date().toDateString(),
    subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, cumque!',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit recusandae voluptatum quia cupiditate voluptas sequi, harum dignissimos quidem accusamus possimus tempore obcaecati, officia, eius perferendis placeat repudiandae eum beatae vel enim autem. Autem vitae aut rerum ducimus doloribus est illo ipsum? Tempora, minus labore consectetur voluptatibus eaque incidunt velit suscipit cumque repellendus autem explicabo pariatur excepturi possimus, deleniti ducimus est, consequatur non doloremque voluptas impedit ipsam? Illum, at ducimus! Labore facilis eum in eligendi, non eveniet fuga commodi repellat illum porro recusandae tempore unde iure, a autem sapiente ipsum deleniti suscipit dicta, harum sed eaque cumque soluta sit. Perspiciatis, animi?',
  },
  {
    id: 4,
    title: 'Title',
    date: new Date().toDateString(),
    subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, cumque!',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit recusandae voluptatum quia cupiditate voluptas sequi, harum dignissimos quidem accusamus possimus tempore obcaecati, officia, eius perferendis placeat repudiandae eum beatae vel enim autem. Autem vitae aut rerum ducimus doloribus est illo ipsum? Tempora, minus labore consectetur voluptatibus eaque incidunt velit suscipit cumque repellendus autem explicabo pariatur excepturi possimus, deleniti ducimus est, consequatur non doloremque voluptas impedit ipsam? Illum, at ducimus! Labore facilis eum in eligendi, non eveniet fuga commodi repellat illum porro recusandae tempore unde iure, a autem sapiente ipsum deleniti suscipit dicta, harum sed eaque cumque soluta sit. Perspiciatis, animi?',
  },
  {
    id: 5,
    title: 'Title',
    date: new Date().toDateString(),
    subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, cumque!',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit recusandae voluptatum quia cupiditate voluptas sequi, harum dignissimos quidem accusamus possimus tempore obcaecati, officia, eius perferendis placeat repudiandae eum beatae vel enim autem. Autem vitae aut rerum ducimus doloribus est illo ipsum? Tempora, minus labore consectetur voluptatibus eaque incidunt velit suscipit cumque repellendus autem explicabo pariatur excepturi possimus, deleniti ducimus est, consequatur non doloremque voluptas impedit ipsam? Illum, at ducimus! Labore facilis eum in eligendi, non eveniet fuga commodi repellat illum porro recusandae tempore unde iure, a autem sapiente ipsum deleniti suscipit dicta, harum sed eaque cumque soluta sit. Perspiciatis, animi?',
  },
]

class NoticeBoard extends React.Component {
  state = {
    currentNotice: ''
  }
  onReadMoreHandler = (id) => {
    id = this.state.currentNotice === id ? '' : id;
    this.setState({
      currentNotice: id
    })
  }

  render() {
    console.log(this.state.currentNotice)
    return (
      <div>
        <Notices
          data={NOTICES}
          currentNotice={this.state.currentNotice} 
          onReadMore={this.onReadMoreHandler} />
      </div>
    );
  }
}

export default NoticeBoard;