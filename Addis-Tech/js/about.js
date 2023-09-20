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



// * {
//     margin: 0;
//     padding: 0;
//     box-sizing:  border-box;
// }

// .bodybox{
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     min-height: 100vh;
//     background: url(../assets/background.jpg);
//     background-size: cover;
// }

// .box{
//     position: relative;
//     width: 250px;
//     height: 350px;
//     transform-style: preserve-3d;
//     animation: animate 30s linear infinite;
// }

// @keyframes animate {
//     0%{
//         transform: perspective(1000px) rotateY(0deg);
//     }
//     100%{
//         transform: perspective(1000px) rotateY(360deg);
//     }
// }


// .box span{
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     transform-origin: center;
//     transform-style: preserve-3d;
//     transform: rotateY(calc(var(--i) * 45deg)) translateZ(400px);
//     -webkit-box-reflect: below 0px linear-gradient(transparent, transparent #D004);
// }

// .box span img{
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
// }
