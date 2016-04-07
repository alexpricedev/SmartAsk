import React from 'react';

import MeetupTableRow from './MeetupTableRow';

const MeetupTable = props => (
  <table>
    <thead>
      <tr style={{textAlign: 'left'}}>
        <th>Name</th>
        <th style={{padding: '10px'}}>
          Image
        </th>
        <th>Questions and Answers</th>
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
