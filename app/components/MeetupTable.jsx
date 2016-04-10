import React from 'react';

import MeetupTableRow from './MeetupTableRow';

const MeetupTable = props => (
  <table className="table">
    <thead className="table-header">
      <tr className="table-row">
        <th className="table-row-cell">Name</th>
        <th className="table-row-cell mod-hide-small">Image</th>
        <th className="table-row-cell">Questions and answers</th>
      </tr>
    </thead>
    <tbody>
      { props.members.map((member, i) =>
        <MeetupTableRow key={i} data={member} />
      ) }
    </tbody>
  </table>
);

MeetupTable.propTypes = {
  members: React.PropTypes.array.isRequired
};

export default MeetupTable;
