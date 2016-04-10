import React from 'react';

export default class MemberImage extends React.Component {
  static propTypes = {
    member: React.PropTypes.object.isRequired
  };

  render() {
    if (!this.props.member.photo) {
      return <img src="http://ima.gs/ffffff/282828/ffffff/80x80.png"></img>;
    }

    return (
      <img src={this.props.member.photo.thumb_link}
           className="user-image"
           alt={`Photo of ${this.props.member.name}`}></img>
    );
  }
}
