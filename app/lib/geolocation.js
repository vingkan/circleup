var userLocation = new User({
	id: null,
	name: '$LocalUser',
	email: 'null',
	latitude: 0,
	longitude: 0,
	accuracy: 0,
	circles: null
});

function updateCoords(position){
	//console.log(position.coords);
	userLocation.setGeolocation(position.coords);
	/*userLocation.coordinates.latitude = position.coords.latitude;
	userLocation.coordinates.longitude = position.coords.longitude;
	userLocation.coordinates.accuracy = position.coords.accuracy;*/
}

var geoSuccess = function(position){
	updateCoords(position);
	var geoString = '{' + position.coords.latitude + ', ' + position.coords.longitude + '} (' + position.coords.accuracy + ')';
	alert(geoString);
	console.log(geoString);
}

var geoError = function(){
	console.log('Error on geolocation position.');
	alert('Error on geolocation position.');
}

var geoOptions = {
	enableHighAccuracy: true,
	maximumAge: 30000,
	timeout: 20000
}

//var watchUser = navigator.geolocation.watchPosition(geoSuccess, geoError, geoOptions);