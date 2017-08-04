function weather() {

	var location = document.getElementById('location');
	var Key = '52fb36032ca1c37e51ec197cb55369a8';
	var url = 'https://api.darksky.net/forecast/[key]/[latitude],[longitude]';

	navigator.geolocation.getCurrentPosition(success, error);

	function success(position) {
		latitude = position.coords.latitude;
		longitude = position.coords.longitude;

		location.innerHTML = 'Latitude is ' + latitude + '° Longitude is ' + longitude + '°';
	url	
		$.getJSON('url + Key + "/" + latitude + "," + longitude' + "?callback=?", function(data) {
			$('#temp').html(data.currently.temperature + '° F');
			$('#minutely').html(data.minutely.summary);
		});
	}

	function error() {
		location.innerHTML = "Unable to retrieve your location";
	}

	location.innerHTML = "Locating...";
}

weather();