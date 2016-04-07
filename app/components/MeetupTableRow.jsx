import React from 'react';

import MemberImage from './MemberImage';
import MemberAnswers from './MemberAnswers';

const MeetupTableRow = props => (
  <tr>
    <td>{props.data.member.name}</td>
    <td>
      <MemberImage member={props.data.member} />
    </td>
    <td>
      <MemberAnswers answers={props.data.answers} />
    </td>
  </tr>
);

MeetupTableRow.propTypes = {
  data: React.PropTypes.object.isRequired
};

export default MeetupTableRow;
