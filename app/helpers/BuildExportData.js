/* global _ */

export default function BuildExportData(data) {
  let exportData = [];

  data.forEach(function(obj) {
    let memberData = {
      Name: obj.member.name,
      Image: obj.member.photo ? obj.member.photo.photo_link : null
    };

    memberData = _.extend(
      memberData,
      _buildQuestionData(obj)
    );

    exportData.push(memberData);
  });

  return exportData;
}

function _buildQuestionData(data) {
  if (data.answers) {
    const answerData = {};

    data.answers.forEach((question) => {
      answerData[question.question] = question.answer;
    });

    return answerData;
  }
}
