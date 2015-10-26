function newRedEye(){
	var redeye = new User({
		id: null,
		name: 'RedEye Box (Added by: ' + userLocation.name + ')',
		email: '@redeyechicago',
		latitude: 0,
		longitude: 0,
		accuracy: 0,
		circles: null
	});
	redeye.setGeolocation(userLocation.coordinates);
	redeye.getImgLetter = function(){
		return 'redeye';
	}
	addUserMarker(redeye, true);
}