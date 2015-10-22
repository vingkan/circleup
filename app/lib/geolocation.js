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

navigator.geolocation.getCurrentPosition(function(position){
	updateCoords(position);
});

var watchUser = navigator.geolocation.watchPosition(function(position){
	updateCoords(position);
});