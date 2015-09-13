var x = document.getElementById("demo");

var latCoord = document.getElementById('latCoord');
var lonCoord = document.getElementById('lonCoord');

function initialize(){
    /*var lat = 41.8528109;
    var lon = -87.6505183;*/
    var lat = parseFloat(document.getElementById('latCoord').innerHTML);
    var lon = parseFloat(document.getElementById('lonCoord').innerHTML);
    //alert(lat + ", " + lon);
    //locations.push(['You', lat, lon]);

var url = 'http://spreadsheets.google.com/feeds/list/1PrmblSB1Kn846lgxeSGVK4bjargdOEmAWG64QP6vh44/od6/public/values?alt=json-in-script&callback=?';

    var locations = [
      ['Bondi Beach', -33.890542, 151.274856, 4],
      ['Coogee Beach', -33.923036, 151.259052, 5],
      ['Cronulla Beach', -34.028249, 151.157507, 3],
      ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      ['Maroubra Beach', -33.950198, 151.259302, 1],
      ['You', lat, lon, 6]
    ];

$(function listBooks(){
    $.getJSON(
        url,
        function(data){
            $('div#user-list').append('<ul class="users"></ul>');
            $.each(data.feed.entry, function(i, entry){
                alert(entry.gsx$firstname.$t);
                locations.push([entry.gsx$firstname.$t, parseFloat(entry.gsx$lat.$t), parseFloat(entry.gsx$lon.$t), 6+i]);
            });

        });
});

    var mapProp = {
        center: new google.maps.LatLng(lat, lon),
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
        //alert(locations[i][0]);
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        title: locations[i][0]
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    latCoord.innerHTML = position.coords.latitude;
    lonCoord.innerHTML = position.coords.longitude;
    initialize();
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
    x.style.display = 'block';
}