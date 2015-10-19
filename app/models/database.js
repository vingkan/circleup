function getUsers(){
	var users = [];
	var userDatabase = new Firebase('https://circleup.firebaseio.com/users');
	userDatabase.once('value', function(snapshot){
		snapshot.forEach(function(childSnapshot){
			var key = childSnapshot.key();
			var childData = childData.val();
			var user = new User(childData);
			user.id = key;
			users.push(user);
		});
		loadUsers(users);
	});
}

function addUsers(userArray){
	var userDatabase = new Firebase('https://circleup.firebaseio.com/users');
	for(var u = 0; u < userArray.length; u++){
		var current = userArray[u];
		userDatabase.push({
			id: current.id,
			name: current.name,
			latitude: current.getLat(),
			longitude: current.getLon()
		});
	}
}