# [SmartAsk](http://smartask.me)

**SmartAsk** is a simple tool to help the organisers of
[Meetup.com](http://meetup.com/) groups to see the answers that attendees
leave when they sign up for an event.

It allows you to view the attendees in the application or export the data
as a `.CSV`.

## Developer docs

The `dev.js`, `prod.js`, and `deploy.js` scripts will run Webpack, and
symbolically link the generated bundles into the `meteor_core` directory.

In prod mode, `meteor_core` gets the webpack client and server bundles via
the soft links `meteor_core/client/client.bundle.js` and
`meteor_core/server/server.bundle.js`.  Two instances of `webpack --watch` are
running, one to make the client bundle and one to make the server bundle.

In dev mode, both `webpack-dev-server` and `meteor_core` run simultaneously on
different ports (9090 and 3000, respectively), and a `webpack --watch` is also
running to compile and output the server code.  A script in
`meteor_core/client/loadClientBundle.html` inserts a `<script>` tag linking
to the bundle from webpack-dev-server via port 9090 on the page's host.
(It's a bit weird I know, but one can't have a relative URL to a different
port, and just putting a script tag to `http://localhost:9090/...` wouldn't
work if you're testing on separate device from your dev box).

## Running (dev mode)

**Note:** make sure you are forwarding port 9090 (as well as the Meteor port)
if you want to test on other devices via LAN.

```
> npm install
> node dev.js
```
Make sure to wait for Meteor to say it's listening, for the client
`webpack-dev-server` and server `webpack --watch` to print out
module/bundle info.  The site won't work until all are ready.

## Debugging/Profiling Server (dev mode)

```
> npm install -g node-inspector
> npm install
> node debug.js
```
Then visit `http://127.0.0.1:8080/debug?port=5858` in your browser.

## Running (prod mode)
This runs the app as if it were in production, but it's still watching your
files for changes.  You can Ctrl-C after it's finished starting up and
use `./met deploy`, though.

```
> npm install
> node prod.js
```
Make sure to wait for Meteor to say it's listening, and for the client and
server `webpack --watch` processes to print out module/bundle info.
The site won't work until all are ready.


## Deployment

The application is currently deployed to DigitalOcean using MUP.

Deploy using this command when in the root dir.

```
node deploy.js mup
```

## Meteor Settings

The settings are in `settings/devel.json` & `settings/prod.json` and they will
automatically loaded when running in development, production and build modes.


## Running Meteor Commands

As a convenience you can run `./met` in the root directory to run the `meteor`
command. However you can still `cd meteor_core` and then run `meteor`
from that directory as well.

```
./met --version
./met search simple-schema
```

## Acknowledgements

This package is built on top of
[meteor-webpack-react](https://github.com/jedwards1211/meteor-webpack-react)
so big thanks to:

* @AdamBrodzinski- for a lot of contributions (esp. deployment) and promotion
* Luigi Maselli (@grigio) - for writing the first scripts and showing me
  how to deal with the Meteor vs. ES2015 Number polyfill issue
* @jbbr - for presenting good workarounds for several issues
