import React from 'react';

export default class MeetupGroupsInput extends React.Component {
  static propTypes = {
    loading: React.PropTypes.bool.isRequired,
    groups: React.PropTypes.array.isRequired,
    getMeetupEvents: React.PropTypes.func.isRequired
  };

  submitForm = (event) => {
    event.preventDefault();
    const { group } = event.target;

    if (group.value && group.value !== '0') {
      this.props.getMeetupEvents(group.value);
    } else {
      // eslint-disable-next-line
      alert('Please select a group');
    }
  }

  render() {
    const { groups, loading } = this.props;

    return (
      <form className="form"
            onSubmit={this.submitForm}>

        <label htmlForm="group"
               className="label">
          Choose one of your groups
        </label>

        <span className="select">
          <select className="select-input" id="group">
            <option value="0">Select a group</option>
            { groups.map((group, i) =>
              <option key={i} value={group.urlname}>
                {group.name}
              </option>
            ) }
          </select>
        </span>

        <button className="button">
          { loading && 'Loading...' }
          { !loading && 'Next' }
        </button>
      </form>
    );
  }
}
