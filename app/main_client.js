/* global Meteor, document */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

Meteor.startup(() => {
  ReactDOM.render(<App/>, document.getElementById('root'));
});
