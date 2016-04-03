/* global Meteor */
import React from 'react';

export default class TaskInput extends React.Component {
  submitForm(event) {
    event.preventDefault();

    Meteor.call('insertTask', event.target.task.value);
    event.target.task.value = '';
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input type="text"
               id="task"
               placeholder="New task" />
      </form>
    );
  }
}
