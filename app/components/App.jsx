/* global Meteor */
import React, { Component } from 'react';

import 'scss/application.scss';

import Header from './Header';
import MeetupTable from './MeetupTable';
import MeetupDetailInputs from './MeetupDetailInputs';
import ExportButton from './ExportButton';

export default class App extends Component {
  state = {
    members: [],
    loading: false
  };

  getMeetupData = (data) => {
    this.setState({loading: true});

    Meteor.call('meetup_members', data, (err, res) => {
      if (err) {
        // eslint-disable-next-line
        alert(err);
      } else {
        this.setState({
          members: res,
          loading: false
        });
      }
    });
  }

  render() {
    const { members, loading } = this.state;
    let body;

    if (loading) {
      body = (
        <div>
          Loading...
        </div>
      );
    } else if (members.length > 0) {
      body = (
        <div>
          <hr/>

          <ExportButton data={members} />
          <MeetupTable members={members} />
        </div>
      );
    }

    return (
      <div className="app">
        <Header />
        <MeetupDetailInputs getMeetupData={this.getMeetupData} />

        {body}
      </div>
    );
  }
}
