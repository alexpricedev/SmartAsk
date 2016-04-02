/* global Accounts */

export function createUsers() {
  ['Bob', 'Jane', 'Max'].forEach(function(name) {
    Accounts.createUser({
      username: name,
      password: 'password',
      profile: {}
    });
  });
}
