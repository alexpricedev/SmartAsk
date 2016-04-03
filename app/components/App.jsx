/* global Meteor, ReactMeteorData */
import React, { Component } from 'react';
import reactMixin from 'react-mixin';

import Tasks from 'collections/tasks';

import TaskList from './TaskList';
import TaskInput from './TaskInput';

@reactMixin.decorate(ReactMeteorData)
export default class App extends Component {
  getMeteorData() {
    Meteor.subscribe('tasks');

    return {
      tasks: Tasks.find({userId: Meteor.userId()}).fetch()
    };
  }

  render() {
    const { tasks } = this.data;

    if (!tasks) {
      return <div>Loading</div>;
    }

    return (
      <div className="App">
        <h1>Your tasks</h1>
        <TaskList tasks={tasks} />
        <TaskInput />
      </div>
    );
  }
}
