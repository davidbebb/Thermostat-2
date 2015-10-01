t = new Thermostat;

$(document).ready(function() {

  var showTempVar = (function() {
    $('#temperature').text(t.temperature);
    if (t.temperature < 18) {
      $('.temp').css('color', 'green');
    } else if (t.temperature < 25) {
      $('.temp').css('color', 'orange');
    } else {
      $('.temp').css('color', 'red');
    }
  });


  showTempVar();

  $('#upbutton').mouseup(function() {
    t.tempUp(1);
    showTempVar();
  });

  $('#downbutton').mouseup(function() {
    t.tempDown(1);
    showTempVar();
  });

  $('#reset').mouseup(function() {
    t.reset();
    showTempVar();
  });

  $('#power_save').mouseup(function() {
    t.switchPowermode();
    showTempVar();
  });

  $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&callback=?', function(data) {
    $('#summary').text(data.main.temp + ' \xB0C in ' + data.name); //This is a pain to find
  });

});
