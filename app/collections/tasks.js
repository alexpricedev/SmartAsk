/* global Mongo, SimpleSchema */
const Tasks = new Mongo.Collection('tasks');

const TasksSchema = new SimpleSchema({
  text: {
    type: String,
    max: 200
  },
  status: {
    type: Boolean,
    optional: true,
    defaultValue: false
  },
  userId: {
    type: String,
    label: 'User ID',
    max: 24
  }
});

Tasks.attachSchema(TasksSchema);

Tasks.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Tasks.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

export default Tasks;
