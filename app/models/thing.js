function createThing(data){
	console.log(userLocation)
	var currentTime = new Date();
	var thing = new User({
		name: data['name']/*,
		email: userLocation.email,
		timestamp: currentTime.getTime(),
		latitude: userLocation.getLat(),
		longitude: userLocation.getLon(),
		accuracy: userLocation.getAccuracy(),
		isThing: true,
		type: data['type'],
		icon: data['icon']*/
	});
	return thing;
}