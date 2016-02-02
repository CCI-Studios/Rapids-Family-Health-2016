(function($) {
    $(function(){
       
       $('.view-physicians').each(function(index,value)
       {
            var count = index+1;
         
       });

        
        if($("#map1").length > 0)
        {
            createMap(42.980968,-82.36090000000002,'#map1');
        }

        if($("#map2").length > 0)
        {
            createMap(42.977774,-82.38863700000002,"#map2");
        }

        if($("#map3").length > 0)
        {
            createMap(42.8841223,-82.44875560000003,"#map3");
        }

    });

    function createMap(x,y,z)
    {
        var location = new google.maps.LatLng(x,y);
        var mapOptions = {
            zoom: 17,
            center: location,
            draggable: false,
            scrollwheel: false,
        }

        var styles = [
                          
                    ];

          google.maps.event.addDomListener(window, 'resize', function() {
            map.setCenter(location);
        });
        var image = '/sites/all/themes/rfht2/images/icons/map-marker-icon.png';
    
        var map = new google.maps.Map($(z).get(0),
                        mapOptions);
        console.log(z);
        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: image,
            title: "Rapids Family Health Team"
        });

       marker.setMap(map);
       map.setOptions({styles: styles});
    }
}(jQuery));