# mg-line-brushing

A extension to metrics-graphics which adds step-wise brushing support to line charts.

**Note:** the addon system is still under heavy development. This project will currently only work with [my pending PR](https://github.com/mozilla/metrics-graphics/pull/351) for metrics-graphics.

### Caveats

This addon currently only supports the aggregated rollover.
When including this addon, `args.aggregate_rollover` will automatically be set to `true`.

While it _does work_ with the voronoi setup, d3 raises a few errors in the console,
so additional work is required for that. (A PR is more than welcome!)

### Usage

Install using bower (not yet published):

- `bower install dandehavilland/mg-line-brushing --save`

Include `dist/mg_line_brushing.js` in your build, or include it in your HTML:

- `<script src="bower_components/mg_line_brushing/dist/mg_line_brushing.js"></script>`

Import the default styles from `dist/mg_line_brushing.css`, or create your own:

- `<link rel="stylesheet" href="bower_components/mg-line-brushing/dist/mg_line_brushing.css" type="text/css" />`



### Requirements

- [Node.JS](http://nodejs.org/)
- [bower](http://bower.io) or [io.js](https://iojs.org/)
- [metrics-graphics](http://metricsgraphicsjs.org/)


### Contributing

Found a bug or have an idea for a new feature? File an issue or, better still, submit a PR :

1. Code your fix / feature.
2. Write some tests.
3. Submit a PR.
