import React from 'react';

import meetupLogo from 'images/meetup.svg';

const Intro = () => (
  <p className="intro">
    <strong><em className="text-logo">Smart</em>Ask</strong> is a simple tool to
    help the organisers of
    <img className="intro-logo"
         src={meetupLogo}
         title="Meetup"
         alt="Meetup" />
    groups to see the answers that attendees leave when they sign up for an
    event.
  </p>
);

export default Intro;
