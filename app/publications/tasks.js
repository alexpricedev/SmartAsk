/* global Meteor */
import Tasks from 'collections/tasks';

Meteor.publish('tasks', function() {
  return Tasks.find({userId: this.userId});
});
