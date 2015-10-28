function initScrollingHeader(){
	window.addEventListener('scroll', function(event){
		var distanceY = window.pageYOffset || document.documentElement.scrollTop,
			shrinkOn = 50,
			header = document.querySelector("header");
		if(distanceY > shrinkOn){
			classie.add(header, "smaller");
		}
		else{
			if(classie.has(header, "smaller")){
				classie.remove(header, "smaller");
			}
		}
	});
}

window.onload = initScrollingHeader();

function toggleWindow(windowID){
	var credentialWindow = document.getElementById(windowID);
	var shade = document.getElementById('shade');
	//console.log(credentialWindow.style.height)
	if(credentialWindow.style.height == '92vh'){
		credentialWindow.style.height = '0vh';
		shade.style.display = 'none';
	}
	else{
		credentialWindow.style.height = '92vh';
		shade.style.display = 'block';
	}
}

/*--------------------------------------------*/
/*---> KEY BINDINGS <-------------------------*/
/*--------------------------------------------*/

$('#loginEmail').keypress(function(event){
	if(event.keyCode == 13){
		login();
	}
});

$('#newName').keypress(function(event){
	if(event.keyCode == 13){
		addNewUser();
	}
});

/*--------------------------------------------*/
/*---> LOADING <------------------------------*/
/*--------------------------------------------*/

var loadingMessages = [
	"Calculating the number of radians in a circle...",
	"Locating fire hydrants..."
];

function getRandomLoadingMessage(){
	var random = Math.floor(Math.random() * loadingMessages.length);
	var message = loadingMessages[random];
	return message;
}

function getValueFromUnit(unit){
	var value = unit.substr(0, (unit.length - 2));
	return parseFloat(value);
}

//var loadedWidth = 0;

function incrementLoadingDisplay(){
	var stillLoading = true;
	var display = document.getElementById('loadingBar');
	var width = display.style.width;
	var loadedWidth = getValueFromUnit(display.style.width);
	var scale = 0.75; //Scale of display size
	var inputWidth = loadedWidth; //Get DOM Width
	var displayLoadedWidth = inputWidth / scale;
	var max = 20;
	var min = 10;
	var random = Math.floor(Math.random() * (max - min)) + min;
	displayLoadedWidth += random;
	if(displayLoadedWidth > 100){
		stillLoading = false;
	}
	var outputWidth = displayLoadedWidth * scale;
	//Set style to new displayLoadedWidth
	console.log(outputWidth + 'vw')
	display.style.width = outputWidth + 'vw';
	//loadedWidth = outputWidth;
	console.log('Incrementing: ' + displayLoadedWidth + '%');
	return stillLoading;
}

function loadingSequence(){
	var loadingPanel = document.getElementById('loading');
	loadingPanel.style.height = '100vh';
	var display = document.getElementById('loadingBar');
	display.style.width = 0 + 'vw';
	var stillLoading = true;
	var loadingMessageSpace = document.getElementById('loadingMessage');
	/*
	* Replace the problematic setTimeout() inside the while loop with a
	* setInterval() and break condition.
	* Thanks to http://stackoverflow.com/questions/12996193/settimeout-inside-while-loop
	* for leading me back from the world of browser crashes.
	*/
	var intervalID = window.setInterval(function(){
		var message = getRandomLoadingMessage();
		console.log(message);
		loadingMessageSpace.innerHTML = message;
		stillLoading = incrementLoadingDisplay();
		if(!stillLoading){
			clearInterval(intervalID);
			loadingPanel.style.height = '0vh';
		}
	}, 750);
}