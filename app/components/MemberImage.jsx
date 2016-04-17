import React from 'react';

import cross from 'images/cross.svg';

export default class MemberImage extends React.Component {
  static propTypes = {
    member: React.PropTypes.object.isRequired
  };

  render() {
    if (!this.props.member.photo) {
      return (
        <img src={cross}
             title="No display picture"
             alt="No display picture" />
      );
    }

    return (
      <img src={this.props.member.photo.thumb_link}
           className="user-image"
           title={`Photo of ${this.props.member.name}`}
           alt={`Photo of ${this.props.member.name}`} />
    );
  }
}
