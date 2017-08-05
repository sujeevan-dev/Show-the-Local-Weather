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

	//icons
	var symbol= '';
	document.getElementById('#icon').innerHTML = symbol;
	switch (symbol) {
    case clear-day: <i class="wi wi-night-sleet"></i>;
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
}

weather();