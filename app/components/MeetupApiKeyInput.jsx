import React from 'react';

export default class MeetupApiKeyInput extends React.Component {
  static propTypes = {
    loading: React.PropTypes.bool.isRequired,
    getMeetupGroups: React.PropTypes.func.isRequired
  };

  submitForm = (event) => {
    event.preventDefault();
    const { api_key } = event.target;

    if (api_key.value) {
      this.props.getMeetupGroups(api_key.value);
    } else {
      // eslint-disable-next-line
      alert('Please enter a valid API key');
    }
  }

  render() {
    const { loading } = this.props;

    return (
      <form className="form"
            onSubmit={this.submitForm}>

        <label htmlForm="api_key"
               className="label">
          Your Meetup API key
        </label>

        <input type="text"
               className="input"
               id="api_key"
               placeholder="Your 29 character API key" />

        <button className="button">
          { loading && 'Loading...' }
          { !loading && 'Next' }
        </button>
      </form>
    );
  }
}
