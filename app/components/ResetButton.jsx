import React from 'react';

const ResetButton = props => (
    <a href="#"
       className="button"
       onClick={props.resetResponses}>
      Change selected events
    </a>
);

ResetButton.propTypes = {
  resetResponses: React.PropTypes.func.isRequired
};

export default ResetButton;
