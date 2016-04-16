/* global Meteor */
import React, { Component } from 'react';
import update from 'react-addons-update';
import _ from 'lodash';

import 'scss/application.scss';

import Header from './Header';
import MeetupTable from './MeetupTable';
import MeetupApiKeyInput from './MeetupApiKeyInput';
import MeetupGroupsInput from './MeetupGroupsInput';
import MeetupEventsInput from './MeetupEventsInput';
import ResetButton from './ResetButton';
import ExportButton from './ExportButton';

export default class App extends Component {
  state = {
    groups: [],
    events: [],
    responses: [],
    apiKey: '',
    loading: false
  };

  getMeetupGroups = (apiKey) => {
    this.setState({loading: true});

    Meteor.call('meetup_groups', apiKey, (err, res) => {
      if (err) {
        // eslint-disable-next-line
        alert(err);
      } else {
        let groups = [];

        // We only care about the groups for which the user is an
        // orgainiser or coorganiser
        _.forEach(res, function(group) {
          const organiser = group.self.role === 'organizer';
          const coorganiser = group.self.role === 'coorganizer';

          if (organiser || coorganiser) {
            // Only store the group 'name' and 'urlname'
            groups.push(_.pick(group, ['name', 'urlname']));
          }
        });

        this.setState({
          groups: groups,
          apiKey: apiKey,
          loading: false
        });
      }
    });
  }

  getMeetupEvents = (groupUrlname) => {
    this.setState({loading: true});

    const data = {
      name: groupUrlname,
      apiKey: this.state.apiKey
    };

    Meteor.call('meetup_events', data, (err, res) => {
      if (err) {
        // eslint-disable-next-line
        alert(err);
      } else {
        let events = [];

        // Only store the event 'time' and 'id', 'name'
        _.forEach(res, function(event) {
          events.push(_.pick(event, ['time', 'id', 'name']));
        });

        this.setState({
          events: events,
          groupUrlname: groupUrlname,
          loading: false
        });
      }
    });
  }

  getMeetupResponses = (selectedEvents) => {
    this.setState({loading: true});

    const data = {
      name: this.state.groupUrlname,
      apiKey: this.state.apiKey
    };

    _.forEach(selectedEvents, (eventId) => {
      data.eventId = eventId;

      Meteor.call('meetup_responses', data, (err, res) => {
        if (err) {
          // eslint-disable-next-line
          alert(err);
        } else {
          this.setState({
            responses: update(this.state.responses, {$push: res})
          });
        }
      });
    });

    this.setState({loading: false});
  }

  resetResponses = (event) => {
    event.preventDefault();

    this.setState({
      responses: []
    });
  }

  render() {
    const { groups, events, responses, loading } = this.state;

    return (
      <div className="app">
        <Header />

        { groups.length == 0 &&
          <MeetupApiKeyInput
            loading={loading}
            getMeetupGroups={this.getMeetupGroups} />
        }

        { groups.length > 0 && events.length == 0 &&
          <MeetupGroupsInput
            loading={loading}
            groups={groups}
            getMeetupEvents={this.getMeetupEvents} />
        }

        { events.length > 0 && responses.length == 0 &&
          <MeetupEventsInput
            loading={loading}
            events={events}
            getMeetupResponses={this.getMeetupResponses} />
        }

        { responses.length > 0 &&
          <section className="results">
            <ResetButton resetResponses={this.resetResponses} />
            <ExportButton data={responses} />
            <MeetupTable members={responses} />
          </section>
        }
      </div>
    );
  }
}
