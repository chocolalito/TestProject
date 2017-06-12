var map;

function initialize(latitud,longitud,zoom,div)
{
    /*
    var thislatitud = document.getElementById(latitud).value;
    var thislongitud = document.getElementById(longitud).value;
    var thiszoom = document.getElementById(zoom).value;
    
    if(thislatitud==''){thislatitud = 23.582614673604244;}
    
    if(thislongitud==''){thislongitud = -102.0116258007049;}
    
    if(thiszoom==''){thiszoom = 5;}
    */
    div='map';
    var crosshairShape = {coords:[0,0,0,0],type:'rect'};
    var mapOptions = 
    {
        center: new google.maps.LatLng(23.582614673604244, -102.0116258007049),
        //center: new google.maps.LatLng(0, 0),
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID 
    };
    
    map = new google.maps.Map(document.getElementById(div),mapOptions);
    
    var marker = new google.maps.Marker({
        map: map,
        icon: './images/cross-hairs.gif',
        shape: crosshairShape
    });
    
    marker.bindTo('position', map, 'center');
    //document.getElementById("zoom").value = map.getZoom();
    //document.getElementById("lat").value = map.getCenter();
    google.maps.event.addListener(map, 'center_changed', function() {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
        document.getElementById('txtLatitud').value = map.getCenter().lat();
        document.getElementById('txtLongitud').value = map.getCenter().lng();
        document.getElementById('txtZoom').value = map.getZoom();
    });
    

}

google.maps.event.addDomListener(window, 'load', initialize);
    
function posicionar(latitude,longitude,zoom) {
    
    if(latitude=='')
    {
        latitude=23.582614673604244;
    }
    if(longitude=='')
    {
        longitude=-102.0116258007049;
    }
    if(zoom=='')
    {
        zoom=5;
    }
    console.log('Latitud recibida:' + latitude + ' longitud recibida: ' + longitude + ' zoom recibido: ' + zoom);
    var latlng = new google.maps.LatLng(Number(latitude), Number(longitude));
    
    var myOptions = {
        zoom: Number(zoom),
        center: latlng,
    };
    
    map.setOptions(myOptions);
}