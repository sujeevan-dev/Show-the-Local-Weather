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
$('#fah').prop('disabled', true);
$('#cel').prop('disabled', false);

var fah = document.getElementById("fah");
var cel = document.getElementById("cel");
var temp = document.getElementById("temp");

function convert() {

if(cel.disabled == true) {
    fah.value -32 * 5 / 9;
    cel.value = Math.round(temp.value);
} else if(fah.disabled == false) {
    cel.value * 9 / 5 + 32;
    fah.value = Math.round(temp.value);
    }

}

/*//Celcius and Ferheneit converter
function convert(degree) {

    if (degree == "F") {
        x = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = Math.round(x);
        
    } else {
        x = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(x);
    }
}
/icons
	function showIcons () {
	var icon = document.getElementById('#icon');
	var data = document.getElementById('#icon').html(data.currently.icon);


	switch (icon) {

	case clear-day:
        data = "<i class="wi wi-day-sunny"></i>";
        break;
    case clear-night:
        data = "<i class="wi wi-night-clear"></i>";
        break;
    case snow:
        symbol.html = "<i class="wi wi-snow"></i>";
        break;
    case sleet:
        symbol.html = "<i class="wi wi-day-sleet"></i>";
        break;
    case wind:
        symbol.html = "<i class="wi wi-windy"></i>";
        break;
    case hail:
        symbol.html = "<i class="wi wi-hail"></i>";
        break;
    case fog:
        symbol.html = "<i class="wi wi-fog"></i>";
        break;
    case cloudy:
        symbol.html = "<i class="wi wi-cloud"></i>";
        break;
    case partly-cloudy-day:
        symbol.html = "<i class="wi wi-day-cloudy-high"></i>";
        break;
    case partly-cloudy-night:
        symbol.html = "<i class="wi wi-night-alt-cloudy"></i>";
        break;
    case thunderstorm:
        symbol.html = "<i class="wi wi-thunderstorm"></i>";
        break;
    case tornado:
        symbol.html = "<i class="wi wi-tornado"></i>";
        break;
	}
}

*/




weather();