module('sample chart');

test('adds the title to the page', function() {
  var args = {
    chart_type: 'sample-chart',
    target: '#qunit-fixture',
    title: 'This is a test'
  };

  MG.data_graphic(args);

  equal(document.querySelector('#qunit-fixture h2').innerHTML, 'This is a test', 'title is correctly added');
});
