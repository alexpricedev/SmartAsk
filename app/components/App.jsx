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

    return (
      <div className="app">
        <Header />

        <MeetupDetailInputs
          loading={loading}
          getMeetupData={this.getMeetupData} />

        { !loading && members.length > 0 &&
          <section className="results">
            <ExportButton data={members} />
            <MeetupTable members={members} />
          </section>
        }
      </div>
    );
  }
}
