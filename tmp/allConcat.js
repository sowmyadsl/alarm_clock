var Alarm = require('./../js/alarm-clock.js').alarmModule;

$(document).ready(function(){
  $("#alarm-form").submit(function(event){
    event.preventDefault();
    var newTime = new Alarm(time);
    var result = newTime.setAlarm(time);
    console.log(time);
  });

});

$(document).ready(function(){
  alert("hi");
  $('#time').text(moment());
});
