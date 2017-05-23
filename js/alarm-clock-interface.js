var Alarm = require('./../js/alarm-clock.js').alarmModule;

$(document).ready(function(){
   $('#alarm-form').submit(function(event) {
     event.preventDefault();
  $('#current-time').text(moment());
  var setTime = $('#set-time').val();
  // var newTime = new Alarm();
  console.log(setTime);
  $('#output').text(setTime);
});
});
