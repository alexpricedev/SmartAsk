import React from 'react';

export default class MemberImage extends React.Component {
  static propTypes = {
    member: React.PropTypes.object.isRequired
  };

  render() {
    if (!this.props.member.photo) {
      return <img src="http://ima.gs/f2f2f2/000000/f2f2f2/80x80.png"></img>;
    }

    return (
      <img src={this.props.member.photo.thumb_link}
           style={{padding: '10px'}}
           alt={`Photo of ${this.props.member.name}`}></img>
    );
  }
}
