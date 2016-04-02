/* global Meteor */
import { Users } from 'collections/users';

Meteor.publish('users', function() {
  return Users.find({});
});

