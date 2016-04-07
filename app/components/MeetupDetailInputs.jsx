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
    const style = {
      width: '300px'
    };

    return (
      <form onSubmit={this.submitForm}>
        <input type="text"
               style={style}
               id="event_name"
               placeholder="Event name (ie. Bristol-Business-Brainstorm)" />

        <input type="text"
               style={style}
               id="event_id"
               placeholder="Event id (ie. 229574982)" />

        <input type="text"
               style={style}
               id="api_key"
               placeholder="Your 29 character API key" />

        <button>Submit</button>
      </form>
    );
  }
}
