(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
        $("#output").html("<img src='../public/img/wakeup.gif'>");
      } else {
        $("#output").text("");
      }
    },50);

  });

});

},{"./../js/alarm-clock.js":2}],2:[function(require,module,exports){
// function Alarm(time){
//   this.time = time;
//
// }
//
//
// Alarm.prototype.setAlarm = function(time){
//
// };

},{}]},{},[1]);
