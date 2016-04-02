/* global Meteor, require */
import { Users } from './collections/users';
import { createUsers } from './fixtures';

// These will only run on the sever since we only 'import' them in
// main_server.js
if (!Users.find().fetch().length) {
  createUsers();
}

Meteor.startup(function() {
  // Imports each of the publications
  let publicationsContext = require.context('./publications', true, /.+\.js$/);
  publicationsContext.keys().forEach(publicationsContext);

  // Imports each of the method files
  let methodContext = require.context('./methods', true, /.+\.js$/);
  methodContext.keys().forEach(methodContext);
});
