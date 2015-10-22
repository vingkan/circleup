var userLocation = new User({
	id: null,
	name: 'Local User',
	latitude: 0,
	longitude: 0
});

function updateCoords(position){
	userLocation.coordinates.latitude = position.coords.latitude;
	userLocation.coordinates.longitude = position.coords.longitude;
}

navigator.geolocation.getCurrentPosition(updateCoords);