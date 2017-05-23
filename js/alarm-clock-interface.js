var Alarm = require('./../js/alarm-clock.js').alarmModule;

$(document).ready(function(){
  var currentTime = setInterval(function(){
    $('#current-time').text(moment().format('hh:mm:ss'));
  },1000);

  $('#alarm-form').submit(function(event) {
    event.preventDefault();
    var setTime = $('#set-time').val();
    setInterval(function(){
      if( moment().format('hh:mm') == setTime ){
        $("#output").text("Wake up!!");
      } else {
        $("#output").text("");
      }
    },50);

  });

});
