function weather() {

	var location = document.getElementById('location');
	var key = '52fb36032ca1c37e51ec197cb55369a8';
	var url = 'https://api.darksky.net/forecast/';

	navigator.geolocation.getCurrentPosition(success, error);

	function success(position) {
		latitude = position.coords.latitude;
		longitude = position.coords.longitude;

		location.innerHTML = 'Latitude is ' + latitude + '° Longitude is ' + longitude + '°';
	
		$.getJSON(url + key + "/" + latitude + "," + longitude + "?callback=?", function(data) {
			$('#zone').html(data.timezone);
			$('#temp').html(data.currently.temperature + '° F');
			$('#summary').html(data.currently.summary);
			$('#icon').html(data.currently.icon);
		});
	}

	function error() {
		location.innerHTML = "Unable to retrieve your location";
	}

	location.innerHTML = "Locating...";

    }

//Button functions
var result = '';

$(document).ready(function() {
	$.ajax({
		success: function(data) {
			$('#temp').html(JSON.stringify(data));
			weather(data);
			result = data;
		}
	});
});

function fToC() {
	var x = parseFloat(document.getElementById('temp').val);
    var result = (x-32) * (5/9);
    return result;

    document.getElementById('temp').innerHTML = result;

}

weather();


/*
*icons and temperature converter need to be fixed
*/
