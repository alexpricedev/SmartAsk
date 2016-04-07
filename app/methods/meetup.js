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
  meetup_members(data) {
    // avoid blocking other method calls from the same client
    this.unblock();

    var apiUrl = `https://api.meetup.com/${data.event_name}/events/${data.event_id}/rsvps?&sign=true&key=${data.api_key}&photo-host=public&fields=answers`;
    // asynchronous call to the dedicated API calling function
    var response = Meteor.wrapAsync(apiCall)(apiUrl);
    return response;
  }
});
