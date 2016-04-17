import React from 'react';

import APIHelpText from './APIHelpText';

export default class MeetupApiKeyInput extends React.Component {
  static propTypes = {
    loading: React.PropTypes.bool.isRequired,
    getMeetupGroups: React.PropTypes.func.isRequired
  };

  state = {
    showHelp: false
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

  toggleHelp = (event) => {
    event.preventDefault();
    this.setState({showHelp: !this.state.showHelp});
  }

  render() {
    const { loading } = this.props;
    const { showHelp } = this.state;

    const cls = showHelp ? ' is-active' : '';
    const linkTitle = showHelp ? 'Hide help text' : 'Show help text';

    return (
      <form className="form"
            onSubmit={this.submitForm}>

        { showHelp && <APIHelpText /> }

        <label htmlForm="api_key"
               className="label">
          Your Meetup API key
          <a className={`help${cls}`}
             title={linkTitle}
             onClick={this.toggleHelp}
             href="#">?</a>
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
