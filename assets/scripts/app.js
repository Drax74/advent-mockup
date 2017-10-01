function initMap() {
  var text =  '<div id="content">'+
              '<h2 id="firstHeading" class="firstHeading">Fritule</h2>'+
              '<img src="./public/img/fritule.jpg" class="info-image">' +
              '<div id="bodyContent">'+
              '<i class="description">Najukusnije fritule u gradu</i>' +
              '<p><b>Radno vrijeme</b></p>' +
              '<p>Pon-Pet: 11-23</p>' +
              '<p>Pet-Sub: 11-01</p>' +
              '<p>Ned: zatvoreno</p>' +
              '<p><a href="">'+
              '<i class="fa fa-facebook" aria-hidden="true"></i>acebook</a> '+
              '</p>'+
              '</div>'+
              '</div>'

  var data = [
    { position: { lat: 45.809724, lng: 15.978302}, title: 'Palacinkarnica',
      infoText: text
    },
    { position: { lat: 45.809735, lng: 15.978441}, title: 'Palacinkarnica',
      infoText: text
    },
    { position: { lat: 45.809933, lng: 15.978414}, title: 'Palacinkarnica',
      infoText: text
    },
    { position: { lat: 45.809929, lng: 15.978253}, title: 'Palacinkarnica',
      infoText: text
    },
    { position: { lat: 45.810224, lng: 15.978403}, title: 'Palacinkarnica',
      infoText: text
    },
    { position: { lat: 45.810228, lng: 15.978199}, title: 'Palacinkarnica',
      infoText: text
    },
    { position: { lat: 45.810602, lng: 15.978349}, title: 'Palacinkarnica',
      infoText: text
    },
    { position: { lat: 45.810598, lng: 15.978134}, title: 'Palacinkarnica',
      infoText: text
    },
    { position: { lat: 45.810755, lng: 15.978273}, title: 'Palacinkarnica',
      infoText: text
    },
    { position: { lat: 45.810762, lng: 15.978128}, title: 'Palacinkarnica',
      infoText: text
     },
    { position: { lat: 45.811005, lng: 15.978225}, title: 'Palacinkarnica',
      infoText: text
    },
    { position: { lat: 45.811027, lng: 15.978086}, title: 'Palacinkarnica',
      infoText: text
    },
  ]

  var centerPosition = { lat: 45.810421, lng: 15.978263 };
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: centerPosition,
    disableDefaultUI: true,
    zoom: 18,
    styles: [{ "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [ { "color": "#444444" } ] }, { "featureType": "landscape", "elementType": "all", "stylers": [ { "color": "#f2f2f2" } ] }, { "featureType": "poi", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [ { "saturation": "-100" }, { "lightness": "57" } ] }, { "featureType": "poi", "elementType": "geometry.stroke", "stylers": [ { "lightness": "1" } ] }, { "featureType": "poi", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road", "elementType": "all", "stylers": [ { "saturation": -100 }, { "lightness": 45 } ] }, { "featureType": "road.highway", "elementType": "all", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit.station.bus", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "transit.station.bus", "elementType": "labels.text.fill", "stylers": [ { "saturation": "0" }, { "lightness": "0" }, { "gamma": "1.00" }, { "weight": "1" } ] }, { "featureType": "transit.station.bus", "elementType": "labels.icon", "stylers": [ { "saturation": "-100" }, { "weight": "1" }, { "lightness": "0" } ] }, { "featureType": "transit.station.rail", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "transit.station.rail", "elementType": "labels.text.fill", "stylers": [ { "gamma": "1" }, { "lightness": "40" } ] }, { "featureType": "transit.station.rail", "elementType": "labels.icon", "stylers": [ { "saturation": "-100" }, { "lightness": "30" } ] }, { "featureType": "water", "elementType": "all", "stylers": [ { "color": "#d2d2d2" }, { "visibility": "on" } ] } ]
  });


  // Create markers
  data.forEach(function(element) {
      var infowindow = new google.maps.InfoWindow({
        content: element.infoText,
        maxWidth: 200
      });

      var marker = new google.maps.Marker({
        map: map,
        position: element.position,
        title: element.title,
        icon: './public/img/stall.png'
      });

      marker.addListener('click', function() {
        infowindow.open(map, marker);
      })
  });

}
