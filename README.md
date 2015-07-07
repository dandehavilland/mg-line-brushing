# mg-line-brushing

A extension to metrics-graphics which adds step-wise brushing support to line charts.

Requires metrics-graphics >= v2.5

### Caveats

This addon currently only supports the aggregated rollover.
When including this addon, `args.aggregate_rollover` will automatically be set to `true`.

While it _does work_ with the voronoi setup, d3 raises a few errors in the console,
so additional work is required for that. (A PR is more than welcome!)

### Usage

Install using bower (not yet published):

- `bower install dandehavilland/mg-line-brushing --save`

Include `dist/mg_line_brushing.js` in your build, or include it in your HTML:

- `<script src="bower_components/mg-line-brushing/dist/mg_line_brushing.js"></script>`

Import the default styles from `dist/mg_line_brushing.css`, or create your own:

- `<link rel="stylesheet" href="bower_components/mg-line-brushing/dist/mg_line_brushing.css" type="text/css" />`


### Options

| Option | Default | Notes |
|--------|---------|-------|
| `brushing` | `true` | Enable this addon. |
| `brushing_history` | `true` | Enables the stepwise zoom-out. This introduces an element of statefulness into the chart, which can be unhelpful in certain cirumstances. If you are managing state manually, set this to `false`. |
| `after_brushing` | null | An optional callback which is triggered after brushing. E.g. `args.after_brushing = function(step) { console.log(step); }`. The sole paramter passed to the callback is `step`, an object consisting of the new bounds for the chart: `{min_x: ..., max_x: ..., min_y: ..., max_y: ...}` |
| `brushing_manual_redraw` | `false` | If `true`, this will prevent the chart being redrawn. Useful if you want to defer the update until you're ready. Simply call `MG.data_graphic(args);` to trigger a redraw. |

### Requirements

- [Node.JS](http://nodejs.org/) or [io.js](https://iojs.org/)
- [bower](http://bower.io)
- [metrics-graphics](http://metricsgraphicsjs.org/) `>= v2.5`


### Contributing

Found a bug or have an idea for a new feature? File an issue or, better still, submit a PR :

1. Code your fix / feature.
2. Write some tests.
3. Submit a PR.
