import React from 'react';

export default class MemberAnswers extends React.Component {
  static propTypes = {
    answers: React.PropTypes.array.isRequired
  };

  render() {
    if (!this.props.answers) {
      return <div>No answers given</div>;
    }

    return (
      <dl>
        { this.props.answers.map((answer, i) =>
          <span key={i}>
            <dt style={{fontWeight: '700'}}>{answer.question}</dt>
            <dd style={{margin: '0'}}>{answer.answer}</dd>
          </span>
        ) }
      </dl>
    );
  }
}
