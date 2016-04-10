import React from 'react';

export default class MemberAnswers extends React.Component {
  static propTypes = {
    answers: React.PropTypes.array.isRequired
  };

  render() {
    return (
      <dl className="answers">
        { this.props.answers.map((answer, i) =>
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
  }
}
