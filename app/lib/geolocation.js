var userLocation = new User({
	id: null,
	name: '$LocalUser',
	latitude: 0,
	longitude: 0
});

function updateCoords(position){
	userLocation.coordinates.latitude = position.coords.latitude;
	userLocation.coordinates.longitude = position.coords.longitude;
}

/*navigator.geolocation.getCurrentPosition(function(position){
	updateCoords(position);
	console.log('getCurrentPosition');
});*/

var geoSuccess = function(position){
	updateCoords(position);
	console.log('watchPosition');
}

var geoError = function(){
	console.log('Error on geolocation position.');
}

var geoOptions = {
	enableHighAccuracy: true,
	maximumAge: 30000,
	timeout: 5000
}

var watchUser = navigator.geolocation.watchPosition(geoSuccess, geoError, geoOptions);