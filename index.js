// set map
function initialize(){
    var mapOptions = {
        // Zoom of map on start
        zoom: 10,
        // Initial center coordinates on start (NewYork)
        center: new google.maps.LatLng(40.7128, -74.0060),
        // Type of map (ROAD MAP, SATELLITE, HYBRID, TERRAIN)
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        // Minimum zoom of map
        minZoom: 2
    };


    // Create a new map instance using provided options 
    var map = new google.maps.Map(document.getElementById
        ('map'), mapOptions);

        // create an info window to display location info 
        var infoWindow = new google.maps.InfoWindow();

        // create a marker for 
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(36.6769, 40.4963),

            map: map,

            title: 'Iran, Zanjan'
        });

        // add click event listener for marker 
        marker.addListener('click', function(){
            infoWindow.setContent(marker.title);
            infoWindow.open(map, marker);
        });

        // Adjust map center when the window is resized. 
        google.maps.event.addDomListener(window, "resize", function
        (){
            map.setCenter(mapOptions.center); 
        })

}

// initialize the map when window loading finished
google.maps.event.addDomListener(window, 'load', initialize);
