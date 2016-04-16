import React from 'react';

import MemberImage from './MemberImage';
import MemberAnswers from './MemberAnswers';

const MeetupTableRow = props => (
  <tr className="table-row">
    <td className="table-row-cell">
      {props.data.member.name}
    </td>
    <td className="table-row-cell mod-hide-small">
      <MemberImage member={props.data.member} />
    </td>
    <td className="table-row-cell">
      <MemberAnswers answers={props.data.answers || []} />
    </td>
  </tr>
);

MeetupTableRow.propTypes = {
  data: React.PropTypes.object.isRequired
};

export default MeetupTableRow;
