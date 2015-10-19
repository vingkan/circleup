User.prototype.name = ""; //String
User.prototype.coordinates = {
	'latitude': 0.0,
	'longitude': 0.0
}; //Object of Doubles/Floats

User.prototype.getImgLetter = function(){
	var imgLetter = null;
	var firstChar = this.name.charAt(0).toLowerCase();
	if(isLetter(firstChar)){
		imgLetter = firstChar;
	}
	else{
		imgLetter = 'etc';
	}
	return imgLetter;
}