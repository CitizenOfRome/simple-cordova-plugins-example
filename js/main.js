(function() {
    'use strict';
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log("PhoneGap: Device is ready");
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                document.getElementById('currentLocationText').innerHTML = position.coords.latitude + ', '+ position.coords.longitude;
            });
        } else {
            console.error('geolocation is not available on your device');
        }
    }
})();