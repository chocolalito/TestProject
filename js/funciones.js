$(document).ready(function () {

    //initialize('0','0','0','map');

    var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
    };

    function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
    };

    function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);

    $("#btnReset").on('click',function(a){
        a.preventDefault();//button's element default action inside a form is submit so we must prevent it
        posicionar(23.582614673604244,-102.0116258007049,5);
    })

    $("#btnLocateCoords").on('click',function(a){
        a.preventDefault();//button's element default action inside a form is submit so we must prevent it
        if($('#txtLatitud').val() != "" && $('#txtLongitud').val() != "" && $('#txtZoom').val() != "")
        {
            posicionar($('#txtLatitud').val(),$('#txtLongitud').val(),$('#txtZoom').val());
        }
        else
        {
            alert('Los datos de latitud, longitud y zoom deben ser llenados.');
        }
    })

    $("#btnLocateMyPos").on('click',function(a){

		a.preventDefault();//button's element default action inside a form is submit so we must prevent it
	    if(navigator.geolocation)
		{
            console.log("Support Geolocation");
			navigator.geolocation.getCurrentPosition(function(position){
				glat = position.coords.latitude;
				glong = position.coords.longitude;
				console.log("Latitud:" + glat + " Longitud:" + glong);
				posicionar(glat,glong,17);
			},
			
			function() {
					handleNoGeolocation(true);
			});
			
		} else {
		    // Browser doesn't support Geolocation
            console.log("Does not support Geolocation");
			handleNoGeolocation(false);
		}
	 })
	
	function handleNoGeolocation(errorFlag) {
		if (errorFlag)
		{
			alert('Error: No se pudo obtener tu posición.');
		} else {
			alert('Error: Tu navegador no soporta la geolocalización.');
		}
		
		posicionar(23.582614673604244,-102.0116258007049,5);
	}

})