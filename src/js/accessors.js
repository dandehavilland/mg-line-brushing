/**
  2. accessors
*/

MG.brushing = {
  set_brush_as_base: function(target) {
    var svg = d3.select(target).select('svg'),
        current,
        history = brushHistory[target];

    svg.classed('mg-brushed', false);

    if (history) {
      history.brushed = false;

      current = history.current;
      history.original = current;

      args.min_x = current.min_x;
      args.max_x = current.max_x;
      args.min_y = current.min_y;
      args.max_y = current.max_y;

      history.steps = [];
    }
  },

  zoom_in: function(target, options) {

  },

  zoom_out: function(target, options) {

  }
};
