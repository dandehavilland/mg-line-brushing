# mg-sample-extension
An example of how to extend the [metrics-graphics](http://github.com/mozilla/metrics-graphics) data visualisation library.

**Note:** the addon system is still under heavy development. This project will currently only work with [my pending PR](https://github.com/mozilla/metrics-graphics/pull/351) for metrics-graphics.

### Requirements

If you're thinking of extending metrics-graphics then you should already have everything you need:

- [Node.JS](http://nodejs.org/)
- [bower](http://bower.io)


### Getting started

- `git clone git@github.com:dandehavilland/mg-sample-extension.git ./my-extension-name`
- `bower install && npm install`
- `npm install -g gulp`
- `gulp serve`

The sandbox is then available at:

- http://localhost:4300

Make your changes, update this `README.md`, `package.json` and `bower.json` to reflect your extension details, then deploy as you see fit.


### Testing

- `gulp test` to run the Test'em server in continuous mode.
- `npm test` or `gulp test-ci` for a single run, CI mode.


### Contributing

Found a bug or have an idea for a new feature? File an issue or, better still, submit a PR :

1. Code your fix / feature.
2. Test it.
3. Submit a PR.
