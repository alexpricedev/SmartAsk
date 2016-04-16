/* global Meteor, HTTP */

var apiCall = function (apiUrl, callback) {
  // try…catch allows you to handle errors
  try {
    var response = HTTP.get(apiUrl).data;
    // A successful API call returns no error
    // but the contents from the JSON response
    callback(null, response);
  } catch (error) {
    // If the API responded with an error message and a payload
    if (error.errors) {
      var errorCode = error.error[0].code;
      var errorMessage = error.error[0].message;
    // Otherwise use a generic error message
    } else {
      var errorCode = 500;
      var errorMessage = 'Cannot access the API';
    }
    // Create an Error object and return it via callback
    var myError = new Meteor.Error(errorCode, errorMessage);
    callback(myError, null);
  }
};

Meteor.methods({
  meetup_groups(apiKey) {
    // avoid blocking other method calls from the same client
    this.unblock();

    var apiUrl = `https://api.meetup.com/self/groups?photo-host=public&page=20&omit=description&fields=self&sign=true&key=${apiKey}`;

    // asynchronous call to the dedicated API calling function
    var response = Meteor.wrapAsync(apiCall)(apiUrl);
    return response;
  },

  meetup_events(data) {
    this.unblock();

    var apiUrl = `https://api.meetup.com/${data.name}/events?&photo-host=public&page=20&status=past&omit=description&sign=true&key=${data.apiKey}`;

    var response = Meteor.wrapAsync(apiCall)(apiUrl);
    return response;
  },

  meetup_responses(data) {
    this.unblock();

    var apiUrl = `https://api.meetup.com/${data.name}/events/${data.eventId}/rsvps?&sign=true&key=${data.apiKey}&photo-host=public&fields=answers&omit=description`;

    var response = Meteor.wrapAsync(apiCall)(apiUrl);
    return response;
  }
});
