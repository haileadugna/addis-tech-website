function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }, // Replace with your coordinates
        zoom: 15 // Adjust the zoom level as needed
    });

    // Add a marker for your location
    var marker = new google.maps.Marker({
        position: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }, // Replace with your coordinates
        map: map,
        title: 'Your Location' // Tooltip text
    });
}

window.onload = function () {
    initMap();
};
