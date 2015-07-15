require(['react', 'jsx!lib/Timer'], function(React, Timer) {
  var start = new Date();
  Timer = React.createFactory(Timer);

  // Mount the JSX component in the app container
  React.render(
    Timer({start: start}),
    document.getElementById('js-app-container'));
});