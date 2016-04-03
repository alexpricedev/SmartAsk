/* global Meteor */
import React from 'react';

export default class Task extends React.Component {
  updateStatus = (event) => {
    const { task } = this.props;

    Meteor.call(
      'updateTaskStatus',
      task._id,
      event.target.checked
    );
  }

  render() {
    const { task } = this.props;

    return (
      <li>
        { task.text }
        <input type="checkbox"
               onChange={this.updateStatus}
               checked={task.status} />
      </li>
    );
  }
}

Task.propTypes = {
  task: React.PropTypes.object.isRequired
};
