/* global Meteor, check */
import Tasks from 'collections/tasks';

Meteor.methods({
  insertTask(text) {
    check(text, String);

    const task = {
      text: text,
      userId: Meteor.userId()
    };

    try {
      return Tasks.insert(task);
    } catch(exception) {
      return exception;
    }
  },
  updateTaskStatus(taskId, status) {
    check(taskId, String);
    check(status, Boolean);

    try {
      return Tasks.update(
        { _id: taskId },
        { $set: { status: status } }
      );
    } catch(exception) {
      return exception;
    }
  }
});

