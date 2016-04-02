/* global Meteor, ReactMeteorData */
import React, { Component } from 'react';
import reactMixin from 'react-mixin';

import { Users } from 'collections/users';

@reactMixin.decorate(ReactMeteorData)
export default class App extends Component {
  getMeteorData() {
    Meteor.subscribe('users');

    return {
      users: Users.find().fetch()
    };
  }


  render() {
    const { users } = this.data;

    if (!users) {
      return <div>Loading</div>;
    }

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <p>Users: {this.data.users.length}</p>
      </div>
    );
  }
}
