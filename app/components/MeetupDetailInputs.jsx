import React from 'react';

export default class MeetupDetailInputs extends React.Component {
  static propTypes = {
    getMeetupData: React.PropTypes.func.isRequired
  };

  submitForm = (event) => {
    event.preventDefault();

    const { event_name, event_id, api_key } = event.target;

    if (event_name.value && event_id.value && api_key.value) {
      this.props.getMeetupData({
        event_name: event_name.value,
        event_id: event_id.value,
        api_key: api_key.value
      });
    } else {
      // eslint-disable-next-line
      alert('Please fill in all of the fields');
    }
  }

  render() {
    return (
      <form className="form"
            onSubmit={this.submitForm}>

        <label htmlForm="event_name"
               className="label">
          Your event name
        </label>

        <input type="text"
               className="input"
               id="event_name"
               placeholder="Enter your event name (ie. Bristol-Business-Brainstorm)" />

        <label htmlForm="event_id"
               className="label">
          Your event ID
        </label>

        <input type="text"
               className="input"
               id="event_id"
               placeholder="Enter your event id number (ie. 229574982)" />

        <label htmlForm="api_key"
               className="label">
          Your Meetup API key
        </label>

        <input type="text"
               className="input"
               id="api_key"
               placeholder="Your 29 character API key" />

        <button className="button">View responses</button>
      </form>
    );
  }
}
