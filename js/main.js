(function() {
    'use strict';
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
    document.addEventListener("deviceready", onDeviceReady, false);
    if(document.URL.indexOf( 'http://' ) !== -1 || document.URL.indexOf( 'https://' ) !== -1) {
        // If on browser, trigger onDeviceReady manually (phonegap uses file:/// urls)
        onDeviceReady();
    }
})();