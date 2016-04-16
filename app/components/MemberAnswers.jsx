import React from 'react';

const MemberAnswers = props => (
  <dl className="answers">
    { props.answers.map((answer, i) =>
      <span key={i}>
        <dt className="answers-question">
          {answer.question}
        </dt>
        <dd className="answers-answer">
          {answer.answer || 'Not given'}
        </dd>
      </span>
    ) }
  </dl>
);

MemberAnswers.propTypes = {
  answers: React.PropTypes.array.isRequired
};

export default MemberAnswers;
